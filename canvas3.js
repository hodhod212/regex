var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var x =150;
var y =150;
var r =30;    
var dx=4;
var dy=4;
var w =window.innerWidth;
var h=window.innerHeight;

function init(){
    var c = canvas.getContext('2d');
    var w=window.innerWidth;
    var h=window.innerHeight;
    return setInterval(draw,10);
}
function circle(x,y,r){
    c.beginPath();
    c.arc(x,y,r,0,Math.PI*2,true);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "yellow";
    c.fill();
}

function clear(){
    c.clearRect(0,0,w,h);
}
function draw(){
    clear();
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI*2, true);
    c.strokeStyle = "black";
    c.stroke();
    c.fillStyle = "yellow";
    c.fill();
    if(x+dx>w||x+dx<0)
    dx=-dx;
    if(y+dy>h||y+dy<0)
    dy=-dy;
    x +=dx;
    y +=dy;
}
init();