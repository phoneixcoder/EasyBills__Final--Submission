var menu = document.getElementById("notification-menu");
var open = document.getElementById("notification-icon")
function closenotimenu() {
    menu.style.top = "-100vh";
    open.style.width = "3.5rem";
    open.style.padding = "10px";
    open.style.transition = "1s linear"
}
function opennotimenu() {
    menu.style.top = "0vh";
    open.style.width = "0rem";
    open.style.padding = "0px";
    menu.style.transition = "1s linear"
}


var menu_ham= document.getElementById("hamburger-menu");
var open_menu = document.getElementById("open")
function closemenu() {
    menu_ham.style.top = "-100vh";
    open_menu.style.width = "2rem";
    open_menu.style.transition = "1s linear"
}
function openmenu() {
    menu_ham.style.top = "0vh";
    open_menu.style.width = "0vw";
    open_menu.style.transition = "1s linear"
}