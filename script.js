(() => {
  "use strict";

  // =========================
  // CONFIGURATION
  // =========================

  const SLIDE_DURATION = 5000;

  const IMAGE_EXTENSIONS = [
    ".jpg", ".JPG",
    ".jpeg", ".JPEG",
    ".png", ".PNG",
    ".webp", ".WEBP",
    ".avif", ".AVIF",
    ".svg", ".SVG"
  ];

  const LOGOS = {
    light: "Images/Logos/Logo 01",
    dark: "Images/Logos/Logo 02"
  };

  const HOME_IMAGES = Array.from(
    { length: 7 },
    (_, index) =>
      `Images/Accueil/Image de Présentation ${index + 1}`
  );

  const CATEGORIES = [
    { id: "sante", number: "01", title: "SANTÉ" },
    {
      id: "centre-aquatique-et-sportif",
      number: "02",
      title: "CENTRE AQUATIQUE ET SPORTIF"
    },
    { id: "enseignement", number: "03", title: "ENSEIGNEMENT" },
    { id: "tertiaire", number: "04", title: "TERTIAIRE" },
    { id: "industrielle", number: "05", title: "INDUSTRIELLE" },
    { id: "commerciale", number: "06", title: "COMMERCIALE" },
    { id: "promotion", number: "07", title: "PROMOTION" },
    {
      id: "maison-individuel",
      number: "08",
      title: "MAISON INDIVIDUEL"
    }
  ];

  // =========================
  // EMPLACEMENTS PAR DÉFAUT
  // =========================

  function createEmptyProject(categoryId, index) {
    return {
      id: `${categoryId}-${index + 1}`,
      image: "",
      title: "",
      description: "",
      link: ""
    };
  }

  const PROJECTS = Object.fromEntries(
    CATEGORIES.map((category) => [
      category.id,
      Array.from(
        { length: 10 },
        (_, index) => createEmptyProject(category.id, index)
      )
    ])
  );

  /*
    Chaque entrée comporte :
    [identifiant, sous-dossier, fichier sans extension, titre].
  */

  function makeProjects(basePath, entries) {
    return entries.map(([id, folder, filename, title]) => ({
      id,
      image: `${basePath}/${folder}/${filename}`,
      title,
      description: "",
      link: ""
    }));
  }

  // =========================
  // SANTÉ — EHPAD
  // =========================

  const EHPAD_PROJECTS = makeProjects(
    "Images/Projets/01 SANTE/01 EHPAD",
    [
      [
        "ehpad-les-vallees",
        "01 EHPAD Les Vallées",
        "EHPAD Les Vallées 01",
        "EHPAD Les Vallées"
      ],
      [
        "ehpad-brem",
        "02 EHPAD BREM",
        "EHPAD BREM 01",
        "EHPAD Brem"
      ],
      [
        "ehpad-les-herbiers",
        "04 EHPAD Les Herbiers",
        "EHPAD Les Herbiers 01",
        "EHPAD Les Herbiers"
      ],
      [
        "ehpad-saint-fulgent",
        "07 EHPAD St Fulgent",
        "EHPAD St Fulgent 01",
        "EHPAD Saint-Fulgent"
      ],
      [
        "ehpad-benet",
        "08 EHPAD Benet",
        "EHPAD Benet 01",
        "EHPAD Benet"
      ],
      [
        "ehpad-les-cordeliers",
        "12 EHPAD Les Cordeliers",
        "EHPAD Les Cordeliers 01",
        "EHPAD Les Cordeliers"
      ]
    ]
  );

  // =========================
  // SANTÉ — CENTRES HOSPITALIERS
  // =========================

  const HOSPITAL_PROJECTS = makeProjects(
    "Images/Projets/01 SANTE/02 CH",
    [
      [
        "centre-hospitalier-les-sables",
        "00 Centre Hospitalier Les Sables d'Olonne",
        "Centre Hospitalier Les Sables d'Olonne 01",
        "Centre hospitalier — Les Sables-d’Olonne"
      ],
      [
        "medecine-nucleaire-la-roche",
        "01 Médecine Nucléaire CH La Roche sur Yon",
        "Médecine Nucléaire CH La Roche sur Yon 01",
        "Médecine nucléaire — CH La Roche-sur-Yon"
      ],
      [
        "hemodialyse-la-roche",
        "03 Centre Hémodialyse CH La Roche sur Yon",
        "Centre Hémodialyse CH La Roche sur Yon 01",
        "Centre d’hémodialyse — CH La Roche-sur-Yon"
      ],
      [
        "oncologie-radiotherapie-la-roche",
        "04 Oncologie Radiothérapie CH La Roche sur Yon",
        "Oncologie Radiothérapie CH La Roche sur Yon 01",
        "Oncologie et radiothérapie — CH La Roche-sur-Yon"
      ],
      [
        "plateau-kine-saint-nazaire",
        "07 Plateau Kiné St Nazaire",
        "Plateau Kiné St Nazaire 01",
        "Plateau kiné — Saint-Nazaire"
      ]
    ]
  );

  // =========================
  // SANTÉ — MAISONS DE SANTÉ
  // =========================

  const HEALTH_CENTER_PROJECTS = makeProjects(
    "Images/Projets/01 SANTE/03 MAISON DE SANTE",
    [
      [
        "maison-sante-epydaure-chantonnay",
        "01 Maison de Santé Epydaure Chantonnay",
        "Maison de Santé Epydaure Chantonnay 01",
        "Maison de santé Epydaure — Chantonnay"
      ],
      [
        "maison-sante-ile-olonne",
        "02 Maison de Santé Ile d'Olonne",
        "Maison de Santé Ile d'Olonne 01",
        "Maison de santé — L’Île-d’Olonne"
      ],
      [
        "maison-sante-saint-fulgent",
        "03 Maison de Santé St Fulgent",
        "Maison de Santé St Fulgent 01",
        "Maison de santé — Saint-Fulgent"
      ]
    ]
  );

  PROJECTS.sante = [
    ...EHPAD_PROJECTS,
    ...HOSPITAL_PROJECTS,
    ...HEALTH_CENTER_PROJECTS
  ];

  // =========================
  // CENTRES AQUATIQUES ET SPORTIFS
  // =========================

  const SPORTS_PROJECTS = makeProjects(
    "Images/Projets/02 CENTRE AQUATIQUE ET SPORTIF",
    [
      [
        "complexe-aquatique-les-sables",
        "01 Complexe aquatique Les Sables",
        "Complexe aquatique Les Sables 01",
        "Complexe aquatique — Les Sables"
      ],
      [
        "complexe-aquatique-saint-fulgent",
        "02 Complexe aquatique St Fulgent",
        "Complexe aquatique St Fulgent 01",
        "Complexe aquatique — Saint-Fulgent"
      ],
      [
        "complexe-sportif-le-spot",
        "03 Complexe sportif Le Spot",
        "Complexe sportif Le Spot 01",
        "Complexe sportif — Le Spot"
      ],
      [
        "complexe-aquatique-aigrefeuille",
        "04 Complexe aquatique Aigrefeuille",
        "Complexe aquatique Aigrefeuille 01",
        "Complexe aquatique — Aigrefeuille"
      ],
      [
        "complexe-aquatique-challans",
        "05 - Complexe aquatique Challans",
        "Complexe aquatique Challans 01",
        "Complexe aquatique — Challans"
      ]
    ]
  );

  SPORTS_PROJECTS.forEach((project, index) => {
    PROJECTS["centre-aquatique-et-sportif"][index] = project;
  });

  // =========================
  // ENSEIGNEMENT — GROUPES SCOLAIRES
  // =========================

  PROJECTS.enseignement = makeProjects(
    "Images/Projets/03 ENSEIGNEMENT/01 GROUPE SCOLAIRE",
    [
      [
        "groupe-scolaire-saint-georges-pointindoux",
        "01 Groupe scolaire St georges de Ptdx",
        "Groupe scolaire St georges de Ptdx 01",
        "Groupe scolaire — Saint-Georges-de-Pointindoux"
      ],
      [
        "groupe-scolaire-olonne-sur-mer",
        "02 Groupe scolaire Olonne sur Mer",
        "Groupe scolaire Olonne sur Mer 01",
        "Groupe scolaire — Olonne-sur-Mer"
      ],
      [
        "groupe-scolaire-avrille",
        "03 Groupe scolaire Avrillé",
        "Groupe scolaire Avrillé 01",
        "Groupe scolaire — Avrillé"
      ],
      [
        "groupe-scolaire-saint-georges-montaigu",
        "04 Groupe scolaire St Georges de Montaigu",
        "Groupe scolaire St Georges de Montaigu 01",
        "Groupe scolaire — Saint-Georges-de-Montaigu"
      ],
      [
        "groupe-scolaire-saint-mathurin",
        "05 Groupe scolaire St Mathurin/Images Synthère",
        "Groupe scolaire St Mathurin 01",
        "Groupe scolaire — Saint-Mathurin"
      ],
      [
        "ist-les-sables-olonne",
        "06 IST Les Sables d'Olonne",
        "IST Les Sables d'Olonne 01",
        "IST — Les Sables-d’Olonne"
      ],
      [
        "groupe-scolaire-saint-nicolas-la-chaume",
        "07 Groupe scolaire St Nicolas La Chaume",
        "Groupe scolaire St Nicolas La Chaume 01",
        "Groupe scolaire Saint-Nicolas — La Chaume"
      ],
      [
        "groupe-scolaire-saint-julien-landes",
        "08 Groupe scolaire St Julien des Landes",
        "Groupe scolaire St Julien des Landes 01",
        "Groupe scolaire — Saint-Julien-des-Landes"
      ],
      [
        "groupe-scolaire-emilien-charrier",
        "09 Groupe scolaire Emilien Charrier Talmont St Hilaire",
        "Groupe scolaire Emilien Charrier Talmont St Hilaire 01",
        "Groupe scolaire Émilien Charrier — Talmont-Saint-Hilaire"
      ],
      [
        "groupe-scolaire-beaulieu-sous-la-roche",
        "10 Groupe scolaire Beaulieu Sous La Roche",
        "Groupe scolaire Beaulieu Sous La Roche 01",
        "Groupe scolaire — Beaulieu-sous-la-Roche"
      ]
    ]
  );

  // =========================
  // AJOUTS — ENSEIGNEMENT / MFR
  // =========================

  const MFR_PROJECTS = makeProjects(
    "Images/Projets/03 ENSEIGNEMENT/04 MFR",
    [
      [
        "mfr-les-sables-olonne",
        "01 MFR Les Sables d'Olonne",
        "01 MFR Les Sables d'Olonne 01",
        "MFR — Les Sables-d’Olonne"
      ],
      [
        "mfr-talmont-saint-hilaire",
        "02 MFR Talmont St Hilaire",
        "MFR Talmont St Hilaire 01",
        "MFR — Talmont-Saint-Hilaire"
      ],
      [
        "mfr-puy-sec",
        "03 MFR Puy Sec",
        "MFR Puy Sec 01",
        "MFR — Puy Sec"
      ]
    ]
  );

  PROJECTS.enseignement = [
    ...PROJECTS.enseignement,
    ...MFR_PROJECTS
  ];

  // =========================
  // AJOUTS — TERTIAIRE
  // =========================

  const TERTIARY_PROJECTS = makeProjects(
    "Images/Projets/04 TERTIAIRE",
    [
      [
        "gendarmerie-la-chaize-de-vicomte",
        "Gendarmerie La Chaize de Vicomte",
        "Gendarmerie La Chaize de Vicomte",
        "Gendarmerie — La Chaize-de-Vicomte"
      ],
      [
        "gendarmerie-pouzauges",
        "Gendarmerie Pouzauges",
        "Gendarmerie Pouzauges",
        "Gendarmerie — Pouzauges"
      ]
    ]
  );

  TERTIARY_PROJECTS.forEach((project, index) => {
    PROJECTS.tertiaire[index] = project;
  });

  // =========================
  // AJOUTS — PROMOTION
  // =========================

  const PROMOTION_PROJECTS = makeProjects(
    "Images/Projets/07 PROMOTION",
    [
      [
        "logements-saint-julien-des-landes",
        "Logts St Julien des Landes",
        "Logts St Julien des Landes",
        "Logements — Saint-Julien-des-Landes"
      ],
      [
        "logements-saint-mathurin",
        "Logts St Mathurin",
        "Logts St Mathurin",
        "Logements — Saint-Mathurin"
      ],
      [
        "logements-saint-prouant",
        "Logts St Prouant",
        "Logts St Prouant",
        "Logements — Saint-Prouant"
      ]
    ]
  );

  PROMOTION_PROJECTS.forEach((project, index) => {
    PROJECTS.promotion[index] = project;
  });

  // =========================
  // ÉLÉMENTS ET ÉTAT
  // =========================

  const get = (id) => document.getElementById(id);

  const header = get("header");
  const menu = get("navigation");
  const openButton = get("open-menu");
  const closeButton = get("close-menu");

  const projectsToggle = get("projects-toggle");
  const submenu = get("projects-submenu");
  const submenuSymbol =
    projectsToggle.querySelector(".submenu-symbol");

  const categoryList = get("project-category-list");
  const selectedCategory = get("selected-category");
  const resetCategory = get("reset-category");
  const grid = get("project-grid");

  const hero = get("accueil");
  const slidesContainer = get("slides");
  const photoHelp = get("photo-help");
  const photoStatus = get("photo-status");
  const manualChoice = get("manual-choice");
  const photoInput = get("photo-input");
  const motionControl = get("motion-control");

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  const resolvedImagePaths = new Map();

  let slides = [];
  let currentIndex = 0;
  let timer = null;
  let paused = reducedMotion.matches;
  let heroVisible = true;

  let manualMode = false;
  let temporaryUrls = [];
  let manualGeneration = 0;
  let destinationAfterClose = null;
  let galleryGeneration = 0;
  let renderedCategoryId = null;

  // =========================
  // CHARGEMENT DES IMAGES
  // =========================

  function relativeImageUrl(path) {
    const encodedPath = path
      .split("/")
      .map((segment) => encodeURIComponent(segment))
      .join("/");

    return new URL(encodedPath, document.baseURI).href;
  }

  function loadImage(source) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.decoding = "async";

      image.onload = () => {
        if (image.naturalWidth > 0) {
          resolve(image);
        } else {
          reject(new Error("Image vide : " + source));
        }
      };

      image.onerror = () => {
        reject(new Error("Image non chargée : " + source));
      };

      image.src = source;
    });
  }

  function imageCandidates(path) {
    if (/\.[a-z0-9]{2,5}$/i.test(path)) {
      return [path];
    }

    return IMAGE_EXTENSIONS.map(
      (extension) => path + extension
    );
  }

  async function resolveImagePath(path) {
    if (resolvedImagePaths.has(path)) {
      return resolvedImagePaths.get(path);
    }

    const search = (async () => {
      for (const candidate of imageCandidates(path)) {
        const url = relativeImageUrl(candidate);

        try {
          await loadImage(url);
          return url;
        } catch {
          // Essaie l’extension suivante.
        }
      }

      throw new Error("Aucune image trouvée pour : " + path);
    })();

    resolvedImagePaths.set(path, search);

    try {
      return await search;
    } catch (error) {
      resolvedImagePaths.delete(path);
      throw error;
    }
  }

  async function loadConfiguredImage(path) {
    const url = await resolveImagePath(path);
    return loadImage(url);
  }

  // =========================
  // LOGOS
  // =========================

  async function prepareLogos() {
    await Promise.all(
      Object.entries(LOGOS).map(async ([type, path]) => {
        try {
          const url = await resolveImagePath(path);

          const targets = document.querySelectorAll(
            `[data-logo="${type}"]`
          );

          await Promise.all(
            Array.from(targets, (target) => {
              return new Promise((resolve) => {
                target.onload = () => {
                  target.hidden = false;

                  const fallback =
                    target.parentElement.querySelector(
                      ".brand-fallback"
                    );

                  if (fallback) {
                    fallback.hidden = true;
                  }

                  resolve();
                };

                target.onerror = () => {
                  console.warn("Logo non lisible :", path);
                  resolve();
                };

                target.src = url;
              });
            })
          );
        } catch (error) {
          console.warn(
            "Logo introuvable :",
            path,
            "Le lettrage de secours reste affiché.",
            error
          );
        }
      })
    );
  }

  // =========================
  // LISTES DES CATÉGORIES
  // =========================

  function createCategoryLink(category, className) {
    const link = document.createElement("a");

    link.href = `#projets/${category.id}`;
    link.className = className;
    link.dataset.category = category.id;

    const number = document.createElement("span");
    number.className = "category-number";
    number.textContent = category.number;

    const title = document.createElement("span");
    title.textContent = category.title;

    link.append(number, title);

    return link;
  }

  CATEGORIES.forEach((category) => {
    get("menu-categories").appendChild(
      createCategoryLink(category, "")
    );

    categoryList.appendChild(
      createCategoryLink(category, "category-card")
    );
  });

  // =========================
  // MOSAÏQUE
  // =========================

  function usableProjectLink(value) {
    if (typeof value !== "string" || !value.trim()) {
      return null;
    }

    try {
      const url = new URL(value, document.baseURI);

      if (["http:", "https:"].includes(url.protocol)) {
        return url.href;
      }

      if (
        location.protocol === "file:" &&
        url.protocol === "file:"
      ) {
        return url.href;
      }
    } catch {
      return null;
    }

    return null;
  }

  function createLoadStatus() {
    const status = document.createElement("div");
    status.className = "project-load-status";

    const message = document.createElement("p");
    message.textContent = "Chargement de la photo…";

    status.appendChild(message);

    return status;
  }

  async function fillProjectImage(
    project,
    card,
    content,
    status,
    generation
  ) {
    try {
      const image = await loadConfiguredImage(project.image);

      if (generation !== galleryGeneration) {
        return;
      }

      image.className = "project-image";
      image.alt = project.title || "";

      content.prepend(image);
      card.classList.add("has-image");
      status.remove();
    } catch (error) {
      if (generation !== galleryGeneration) {
        return;
      }

      card.classList.add("image-error");
      status.replaceChildren();

      const message = document.createElement("p");
      message.textContent =
        "Photo introuvable ou non lisible. Vérifie le nom, " +
        "l’extension et la présence du fichier.";

      const path = document.createElement("code");
      path.textContent = project.image;

      status.append(message, path);

      console.warn(
        "Projet :", project.title,
        "\nChemin recherché :", project.image,
        "\nPage actuelle :", document.baseURI,
        error
      );
    }
  }

  function renderProject(project, index, generation) {
    const card = document.createElement("article");

    card.className = "project-card";
    card.dataset.projectId = project.id;
    card.setAttribute("role", "listitem");

    const empty =
      !project.image &&
      !project.title &&
      !project.description;

    if (empty) {
      card.classList.add("is-empty");
      card.dataset.slot = String(index + 1).padStart(2, "0");

      card.setAttribute(
        "aria-label",
        `Emplacement ${index + 1}, projet à ajouter`
      );

      return card;
    }

    const linkUrl = usableProjectLink(project.link);
    let content = card;

    if (linkUrl) {
      content = document.createElement("a");
      content.href = linkUrl;

      content.setAttribute(
        "aria-label",
        project.title || `Voir le projet ${index + 1}`
      );

      card.appendChild(content);
    }

    if (project.image) {
      const status = createLoadStatus();
      content.appendChild(status);

      void fillProjectImage(
        project,
        card,
        content,
        status,
        generation
      );
    }

    if (project.title || project.description) {
      const caption = document.createElement("div");
      caption.className = "project-caption";

      if (project.title) {
        const title = document.createElement("h3");
        title.textContent = project.title;
        caption.appendChild(title);
      }

      if (project.description) {
        const description = document.createElement("p");
        description.textContent = project.description;
        caption.appendChild(description);
      }

      content.appendChild(caption);
    }

    return card;
  }

  function renderCategory(category) {
    const generation = ++galleryGeneration;
    renderedCategoryId = category ? category.id : null;

    grid.replaceChildren();

    categoryList.hidden = Boolean(category);
    grid.hidden = !category;
    selectedCategory.hidden = !category;
    resetCategory.hidden = !category;

    document.querySelectorAll("[data-category]").forEach(
      (link) => {
        if (category && link.dataset.category === category.id) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      }
    );

    if (!category) {
      selectedCategory.textContent = "";
      get("project-status").textContent = "";
      return;
    }

    selectedCategory.textContent =
      `${category.number} — ${category.title}`;

    grid.setAttribute(
      "aria-label",
      `Projets — ${category.title}`
    );

    const projects = PROJECTS[category.id];

    projects.forEach((project, index) => {
      grid.appendChild(
        renderProject(project, index, generation)
      );
    });

    const filledCount = projects.filter(
      (project) =>
        project.image ||
        project.title ||
        project.description
    ).length;

    const emptyCount = projects.length - filledCount;

    get("project-status").textContent =
      `Catégorie ${category.title} : ` +
      `${filledCount} projets et ` +
      `${emptyCount} emplacements vides.`;
  }

  // =========================
  // NAVIGATION
  // =========================

  function applyRoute() {
    const hash = location.hash || "#accueil";
    let target = null;

    if (
      hash === "#projets" ||
      hash.startsWith("#projets/")
    ) {
      const id = hash.split("/")[1];

      const category = CATEGORIES.find(
        (item) => item.id === id
      );

      const nextId = category ? category.id : null;

      if (nextId !== renderedCategoryId) {
        renderCategory(category || null);
      }

      target = get("projets");
    } else {
      target = document.getElementById(hash.slice(1));
    }

    if (!target) {
      return;
    }

    requestAnimationFrame(() => {
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });

      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        header.getBoundingClientRect().height -
        24;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: reducedMotion.matches ? "auto" : "smooth"
      });
    });
  }

  function navigate(hash) {
    if (location.hash === hash) {
      applyRoute();
    } else {
      location.hash = hash;
    }
  }

  window.addEventListener("hashchange", applyRoute);

  categoryList.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-category]");

    if (!link) {
      return;
    }

    event.preventDefault();
    navigate(link.getAttribute("href"));
  });

  resetCategory.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("#projets");
  });

  document.querySelectorAll(
    ".header .brand, .footer a, .skip-link"
  ).forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      navigate(link.getAttribute("href"));
    });
  });

  // =========================
  // MENU
  // =========================

  function setSubmenu(open) {
    projectsToggle.setAttribute(
      "aria-expanded",
      String(open)
    );

    submenu.hidden = !open;
    submenuSymbol.textContent = open ? "−" : "+";
  }

  function openMenu() {
    if (menu.open) {
      return;
    }

    stopSlideshow();
    destinationAfterClose = null;

    menu.showModal();

    document.body.classList.add("menu-open");
    openButton.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    if (menu.open) {
      menu.close();
    }
  }

  openButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);

  menu.addEventListener("close", () => {
    document.body.classList.remove("menu-open");
    openButton.setAttribute("aria-expanded", "false");

    const destination = destinationAfterClose;
    destinationAfterClose = null;

    if (destination) {
      navigate(destination);
    } else {
      openButton.focus({ preventScroll: true });
    }

    startSlideshow();
  });

  menu.addEventListener("cancel", () => {
    destinationAfterClose = null;
  });

  projectsToggle.addEventListener("click", () => {
    setSubmenu(
      projectsToggle.getAttribute("aria-expanded") !== "true"
    );
  });

  menu.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');

    if (!link) {
      return;
    }

    event.preventDefault();

    destinationAfterClose = link.getAttribute("href");
    closeMenu();
  });

  // =========================
  // EN-TÊTE ET ANNÉE
  // =========================

  function updateHeader() {
    header.classList.toggle(
      "is-scrolled",
      window.scrollY > 60
    );
  }

  window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
  );

  updateHeader();

  get("year").textContent = new Date().getFullYear();

  // =========================
  // DIAPORAMA
  // =========================

  function stopSlideshow() {
    clearInterval(timer);
    timer = null;
  }

  function startSlideshow() {
    stopSlideshow();

    if (
      slides.length < 2 ||
      paused ||
      document.hidden ||
      menu.open ||
      !heroVisible
    ) {
      return;
    }

    timer = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;

      slides.forEach((slide, index) => {
        slide.classList.toggle(
          "is-active",
          index === currentIndex
        );
      });
    }, SLIDE_DURATION);
  }

  function updateMotionControl() {
    motionControl.hidden = slides.length < 2;

    motionControl.textContent = paused
      ? "Relancer le diaporama"
      : "Mettre le diaporama en pause";
  }

  function addSlide(image, order) {
    const slide = document.createElement("div");

    slide.className = "slide";
    slide.dataset.order = String(order);

    image.alt = "";
    image.draggable = false;

    slide.appendChild(image);

    const next = Array.from(
      slidesContainer.children
    ).find(
      (item) => Number(item.dataset.order) > order
    );

    slidesContainer.insertBefore(slide, next || null);
    slides = Array.from(slidesContainer.children);

    const activeIndex = slides.findIndex(
      (item) => item.classList.contains("is-active")
    );

    if (activeIndex === -1) {
      currentIndex = 0;
      slides[0].classList.add("is-active");
    } else {
      currentIndex = activeIndex;
    }

    photoHelp.hidden = true;

    updateMotionControl();
    startSlideshow();
  }

  async function prepareImages() {
    const helpTimer = setTimeout(() => {
      if (!manualMode && slides.length === 0) {
        photoStatus.textContent =
          "Recherche des images dans Images/Accueil. " +
          "Vérifie que le dossier Images est à côté de index.html.";

        manualChoice.hidden = false;
      }
    }, 6000);

    const missing = [];

    await Promise.all(
      HOME_IMAGES.map(async (path, index) => {
        try {
          const image = await loadConfiguredImage(path);

          if (!manualMode) {
            addSlide(image, index);
          }
        } catch {
          missing.push(path);
        }
      })
    );

    clearTimeout(helpTimer);

    if (manualMode) {
      return;
    }

    if (missing.length > 0) {
      console.warn(
        "Images d’accueil non chargées :",
        missing
      );
    }

    if (slides.length === 0) {
      photoStatus.textContent =
        "Aucune image trouvée. Vérifie les noms et " +
        "l’emplacement du dossier Images/Accueil.";

      manualChoice.hidden = false;
      photoHelp.hidden = false;
    }
  }

  motionControl.addEventListener("click", () => {
    paused = !paused;

    updateMotionControl();
    startSlideshow();
  });

  document.addEventListener(
    "visibilitychange",
    startSlideshow
  );

  reducedMotion.addEventListener("change", (event) => {
    paused = event.matches;

    updateMotionControl();
    startSlideshow();
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        startSlideshow();
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
  }

  // =========================
  // APERÇU MANUEL TEMPORAIRE
  // =========================

  photoInput.addEventListener("change", async () => {
    const files = Array.from(photoInput.files)
      .filter(
        (file) =>
          file.type.startsWith("image/") ||
          /\.(jpe?g|png|webp|avif|gif|svg)$/i.test(file.name)
      )
      .sort((a, b) =>
        a.name.localeCompare(
          b.name,
          "fr",
          { numeric: true }
        )
      );

    if (files.length === 0) {
      return;
    }

    const generation = ++manualGeneration;

    manualMode = true;
    stopSlideshow();

    slidesContainer.replaceChildren();

    slides = [];
    currentIndex = 0;

    temporaryUrls.forEach((url) => {
      URL.revokeObjectURL(url);
    });

    temporaryUrls = [];

    updateMotionControl();

    photoHelp.hidden = false;
    photoStatus.textContent = "Chargement de tes images…";

    await Promise.all(
      files.map(async (file, index) => {
        const url = URL.createObjectURL(file);
        temporaryUrls.push(url);

        try {
          const image = await loadImage(url);

          if (generation === manualGeneration) {
            addSlide(image, index);
          }
        } catch {
          console.warn(
            "Image non lisible :",
            file.name
          );
        }
      })
    );

    if (generation !== manualGeneration) {
      return;
    }

    if (slides.length === 0) {
      photoStatus.textContent =
        "Ces fichiers n’ont pas pu être affichés.";

      photoHelp.hidden = false;
      manualChoice.hidden = false;
    }
  });

  // =========================
  // DÉMARRAGE
  // =========================

  renderCategory(null);

  if (location.hash) {
    applyRoute();
  }

  void prepareLogos();
  void prepareImages();
})();
