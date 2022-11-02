class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  [Symbol.iterator]() {
    let next = Math.ceil(this.from);
    const last = this.to;

    return {
      next() {
        if (next <= last) {
          return { value: next++ };
        } else {
          return { done: true };
        }
      },

      [Symbol.iterator]() {
        return this;
      },
    };
  }
}

const range = new Range(5, 15);

function map(iterable, predicate) {
  const iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      console.log(this);
      return this;
    },
    next() {
      let value = iterator.next();
      console.log(value);
      if (value.done) {
        return value;
      } else {
        return { value: predicate(value.value) };
      }
    },
  };
}

const mapTest = map(range, (x) => x * x);

function filter(iterable, predicate) {
  const iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      for (;;) {
        let value = iterator.next();
        console.log(value);
        if (value.done || predicate(value.value)) {
          return value;
        }
        return;
      }
    },
  };
}

const filterTest = filter(range, (x) => x % 2 === 0);

const test = " ab sc ff rer wet   ";

function words(s) {
  let regex = /\s+/g;

  regex.lastIndex = s.match(/[^ ]+/).index;

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      let start = regex.lastIndex;

      if (start < s.length) {
        match = regex.exec(s);

        if (match) {
          return { value: s.substring(start, match.index) };
        }
      }

      return { done: true };
    },
  };
}

const rangeObj = {
  from: 5,
  to: 20,

  [Symbol.iterator]() {
    return this;
  },

  next() {
    if (this.from <= this.to) {
      return { value: this.from++ };
    } else {
      return { done: true };
    }
  },
};

// function fibonacciSequence(n) {
//   let x = 0;
//   let y = 1;
//   let i = 0;

//   return {
//     [Symbol.iterator]() {
//       return this;
//     },

//     next() {
//       [x, y] = [y, x + y];

//       if (i++ < n) {
//         return { value: y };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// }

// const fibonacciSeq = fibonacciSequence(20);

function* fibonacciSequence() {
  let x = 0;
  let y = 1;

  for (;;) {
    yield y;
    [x, y] = [y, x + y];
  }
}

function fibonacci(n) {
  for (let f of fibonacciSequence()) {
    if (n-- <= 0) return f;
  }
}

function* taken(n, iterable) {
  let iterator = iterable[Symbol.iterator]();

  while (n-- > 0) {
    let next = iterator.next();

    if (next.done) {
      return;
    } else {
      yield next.value;
    }
  }
}

function* oneDigitPrimes() {
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}

const primes = oneDigitPrimes();

/**
 * Regex
 */
// search
// const regex = /\w+/y;
// regex.lastIndex = 4;
// const text = "The JavaScript is awasome";

// const search = text.search(regex);

// match
// let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
// let text = "Visit my blog at http://www.example.com/~david";

// let match = text.match(url);

// let fullurl, protocol, path, host;

// if (match) {
//   fullurl = match[0];
//   protocol = match[1];
//   host = match[2];
//   path = match[3];
// }

// console.log(
//   `fullurl: ${fullurl} \n protocol: ${protocol} \n host: ${host} \n path: ${path}`
// );

// let url = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/;
// let text = "Visit my blog at http://www.example.com/~david";

// let match = text.match(url);

// let fullurl, protocol, path, host;

// if (match) {
//   fullurl = match[0];
//   protocol = match.groups.protocol;
//   host = match.groups.host;
//   path = match.groups.path;
// }

// console.log(
//   `fullurl: ${fullurl} \n protocol: ${protocol} \n host: ${host} \n path: ${path}`
// );

// const regex = /a+b/g;

// const text = "aaaabaaaaab";

// const match = text.matchAll(regex);

// console.log(match);

// RexExp Class

// const regex = /Java/g;

// const text = "Java is awesome, but Javascript is my favorite";

// // console.log(regex.exec(text));

// while ((match = regex.exec(text)) !== null) {
//   console.log(`Matched: ${match[0]} at index ${match.index}`);
//   console.log(`Next search begins at ${regex.lastIndex}`);
// }
