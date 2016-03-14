(function (root) {
  var Asteroids = root.Asteroids = root.Asteroids || {};
  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function() {
    var animateCallback = function(){
      this.game.moveObjects();
      this.game.draw(ctx);
      //this will call our animateCallback again, but only when the browser
      //is ready, usually every 1/60th of a second
      requestAnimationFrame(animateCallback);

      //if we didn't know about requestAnimationFrame, we could use setTimeout
      //setTimeout(animateCallback, 1000/60);
    }.bind(this);

    //this will cause the first render and start the endless triggering of
    //the function using requestAnimationFrame
    animateCallback();
  };
})(this);
