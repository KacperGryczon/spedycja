const nav = document.querySelector("nav");
const heroAnimation = document.getElementById("heroAnimationId");
const logo = document.querySelector(".logoName");
const navShow = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    logo.classList.add("logoNameScrolled");
    navShow.style.paddingTop = "30px";
  }
  if (window.scrollY < 50) {
    logo.classList.remove("logoNameScrolled");
    navShow.style.paddingTop = "40px";
  }
});

const openSidebar = document.querySelector(".bars");
const closeSidebar = document.querySelector(".x");

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

const button1 = document.getElementById("buttonLeft");
const button2 = document.getElementById("buttonRight");
const usługi = document.getElementById("usługi");
const kontkat = document.getElementById("kontakt");
button1.addEventListener("click", () => {
  kontkat.scrollIntoView();
});
button2.addEventListener("click", () => {
  usługi.scrollIntoView();
});
