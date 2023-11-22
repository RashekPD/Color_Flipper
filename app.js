let BTN = document.getElementById('btn-color-changer');
let COLOR = document.querySelector('.color');

console.log(getRandomColor())

function getRandomColor(){
    return "rgb("+get255()+","+get255()+","+get255()+")";
}

function get255(){ // get random number from 0-255
    return Math.floor(Math.random()*256);
}