// ============================================================
// PROJECTS.JS — Source unique de vérité
// Pour ajouter un projet : copier un objet et le compléter.
// ============================================================

const PROJECTS = [
  
  // ════════════════════════════════════
  // CATÉGORIE : PROJETS HETIC (Data & IA)
  // ════════════════════════════════════  

  {
    id: "dual-ride",
    title: "Dual Ride",
    category: "hetic",
    tags: ["Business Intelligence", "Gen AI"],
    tagline: "BUSINESS INTELLIGENCE & GEN AI",
    cover: "Projets/Dual_Ride/img/dualridecover.png",
    coverAlt: "Dashboard Dual Ride : +18,2% de marge sur 15 400 profils",
    description:
      "IA Générative & Data Viz au service de l'équilibre Désir/Rentabilité : +18,2% de marge identifiée.",
    featured: true,
    wip: false,
    stack: [
      "Python",
      "Gemini",
      "SAM (META)",
      "REVE",
      "TRIPO3D",
      "STITCH",
      "PLOTLY.JS",
    ],
    metrics: "+18,2% de marge identifiée",
    body: `
      <h4 class="modal-section-label" style="color:var(--accent);margin-bottom:.5rem">1. Problématique Business & Insights Marché</h4>
      <p>Le projet résout le <strong>Paradoxe Technique</strong> : Comment concilier le désir esthétique et la contrainte industrielle pour maximiser la rentabilité ?</p>
      <p>Analyse de <strong>15 400 profils</strong> (Dataset Synthétique Gemini) : Calibrés sur les tendances réelles, les chiffres révèlent un rejet massif (75 %) du style "Manga/Insecte" actuel au profit d'une demande forte pour le <strong>Néo-Rétro 90s</strong>.</p>
      <p>Le Paradoxe : Le client veut le look "Rétro" mais exige une mécanique moderne, fiable et compatible ZFE.</p>

      <h4 class="modal-section-label" style="color:var(--accent);margin-top:1.5rem;margin-bottom:.5rem">2. Workflow de Prototypage Génératif</h4>
      <p><strong>Conception :</strong> Inspiration Pinterest, génération 2D via Reve, et nettoyage haute précision via Aidemos/Meta (SAM).</p>
      <p><strong>Production 3D :</strong> Conversion en "Jumeau Numérique" (.glb) via Tripo3DAI pour une intégration web immédiate.</p>

      <h4 class="modal-section-label" style="color:var(--accent);margin-top:1.5rem;margin-bottom:.5rem">3. Développement & Interface (Gen AI)</h4>
      <p><strong>Architecture (Stitch) :</strong> Génération des interfaces Frontend (Tailwind) avec des prompts différenciés pour le Client (immersif) et le Constructeur (analytique).</p>
      <p><strong>Intégrité :</strong> Développement de la logique technique complexe, notamment le script &lt;model-viewer&gt; pour la manipulation 3D interactive via Gemini.</p>

      <h4 class="modal-section-label" style="color:var(--accent);margin-top:1.5rem;margin-bottom:.5rem">4. Intelligence Décisionnelle & XAI (Explainable AI)</h4>
      <p><strong>Visualisation :</strong> Transformation des données brutes en outils de pilotage via Plotly.js.</p>
      <p><strong>Exploration Vectorielle :</strong> Intégration de TensorFlow Projector pour prouver la robustesse mathématique du clustering client.</p>
      <p><strong>Architecture XAI :</strong><br>
        1. Feature Importance<br>
        2. Interactive Inspection<br>
        3. Natural Language Explanation (NLE)<br>
        4. Counterfactuals (What-If)
      </p>

      <h4 class="modal-section-label" style="color:var(--accent);margin-top:1.5rem;margin-bottom:.5rem">5. Impact Économique & Conformité</h4>
      <p><em><strong>ROI Stratégique : +18,2 % de marge identifiée.</strong></em></p>
      <p style="font-size:.75rem;color:#9ca3af">Cette équation quantifie la valeur générée : nous soustrayons les coûts opérationnels de l'IA (tokens Gemini, crédits Tripo3D) des gains massifs de marge (18,2%) et de productivité (prototypage 2D/3D en minutes au lieu de semaines). Le gain inclut également l'évitement de coût lié à la réduction du risque industriel grâce à la validation par jumeau numérique.</p>
      <p style="font-size:.7rem;font-weight:700;letter-spacing:.1em;color:#9ca3af;text-transform:uppercase">Note de Conformité : Respect strict du RGPD et de l'AI Act.</p>

      <h4 class="modal-section-label" style="color:var(--accent);margin-top:1.5rem;margin-bottom:1rem">Accès aux démonstrations live</h4>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:2rem">
        <a href="https://daupindavid.github.io/Ma-Carte-de-Visite/Projets/Dual_Ride/configurator.html"
           target="_blank"
           style="display:flex;flex-direction:column;padding:1rem;border:1px solid rgba(var(--accent-rgb),.25);background:rgba(var(--accent-rgb),.05);border-radius:.75rem;text-decoration:none;transition:background .2s"
           onmouseover="this.style.background='rgba(var(--accent-rgb),.12)'"
           onmouseout="this.style.background='rgba(var(--accent-rgb),.05)'">
          <span style="font-size:.6rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:var(--accent);margin-bottom:.25rem">Interface B2C</span>
          <span style="font-weight:700;color:#fff;font-size:.9rem">Configurateur 3D Immersif</span>
          <span style="font-size:.65rem;color:#9ca3af;margin-top:.5rem;font-style:italic;line-height:1.5">Testez la personnalisation temps réel et la validation de faisabilité 3D.</span>
        </a>
        <a href="https://daupindavid.github.io/Ma-Carte-de-Visite/Projets/Dual_Ride/dashboard.html"
           target="_blank"
           style="display:flex;flex-direction:column;padding:1rem;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);border-radius:.75rem;text-decoration:none;transition:background .2s"
           onmouseover="this.style.background='rgba(255,255,255,.08)'"
           onmouseout="this.style.background='rgba(255,255,255,.04)'">
          <span style="font-size:.6rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#9ca3af;margin-bottom:.25rem">Interface B2B</span>
          <span style="font-weight:700;color:#fff;font-size:.9rem">Dashboard Décisionnel R&D</span>
          <span style="font-size:.65rem;color:#9ca3af;margin-top:.5rem;font-style:italic;line-height:1.5">Explorez le clustering TensorFlow et l'analyse de rentabilité industrielle. (Fichier "metadata.tsv" à retrouver sur GitHub)</span>
        </a>
      </div>
    `,
    gallery: [
      "Projets/Dual_Ride/img/0.png",
      "Projets/Dual_Ride/img/1.png",
      "Projets/Dual_Ride/img/2.png",
      "Projets/Dual_Ride/img/3.png",
      "Projets/Dual_Ride/img/4.png",
      "Projets/Dual_Ride/img/5.png",
      "Projets/Dual_Ride/img/6.png",
      "Projets/Dual_Ride/img/7.png",
      "Projets/Dual_Ride/img/8.png",
      "Projets/Dual_Ride/img/9.png",
      "Projets/Dual_Ride/img/10.png",
      "Projets/Dual_Ride/img/11.png",
    ],
    links: { github: "", live: "" },
  },

  {
    id: "data-monitor",
    title: "Data Monitor – Veille Concurrentielle E-commerce",
    category: "hetic",
    tags: ["Web Scraping", "Power BI", "SQL"],
    tagline: "COLLECTE, DATA ENGINEERING & BI",
    cover: "",
    coverAlt: "Data Monitor – Veille Concurrentielle E-commerce",
    description: "Scraping de 1 849 produits sur 7 enseignes sportives → Base SQL → Dashboard Power BI. 5 insights stratégiques pour Intersport (-15% vs marché).",
    featured: false,
    wip: true,
    stack: ["Python", "Playwright", "BeautifulSoup", "SQL", "Excel", "Power BI", "DAX"],
    metrics: "1 849 produits · 7 enseignes analysées",
    body: `<p>Projet en cours d'intégration.</p>`,
    gallery: [],
    links: { github: "", live: "" },
  },

  {
    id: "score-editorial-anime",
    title: "Data Science – Score Éditorial pour Animés",
    category: "hetic",
    tags: ["Data Science", "Python", "Scoring"],
    tagline: "MODÉLISATION & DÉCISION ÉDITORIALE",
    cover: "",
    coverAlt: "Score Éditorial pour Animés",
    description: "Pipeline Python complet avec Feature Engineering et algorithme de scoring pondéré multicritères. Segmentation éditoriale et recommandations stratégiques par source, studio et format.",
    featured: false,
    wip: true,
    stack: ["Python", "Pandas", "NumPy", "Jupyter"],
    metrics: "",
    body: `<p>Projet en cours d'intégration.</p>`,
    gallery: [],
    links: { github: "", live: "" },
  },

  {
    id: "web-analytics-pulsar",
    title: "Web Analytics & Tracking E-commerce – Pulsar Skin",
    category: "hetic",
    tags: ["GA4", "GTM", "Looker Studio"],
    tagline: "TRACKING & ANALYTICS E-COMMERCE",
    cover: "",
    coverAlt: "Web Analytics Pulsar Skin",
    description: "Implémentation d'un plan de taggage complet (GA4, GTM) sur boutique Shopify. Configuration de l'entonnoir de conversion et rapports Looker Studio pour l'optimisation UX & ROI.",
    featured: false,
    wip: true,
    stack: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "Shopify"],
    metrics: "",
    body: `<p>Projet en cours d'intégration.</p>`,
    gallery: [],
    links: { github: "", live: "" },
  },

  {
    id: "ecotrack-saas",
    title: "Stratégie & Growth – SaaS B2B EcoTrack IA",
    category: "hetic",
    tags: ["SaaS", "Growth", "React"],
    tagline: "STRATÉGIE PRODUIT & GO-TO-MARKET",
    cover: "",
    coverAlt: "SaaS B2B EcoTrack IA",
    description: "Analyse VSME/CSRD, qualification de 30 prospects via IA et étude de marché PME. MVP complet (site React + pitch deck) avec modèle économique à 99€/mois.",
    featured: false,
    wip: true,
    stack: ["React", "Python", "Figma", "Notion"],
    metrics: "30 prospects qualifiés · Modèle 99€/mois",
    body: `<p>Projet en cours d'intégration.</p>`,
    gallery: [],
    links: { github: "", live: "" },
  },

  // ════════════════════════════════════
  // CATÉGORIE : ROADMAP DATA & IA
  // ════════════════════════════════════

  {
    id: "casino-monte-carlo",
    title: "Casino Monte Carlo",
    category: "roadmap",
    tags: ["Simulation", "NumPy", "Multiprocessing"],
    tagline: "SIMULATION & MATHÉMATIQUES",
    cover: "",
    coverAlt: "Casino Monte Carlo",
    description: "De la boucle simple à la simulation de risque de ruine : maîtrise progressive de NumPy, multiprocessing et modèles stochastiques.",
    featured: false,
    wip: true,
    stack: ["Python", "NumPy"],
    metrics: "Boucle (10) → Vectorisation (45) → Multiprocessing (80) → Risque de Ruine (95)",
    body: `<p>Projet en cours d'intégration.</p>`,
    gallery: [],
    links: { github: "", live: "" },
  },

  {
    id: "cleaner-rgpd",
    title: "Cleaner – Pipeline de Nettoyage RGPD",
    category: "roadmap",
    tags: ["Pandas", "POO", "Polars", "RGPD"],
    tagline: "DATA ENGINEERING & CONFORMITÉ",
    cover: "",
    coverAlt: "Cleaner RGPD",
    description: "De Pandas Basic à Polars/Rust : construction d'un pipeline de nettoyage de données avec POO, automatisation et conformité RGPD complète.",
    featured: false,
    wip: true,
    stack: ["Python", "Pandas", "Polars", "Rust"],
    metrics: "Pandas (15) → POO (50) → Polars Rust (85) → RGPD (100)",
    body: `<p>Projet en cours d'intégration.</p>`,
    gallery: [],
    links: { github: "", live: "" },
  },

  {
    id: "warehouse-sql",
    title: "Warehouse – Maîtrise SQL Avancée",
    category: "roadmap",
    tags: ["SQL", "CTE", "Window Functions", "LTV"],
    tagline: "DATA ENGINEERING & ANALYSE",
    cover: "",
    coverAlt: "Warehouse SQL",
    description: "Du SQL simple aux analyses de cohortes : CTE, Window Functions, Query Plan & Index, calcul de LTV et analyses de rétention clients.",
    featured: false,
    wip: true,
    stack: ["SQL", "PostgreSQL"],
    metrics: "SQL Simple (15) → CTE & Window (55) → Query Plan (85) → LTV & Cohortes (100)",
    body: `<p>Projet en cours d'intégration.</p>`,
    gallery: [],
    links: { github: "", live: "" },
  },

  {
    id: "dashboard-live",
    title: "Dashboard Live – De Streamlit au WebSocket",
    category: "roadmap",
    tags: ["Streamlit", "FastAPI", "WebSockets"],
    tagline: "DATA VIZ & BACKEND",
    cover: "",
    coverAlt: "Dashboard Live",
    description: "De Streamlit à un dashboard temps réel : intégration d'un backend FastAPI, WebSockets live et conception de l'Aha! Moment utilisateur.",
    featured: false,
    wip: true,
    stack: ["Python", "Streamlit", "FastAPI"],
    metrics: "Streamlit (10) → FastAPI (40) → WebSockets (75) → Aha! Moment (90)",
    body: `<p>Projet en cours d'intégration.</p>`,
    gallery: [],
    links: { github: "", live: "" },
  },

  // ════════════════════════════════════
  // CATÉGORIE : TRANSVERSAL
  // ════════════════════════════════════

  {
    id: "lead-gen-b2b",
    title: "Pipeline d'Acquisition B2B Automatisé",
    category: "transversal",
    tags: ["Webflow", "Make", "CRM", "Growth"],
    tagline: "GROWTH ENGINEERING & REVOPS",
    cover: "",
    coverAlt: "Pipeline d'Acquisition B2B Automatisé",
    description: "Tunnel de génération de leads (Webflow) automatisé via Make pour la capture, l'enrichissement et le routage des données vers un CRM. Zéro perte de données et lead nurturing instantané.",
    featured: false,
    wip: true,
    stack: ["Webflow", "Make", "Airtable", "Zapier"],
    metrics: "",
    body: `<p>Projet en cours d'intégration.</p>`,
    gallery: [],
    links: { github: "", live: "" },
  },

  {
    id: "kalasam-lancement",
    title: "Lancement de Marque O2O – Kalasam",
    category: "transversal",
    tags: ["E-commerce", "Marketing", "Événementiel"],
    tagline: "GESTION DE PROJET MARKETING 360°",
    cover: "",
    coverAlt: "Lancement Kalasam",
    description: "Pilotage complet d'une campagne de lancement : organisation d'un Trunk Show physique couplé à la création et l'optimisation d'une boutique e-commerce pour maximiser la conversion cross-canal.",
    featured: false,
    wip: true,
    stack: ["Shopify", "Figma", "Notion"],
    metrics: "",
    body: `<p>Projet en cours d'intégration.</p>`,
    gallery: [],
    links: { github: "", live: "" },
  },

  {
    id: "stk-architecture",
    title: "Gestion de Projet Client B2B – STK Architecture",
    category: "transversal",
    tags: ["Gestion de projet", "B2B", "Gamification"],
    tagline: "DIRECTION DE PROJET CLIENT B2B",
    cover: "",
    coverAlt: "STK Architecture Gamification",
    description: "Direction de projet de A à Z pour un cabinet d'architecture. Conception, prototypage et livraison d'un jeu de cartes éducatif sur le biomimétisme répondant à un cahier des charges strict.",
    featured: false,
    wip: true,
    stack: ["Figma", "Notion"],
    metrics: "",
    body: `<p>Projet en cours d'intégration.</p>`,
    gallery: [],
    links: { github: "", live: "" },
  },

  {
    id: "threejs-3d",
    title: "Expérience Web 3D – Three.js",
    category: "transversal",
    tags: ["Three.js", "Frontend", "WebGL"],
    tagline: "DÉVELOPPEMENT FRONT-END IMMERSIF",
    cover: "",
    coverAlt: "Expérience 3D Three.js",
    description: "Exploration des limites de l'interactivité web. Développement d'une expérience immersive 3D avec Three.js (style Les Sims / Disney). Focus sur la fluidité et l'UX.",
    featured: false,
    wip: true,
    stack: ["JavaScript", "Three.js", "HTML5", "CSS"],
    metrics: "",
    body: `<p>Projet en cours d'intégration.</p>`,
    gallery: [],
    links: { github: "", live: "" },
  },

  {
    id: "wikipedia-learn",
    title: "Application Web – Wikipedia Learn",
    category: "transversal",
    tags: ["React", "Vite", "UX"],
    tagline: "DÉVELOPPEMENT WEB (CODING SPRINT)",
    cover: "",
    coverAlt: "Wikipedia Learn App",
    description: "Développement rapide d'une interface web dans un environnement contraint (Vite, React). Focus sur la performance du code et l'expérience utilisateur.",
    featured: false,
    wip: true,
    stack: ["React", "Vite", "JavaScript"],
    metrics: "",
    body: `<p>Projet en cours d'intégration.</p>`,
    gallery: [],
    links: { github: "", live: "" },
  },

];

