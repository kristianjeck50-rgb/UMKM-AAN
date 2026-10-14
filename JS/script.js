const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Membuka dan menutup menu HP
menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Tutup menu" : "Buka menu"
  );
});

// Menutup menu ketika tautan dipilih
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
  });
});

// Menutup menu saat layar menjadi desktop
window.addEventListener("resize", function () {
  if (window.innerWidth > 700) {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

// Tahun otomatis pada footer
document.getElementById("year").textContent =
  new Date().getFullYear();