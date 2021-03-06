var ptsDisp = [];
var data = [];
var delx;

function setup() {
	createCanvas(1000, 300);
	pixelDensity(1);
	background(200);
	
	for (var i = 0; i < 20; i++) {
		data.push(Math.random());
	}	
	
	delx = (canvas.width - 20) / data.length; //Padding of width 10 on either side
	
	for (var k = 0; k < data.length; k++) {
		addPoint(data[k]);
	}
}

function draw() {

}

function addPoint(p) {
	fill(0);
	
	ellipse(10 + delx * ptsDisp.length, canvas.height - 50 - (p * canvas.height / 2), 10, 10);
	
	ptsDisp.push(p);
}
	
