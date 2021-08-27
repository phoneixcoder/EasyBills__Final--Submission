
var menu = document.getElementById("hamburger-menu");
var open = document.getElementById("open")
function closemenu() {
    menu.style.top = "-100vh";
    open.style.width = "2rem";
    open.style.transition = "1s ease-in-out"
}
function openmenu() {
    menu.style.top = "0vh";
    open.style.width = "0px";
    open.style.transition = "1s linear-int-out"
}


function displayRadioValue(){
    let value=document.getElementById('input-amount').value;
    console.log(value);
    if(value==""){
        console.log("enter a value")
    }
    if (document.getElementById('automatically').checked) {
        console.log('auto');
        var amount=value/5;
        for(let i=0;i<4;i++){
            var text=document.getElementsByClassName('amt')[i];
            text.innerHTML=amount;
            
        }
    }else if(document.getElementById('manually').checked){
        console.log('manual');
        for(let i=0;i<4;i++){
            var text=document.getElementsByClassName('amt')[i];
            text.innerHTML="<input type='number' placeholder='enter amount' class='custom-input'></input>";
            
        }
    
    }
    document.getElementsByClassName('method')[0].classList.remove('display')

}
function addNum(info){
    document.getElementsByClassName('active-method')[0].classList.toggle('display');
    document.getElementsByClassName('friend-list')[0].classList.toggle('display');

}

function req(item) {
    item.childNodes[1].classList.remove('display')
    // var span=document.getElementById('span')
    // span.classList.remove('display')
    setTimeout(()=>{
        item.classList.add("display")
        var parent=item.parentElement;
        parent.firstChild.classList.remove('display')
     },3000)
     

}
function start(point){
    point.parentElement.parentElement.classList.add('none');
    document.getElementById('table').classList.add('none')
    document.getElementById('message').parentElement.classList.remove('none')
    setTimeout(()=>{
        document.getElementById('message').parentElement.classList.add('none')
    },3500)
    

    setTimeout(()=>{
        
        document.getElementById('success-img').parentElement.classList.remove('none')

    },4000)
    setTimeout(()=>{
        value=document.getElementById('input-amount').value;
        var amt=value/5;
        window.location.href = `/transaction/${amt}`;
        

    },5000)

}


