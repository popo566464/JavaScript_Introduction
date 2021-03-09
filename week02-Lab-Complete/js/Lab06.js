let canvas = document.getElementById("canvas-draw");
let draw2d = canvas.getContext("2d");

drawShape();

function drawShape(){
	draw2d.fillStyle = randomColor();
	draw2d.fillRect(10, 50, 150, 75);
	draw2d.strokeRect(100, 200, 75, 75);

	draw2d.strokeStyle = randomColor();
	draw2d.moveTo(200, 0);
	draw2d.lineTo(200, 200);
	draw2d.stroke();

	draw2d.beginPath();
	draw2d.arc(250, 250, 30, 0, 2 * Math.PI, false);
	draw2d.fillStyle = randomColor();
	draw2d.fill();

	draw2d.lineWidth = 3;
	draw2d.strokeStyle = randomColor();
	draw2d.stroke();
}


function randomColor(){
	let r = Math.random() * 256;
	let g = Math.random() * 256;
	let b = Math.random() * 256;	
	return `rgb(${r}, ${g}, ${b})`;
}