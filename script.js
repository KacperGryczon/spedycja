const nav = document.querySelector("nav");
const heroAnimation = document.getElementById("heroAnimationId");
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 50) {
//     nav.classList.add("nav-scrolled");
//   }
//   if (window.scrollY < 50) {
//     nav.classList.remove("nav-scrolled");
//   }
// });

const openSidebar = document.querySelector(".bars");
const closeSidebar = document.querySelector(".x");
const navShow = document.querySelector(".nav");

openSidebar.addEventListener("click", () => {
  navShow.classList.add("navShow");
});

closeSidebar.addEventListener("click", () => {
  navShow.classList.remove("navShow");
});

const openSidebarItems = navShow.querySelectorAll("li");
openSidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    navShow.classList.remove("navShow");
  });
});
