/**
 * Method invocation
 */
// "use strict";

// const o = {
//   m() {
//     self = this;
//     console.log("this from m points to: " + this);
//     console.log("self from m points to: " + self);

//     f();

//     function f() {
//       console.log("this from f points to: " + this);
//       console.log("self from f points to: " + self);
//     }

//     const g = () => {
//       console.log("this from g points to: " + this);
//       console.log("self from g points to: " + self);
//     };

//     g();

//     const h = function h() {
//       console.log("this from h points to: " + this);
//     }.bind(this);

//     h();
//   },
// };

// o.m();

/**
 * Functions as value
 */

// const add = (x, y) => {
//   return x + y;
// };

// const substract = (x, y) => {
//   return x - y;
// };

// const operate = (operation, x, y) => {
//   return operation(x, y);
// };

// const operations = {
//   add: (x, y) => x + y,
//   sub: (x, y) => x - y,
//   div: (x, y) => x / y,
//   mult: (x, y) => x * y,
// };

// const operate2 = (operation, x, y) => {
//   return operations[operation](x, y);
// };

/**
 * Function properties
 */

// const factorial = (n) => {
//   if (n == 1) return 1;

//   return n * factorial(n - 1);
// };

// const factorialCache = (n) => {
//   if (Number.isInteger(n) && n > 0) {
//     if (n === 1) return 1;

//     if (!(n in factorialCache)) {
//       factorialCache[n] = n * factorialCache(n - 1);
//     }
//     return factorialCache[n];
//   } else {
//     return NaN;
//   }
// };

// console.log(factorialCache(5));
// console.log(factorialCache[1]);
// console.log(factorialCache[2]);
// console.log(factorialCache[3]);
// console.log(factorialCache[4]);
// console.log(factorialCache[5]);

/**
 * The spread operator for function call
 */

// const timed = function (f) {
//   return function (...args) {
//     console.log("Entering function: " + f.name);
//     const startTime = Date.now();

//     try {
//       return f(...args);
//     } finally {
//       console.log(`Exiting ${f.name} after ${Date.now() - startTime}`);
//     }
//   };
// };

// const benchmark = function (n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }

//   return sum;
// };

// const result = timed(benchmark)(1000000000);

// console.log(result);

/**
 * The call and apply() methods
 */

// const obj = {
//   benchmark(n) {
//     let sum = 0;

//     for (let i = 0; i <= n; i++) {
//       sum += i;
//     }

//     return sum;
//   },
// };

// const trace = function (o, m) {
//   let original = o[m];
//   o[m] = function (...args) {
//     console.log(new Date(), "Entering: ", m);
//     let result = original.apply(this, args);
//     console.log(new Date(), "Exiting: ", m);
//     return result;
//   };
// };

// console.log(obj.benchmark(100));
// trace(obj, "benchmark");
// console.log(obj.benchmark(100));

/**
 * The bind() method
 */
// const sum = function () {
//   return this.x + this.y;
// };

// const obj1 = {
//   x: 1,
//   y: 2,
// };

// const obj2 = {
//   x: 2,
//   y: 3,
// };

// const obj3 = {
//   x: 4,
//   y: 5,
// };

// const sumObj1 = sum.bind(obj1);
// const sumObj2 = sum.bind(obj2);

// obj3.sum = sumObj2;

/**
 * Examples
 */

// 8.1.4 Nested Functions

/*function hypotenuse(a, b) {
  const square = (x) => x * x;
  return Math.sqrt(square(a) + square(b));
}

const calcHypotenuse = hypotenuse(2, 2);
console.log(calcHypotenuse);*/

// 8.2.2 Method Invocation

/*let o = {
  m: function () {
    let self = this;
    // function f() {
    //   console.log(this === o);
    //   console.log(self === o);
    // }

    // const f = () => {
    //   console.log(this === o);
    // };

    const f = function () {
      console.log(this === o);
    }.bind(this);
    f();
  },
};

o.m();*/

// 8.3.4 The Spread Operator for Function Call

/*function timed(f) {
  return function (...args) {
    console.log(`Entered function ${f.name}`);
    let startTime = new Date();
    try {
      return f(...args);
    } finally {
      console.log(`Exiting ${f.name} after ${new Date() - startTime}ms `);
    }
  };
}

function benchmark(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }

  return sum;
}

console.log(timed(benchmark)(1000000000));*/

// 8.3.5 Destructuring Function Arguments into Paraterters

/*function vectorMultiply({ x, y }, scalar) {
  return { x: x * scalar, y: y * scalar };
}

console.log(vectorMultiply({ x: 2, y: 3 }, 2));*/

/*function vectorAdd({ x: x1, y: y1 }, { x: x2, y: y2 }) {
  return { x: x1 + x2, y: y1 + y2 };
}

console.log(vectorAdd({ x: 2, y: 4 }, { x: 3, y: 5 }));*/

// 8.8.2 Higher-Order Function

/*const map = (args, callback) => {
  return args.map(callback);
};

const increment = (x) => x + 1;

const powerTwo = (x) => x * x;

function mapper(f) {
  return (a) => map(a, f);
}

const incrementAll = mapper(increment);
const powerTwoAll = mapper(powerTwo);

console.log(incrementAll([1, 2, 3, 4]));
console.log(powerTwoAll([1, 2, 3, 4]));*/

//Returned a new function that computes f(g())

/*const sum = (x, y) => x + y;
const square = (x) => x * x;

function compose(f, g) {
  return function (...args) {
    return f.call(this, g.apply(this, args));
  };
}

console.log(compose(square, sum)(3, 6));*/
