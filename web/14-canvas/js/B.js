/* function drawQuadraticCurve(ctx,start,cp1,end){
    ctx.setLineDash([]);
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(start[0],start[1]);
    ctx.quadraticCurveTo(cp1[0],cp1[1],end[0],end[1]);
    ctx.stroke();
}
function drawLine(ctx,start,end){
    ctx.setLineDash([5,3]);
    ctx.strokeStyle='blue';
    ctx.beginPath();
    ctx.moveTo(start[0],start[1]);
    ctx.lineTo(end[0],end[1]);
    ctx.stroke();
}

$(function(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle='red';
    ctx.fillRect(0,100,6,6);
    drawLine(ctx,[2,2],[0,100])
    drawLine(ctx,[0,100],[200,100])
    drawQuadraticCurve(ctx,[2,2],[0,100],[200,100])
}) */

function drawQuadraticCurve(ctx,start,cp1,end){
    ctx.setLineDash([]);
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(start[0], start[1]);
    ctx.quadraticCurveTo(cp1[0],cp1[1],end[0],end[1]);
    ctx.stroke();
}

function drawLine(ctx, start, end){
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(start[0], start[1]);
    ctx.lineTo(end[0], end[1]);
    ctx.stroke();
}

$(function(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    drawLine(ctx,[800,300],[800,500]);
    drawLine(ctx,[800,500],[600,500]);
    drawLine(ctx,[600, 500],[600, 300]);
    drawQuadraticCurve(ctx,[800,300],[700,120],[600,300]);    
});