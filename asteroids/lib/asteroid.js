(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};
  var Util = Asteroids.Util;

  var Asteroid =  Asteroids.Asteroid = function (options) {


    var COLOR = "#77DDEE";
    var RADIUS = 15;
    var SPEED = 10;
    options.color = COLOR;
    options.radius = RADIUS;
    options.vel = Util.randomVec(SPEED);
    Asteroids.MovingObject.call(this, options);
  };

  Util.inherits(Asteroid, Asteroids.MovingObject);

})(this);
