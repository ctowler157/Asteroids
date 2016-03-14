(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};
  var Util = Asteroids.Util;

  var Asteroid =  Asteroids.Asteroid = function (options) {


    var COLOR = "#77DDEE";
    var RADIUS = 10;
    var SPEED = 2;
    options.color = COLOR;
    options.radius = RADIUS;
    options.vel = Util.randomVec(SPEED);
    Asteroids.MovingObject.call(this, options);
  };

  Util.inherits(Asteroid, Asteroids.MovingObject);

})(this);
