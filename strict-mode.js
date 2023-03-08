// 'use strict';

//  Restrictions that Strict Mode give us:
// 1. Assigning or Aceessing a variables that is not declared
function returnY() {
  y = 10;
  console.log(y);
  return y;
}

// returnY();

// 2. Assigning a value to read-only or non-writable global variables;

('use strict');

var NaN = NaN;
var undefined = undefined;
var Infinity = 'halo';

console.log(NaN, undefined, Infinity);
