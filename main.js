const menu = document.querySelector(".menu-content");
const menuBar = document.querySelector(".fa-bars");
const exitBtn = document.querySelector(".fa-times");

menuBar.onclick = () => {
    menu.style.left = "0%";
}
exitBtn.onclick = () => {
    menu.style.left = "-100%";
}

const menuContent = document.getElementsByClassName("menu-wide");
for(let i = 0; i < menuContent.length; i++) {
    menuContent[i].addEventListener("click", moveLeft);
}

function moveLeft() {
   menu.style.left = "-100%";
}
