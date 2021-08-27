
function cli(yo){
    console.log("Hello");
    var menu=document.getElementsByClassName('menu');
    yo.classList.toggle('rotate');
    menu[0].classList.toggle('appear');
    if(yo.style.color == "white" ){
        yo.style.color="black";
    }else{
        yo.style.color="white";
    }
}