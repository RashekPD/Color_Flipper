let BTN = document.getElementById('btn-color-changer');
let COLOR = document.querySelector('.color');
let random_btn = document.getElementById('random-btn')
let RANDOMMODE = false;

BTN.addEventListener("click",changeBackgroundColor)
random_btn.addEventListener('click',function(){
    RANDOMMODE=!RANDOMMODE;
    randomMode();
})

function changeBackgroundColor(){
    let newBackgroundColor = getRandomColor();
    document.body.style.backgroundColor=newBackgroundColor;
    COLOR.textContent = newBackgroundColor;
    COLOR.style.color = newBackgroundColor;
}


function getRandomColor(){
    return "rgb("+get255()+","+get255()+","+get255()+")";
}

function get255(){ // get random number from 0-255
    return Math.floor(Math.random()*256);
}

function randomMode(){
    if(RANDOMMODE){
        changeBackgroundColor();
        setTimeout(randomMode,3000);
    }
}