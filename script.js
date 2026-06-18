/* =====================================================
   DAVID DAUPIN — PORTFOLIO SCRIPT.JS
   ===================================================== */

"use strict";

// ── CUSTOM CURSOR ─────────────────────────────────
const cursor = document.getElementById("cursor");
const cursorDot = document.getElementById("cursor-dot");

let mouseX = 0,
  mouseY = 0;
let cursorX = 0,
  cursorY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + "px";
  cursorDot.style.top = mouseY + "px";
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.12;
  cursorY += (mouseY - cursorY) * 0.12;
  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";
  requestAnimationFrame(animateCursor);
}
animateCursor();

document
  .querySelectorAll("a, button, .project-card, .filter-btn, .skill-card")
  .forEach((el) => {
    el.addEventListener("mouseenter", () =>
      document.body.classList.add("cursor-hover"),
    );
    el.addEventListener("mouseleave", () =>
      document.body.classList.remove("cursor-hover"),
    );
  });

// ── SCROLL: HEADER + REVEAL ───────────────────────
const header = document.getElementById("header");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  },
  { passive: true },
);

// ── MOBILE MENU ───────────────────────────────────
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuToggle.classList.toggle("open", open);
});
mobileMenu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle.classList.remove("open");
  });
});

// ── TICKER WITH LOGOS ──────────────────
function buildTicker() {
  const track = document.getElementById("tickerTrack");
  // Doublé pour la boucle seamless
  const doubled = [...TECH_LOGOS, ...TECH_LOGOS];

  // ✅ On utilise ENFIN ta fonction renderTickerItem issue de PROJECTS.js !
  track.innerHTML = doubled.map((item) => renderTickerItem(item)).join("");
}
buildTicker();

// ── PROJECTS ──────────────────────────────────────
const PAGE_SIZE = 6;
let currentFilter = "hetic";
let currentPage = 0;
let filteredProjects = [];

function getFiltered(filter) {
  if (filter === "all") return PROJECTS;
  return PROJECTS.filter((p) => p.category === filter);
}

function renderProjectCard(p) {
  const coverHTML = p.cover
    ? `<img src="${p.cover}" alt="${p.coverAlt}" loading="lazy">`
    : `<div class="project-cover-placeholder">En cours d'intégration...</div>`;

  const tagsHTML = p.tags
    .map((t) => `<span class="project-tag">${t}</span>`)
    .join("");

  const metricHTML = p.metrics
    ? `<div class="project-metric">${p.metrics}</div>`
    : "";

  const btnHTML = !p.wip
    ? `<button class="project-btn js-open-modal" data-id="${p.id}">Voir le projet →</button>`
    : "";

  const wipClass = p.wip ? " wip" : "";
  const wipBadge = p.wip
    ? `<span class="project-wip-badge">En cours</span>`
    : "";

  return `
    <div class="project-card${wipClass}" data-id="${p.id}">
      <div class="project-cover">${coverHTML}</div>
      <div class="project-body">
        <div class="project-meta">
          <div class="project-tags">${tagsHTML}</div>
          ${wipBadge}
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        ${metricHTML}
        ${btnHTML}
      </div>
    </div>
  `;
}

function renderProjects(append = false) {
  const grid = document.getElementById("projectsGrid");
  const slice = filteredProjects.slice(0, (currentPage + 1) * PAGE_SIZE);

  if (!append) {
    grid.innerHTML = slice.map(renderProjectCard).join("");
  } else {
    const start = currentPage * PAGE_SIZE;
    const newCards = filteredProjects.slice(start, start + PAGE_SIZE);
    grid.insertAdjacentHTML(
      "beforeend",
      newCards.map(renderProjectCard).join(""),
    );
  }

  // 🔥 LA MAGIE OPÈRE ICI : On rend la carte 100% cliquable
  grid.querySelectorAll(".project-card:not(.wip)").forEach((card) => {
    // 1. Le clic sur n'importe quel endroit de la carte ouvre le projet
    card.onclick = () => openModal(card.dataset.id);

    // 2. L'effet visuel du curseur quand on la survole
    card.addEventListener("mouseenter", () =>
      document.body.classList.add("cursor-hover"),
    );
    card.addEventListener("mouseleave", () =>
      document.body.classList.remove("cursor-hover"),
    );
  });

  // Load more button
  const lmWrap = document.getElementById("loadMoreWrap");
  const hasMore = filteredProjects.length > (currentPage + 1) * PAGE_SIZE;
  lmWrap.style.display = hasMore ? "block" : "none";
}

