const menuHamburger = document.querySelector(".hamburger");
const menuSelected = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-link");
const link = document.querySelector(".menu-link");
const menuButton = document.querySelector("#letsDoBussines");

menuHamburger.addEventListener("click", () => {
  menuSelected.classList.toggle("open");
  menuHamburger.classList.toggle("open");
});
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuSelected.classList.remove("open");
    menuHamburger.classList.remove("open");
  });
});
menuButton.addEventListener("click", () => {
  menuSelected.classList.remove("open");
  menuHamburger.classList.remove("open");
});
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
