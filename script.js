const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("nav-scrolled");
  }
  if (window.scrollY < 50) {
    nav.classList.remove("nav-scrolled");
  }
});
