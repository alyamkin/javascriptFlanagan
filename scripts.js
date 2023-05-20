// const body = document.body;

// function traverse(element) {
//   let child = element.firstElementChild;

//   if (child?.nodeType == 1) {
//     console.log(child.firstChild);
//   }
//   while (child) {
//     traverse(child);
//     child = child.nextElementSibling;
//   }
// }

// const testPhrase = document.querySelector("#testPhrase");
// const testPhraseChildren = testPhrase.children;
// const testPhraseChildNodes = testPhrase.childNodes;

// const testImage = document.querySelector("#testImage");

// const firstR = document.querySelector("#firstRect");
// const secondR = document.querySelector("#secondRect");
// const thirdR = document.querySelector("#thirdRect");

// firstR.addEventListener("click", (e) => {
//   console.log("Event on the first rectangle");
// });
// secondR.addEventListener("click", (e) => {
//   console.log("Event on the second rectangle");
// });
// thirdR.addEventListener("click", (e) => {
//   console.log("Event on the third rectangle");
//   e.stopImmediatePropagation();
// });

// thirdR.addEventListener("click", (e) => {
//   console.log("other listener");
// });

// const button = document.querySelector("button");
// button.addEventListener("click", (e) => {
//   const closest = e.target.closest("button");

//   console.log(closest);
// });

// /**
//  * Scripting CSS
//  */

// const hidden = document.querySelector("#hidden");
// // hidden.classList.add("hidden");

// const square = document.querySelector("#square");

// const displayAt = (square, x, y) => {
//   square.style.display = "block";
//   square.style.position = "absolute";
//   square.style.left = `${x}px`;
//   square.style.top = `${y}px`;
// };

// displayAt(square, 500, 500);

// const setTheme = (themeName) => {
//   const link = document.createElement("link");
//   link.rel = "stylesheet";
//   link.href = `${themeName}.css`;
//   link.id = "theme";

//   const currentTheme = document.querySelector("#theme");

//   if (currentTheme) {
//     currentTheme.replaceWith(link);
//   } else {
//     document.head.append(link);
//   }
// };

// const changeThemeBtn = document.querySelector("#changeTheme");
// let themeToChange = "light";

// changeThemeBtn.addEventListener("click", (e) => {
//   themeToChange = themeToChange === "light" ? "dark" : "light";

//   setTheme(themeToChange);
// });

// const getRectangleCoords = function (element) {
//   const coords = element.getBoundingClientRect();

//   const outerCoords = {
//     topLeft: { x: coords.left, y: coords.top },
//     topRight: { x: coords.right, y: coords.top },
//     bottomRight: { x: coords.right, y: coords.bottom },
//     bottomLeft: { x: coords.left, y: coords.bottom },
//   };

//   const innerCoords = {
//     topLeft: {
//       x: coords.left + element.clientLeft,
//       y: coords.top + element.clientTop,
//     },
//     topRight: {
//       x: coords.left + element.clientLeft + element.clientWidth,
//       y: coords.top + element.clientTop,
//     },
//     bottomRight: {
//       x: coords.left + element.clientLeft + element.clientWidth,
//       y: coords.top + element.clientTop + element.clientHeight,
//     },
//     bottomLeft: {
//       x: coords.left + element.clientLeft,
//       y: coords.top + element.clientTop + element.clientHeight,
//     },
//   };

//   console.log(outerCoords);
//   console.log(innerCoords);
// };
// const element = document.querySelector("#testCoords");

// // getRectangleCoords(element);

// const getHeight = () => {
//   let documentHeight = document.documentElement.offsetHeight;

//   let viewportHeight = window.innerHeight;

//   const heights = { documentHeight, viewportHeight };
//   return heights;
// };

// const heights = getHeight();

/**
 * Element size and scrolling
 */

const testElement = document.querySelector("#elementSize");

const properties = [
  "offsetParent",
  "offsetLeft",
  "offsetTop",
  "offsetWidth",
  "offsetHeight",
  "clientLeft",
  "clientTop",
  "clientWidth",
  "clientHeight",
  "scrollWidth",
  "scrollHeight",
  "scrollLeft",
  "scrollTop",
];

const getFormattedElemProperties = function (element, ...properties) {
  const pTags = [];

  for (let property of properties) {
    const pTag = document.createElement("p");
    const propertyVal = element[property];
    const propertyFormatted = `${property} : ${propertyVal}`;
    pTag.innerHTML = propertyFormatted;
    pTags.push(pTag);
  }

  return pTags;
};

const appendElements = function (anchor, ...elements) {
  for (let element of elements) {
    anchor.append(element);
  }
};

const formattedProps = getFormattedElemProperties(testElement, ...properties);

appendElements(document.body, ...formattedProps);

// Scroll frm the bottom

const getScrollBottom = function (element) {
  const scrollHeight = element.scrollHeight;
  const clientHeight = element.clientHeight;
  const scrollTop = element.scrollTop;
  const hasNoScroll = scrollHeight == clientHeight;
  const scrollBottom = scrollHeight - scrollTop - clientHeight;

  if (hasNoScroll || scrollBottom === 0) {
    return 0;
  }

  return scrollBottom;
};

const getScrollbarWidthByViewport = function () {
  const htmlDoc = document.documentElement;
  const offsetWidth = htmlDoc.offsetWidth;
  const innerWidth = window.innerWidth;

  return innerWidth - offsetWidth;
};

const getScrollbarWidthByElemet = function () {
  const div = document.createElement("div");
  div.style.overflowY = "scroll";
  div.style.width = "100px";
  div.style.height = "100px";
  document.body.append(div);

  const offsetWidth = div.offsetWidth;
  const clientWidth = div.clientWidth;
  const scrollBarWidth = offsetWidth - clientWidth;

  div.remove();

  return scrollBarWidth;
};

const getRandomId = function () {
  return Math.floor(Math.random() * (100000 - 10000) + 10000);
};

const checkDuplicates = function (repeat) {
  const ids = {};
  for (let i = 0; i < repeat; i++) {
    const randomId = getRandomId();
    ids[randomId] = ids[randomId] >= 1 ? ids[randomId] + 1 : 1;
  }

  return ids;
};

const calcRepetitions = function (obj) {
  duplicates = {};

  for (let key in obj) {
    duplicates[obj[key]] =
      duplicates[obj[key]] >= 1 ? duplicates[obj[key]] + 1 : 1;
  }

  return duplicates;
};
