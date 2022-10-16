// Get canvas & set canvas size
var canvas = document.getElementById("content");
canvas.width = window.screen.width;
canvas.style.width = window.screen.width;
canvas.height = window.screen.height;
canvas.style.height = window.screen.height;

var ctx = canvas.getContext("2d");
ctx.font = "8px Arial";
ctx.fillStyle = "white";

var width = canvas.width;
var height = canvas.height;
var px = 0;
var py = 0
var direction = 0;
var currStep = 1;
var startStep = 1;
var numbers = 1;

//for(var i = 0; i < 10; i++) { 
while(width/2+px < width) {
    for(var y = 0; y <= 1; y++) {
        for(var x = 0; x < startStep; x++) {
            if(isPrime(numbers)) { 
                setPoint(direction, 'white');
                //setNumber(direction, numbers); 
            } else { 
                setPoint(direction, 'black'); 
                //setNumber(direction, " ");
            }
            numbers++;
        }
        changeDirection();
    }
    startStep++;
}

function changeDirection() {
    if(direction == 3) { 
        direction = 0; 
    } else { 
        direction++; 
    }
}

function setPoint(direction, color) { 
    var spacing = 20;

    switch(direction) {
        case 0: 
            drawCircle(ctx, width/2+px, height/2+py, 1, color); 
            px+=spacing; 
            break;
        case 1: 
            drawCircle(ctx, width/2+px, height/2+py, 1, color); 
            py-=spacing; 
            break;
        case 2: 
            drawCircle(ctx, width/2+px, height/2+py, 1, color); 
            px-=spacing; 
            break;
        case 3: 
            drawCircle(ctx, width/2+px, height/2+py, 1, color); 
            py+=spacing; 
            break;
    }
}

function setNumber(direction, char) { 
    var spacing = 20;
    ctx.beginPath();
    ctx.moveTo(width/2+px, height/2+py);
    ctx.strokeStyle = "green";
    
    switch(direction) {
        case 0: 
            ctx.fillText(char, width/2+px, height/2+py);
            ctx.lineTo(width/2+px+spacing, height/2+py); 
            ctx.stroke();
            px+=spacing; 
            break;
        case 1: 
            ctx.fillText(char, width/2+px, height/2+py); 
            ctx.lineTo(width/2+px, height/2+py-spacing); 
            ctx.stroke();
            py-=spacing; 
            break;
        case 2: 
            ctx.fillText(char, width/2+px, height/2+py);
            ctx.lineTo(width/2+px-spacing, height/2+py); 
            ctx.stroke(); 
            px-=spacing; 
            break;
        case 3: 
            ctx.fillText(char, width/2+px, height/2+py); 
            ctx.lineTo(width/2+px, height/2+py+spacing); 
            ctx.stroke();
            py+=spacing; 
            break;
    }
}

function drawCircle(ctx, x, y, radius, fill, stroke, strokeWidth) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    if (fill) {
      ctx.fillStyle = fill
      ctx.fill()
    }
    if (stroke) {
      ctx.lineWidth = strokeWidth
      ctx.strokeStyle = stroke
      ctx.stroke()
    }
  }

function isPrime(num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}