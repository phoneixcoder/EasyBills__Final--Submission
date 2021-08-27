
var menu = document.getElementById("hamburger-menu");
var open = document.getElementById("open")
function closemenu() {
    menu.style.top = "-100vh";
    open.style.width = "2rem";
    open.style.transition = "1s linear"
}
function openmenu() {
    menu.style.top = "0vh";
    open.style.width = "0vw";
    open.style.transition = "1s linear"
}

