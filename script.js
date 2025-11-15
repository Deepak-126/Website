// Mobile nav toggle
function toggleMobileNav() {
  const menu = document.getElementById("mobileNav");
  if (!menu) return;
  const isHidden = menu.style.display === "" || menu.style.display === "none";
  menu.style.display = isHidden ? "block" : "none";
}

// Reveal on scroll
const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));

// Generic tab system (for products)
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-tab-target]");
  if (!btn) return;

  const group = btn.getAttribute("data-tab-group");
  const targetId = btn.getAttribute("data-tab-target");
  if (!group || !targetId) return;

  const allBtns = document.querySelectorAll(
    `[data-tab-group="${group}"][data-tab-target]`
  );
  const allPanels = document.querySelectorAll(
    `[data-tab-panel-group="${group}"]`
  );

  allBtns.forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  allPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === targetId);
  });
});
