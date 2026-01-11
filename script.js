// --- 1. TES DONNÉES (La source de tout ton portfolio) ---
const portfolioData = {
  personal: {
    name: "DAUPIN David",
    title: "DATA ANALYST - DATA & IA",
    email: "david_945@live.fr",
    linkedinURL: "https://www.linkedin.com/in/david-daupin-691034212",
    heroLine1: "De la Donnée Brute",
    heroLine2: "à l'Intelligence Créative &",
    heroLine3: "Décisionnelle...",
    about:
      "Étudiant en 1ʳᵉ année chez <strong>HETIC</strong>, spécialisé en <strong>Data & IA</strong>.",
  },
  projects: [
    {
      // Projet 1 : DUAL RIDE
      id: "dual-ride",
      category: "data",
      title: "DUAL RIDE",
      tag: "BUSINESS INTELLIGENCE & GEN AI",
      shortDescription:
        "IA Générative & Data Viz au service de l’équilibre Désir/Rentabilité: +18,2% de marge identifiée",
      imageCover: "Dual_Ride/img/dualridecover.png",
      imagesModal: [
        "0.png",
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png",
        "9.png",
        "10.png",
        "11.png",
      ],
      fullDescription: `
        <h4 class="text-primary font-bold mb-2 uppercase text-xs tracking-widest">1. Problématique Business & Insights Marché</h4>
        <p class="mb-4 text-gray-300 text-sm">Le projet résout le Paradoxe Technique : Comment concilier le désir esthétique et la contrainte industrielle pour maximiser la rentabilité ?</p>
        <p class="mb-4 text-gray-300 text-sm">Analyse de 15 400 profils (Dataset Synthétique Gemini) : Calibrés sur les tendances réelles, les chiffres révèlent un rejet massif (75 %) du style "Manga/Insecte" actuel au profit d'une demande forte pour le Néo-Rétro 90s.</p>
        <p class="mb-4 text-gray-300 text-sm">Le Paradoxe : Le client veut le look "Rétro" mais exige une mécanique moderne, fiable et compatible ZFE.</p>

        <h4 class="text-primary font-bold mb-2 uppercase text-xs tracking-widest">2. Workflow de Prototypage Génératif</h4>
        <p class="mb-4 text-gray-300 text-sm">Conception : Inspiration Pinterest, génération 2D via Reve, et nettoyage haute précision via Aidemos/Meta (SAM).</p>
        <p class="mb-4 text-gray-300 text-sm">Production 3D : Conversion en "Jumeau Numérique" (.glb) via Tripo3DAI pour une intégration web immédiate.</p>

        <h4 class="text-primary font-bold mb-2 uppercase text-xs tracking-widest">3. Développement & Interface (Gen AI)</h4>
        <p class="mb-4 text-gray-300 text-sm">Architecture (Stitch) : Génération des interfaces Frontend (Tailwind) avec des prompts différenciés pour le Client (immersif) et le Constructeur (analytique).</p>
        <p class="mb-4 text-gray-300 text-sm">Intégrité : Développement de la logique technique complexe, notamment le script &lt;model-viewer&gt; pour la manipulation 3D interactive via Gemini.</p>

        <h4 class="text-primary font-bold mb-2 uppercase text-xs tracking-widest">4. Intelligence Décisionnelle & XAI (Explainable AI)</h4>
        <p class="mb-4 text-gray-300 text-sm">Visualisation : Transformation des données brutes en outils de pilotage via Plotly.js.</p>
        <p class="mb-4 text-gray-300 text-sm">Exploration Vectorielle : Intégration de TensorFlow Projector pour prouver la robustesse mathématique du clustering client.</p>
        <p class="mb-4 text-gray-300 text-sm">Architecture XAI :<br> 
        1. Feature Importance<br>
        2. Interactive Inspection<br>
        3. Natural Language Explanation (NLE)<br>
        4. Counterfactuals (What-If)</p>

        <h4 class="text-primary font-bold mb-2 uppercase text-xs tracking-widest">5. Impact Économique & Conformité</h4>
        <p class="mb-4 text-gray-300 text-sm italic">ROI Stratégique : +18,2 % de marge identifiée.</p>
        
        <div class="bg-white/5 border border-primary/30 rounded-xl p-6 mb-4 text-center">
            <p class="text-white text-sm md:text-base font-mono">
                $$ROI = \\frac{\\text{Gain (Marge + Prod)} - \\text{Coût (IA)}}{\\text{Investissement}}$$
            </p>
        </div>

        <p class="mb-4 text-gray-400 text-xs">Analyse de la valeur : Cette équation quantifie la valeur générée : nous soustrayons les coûts opérationnels de l'IA (tokens Gemini, crédits Tripo3D) des gains massifs de marge (18,2%) et de productivité (prototypage 2D/3D en minutes au lieu de semaines). Le gain inclut également l'évitement de coût lié à la réduction du risque industriel grâce à la validation par jumeau numérique.</p>
        <p class="mb-6 text-gray-300 text-xs font-bold uppercase">Note de Conformité : Respect strict du RGPD et de l'AI Act.</p>
        <h4 class="text-primary font-bold mb-4 uppercase text-[0.65rem] tracking-[0.2em]">Accès aux démonstrations live</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <a href="configurator.html" target="_blank" 
               class="flex flex-col p-4 border border-primary/20 bg-primary/5 rounded-xl hover:bg-primary/10 transition-all group">
                <span class="text-primary font-bold text-[0.6rem] uppercase tracking-widest mb-1">Interface B2C</span>
                <span class="text-white text-sm font-bold">Configurateur 3D Immersif</span>
                <p class="text-gray-400 text-[0.65rem] mt-2 italic leading-relaxed">
                    Testez la personnalisation temps réel et la validation de faisabilité 3D.
                </p>
            </a>

            <a href="dashboard.html" target="_blank" 
               class="flex flex-col p-4 border border-white/10 bg-white/5 rounded-xl hover:bg-white/10 transition-all group">
                <span class="text-gray-400 font-bold text-[0.6rem] uppercase tracking-widest mb-1">Interface B2B</span>
                <span class="text-white text-sm font-bold">Dashboard Décisionnel R&D</span>
                <p class="text-gray-400 text-[0.65rem] mt-2 italic leading-relaxed">
                    Explorez le clustering TensorFlow et l'analyse de rentabilité industrielle.
                </p>
            </a>
        </div>
        <div class="flex justify-center mt-8">
            <a href="#contact" onclick="closeModal()" 
               class="bg-primary hover:bg-primary/80 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(244,37,175,0.4)] text-center text-xs leading-relaxed max-w-sm uppercase tracking-tighter">
               Si ce prototype automatisé a pu démontré la puissance de la Gen IA et répond à vos attentes, discutons-en ! <br>
               <span class="text-[0.6rem] opacity-80 mt-2 block tracking-widest">Une V2 transformera l’essai en un SaaS agentique et industriel...</span>
            </a>
        </div>
      `,
      techStack: [
        "Python",
        "Gemini",
        "SAM (META)",
        "REVE",
        "TRIPO3D",
        "STITCH",
        "PLOTLY.JS",
      ],
      // Projet 2 : ...
      // Projet 3 : ...
    },
  ],
};
// --- 2. GÉNÉRATION DYNAMIQUE DE LA TECH STACK AVEC LOGOS ---

