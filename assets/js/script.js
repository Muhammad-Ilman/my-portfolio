const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const navLinkAll = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  header.classList.toggle("open");
  document.body.classList.toggle("stopScrolling");
});

overlay.addEventListener("click", () => {
  header.classList.remove("open");
  document.body.classList.toggle("stopScrolling");
});

navLinkAll.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    header.classList.remove("open");
    document.body.classList.remove("stopScrolling");
    console.log("oke")
  })
});

function stickyNavbar() {
  console.log(window.scrollY > 50)
  header.classList.toggle("scrolled", window.scrollY > 50);
}

window.addEventListener("scroll", stickyNavbar);

const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 500,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});