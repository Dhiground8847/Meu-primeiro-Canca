var mouseEvent, mouseXfinal, mouseYfinal, mouseXatual, mouseYatual, canvas, ctx, color, larguraLinha, mouseXtouchAtual, mouseYtouchAtual, mouseXtouchFinal, mouseYtouchFinal;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(){
    color = document.getElementById("cor").value;
    larguraLinha = document.getElementById("larguraLinha").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e){
    mouseXatual = e.clientX - canvas.offsetLeft;
    mouseYatual = e.clientY - canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = larguraLinha;
        ctx.moveTo(mouseXfinal, mouseYfinal);
        ctx.lineTo(mouseXatual, mouseYatual);
        ctx.stroke();
    }
    mouseXfinal = mouseXatual;
    mouseYfinal = mouseYatual;
}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(){
    mouseEvent = "mouseUp";
}

var width = screen.width;

newWidth = screen.width - 70;
newHeight = screen.height - 300;

if(width < 992){
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart");

function myTouchStart(e){
    color = document.getElementById("cor").value;
    larguraLinha = document.getElementById("larguraLinha").value;
    mouseXtouchFinal = e.touches[0].clientX - canvas.offsetLeft;
    mouseYtouchFinal = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",myTouchMove);

function myTouchMove(e){
    mouseXtouchAtual = e.touches[0].clientX - canvas.offsetLeft;
    mouseYtouchAtual = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = larguraLinha;
    ctx.moveTo(mouseXtouchFinal, mouseYtouchFinal);
    ctx.lineTo(mouseXtouchAtual, mouseYtouchAtual);
    ctx.stroke();

    mouseXtouchFinal = mouseYtouchAtual;
    mouseYtouchFinal = mouseYtouchAtual;
}

function limparTela(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}