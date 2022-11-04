const body = document.body;

function traverse(element) {
  let child = element.firstElementChild;

  if (child?.nodeType == 1) {
    console.log(child.firstChild);
  }
  while (child) {
    traverse(child);
    child = child.nextElementSibling;
  }
}

const testPhrase = document.querySelector("#testPhrase");
const testPhraseChildren = testPhrase.children;
const testPhraseChildNodes = testPhrase.childNodes;

const testImage = document.querySelector("#testImage");

const firstR = document.querySelector("#firstRect");
const secondR = document.querySelector("#secondRect");
const thirdR = document.querySelector("#thirdRect");

firstR.addEventListener("click", (e) => {
  console.log("Event on the first rectangle");
});
secondR.addEventListener("click", (e) => {
  console.log("Event on the second rectangle");
});
thirdR.addEventListener("click", (e) => {
  console.log("Event on the third rectangle");
  e.stopImmediatePropagation();
});

thirdR.addEventListener("click", (e) => {
  console.log("other listener");
});

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  const closest = e.target.closest("button");

  console.log(closest);
});

/**
 * Scripting CSS
 */

const hidden = document.querySelector("#hidden");
// hidden.classList.add("hidden");

const square = document.querySelector("#square");

const displayAt = (square, x, y) => {
  square.style.display = "block";
  square.style.position = "absolute";
  square.style.left = `${x}px`;
  square.style.top = `${y}px`;
};

displayAt(square, 500, 500);

const setTheme = (themeName) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `${themeName}.css`;
  link.id = "theme";

  const currentTheme = document.querySelector("#theme");

  if (currentTheme) {
    currentTheme.replaceWith(link);
  } else {
    document.head.append(link);
  }
};

const changeThemeBtn = document.querySelector("#changeTheme");
let themeToChange = "light";

changeThemeBtn.addEventListener("click", (e) => {
  themeToChange = themeToChange === "light" ? "dark" : "light";

  setTheme(themeToChange);
});