// ============================================================
// TECH LOGOS — Slugs SimpleIcons officiels
// Le rendu utilise https://cdn.simpleicons.org/{slug}
// ============================================================

// Chaque entrée : { name, slug }
// slug = identifiant exact SimpleIcons (simpleicons.org)
const TECH_LOGOS = [
  // ── Langages & core ──────────────────────────────────────
  { name: "Python", slug: "python" }, // ✅
  { name: "SQL", slug: "postgresql" }, // ✅ (SQL sans logo officiel)
  { name: "Bash", slug: "gnubash" }, // ✅
  { name: "R", slug: "r" }, // ✅
  { name: "Rust", slug: "rust" }, // ✅
  { name: "JavaScript", slug: "javascript" }, // ✅
  { name: "HTML5", slug: "html5" }, // ✅
  { name: "CSS", slug: "css" }, // ✅ (css3 → css)

  // ── Data & ML ────────────────────────────────────────────
  { name: "Pandas", slug: "pandas" }, // ✅
  { name: "Polars", slug: "polars" }, // ✅
  { name: "Scikit-learn", slug: "scikitlearn" }, // ✅
  { name: "TensorFlow", slug: "tensorflow" }, // ✅
  { name: "PyTorch", slug: "pytorch" }, // ✅
  { name: "Jupyter", slug: "jupyter" }, // ✅
  { name: "MLflow", slug: "mlflow" }, // ✅

  // ── Data Engineering ─────────────────────────────────────
  { name: "Apache Spark", slug: "apachespark" }, // ✅
  { name: "Airflow", slug: "apacheairflow" }, // ✅
  { name: "Kafka", slug: "apachekafka" }, // ✅

  // ── Dataviz & BI ─────────────────────────────────────────
  { name: "Plotly", slug: "plotly" }, // ✅
  { name: "Streamlit", slug: "streamlit" }, // ✅
  // Power BI absent de SimpleIcons → retiré

  // ── Web & Frontend ───────────────────────────────────────
  { name: "React", slug: "react" }, // ✅
  { name: "Node.js", slug: "nodedotjs" }, // ✅
  { name: "Flask", slug: "flask" }, // ✅

  // ── Bases de données ─────────────────────────────────────
  { name: "PostgreSQL", slug: "postgresql" }, // ✅
  { name: "MongoDB", slug: "mongodb" }, // ✅
  { name: "Redis", slug: "redis" }, // ✅
  // ChromaDB et Pinecone absents de SimpleIcons → retirés

  // ── DevOps & Cloud ───────────────────────────────────────
  { name: "Docker", slug: "docker" }, // ✅
  { name: "Kubernetes", slug: "kubernetes" }, // ✅
  { name: "Terraform", slug: "terraform" }, // ✅
  { name: "Prometheus", slug: "prometheus" }, // ✅
  { name: "Grafana", slug: "grafana" }, // ✅
  { name: "Google Cloud", slug: "googlecloud" }, // ✅
  { name: "Git", slug: "git" }, // ✅
  { name: "GitHub", slug: "github" }, // ✅

  // ── Design & Outils ──────────────────────────────────────
  { name: "Figma", slug: "figma" }, // ✅
  { name: "Notion", slug: "notion" }, // ✅
  { name: "Airtable", slug: "airtable" }, // ✅
  { name: "Zapier", slug: "zapier" }, // ✅
  { name: "Stripe", slug: "stripe" }, // ✅

  // ── IA & APIs ────────────────────────────────────────────
  { name: "Gemini", slug: "googlegemini" }, // ✅
  { name: "Meta", slug: "meta" }, // ✅

  // ── Absents de SimpleIcons → SVG inline officiel ─────────
  {
    name: "OpenAI",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>`,
  },
  {
    name: "Midjourney",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M3.478 3C2.02 3 1.07 4.551 1.787 5.816L10.6 21.196c.713 1.258 2.49 1.258 3.203 0l2.247-3.963-4.467-7.87C10.867 7.699 11.814 6 13.275 6h5.67L17.2 3H3.478zm8.043 3L20.522 21C21.98 21 22.93 19.449 22.213 18.184l-7.005-12.35A1.855 1.855 0 0 0 13.545 5h-.007c-.43 0-.827.175-1.107.464A1.86 1.86 0 0 0 12 6.587V6h-.479z"/></svg>`,
  },
  {
    name: "Tableau",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M11.03 2.59h1.94v3.3h3.3v1.94h-3.3v3.3h-1.94v-3.3H7.73V5.89h3.3V2.59zm7.76 7.03h1.46v2.48h2.48v1.46h-2.48v2.48h-1.46v-2.48H16.3v-1.46h2.49V9.62zM1.25 9.62h1.46v2.48h2.48v1.46H2.71v2.48H1.25v-2.48H-1.23v-1.46h2.48V9.62zm9.78 7.76h1.94v2.48h2.48v1.46h-2.48V24h-1.94v-2.68H8.55v-1.46h2.48v-2.48zM1.25 1.13h1.46v2.48h2.48v1.46H2.71v2.48H1.25V5.07H-1.23V3.61h2.48V1.13zm17.54 0h1.46v2.48h2.48v1.46h-2.48v2.48h-1.46V5.07H16.3V3.61h2.49V1.13zM1.25 18.25h1.46v2.48h2.48v1.46H2.71V24.67H1.25v-2.48H-1.23v-1.46h2.48v-2.48zm17.54 0h1.46v2.48h2.48v1.46h-2.48v2.48h-1.46v-2.48H16.3v-1.46h2.49v-2.48z"/></svg>`,
  },
  {
    name: "Power BI",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="4" width="4" height="16" rx="1" fill="#F2C811"/><rect x="7" y="8" width="4" height="12" rx="1" fill="#F2C811" opacity=".85"/><rect x="13" y="1" width="4" height="15" rx="1" fill="#F2C811" opacity=".7"/><rect x="19" y="6" width="4" height="10" rx="1" fill="#F2C811" opacity=".55"/></svg>`,
  },
  {
    name: "XGBoost",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.5 3.75-7.5 3.75-7.5-3.75L12 4.18zM4 9.06l7 3.5v6.88l-7-3.5V9.06zm9 10.38v-6.88l7-3.5v6.88l-7 3.5z"/></svg>`,
  },
  {
    name: "ChromaDB",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 2a6 6 0 1 0 0 12A6 6 0 0 0 12 6zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>`,
  },
  {
    name: "Pinecone",
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M12 1.5C9.5 1.5 8 3.5 8 5.5c0 .8.2 1.5.5 2.1C7.2 8.3 6 9.8 6 11.5c0 .9.3 1.8.8 2.5C6 14.7 5.5 15.5 5.5 16.5c0 2 1.8 3.5 3.5 3.5h.5v2.5h5V20h.5c1.7 0 3.5-1.5 3.5-3.5 0-1-.5-1.8-1.3-2.5.5-.7.8-1.6.8-2.5 0-1.7-1.2-3.2-2.5-3.9.3-.6.5-1.3.5-2.1 0-2-1.5-4-4-4zm0 2c1.3 0 2 1.2 2 2 0 .4-.1.8-.3 1.1-.5-.2-1.1-.3-1.7-.3s-1.2.1-1.7.3C10.1 6.3 10 5.9 10 5.5c0-.8.7-2 2-2zm0 4.5c2 0 3.5 1.5 3.5 3s-1.5 3-3.5 3-3.5-1.5-3.5-3 1.5-3 3.5-3z"/></svg>`,
  },

  // ── Marketing ────────────────────────────────────────────
  { name: "Google Analytics", slug: "googleanalytics" }, // ✅
  { name: "Google Ads", slug: "googleads" }, // ✅
  { name: "Semrush", slug: "semrush" }, // ✅
];

// ── Utilitaire buildTicker ────────────────────────────────
// Gère les deux formats : { slug } → CDN SimpleIcons
//                         { svg }  → inline SVG
function renderTickerItem({ name, slug, svg }) {
  const icon = slug
    ? `<img src="https://cdn.simpleicons.org/${slug}/ffffff" alt="${name}" width="20" height="20" loading="lazy" onerror="this.style.display='none'">`
    : `<span class="ticker-logo-svg">${svg}</span>`;
  return `<span class="ticker-item">${icon}<span class="ticker-name">${name}</span></span>`;
}
