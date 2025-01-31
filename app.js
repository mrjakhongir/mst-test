const HAMBURGER = document.querySelector(".hamburger");
const NAV_ITEMS = document.querySelector(".nav-items");
const NAV_ITEM = document.querySelectorAll(".nav-item");

HAMBURGER.addEventListener("click", () => {
  HAMBURGER.classList.toggle("hamburger-open");
  NAV_ITEMS.classList.toggle("nav-open");
});

NAV_ITEM.forEach((item) => {
  item.addEventListener("click", () => {
    HAMBURGER.classList.remove("hamburger-open");
    NAV_ITEMS.classList.remove("nav-open");
  });
});

function disableScroll() {
  document.body.style.overflow = "hidden";
}

function enableScroll() {
  document.body.style.overflow = "auto";
}
