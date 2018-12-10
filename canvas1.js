var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

c.beginPath();
c.moveTo(400,100)
c.lineTo(500, 30);
c.strokeStyle = "green";
c.stroke();
    
c.beginPath();
c.arc(80, 80, 30, 0, Math.PI*2, false);
c.strokeStyle = "red";
c.stroke();

c.beginPath();
c.arc(180, 80, 30, 0, Math.PI*2, false);
c.strokeStyle = "black";
c.stroke();
c.fillStyle = "yellow";
c.fill();

c.beginPath();
c.rect(400,200,100,100);
c.fillStyle = "yellow";
c.strokeStyle = "black";
c.stroke();
c.fill(); 

c.beginPath();
c.rect(200,200,100,100);
c.strokeStyle = "red";
c.stroke();