// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle: flip between light and dark and remember the choice
const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
  return root.dataset.theme || (systemDark.matches ? "dark" : "light");
}

themeToggle.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("nav-links");

function setNav(open) {
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  navLinks.classList.toggle("open", open);
}

navToggle.addEventListener("click", () => {
  setNav(navToggle.getAttribute("aria-expanded") !== "true");
});

navLinks.addEventListener("click", (e) => {
  if (e.target.closest("a")) setNav(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setNav(false);
});

// Project filters: show only projects whose data-cat includes the chosen category
const chips = document.querySelectorAll(".chip");
const projects = document.querySelectorAll(".project[data-cat]");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const filter = chip.dataset.filter;
    chips.forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
    projects.forEach((p) => {
      const cats = p.dataset.cat.split(" ");
      p.hidden = filter !== "all" && !cats.includes(filter);
      // Filtered-in cards should appear right away, not wait for the scroll fade
      p.classList.add("visible");
    });
  });
});

// Copy email to clipboard
const copyBtn = document.querySelector(".copy-email");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyBtn.dataset.email);
    copyBtn.textContent = "Copied";
  } catch (e) {
    copyBtn.textContent = "Press Ctrl+C";
    const range = document.createRange();
    range.selectNodeContents(document.querySelector(".email"));
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
  setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
});

// Fade cards in as they scroll into view
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  const targets = document.querySelectorAll(".job, .project, .skill-group, .degree, .certs, .contact");
  targets.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );
  targets.forEach((el) => observer.observe(el));
}
