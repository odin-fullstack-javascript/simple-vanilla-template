import { log } from "./utils.js";

export function updateHeading(element, text) {
  if (element) {
    element.textContent = text;
    log(`Heading updated to: "${text}"`);
  }
}

export function styleBodyBackground(color) {
  document.body.style.backgroundColor = color;
  log(`Body background set to: ${color}`);
}

export function resetBackground() {
  document.body.style.backgroundColor = "#fff";
}

export function loadCSS(path) {
  if (document.querySelector(`link[href="${path}"]`)) {
    console.warn(`CSS already loaded: ${path}`);
    return;
  }

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = path;
  document.head.appendChild(link);
  console.log(`CSS injected: ${path}`);
}

log("UI module loaded");
