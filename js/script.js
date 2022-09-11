var menu = document.querySelector(".menu")
var navMenu = document.querySelector(".nav-menu")

menu.addEventListener("click", () => {
    menu.classList.toggle("ativo")
    navMenu.classList.toggle("ativo")
})