(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};

  var Game = Asteroids.Game = function() {
    this.dimX = 800;
    this.dimY = 800;
    this.numAsteroids = 50;
    this.asteroids = [];

    this.addAsteroids();
  };

  Game.prototype.randomPos = function () {
    var randX = Math.floor(Math.random() * this.dimX);
    var randY = Math.floor(Math.random() * this.dimY);

    return [randX, randY];
  };

  Game.prototype.addAsteroids = function() {
    for(var i = 0; i < this.numAsteroids; i++){

      this.asteroids.push(new Asteroids.Asteroid( { pos: this.randomPos() } ));
    }
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.dimX, this.dimY);

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });

  };

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function (asteroid) {
      asteroid.move();
    });

  };

})(this);
