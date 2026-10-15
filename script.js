// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  links.classList.toggle("open", !open);
});

links.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    toggle.setAttribute("aria-expanded", "false");
    links.classList.remove("open");
  }
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Terminal typing effect: type each command, then show the line of output after it
async function runTerminal() {
  const typed = document.querySelectorAll(".typed");
  const outputs = document.querySelectorAll(".reveal-line");

  if (reduceMotion) {
    typed.forEach((el) => (el.textContent = el.dataset.text));
    return;
  }

  outputs.forEach((el) => (el.style.visibility = "hidden"));
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  await sleep(400);
  for (let i = 0; i < typed.length; i++) {
    const text = typed[i].dataset.text;
    for (const ch of text) {
      typed[i].textContent += ch;
      await sleep(70 + Math.random() * 60);
    }
    await sleep(250);
    if (outputs[i]) outputs[i].style.visibility = "visible";
    await sleep(450);
  }
}
runTerminal();

// Fade sections in as they scroll into view
if (!reduceMotion && "IntersectionObserver" in window) {
  const targets = document.querySelectorAll(".section, .project, .skill-group");
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
    { threshold: 0.12 }
  );
  targets.forEach((el) => observer.observe(el));
}
