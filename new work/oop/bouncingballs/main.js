
// variable for ball count paragraph
var para = document.querySelector('p');
var count = 0

// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

// size is same as browser window size
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min + 1)) + min;
  return num;
}

// constructor for properties
function Shape(x, y, velX, velY, exists) {
	this.x = x;
	this.y = y;
	this.velX = velX;
	this.velY = velY;
	this.exists = exists;
	
}

function Ball(x, y, velX, velY, exists, color, size) {
	Shape.call(this, x, y, velX, velY, exists);
	this.color = color;
	this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;


// method for the ball's prototype
Ball.prototype.draw = function() {
	ctx.beginPath();  // start to draw it
	ctx.fillStyle = this.color;  // make it this color, filled in
	ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);  // make it a circle
	ctx.fill();  // finish drawing it
} 

// update ball, so it will move
// use incident angle to bounce off window border
Ball.prototype.update = function() {
	if ((this.x + this.size) >= width) {
		this.velX = -(this.velX);
	}

	if ((this.x - this.size) <= 0) {
		this.velX = -(this.velX);
	}

	if ((this.y + this.size) >= height) {
		this.velY = -(this.velY);
	}

	if ((this.y - this.size) <= 0) {
		this.velY = -(this.velY);
	}

	this.x += this.velX;  // these two lines automatically update the ball's position
	this.y += this.velY;  // every frame
}


// collision detection
Ball.prototype.collisionDetect = function() {
	for (var j = 0; j < balls.length; j++) {
		if (!(this === balls[j])) {
			var dx = this.x - balls[j].x;
			var dy = this.y - balls[j].y;
			var distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < this.size + balls[j].size) {
				balls[j].color = this.color = 'rgb(' + random(0, 255) + ', ' + 
				random(0, 255) + ', ' + random(0, 255) + ')';
			}
		}
	}
}



// evil circle code
function EvilCircle(x,y,exists) {
	Shape.call(this, x, y, 20, 20, exists);
	this.color = 'white';
	this.size = 10;
}

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

// draw method for EvilCircle
EvilCircle.prototype.draw = function() {
	ctx.beginPath();
	ctx.strokeStyle = this.color;
	ctx.lineWidth = 3;
	ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
	ctx.stroke();
};

EvilCircle.prototype.checkBounds = function() {
	if ((this.x + this.size) >= width) {
		this.x -= (this.size);  // when bounce back, bounce back size of evilcircle
	}

	if ((this.x - this.size) <= 0) {
		this.x += (this.size);
	}

	if ((this.y + this.size) >= height) {
		this.y -= (this.size);
	}

	if ((this.y - this.size) <= 0) {
		this.y += (this.size);
	}

};

EvilCircle.prototype.setControls = function() {
	var _this = this;
	window.onkeydown = function(e) {
		if (e.keyCode === 65) {
			_this.x -= _this.velX;  // x coord minus velocity of x??   A
		} else if (e.keyCode === 68) { // D
			_this.x += _this.velX;
		} else if (e.keyCode === 87) {  // W
			_this.y -= _this.velY;
		} else if (e.keyCode === 83) { // S
			_this.y += _this.velY;
		}
	}
};

EvilCircle.prototype.collisionDetect = function() {
	for (var j = 0; j < balls.length; j++) {
		if (balls[j].exists) {
			var dx = this.x - balls[j].x;
			var dy = this.y - balls[j].y;
			var distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < this.size + balls[j].size) {
				balls[j].exists = false;
				count--;
				para.textContent = 'Ball count: ' + count;
			}
		} 		
	}
};


// store empty list of balls
var balls = [];

// create a new evilcircle object instance
var newEvilCircle = new EvilCircle(random(0,width), random(0,height), true);
newEvilCircle.setControls();


// loop to animate balls
function loop() {
	ctx.fillStyle = 'rgba(0, 0, 0, 1)';
	ctx.fillRect(0, 0, width, height);

	

	// loop through and make a bunch of balls
	while (balls.length < 25) {
		var size = random(10, 20);
		var ball = new Ball(
			random(0 + size, width - size),
			random(0 + size, height - size),
			random(-7, 7),
			random(-7, 7), 
			true,
			'rgb(' + random(0, 255) + ', ' + random(0, 255) + ', ' + 
			random(0, 255) + ')',
			size
			);
		balls.push(ball);
		count++
		para.textContent = 'Ball count: ' + count;

	}

	// loop through every ball and draw, update, detect collisions for each ball
	// but only if the ball exists
	for (var i = 0; i < balls.length; i++) {
		if (balls[i].exists) {
			balls[i].draw();
			balls[i].update();
			balls[i].collisionDetect();
			
		}
	};

	// call evil ball's draw, checkbounds, and collision detect for every iteration
	newEvilCircle.draw();
	newEvilCircle.checkBounds();
	newEvilCircle.collisionDetect();


	requestAnimationFrame(loop);
}

loop();

















































