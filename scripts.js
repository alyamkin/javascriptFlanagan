//Object.create()
// const o1 = { x: 1, y: 2 };
// const o2 = Object.create(o1);
// console.log(o2.x + o2.y);

//Objects As Associative Arrays
// const customer = {
//   address1: "Address 1",
//   address2: "Address 2",
//   address3: "Address 3",
// };

// let addr = "";

// for (let i = 1; i < 4; i++) {
//   addr += customer[`address${i}`] + "\n";
// }

// console.log(addr);

//Inheritance
// let o = {};
// o.x = 1;
// let p = Object.create(o);
// p.y = 2;
// let q = Object.create(p);
// q.z = 3;
// let f = q.toString();
// console.log(q.x + q.y);

//Object Extensibility
// const obj = {
//   x: 1,
//   set val(value) {
//     this.x = value;
//   },
//   get val() {
//     return this.x;
//   },
//   writable: false,
// };

// Object.isExtensible();
// Object.preventExtensions(); // prevent adding new properties to the object
// Object.isSealed();
// Object.seal(); // prevent adding a new properties and configure existing(delete)
// Object.isFrozen();
// Object.freeze(); // prevent, write, configure, add

//Testing properties
// let o = { x: 1 };
// "x" in o; // true
// "y" in o; // false
// "toString" in o; // true

// o.hasOwnProperty("x"); // true
// o.hasOwnProperty("y"); // false
// o.hasOwnProperty("toString"); // false

// o.propertyIsEnumerable("x");
// Object.prototype.propertyIsEnumerable("toString");

//Enumerating properties
// let obj = {
//   x: 1,
//   y: 2,
//   z: 3,
//   toString() {
//     return `${this.x} ${this.y} ${this.z}`;
//   },
// };
// let obj2 = Object.create(obj);

// for (let p in obj) {
//   console.log(p);
// }

// console.log("-----Object properties without inherited-----");

// for (let p in obj2) {
//   if (!obj2.hasOwnProperty(p)) continue;
//   console.log(p);
// }

// console.log("-----Object properties without functions-----");

// for (let p in obj2) {
//   if (typeof obj2[p] === "function") continue;
//   console.log(p);
// }

// console.log("Object properties using Object.keys()");
// console.log("Object properties using Object.getOwnPropertyName()");
// console.log("Object properties using Object.getOwnPropertySymbols()");
// console.log("Object properties using Reflect.ownKeys()");

// console.log("-----Object with symbols-----");

// obj3 = {
//   x: 1,
//   [Symbol("y")]: 2,
// };

// Extending Objects
// let target = { x: 1 };
// let source = { y: 2, z: 3 };

// for (let key of Object.keys(source)) {
//   target[key] = source[key];
// }

// let obj1 = { x: 1 };
// let defaults = { y: 2, z: 3 };

// Object.assign(obj1, defaults);

// obj2 = { ...obj1, ...defaults }; // spread

// obj3 = Object.assign({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 });

// Serializing Objects
// let obj1 = { x: 1, y: { z: [false, null, ""] }, k: NaN, l: new Date() }; // NaN, Infinite, -Infinite converted to the null, Date - converted to the ISO - format
// let serializeObj1 = JSON.stringify(obj1);
// let parsedObj1 = JSON.parse(serializeObj1);

/**
 * The toString() Method
 */

// let s = { x: 1, y: 1 }.toString();

// let point = {
//   x: 1,
//   y: 2,
//   toString() {
//     return `(${this.x} ${this.y})`;
//   },
// };

/**
 * The valueOf() Method
 */

// let point = {
//   x: 3,
//   y: 4,
//   valueOf() {
//     return Math.hypot(this.x, this.y);
//   },
// };

/**
 * The toJSON() Method
 */

// let point = {
//   x: 1,
//   y: 2,
//   toString() {
//     return `(${this.x} ${this.y})`;
//   },
//   toJSON() {
//     return this.toString();
//   },
// };

/**
 * Computed property names
 */

// const PROPERTY_NAME = "p1";
// const computedPropertyName = () => {
//   return `p2`;
// };

// let obj1 = {
//   [PROPERTY_NAME]: 1,
//   [computedPropertyName()]: 2,
// };

/**
 * Symbols as property names
 */

// const extension = Symbol("my extension symbol");
// const extension2 = Symbol("my extension symbol");

// let obj = {
//   [extension]: { x: 1 },
//   [extension2]: { x: 1 },
//   "my extension symbol": { x: 1 },
// };

// obj[extension].x = 0;
// obj[extension2].x = 2;

/**
 * Spread operator
 */

// let obj = Object.create({ x: 1 });
// let obj2 = { ...obj };

/**
 * Property getter and setter
 */

// const serialnum = {
//   _n: 0,
//   get next() {
//     return this._n++;
//   },

//   set next(n) {
//     if (n > this._n) this._n = n;
//     else throw Error("serial number can only be set to a large number");
//   },
// };
