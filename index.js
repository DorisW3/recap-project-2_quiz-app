// phew… not a lot going on here. Please add some code!
console.clear();

const button = document.querySelector('[data-js="button"]');
const buttonSvg = document.querySelector('[data-js="button-svg"]');

button.addEventListener("click", () => {
  buttonSvg.classList.toggle("bookmark--active");
  buttonSvg.classList.toggle("bookmark");
});


