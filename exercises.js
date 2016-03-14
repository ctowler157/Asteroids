function sum() {
  var argArray = [].slice.call(arguments);
  var total = 0;
  for (i = 0; i < argArray.length; i++) {
    total += argArray[i];
  }
  return total;
}

// console.log(sum(1,2,3,4) == 10);
// console.log(sum(1,2,3,4,5) == 15);

Function.prototype.myBind = function() {
  var func = this;
  var funcArgs = [].slice.call(arguments);
  var obj = funcArgs.shift();

  return function () {
    var invokedArgs = [].slice.call(arguments);
    return func.apply(obj, funcArgs.concat(invokedArgs));
  };
};

function curriedSum(numArgs) {
  var numbers = [];

  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      var total = 0;
      for (i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }
      return total;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.curry = function (numArgs) {
  var args = [];
  var func = this;
  function _curryFUNK(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return func.apply(null, args);
    } else {
      return _curryFUNK;
    }
  }
  return _curryFUNK;
};

Function.prototype.inherits = function(parent) {
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};
