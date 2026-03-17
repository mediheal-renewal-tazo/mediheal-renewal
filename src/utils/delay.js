// src/utils/delay.js
export const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));