// Filter buttons
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    currentPage = 0;
    filteredProjects = getFiltered(currentFilter);
    renderProjects(false);
  });
});

// Load more
document.getElementById("loadMoreBtn").addEventListener("click", () => {
  currentPage++;
  renderProjects(true);
});

// Initial render
currentFilter = "hetic";
filteredProjects = getFiltered("hetic");
renderProjects(false);

// ── MODAL ─────────────────────────────────────────
const overlay = document.getElementById("modalOverlay");
const modalEl = document.getElementById("modal");
const modalInner = document.getElementById("modalInner");
const modalClose = document.getElementById("modalClose");

function openModal(id) {
  const p = PROJECTS.find((proj) => proj.id === id);
  if (!p || p.wip) return;

  const stackHTML = p.stack.length
    ? p.stack.map((s) => `<span class="stack-pill">${s}</span>`).join("")
    : '<span style="color:var(--gray-5);font-size:13px">—</span>';

  const galleryHTML = p.gallery.length
    ? p.gallery
        .map((src) => `<img src="${src}" alt="${p.title}" loading="lazy">`)
        .join("")
    : "";

  const metricHTML = p.metrics
    ? `<div class="modal-metric">${p.metrics}</div>`
    : "";

  const gallerySection = galleryHTML
    ? `<p class="modal-section-label">Visuels</p><div class="modal-gallery">${galleryHTML}</div>`
    : "";

  modalInner.innerHTML = `
    <span class="modal-tag">${p.tagline}</span>
    <h2 class="modal-title">${p.title}</h2>
    ${metricHTML}
    <div class="modal-body">${p.body}</div>
    <p class="modal-section-label">Stack technique</p>
    <div class="modal-stack">${stackHTML}</div>
    ${gallerySection}
  `;

  overlay.classList.add("open");
  overlay.removeAttribute("aria-hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ── CONTACT FORM ──────────────────────────────────

// 1. Initialisation de ton compte EmailJS
emailjs.init("HTqGqdNOR5jrfb1W0"); // 👈 REMPLACE ICI par ta clé publique

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const btnText = submitBtn.querySelector(".btn-text");
const formSuccess = document.getElementById("formSuccess");

function validateField(id, errorId, validator, message) {
  const el = document.getElementById(id);
  const errEl = document.getElementById(errorId);
  const field = el.closest(".form-field");
  const valid = validator(el.value.trim());
  if (!valid) {
    errEl.textContent = message;
    field.classList.add("error");
  } else {
    errEl.textContent = "";
    field.classList.remove("error");
  }
  return valid;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameOk = validateField(
    "name",
    "nameError",
    (v) => v.length >= 2,
    "Nom requis (min. 2 caractères)",
  );
  const emailOk = validateField(
    "email",
    "emailError",
    (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    "Email invalide",
  );
  const msgOk = validateField(
    "message",
    "messageError",
    (v) => v.length >= 10,
    "Message requis (min. 10 caractères)",
  );

  if (!nameOk || !emailOk || !msgOk) return;

  submitBtn.disabled = true;
  btnText.textContent = "Envoi en cours...";

  try {
    // 2. L'envoi réel de l'email via EmailJS
    // 👈 REMPLACE par ton Service ID et ton Template ID
    await emailjs.send("service_4v48u3c", "template_94i0r8k", {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    });

    // Si ça réussit :
    form.reset();
    formSuccess.style.display = "block";
    btnText.textContent = "✓ Envoyé !";

    setTimeout(() => {
      formSuccess.style.display = "none";
      btnText.textContent = "Envoyer le message";
      submitBtn.disabled = false;
    }, 5000);
  } catch (err) {
    // Si ça échoue (problème de réseau, mauvaises clés...)
    btnText.textContent = "Erreur — réessaie";
    console.error("EmailJS error:", err);
    setTimeout(() => {
      btnText.textContent = "Envoyer le message";
      submitBtn.disabled = false;
    }, 3000);
  }
});

// Validation live au blur
["name", "email", "message"].forEach((id) => {
  document.getElementById(id).addEventListener("blur", () => {
    if (id === "name")
      validateField("name", "nameError", (v) => v.length >= 2, "Nom requis");
    if (id === "email")
      validateField(
        "email",
        "emailError",
        (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        "Email invalide",
      );
    if (id === "message")
      validateField(
        "message",
        "messageError",
        (v) => v.length >= 10,
        "Message trop court",
      );
  });
});
