const HAMBURGER = document.querySelector(".hamburger");
const NAV_ITEMS = document.querySelector(".nav-items");
const NAV_ITEM = document.querySelectorAll(".nav-item");
const HEADER_NAV = document.querySelector(".header__top");

HAMBURGER.addEventListener("click", () => {
  HAMBURGER.classList.toggle("hamburger-open");
  NAV_ITEMS.classList.toggle("nav-open");
  if (HAMBURGER.classList.contains("hamburger-open")) {
    disableScroll();
  } else {
    enableScroll();
  }
});

NAV_ITEM.forEach((item) => {
  item.addEventListener("click", () => {
    HAMBURGER.classList.remove("hamburger-open");
    NAV_ITEMS.classList.remove("nav-open");
    enableScroll();
  });
});

function disableScroll() {
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  document.body.style.overflow = "auto";
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    HEADER_NAV.classList.add("header__top--fixed");
  } else {
    HEADER_NAV.classList.remove("header__top--fixed");
  }
});
