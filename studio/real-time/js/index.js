var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

var cancelAnimationFrame =
  window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var rAF;

var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight),
  particles = [],
  mouseX = 0,
  mouseY = 0,
  total = 1,
  followSpeed = 0.1,
  windAngle = 25,
  color = "white",
  size = 25;

document.body.addEventListener("mousemove", function(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

window.addEventListener("resize", function() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

function init() {
  cancelAnimationFrame(rAF);

  particles = [];

  for (var i = 0; i < total; i += 1) {
    particles.push(new Particle(i));
  }

  draw();
}

function draw() {
  context.clearRect(0, 0, width, height);

  for (var i = 0; i < total; i += 1) {
    particles[i].update();
  }

  rAF = requestAnimationFrame(draw);
}

/**
 * Particle
 */
var Particle, p;

Particle = function(index) {
  this.initialize(index);
};

p = Particle.prototype;

p.initialize = function(index) {
  this.x = mouseX;
  this.y = mouseY;
  this.id = index + 1;
  this.angleX = Math.PI * 2 * Math.random();
  this.angleY = Math.PI * 2 * Math.random();
  this.speedX = 0.03 * Math.random() + 0.03;
  this.speedY = 0.03 * Math.random() + 0.03;
  this.radius = 150;

  return this;
};

p.update = function() {
  var aim, dx, dy, scale, angle;

  if (this.id > 1) {
    aim = particles[this.id - 1 - 1];
    dx = aim.x - this.x;
    dy = aim.y - this.y;

    this.x += dx * followSpeed;
    this.y += dy * followSpeed;
  } else {
    if (mouseX === 0 && mouseY === 0) {
      dx = width / 2 + Math.cos(this.angleX) * this.radius - this.x;
      dy = height / 2 + Math.sin(this.angleY) * this.radius - this.y;

      this.x = width / 2 + Math.cos(this.angleX) * this.radius;
      this.y = height / 2 + Math.sin(this.angleY) * this.radius;

      this.angleX += this.speedX;
      this.angleY += this.speedY;
    } else {
      dx = mouseX - this.x;
      dy = mouseY - this.y;

      this.x += dx * followSpeed;
      this.y += dy * followSpeed;
    }
  }

  angle = windAngle; //Math.atan2(dy, dx);
  // scale = Math.cos(Math.PI / 2 * (this.id / total));

  context.save();
  context.translate(this.x, this.y);
  context.rotate(angle);
  context.scale(scale, scale);

  let p = new Path2D(
    "M5.6,10.4l2.6,6l-2.1,0.9L3.4,11l-2.9,2.8L0.5,1.2l9.3,9.1L5.6,10.4z"
  );
  context.fill(p);

  context.lineWidth = 1;
  context.strokeStyle = color;
  context.stroke(p);

  context.restore();
};

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getInRange(input, input_start, input_end, output_start, output_end){
  input = Math.min(input, input_end);
  input = Math.max(input, input_start);  
  slope = (output_end - output_start) / (input_end - input_start);
  output = output_start + slope * (input - input_start);
  return output;
}

function getIntInRange(input, input_start, input_end, output_start, output_end){
  return Math.floor(getInRange(input, input_start, input_end, output_start, output_end))
}

function getNewData() {
  fetch("https://api.openweathermap.org/data/2.5/weather?zip=10003,us&APPID=c911cc784aeec48e00894992667ef470&units=metric")
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      total = getIntInRange(json.main.temp, 0, 20, 1, 20);
      windAngle = -json.wind.deg;
      windSpeed = getInRange(json.wind.speed, 0, 30, 0.1, 0.75); 
      console.log("WIND SPEED IN METERS PER SECOND", json.wind.speed);
      console.log("WIND ANGLE IN DEGREES ", json.wind.deg);
      console.log("TEMPERTURE IN CELCIUS", json.main.temp);
      init();
    });

  // total = getRandomInt(1, 25);
  // windAngle = getRandomInt(1, 90);
  // init();
}

setInterval(getNewData, 60000);
getNewData();