window.addEventListener("DOMContentLoaded", () => {
  const logoMapping = {
    // --- DATA & LANGAGES ---
    PYTHON: "python",
    SQL: "postgresql",
    BASH: "gnubash",
    R: "r",
    EXCEL: "microsoftexcel",
    VBA: "visualbasic",
    JUPYTER: "jupyter",
    PANDAS: "pandas",
    POLARS: "polars",
    "SCIKIT-LEARN": "scikitlearn",
    XGBOOST: "xgboost",
    TENSORFLOW: "tensorflow",
    PYTORCH: "pytorch",
    YOLO: "ultralytics",
    RAG: "langchain",
    CHROMADB: "chroma",
    CHROMA: "chroma",
    PINECONE: "pinecone",
    MLFLOW: "mlflow",
    SPARK: "apachespark",
    PARQUET: "apacheparquet",
    AIRFLOW: "apacheairflow",
    MAGE: "magic",
    KAFKA: "apachekafka",

    // --- VISU & WEB ---
    "POWER BI": "powerbi",
    TABLEAU: "tableau",
    DAX: "powerbi",
    "PLOTLY.JS": "plotly",
    STREAMLIT: "streamlit",
    MATPLOTLIB: "matplotlib",
    SEABORN: "matplotlib",
    HTML5: "html5",
    CSS3: "css3",
    JAVASCRIPT: "javascript",
    REACTJS: "react",
    "NODE.JS": "nodedotjs",
    FLASK: "flask",
    POSTGRESQL: "postgresql",
    MONGODB: "mongodb",
    REDIS: "redis",

    // --- TOOLS & AI ---
    FIGMA: "figma",
    STITCH: "mongodb",
    "MODEL-VIEWER": "google",
    REVE: "docsdotrs",
    "SAM (META)": "meta",
    TRIPOSTUDIO: "tripostudio",
    DOCKER: "docker",
    KUBERNETES: "kubernetes",
    TERRAFORM: "terraform",
    "HASHICORP VAULT": "vault",
    PROMETHEUS: "prometheus",
    GRAFANA: "grafana",
    "GOOGLE CLOUD": "googlecloud",
    GIT: "git",
    GITHUB: "github",
    RUST: "rust",
    PYO3: "python",
    CHATGPT: "openai", // Remplacement effectué
    "GEMINI API": "googlegemini",
    "GOOGLE AI STUDIO": "google",
    "DALL-E": "openai", // Remplacement effectué
    MIDJOURNEY: "midjourney",
    "NOTION AI": "notion",

    // --- MARKETING & API ---
    SEMRUSH: "semrush",
    AHREFS: "ahrefs",
    "GOOGLE ADS": "googleads",
    "GOOGLE ANALYTICS": "googleanalytics",
    GTM: "googletagmanager",
    STRIPE: "stripe",
    ZAPIER: "zapier",
    AIRTABLE: "airtable",
    NOTION: "notion",
    "SLACK API": "slack",
    "DISCORD API": "discord",
    WEBSOCKETS: "socketdotio",
    MULTIPROCESSING: "python",
  };

  const techSpans = document.querySelectorAll(".tech-scroll span");

  techSpans.forEach((span) => {
    // Nettoyage : gestion des espaces multiples et retours à la ligne
    const techName = span.textContent.trim().replace(/\s+/g, " ");
    const upperName = techName.toUpperCase();

    // Recherche du slug : Dictionnaire d'abord, sinon automatique
    let techSlug =
      logoMapping[upperName] || techName.toLowerCase().replace(/\s+/g, "");

    const div = document.createElement("div");
    div.classList.add("tech-item");

    const img = document.createElement("img");
    img.src = `https://cdn.simpleicons.org/${techSlug}/white`;
    img.alt = techName;

    // Si l'icône n'existe pas, on met un logo générique "code"
    img.onerror = () => {
      if (!img.src.includes("code")) {
        img.src = "https://cdn.simpleicons.org/code/white";
      }
    };

    div.appendChild(img);
    div.appendChild(span.cloneNode(true));
    span.parentNode.replaceChild(div, span);
  });
});

