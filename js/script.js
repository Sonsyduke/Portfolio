const menu = document.querySelector("#menu");
const close = document.querySelector("#close");
const phoneNav = document.querySelector("#phone-nav");

menu.addEventListener("click", () => {
  phoneNav.classList.add("display");
});
close.addEventListener("click", () => {
  phoneNav.classList.remove("display");
});
