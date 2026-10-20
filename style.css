/* ===== 1. LIGNES DE TOPOGRAPHIE ===== */
(function () {

    var REGLAGES = {
      couleur: "26, 26, 26",
      opaciteFine: 0.35,
      opaciteEpaisse: 0.6,
      epaisseurFine: 0.8,
      epaisseurEpaisse: 1.6,
      nombreDeLignes: 45,
      uneEpaisseSur: 5,
      echelle: 0.0016,
      vitesseForme: 0.012,
      vitesseFondu: 0.035,
      precision: 9,
      intensiteMin: 0.45
    };
  
    var canvas = document.getElementById("topographie");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
  
    var p = new Uint8Array(512);
    var base = [];
    for (var i = 0; i < 256; i++) base[i] = i;
    for (i = 255; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = base[i]; base[i] = base[j]; base[j] = t;
    }
    for (i = 0; i < 512; i++) p[i] = base[i & 255];
  
    function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
    function lerp(a, b, t) { return a + t * (b - a); }
    function grad(h, x, y, z) {
      h = h & 15;
      var u = h < 8 ? x : y;
      var v = h < 4 ? y : (h === 12 || h === 14 ? x : z);
      return ((h & 1) ? -u : u) + ((h & 2) ? -v : v);
    }
    function bruit(x, y, z) {
      var X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255;
      x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
      var u = fade(x), v = fade(y), w = fade(z);
      var A = p[X] + Y, AA = p[A] + Z, AB = p[A + 1] + Z;
      var B = p[X + 1] + Y, BA = p[B] + Z, BB = p[B + 1] + Z;
      return lerp(
        lerp(lerp(grad(p[AA], x, y, z), grad(p[BA], x - 1, y, z), u),
             lerp(grad(p[AB], x, y - 1, z), grad(p[BB], x - 1, y - 1, z), u), v),
        lerp(lerp(grad(p[AA + 1], x, y, z - 1), grad(p[BA + 1], x - 1, y, z - 1), u),
             lerp(grad(p[AB + 1], x, y - 1, z - 1), grad(p[BB + 1], x - 1, y - 1, z - 1), u), v),
        w);
    }
  
    function relief(x, y, z) {
      return bruit(x, y, z) * 0.75 + bruit(x * 2.3 + 40, y * 2.3 + 40, z * 1.5) * 0.25;
    }
  
    var largeur, hauteur, colonnes, lignes, champ;
    var masque = document.createElement("canvas");
    var mctx = masque.getContext("2d");
  
    function redimensionner() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      largeur = canvas.clientWidth || window.innerWidth;
      hauteur = canvas.clientHeight || window.innerHeight;
      canvas.width = largeur * dpr;
      canvas.height = hauteur * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      colonnes = Math.ceil(largeur / REGLAGES.precision) + 1;
      lignes = Math.ceil(hauteur / REGLAGES.precision) + 1;
      champ = new Float32Array(colonnes * lignes);
      masque.width = Math.ceil(largeur / 40);
      masque.height = Math.ceil(hauteur / 40);
    }
    window.addEventListener("resize", redimensionner);
    redimensionner();
  
    var TABLE = [[], [3, 2], [2, 1], [3, 1], [0, 1], [3, 2, 0, 1], [0, 2], [0, 3],
                 [0, 3], [0, 2], [0, 3, 2, 1], [0, 1], [3, 1], [2, 1], [3, 2], []];
  
    function point(cote, x0, y0, s, a, b, c, d, l) {
      if (cote === 0) return [x0 + s * (l - a) / (b - a), y0];
      if (cote === 1) return [x0 + s, y0 + s * (l - b) / (c - b)];
      if (cote === 2) return [x0 + s * (l - d) / (c - d), y0 + s];
      return [x0, y0 + s * (l - a) / (d - a)];
    }
  
    function dessiner(temps) {
      var s = REGLAGES.precision;
      var z = temps * REGLAGES.vitesseForme;
      var n = REGLAGES.nombreDeLignes;
  
      var k = 0;
      for (var y = 0; y < lignes; y++) {
        for (var x = 0; x < colonnes; x++) {
          champ[k++] = relief(x * s * REGLAGES.echelle, y * s * REGLAGES.echelle, z);
        }
      }
  
      ctx.clearRect(0, 0, largeur, hauteur);
      var cheminFin = new Path2D();
      var cheminEpais = new Path2D();
  
      for (y = 0; y < lignes - 1; y++) {
        for (x = 0; x < colonnes - 1; x++) {
          var i0 = y * colonnes + x;
          var a = champ[i0], b = champ[i0 + 1];
          var c = champ[i0 + colonnes + 1], d = champ[i0 + colonnes];
          var min = Math.min(a, b, c, d), max = Math.max(a, b, c, d);
          var premier = Math.ceil((min + 0.5) * n);
          var dernier = Math.floor((max + 0.5) * n);
  
          for (var niv = premier; niv <= dernier; niv++) {
            var l = niv / n - 0.5;
            var cas = (a > l ? 8 : 0) | (b > l ? 4 : 0) | (c > l ? 2 : 0) | (d > l ? 1 : 0);
            var seg = TABLE[cas];
            if (!seg.length) continue;
            var chemin = (niv % REGLAGES.uneEpaisseSur === 0) ? cheminEpais : cheminFin;
            var x0 = x * s, y0 = y * s;
            for (var q = 0; q < seg.length; q += 2) {
              var P1 = point(seg[q], x0, y0, s, a, b, c, d, l);
              var P2 = point(seg[q + 1], x0, y0, s, a, b, c, d, l);
              chemin.moveTo(P1[0], P1[1]);
              chemin.lineTo(P2[0], P2[1]);
            }
          }
        }
      }
  
      ctx.lineCap = "round";
      ctx.strokeStyle = "rgba(" + REGLAGES.couleur + "," + REGLAGES.opaciteFine + ")";
      ctx.lineWidth = REGLAGES.epaisseurFine;
      ctx.stroke(cheminFin);
      ctx.strokeStyle = "rgba(" + REGLAGES.couleur + "," + REGLAGES.opaciteEpaisse + ")";
      ctx.lineWidth = REGLAGES.epaisseurEpaisse;
      ctx.stroke(cheminEpais);
  
      var img = mctx.createImageData(masque.width, masque.height);
      var zf = temps * REGLAGES.vitesseFondu;
      for (y = 0; y < masque.height; y++) {
        for (x = 0; x < masque.width; x++) {
          var v = bruit(x * 0.08 + 100, y * 0.08 + 100, zf);
          var doux = Math.min(1, Math.max(0, v + 0.5));
          var alpha = REGLAGES.intensiteMin + (1 - REGLAGES.intensiteMin) * doux;
          img.data[(y * masque.width + x) * 4 + 3] = alpha * 255;
        }
      }
      mctx.putImageData(img, 0, 0);
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = "destination-in";
      ctx.drawImage(masque, 0, 0, canvas.width, canvas.height);
      ctx.restore();
    }
  
    var dernierDessin = 0;
    function boucle(ms) {
      if (ms - dernierDessin > 33) {
        dessiner(ms / 1000);
        dernierDessin = ms;
      }
      requestAnimationFrame(boucle);
    }
  
    dessiner(0);
    requestAnimationFrame(boucle);
  
  })();
  
  
  /* ===== 2. MENU ===== */
  (function () {
    var bouton = document.getElementById("bouton-menu");
    if (!bouton) return;
  
    bouton.addEventListener("click", function () {
      document.body.classList.toggle("menu-ouvert");
    });
  
    var liens = document.querySelectorAll("#menu a");
    for (var i = 0; i < liens.length; i++) {
      liens[i].addEventListener("click", function () {
        document.body.classList.remove("menu-ouvert");
      });
    }
  
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") document.body.classList.remove("menu-ouvert");
    });
  })();