import masalaCSS from "./cssobjects.js";

const PREFIX = "masala-";

function getUtilityClasses(element) {
  return Array.from(element.classList).filter((cls) => cls.startsWith(PREFIX));
}

function applyCSS(element) {
  const utilityClasses = getUtilityClasses(element);
  if (utilityClasses.length === 0) return;

  let compiledStyle = "";

  utilityClasses.forEach((cls) => {
    const cssRule = masalaCSS[cls];
    if (cssRule) {
      compiledStyle += cssRule + " ";
    } else {
      console.warn("Unknown utility class:", cls, "on", element);
    }
  });

  // Append generated styles without removing existing inline styles
  element.style.cssText += compiledStyle;
}

function runMasalaCSS() {
  const elements = document.querySelectorAll("*");
  elements.forEach(applyCSS);
}
console.table(masalaCSS);

runMasalaCSS();
