let BTN = document.getElementById('btn-color-changer');
let COLOR = document.querySelector('.color');

BTN.addEventListener("click",function(){
    let newBackgroundColor = getRandomColor();
    changeBackgroundColor(newBackgroundColor);
    COLOR.textContent = newBackgroundColor;
    COLOR.style.color = newBackgroundColor;
})

function changeBackgroundColor(color){
    document.body.style.backgroundColor=color;
}


function getRandomColor(){
    return "rgb("+get255()+","+get255()+","+get255()+")";
}

function get255(){ // get random number from 0-255
    return Math.floor(Math.random()*256);
}