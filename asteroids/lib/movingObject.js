(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};

  var MovingObject =  Asteroids.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
  };

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI
    );

    ctx.fill();

  };

  MovingObject.prototype.move = function() {
    var xPos = this.pos[0];
    var yPos = this.pos[1];

    var xVel = this.vel[0];
    var yVel = this.vel[1];
    var newPos = [(xPos + xVel), (yPos + yVel)];
    this.pos = this.game.wrap(newPos);
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var collisionOptions = {
      pos1: this.pos,
      pos2: otherObject.pos,
      rad1: this.radius,
      rad2: otherObject.radius
    };
    return Asteroids.Util.isCollided(collisionOptions);
  };
})(this);
