import { quintOut } from "svelte/easing";

// CONSTANTS
export const flyLeft = {
  easing: quintOut,
  delay: 100,
  duration: 300,
  opacity: 1,
  x: -window.innerWidth,
  y: 0,
};
export const flyRight = {
  ...flyLeft,
  x: window.innerWidth,
  y: 0,
};

export const flyTop = {
  ...flyLeft,
  x: 0,
  y: -window.innerHeight,
};

export const fade1 = { delay: 300, duration: 500 };
