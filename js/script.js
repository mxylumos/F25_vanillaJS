const addNumbers = (first, second) => {
  return first + second;
};

const btn = document.querySelector("#count-btn");
const display = document.querySelector("#count-display");

let count = 0;

if (btn && display) {
  btn.addEventListener("click", () => {
    count = addNumbers(count, 1);
    display.textContent = count;
  });
}

if (typeof module !== "undefined") {
  module.exports = { addNumbers };
}
