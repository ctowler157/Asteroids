(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};
  var Util = Asteroids.Util = {};

  Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate() {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Util.randomVec = function (length) {
    var xDir = Math.random() * 2 - 1;
    var yDir = Math.sqrt(1 - (Math.pow(xDir, 2)));
    var negative = Math.random();
    if (negative < 0.5) {
      yDir =  -yDir;
    }
    return [(xDir * length), (yDir * length)];
  };

  Util.isCollided = function (collisionOptions) {
    var dX = collisionOptions.pos1[0] - collisionOptions.pos2[0];
    var dY = collisionOptions.pos1[1] - collisionOptions.pos2[1];
    var rads = collisionOptions.rad1 + collisionOptions.rad2;
    var dist = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));

    return rads > dist;
  };
})(this);
