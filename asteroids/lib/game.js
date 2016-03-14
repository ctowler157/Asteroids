(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};

  var Game = Asteroids.Game = function () {
    this.dimX = 800;
    this.dimY = 800;
    this.numAsteroids = 10;
    this.asteroids = [];

    this.addAsteroids();
  };

  Game.prototype.checkCollisions = function () {
    var collided = [];
    for (var i = 0; i < this.asteroids.length; i++) {
      for (var j = i + 1; j < this.asteroids.length; j++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          alert("COLLISION!");
          // collided.push(i);
          // collided.push(j);
        }
      }
    }

    // collided.forEach( function(idx){
    //   this.remove(idx);
    // }.bind(this));
  };

  Game.prototype.randomPos = function () {
    var randX = Math.floor(Math.random() * this.dimX);
    var randY = Math.floor(Math.random() * this.dimY);

    return [randX, randY];
  };

  Game.prototype.addAsteroids = function () {
    for(var i = 0; i < this.numAsteroids; i++){

      this.asteroids.push(new Asteroids.Asteroid( { game: this,
                                                    pos: this.randomPos() } ));
    }
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.dimX, this.dimY);

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });

  };

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function (asteroid) {
      asteroid.move();
    });

  };

  // Game.prototype.remove = function (asteroidIdx) {
  //   this.asteroids.splice(asteroidIdx);
  //   return null;
  // };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.wrap = function (pos) {
    var wrappedPos = [];
    var xPos = pos[0];
    var yPos = pos[1];

    if (xPos < 0) {
      wrappedPos.push(this.dimX + xPos);
    } else if (xPos > this.dimX) {
      wrappedPos.push(xPos - this.dimX);
    } else {
      wrappedPos.push(xPos);
    }

    if (yPos < 0) {
      wrappedPos.push(this.dimY + yPos);
    } else if (yPos > this.dimY) {
      wrappedPos.push(yPos - this.dimY);
    } else {
      wrappedPos.push(yPos);
    }
    return wrappedPos;
  };

})(this);
