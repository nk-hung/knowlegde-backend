function Operations(x) {
  return {
    sum: (...args) => arguments[0] + x,
  };
}

const ops = Operations(5);

console.log(ops.sum(1, 2, 3));

// Result: 10
// Explain: Arrow function dont have their own arguments object => Instead , the arguments is refer to the arguments of the enclosing scope.
//          => Therefore, arguments[0] refer to the x arguments

const Num = () => {
  this.getNum = () => 10;
};

Num.prototype.getNum = () => 20;

const num = new Num();

console.log(num.getNum());

// Result: TypeError
// Explain: Arrows function cannot be used as "constructors". Calling them with new with throws a TypeError