// --- FONCTIONS DE FILTRAGE (Inchangées) ---
function showData() {
  document.getElementById("grid-data").style.display = "grid";
  document.getElementById("placeholder-transversal").style.display = "none";
  document.getElementById("btn-data").classList.add("active");
  document.getElementById("btn-transversal").classList.remove("active");
}

function showTransversal() {
  document.getElementById("grid-data").style.display = "none";
  document.getElementById("placeholder-transversal").style.display = "grid";
  document.getElementById("btn-transversal").classList.add("active");
  document.getElementById("btn-data").classList.remove("active");
}
// --- FONCTIONS DE LA MODALE ---
function openModal(project) {
  const modal = document.getElementById("project-modal");

  // 1. Remplissage des textes de base
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-tag").textContent = project.tag;
  document.getElementById("modal-body").innerHTML = project.fullDescription;

  // 2. Remplissage de la Tech Stack (Tes badges d'outils)
  const stackContainer = document.getElementById("modal-stack");
  if (stackContainer) {
    stackContainer.innerHTML = "";
    project.techStack.forEach((tech) => {
      const span = document.createElement("span");
      span.className =
        "rounded-full bg-white/5 px-3 py-1 text-xs font-mono text-gray-400 border border-white/5";
      span.textContent = tech;
      stackContainer.appendChild(span);
    });
  }

  // 3. Remplissage de la Galerie (Tes 12 images)
  const galleryContainer = document.getElementById("modal-gallery");
  if (galleryContainer) {
    galleryContainer.innerHTML = "";
    project.imagesModal.forEach((imgSrc) => {
      const img = document.createElement("img");
      // ON AJOUTE LE DOSSIER img/ ICI
      img.src = `img/${imgSrc}`;
      img.alt = `Capture du projet ${project.title}`;
      img.className =
        "w-full h-auto rounded-lg border border-white/10 shadow-lg object-cover transition-transform hover:scale-105 duration-300";
      galleryContainer.appendChild(img);
    });
  }

  // --- LE SEUL AJOUT : DÉCLENCHEUR LATEX ---
  // On force l'affichage de l'équation après l'ouverture
  if (window.MathJax && window.MathJax.typesetPromise) {
    setTimeout(() => {
      window.MathJax.typesetPromise();
    }, 100);
  }

  // 4. Affichage visuel
  modal.classList.remove("hidden");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// Correction de l'erreur de clic extérieur (Scope fixe)
window.addEventListener("click", function (event) {
  const modal = document.getElementById("project-modal");
  if (event.target === modal) {
    closeModal();
  }
});
