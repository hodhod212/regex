var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var x =150;
var y =150;    
var dx=2;
var dy=2;
var c;
function init(){
    c = canvas.getContext("2d");
    return setInterval(draw,10);
}
function draw(){
    c.clearRect(0,0,300,300);
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI*2, true);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "yellow";
    c.fill();
    x +=dx;
    y +=dy;
}
init();