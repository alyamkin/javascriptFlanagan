/**
 * Creating arrays
 */

// Array literal
// let prime = [2, 3, 5, 7, 11];
// let count = [1, , 3];
// let undef = [, ,];

// The spread operator
// let a = [1, 2, 3];
// let b = [0, ...a, 4];
// let digits = [..."0123456"];

// c = {
//   x: 1,
// };

// b = [...b, ...c]; // c is not iterable

// The Array() constructor
// let a = new Array(10);

// Array.of()
// let a = Array.of(10);

// Array.from()
// let a = [1, 2, 3, 4];
// let b = Array.from(a);
// let c = Array.from(a, (elem) => elem * 2);

// Reading and writing array elements
// let a = [];
// a["element"] = 25;

// a.push(30);

/**
 * Subarrays with slice(), splice(), fill(), and copyWith()
 */

// // slice()
// let a = [1, 2, 3, 4, 5];
// a.slice(0, 3); // [1,2,3]
// a.slice(3); // [4,5]
// a.slice(1, -1); // [2,3,4]
// a.slice(-3, -2); // [3]

// // splice()
// let b = [1, 2, 3, 4, 5, 6, 7, 8];
// b.splice(4); // [1,2,3,4]
// b.splice(1, 2); // [1,4]
// b.splice(1); // [1]

// let c = [1, 2, 3, 4, 5];
// c.splice(2, 0, "a", "b"); // [1,2,'a','b',3,4,5]
// c.splice(2, 2, [1, 2], 3); // [1,2,[1,2],3,3,4,5]

// // fill()
// let d = new Array(5);
// d.fill(0);
// d.fill(9, 1);
// d.fill(8, 2, -1);

// // copyWithin()
// let e = [1, 2, 3, 4, 5, 6];
// e.copyWithin(1); // [1,1,2,3,4,5]
// e.copyWithin(2, 3, 5); // [1, 1, 3, 4, 4, 5]
// e.copyWithin(1, -3); // [1, 4, 4, 5, 4, 5]

/**
 * Array searching and sorting methods
 */

// indexOf()

// let a = [0, 1, 2, 3, 4, 5, 6];

// let test = [1, 2, 1, 5, 1, 10];

// const findAll = (arr, x) => {
//   const length = arr.length;
//   const indexes = [];
//   let pos = 0;

//   while (pos < length) {
//     pos = arr.indexOf(x, pos);

//     if (pos === -1) break;

//     indexes.push(pos);
//     pos += 1;
//   }
//   return indexes;
// };

// sort()

// let arr = [33, 4, 1111, 222];

// const sortNum = (order) => {
//   switch (order) {
//     case "desc":
//       return (num1, num2) => num2 - num1;
//     default:
//       return (num1, num2) => num1 - num2;
//   }
// };

// let arr2 = ["ant", "Bug", "cat", "Dog"];

// const sortCaseInsensitive = (order) => {
//   switch (order) {
//     case "desc":
//       return (word1, word2) => {
//         w1Lower = word1.toLowerCase();
//         w2Lower = word2.toLowerCase();

//         if (w1Lower < w2Lower) return -1;
//         if (w1Lower > w2Lower) return 1;
//         return 0;
//       };
//     default:
//       return (word1, word2) => {
//         w1Lower = word1.toLowerCase();
//         w2Lower = word2.toLowerCase();

//         if (w1Lower < w2Lower) return 1;
//         if (w1Lower > w2Lower) return -1;
//         return 0;
//       };
//   }
// };

/**
 * Array-like objects
 */

// let obj = {};

// let length = 0;

// for (let i = 0; i < 10; i++) {
//   obj[i] = i * i;
//   length++;
// }

// obj.length = length;

// let total = 0;

// for (let j = 0; j < obj.length; j++) {
//   total += obj[j];
// }

// // Array.prototype.join.call(obj)
// // Array.prototype.slice.call(obj, 2,6)
// // Array.prototype.splice.call(obj, 2,5);

// let arr = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81];
