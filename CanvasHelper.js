var elem = document.body;
var cv = document.createElement('canvas');
elem.appendChild(cv);
var ctx = cv.getContext('2d');

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

cv.width = WIDTH;
cv.height = HEIGHT;

function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getRandomColor(alpha) {
    if(alpha === undefined) {
      alpha = 1;
    }

    var r = 255 * Math.random() | 0,
        g = 255 * Math.random() | 0,
        b = 255 * Math.random() | 0;

    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
}

function getHSLA(value, offset) {
    var hue = value % 360 + (offset || 0);
    return 'hsla(' + hue + ',100%,50%,1)';
}

function Vector2(x, y) {
  this.X = x;
  this.Y = y;

  this.Distance = function(other) {
    var x = other.X - this.X;
    var y = other.Y - this.Y;

    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  };

  this.Add = function(other) {
    this.X += other.X;
    this.Y += other.Y;
  }

  this.Added = function(other) {
    return new Vector2(this.X + other.X, this.Y + other.Y);
  }
}

function drawLine(a, b) {
    ctx.beginPath();
    ctx.moveTo(a.X, a.Y);
    ctx.lineTo(b.X, b.Y);
    ctx.stroke();
    ctx.closePath();
}

function drawPoint(pos, radius, color) {
    if(radius === undefined) {
      radius = 1;
    }

    ctx.beginPath();
    ctx.arc(pos.X, pos.Y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
