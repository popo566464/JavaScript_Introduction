var canvas = document.getElementById("canvas-draw");
var draw2d = canvas.getContext("2d");

drawShape();

function drawShape(){
	//繪製矩形
	draw2d.fillStyle = randomColor();
	draw2d.fillRect(10, 50, 150, 75);
	draw2d.strokeRect(100, 200, 75, 75);

	//繪製線條
	draw2d.strokeStyle = randomColor();
	draw2d.moveTo(200, 0);
	draw2d.lineTo(200, 200);
	draw2d.stroke();

	//繪製圓形
	draw2d.beginPath();
	draw2d.arc(250, 250, 30, 0, 2 * Math.PI, false);
	draw2d.fillStyle = randomColor();
	draw2d.fill();

	//繪製圓形外框
	draw2d.lineWidth = 3;
	draw2d.strokeStyle = randomColor();
	draw2d.stroke();
}

function changeColor(){
	drawShape();
}

function randomColor(){
	var r = Math.random() * (256 - 0) + 0;
	var g = Math.random() * (256 - 0) + 0;
	var b = Math.random() * (256 - 0) + 0;
	var newColor = 'rgb('+r+','+g+','+b+')';
	return newColor;
}