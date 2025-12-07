const addNumbers = (first, second) => {
  return first + second;
};

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#count-btn");
  const display = document.querySelector("#count-display");

  let count = 0;

  btn.addEventListener("click", () => {
    count = addNumbers(count, 1);
    display.textContent = count;
  });
});

if (typeof module !== "undefined") {
  module.exports = { addNumbers };
}
