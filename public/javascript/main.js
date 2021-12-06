const menuBtn = document.querySelector(".menu-btn");
const menuList = document.getElementById("menu-list");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    menuList.classList.add("opened");
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    menuList.classList.remove("opened");
  }
});
