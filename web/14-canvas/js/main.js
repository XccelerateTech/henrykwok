/* $(function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.lineTo(200,300);
    ctx.stroke();
});


$(function (){
    function drawLine(ctx,start,end){
        ctx.beginPath();
        ctx.moveTo(start[0]. start[1]);
        ctx.lineTo(end[0], end[1]);
        ctx.stroke();
    }
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    drawLine(ctx,[2,2],[20,20]);
}) */

$(function(){
    function drawLine(ctx,start,end){
        ctx.beginPath();
        ctx.moveTo(start[0], start[1]);
        ctx.lineTo(end[0], end[1]);
        ctx.stroke();
    }

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    drawLine(ctx,[20,20],[400,400]);
    drawLine(ctx,[155,20],[20,155]);
});