/**
 * Classes and Prototypes
 */

// const defineRange = function (from, to) {
//   const range = Object.create(defineRange.methods);
//   range.from = from;
//   range.to = to;

//   return range;
// };

// defineRange.methods = {
//   constructor: defineRange,

//   includes(x) {
//     return x >= this.from && x <= this.to;
//   },

//   toString() {
//     return `(${this.from}...${this.to})`;
//   },
// };

// const rangePrototype = defineRange(5, 10);

/**
 * Classes and Constructors
 */

// const prototypeObj = {
//   includes() {
//     return x >= this.from && x <= this.to;
//   },

//   toString() {
//     return `(${this.from}...${this.to})`;
//   },
// };
// const Interval = function (start, length) {
//   this.from = start;
//   this.to = start + length;
// };
// Interval.prototype = prototypeObj;
// Interval.prototype.sum = function () {
//   return;
// };

// const Range = function (from, to) {
//   this.from = from;
//   this.to = to;
// };
// Range.prototype = prototypeObj;

// // Range.prototype.includes = function (x) {
// //   return x >= this.from && x <= this.to;
// // };

// // Range.prototype.toString = function () {
// //   return `(${this.from}...${this.to})`;
// // };

// const rangeConstructor = new Range(10, 20);
// const intervalConstructor = new Interval(20, 30);

/**
 * Classes with the class Keyword
 */

// class Range {
//   constructor(from, to) {
//     this.from = from;
//     this.to = to;
//   }

//   includes(x) {
//     return x >= this.from && x <= this.to;
//   }

//   toString() {
//     return `(${this.from}...${this.to})`;
//   }

//   sumInterval() {
//     let sum = 0;

//     for (let i = this.from; i < this.to; i++) {
//       sum += 1;
//     }

//     return sum;
//   }

//   static parse(s) {
//     let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
//     if (!matches) {
//       throw new TypeError(`Cannot parse range from ${s}`);
//     }

//     return new Range(parseInt(matches[1]), parseInt(matches[2]));
//   }
// }

// const range = new Range(50, 100);

/**
 * Subclasses
 */

class ExArray extends Array {
  first() {
    return this[0];
  }

  last() {
    return this[this.length - 1];
  }
}

const exArray = new ExArray(1, 2, 3, 4, 5);

const mapData = [
  ["one", 1],
  ["two", 2],
  ["three", 3],
];
class TypedMap extends Map {
  constructor(keyType, valType, entries) {
    if (entries) {
      for (let [key, val] of entries) {
        if (typeof key !== keyType || typeof val !== valType) {
          throw new TypeError(
            `Type error: key type should be ${keyType}, was ${typeof key} OR value type should be ${valType}, was ${typeof val}`
          );
        }
      }
    }

    super(entries);

    this.keyType = keyType;
    this.valType = valType;
  }

  set(key, val) {
    if (this.keyType && typeof key !== this.keyType) {
      throw new TypeError(
        `Type error: key type should be ${this.keyType}, was ${typeof key}`
      );
    }

    if (this.valType && typeof val !== this.valType) {
      throw new TypeError(
        `Type error: value type should be ${this.valType}, was ${typeof val}`
      );
    }

    return super.set(key, val);
  }
}

const typedMap = new TypedMap("string", "number", mapData);

/**
 * Delegation instead of inheritance
 */

class Histogram {
  constructor() {
    this.map = new Map();
  }

  count(key) {
    return this.map.get(key) || 0;
  }

  has(key) {
    return this.count(key) > 0;
  }

  get size() {
    return this.map.size;
  }

  add(key) {
    this.map.set(key, this.count(key) + 1);
  }

  delete(key) {
    let count = this.count(key);
    if (count === 1) {
      this.map.delete(key);
    } else {
      this.map.set(key, count - 1);
    }
  }

  [Symbol.Iterator]() {
    return this.keys();
  }

  keys() {
    return this.map.keys();
  }

  values() {
    return this.map.values();
  }

  entries() {
    return this.map.entries();
  }
}

const histogram = new Histogram();
