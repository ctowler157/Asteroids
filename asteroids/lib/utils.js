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
})(this);
