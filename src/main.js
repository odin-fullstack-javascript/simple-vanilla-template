import {
  updateHeading,
  styleBodyBackground,
  loadCSS,
  resetBackground,
} from "./modules/ui.js";
import { log, getRandomColor } from "./modules/utils.js";

loadCSS("../styles/main.css");
loadCSS("../styles/button.css");

log("Main script started!");

const root = document.querySelector(".root");

let clickCount = 0;

root.innerHTML = `
  <div>
    <h2 class="welcome">Simple JS Template</h2>
    <h1 class="heading">HELLO FROM JAVASCRIPT</h1>
    <button class="count-button">Change Color</button>
    <button class="reset-button">reset</button>
  </div>
`;

const countButton = root.querySelector(".count-button");
const resetButton = root.querySelector(".reset-button");
const heading = root.querySelector(".heading");

countButton.addEventListener("click", () => {
  clickCount++;
  const message = `Clicked ${clickCount} times! Color Change!`;
  updateHeading(heading, message);

  const newBgColor = getRandomColor();
  styleBodyBackground(newBgColor);

  log("Button click processed.");
});

resetButton.addEventListener("click", resetBackground);

updateHeading(heading, "Hello, From JavaScript!");
