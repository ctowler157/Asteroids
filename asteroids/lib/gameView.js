(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};
  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function() {
    var animateCallback = function(){
      this.game.step();
      this.game.draw(ctx);
      requestAnimationFrame(animateCallback);
    }.bind(this);

    animateCallback();
  };
})(this);
