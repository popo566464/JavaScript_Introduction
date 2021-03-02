
window.onload = function() {
    let canvas = document.getElementById("canvas-draw");
    let draw2d = canvas.getContext("2d");
    
    //繪製矩形
    draw2d.fillStyle = "#ff0000";
    draw2d.fillRect(10, 50, 150, 75);
    
    //繪製矩形邊框
    draw2d.strokeRect(100, 200, 75, 75);
    
    //繪製線條
    draw2d.strokeStyle = "#00aa00";
    draw2d.moveTo(200, 0);
    draw2d.lineTo(200, 200);
    draw2d.stroke();
    
    //繪製圓形
    draw2d.beginPath();
    draw2d.arc(250, 250, 30, 0, 2 * Math.PI, false);
    draw2d.fillStyle = "#ffbb00";
    draw2d.fill();
    
    //繪製圓形邊框
    draw2d.lineWidth = 3;
    draw2d.strokeStyle = "#003300";
    draw2d.stroke();
}
