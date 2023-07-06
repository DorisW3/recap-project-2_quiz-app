// phew… not a lot going on here. Please add some code!
console.clear();

// bookmark-toggle:

const button = document.querySelector('[data-js="button"]');
const buttonSvg = document.querySelector('[data-js="button-svg"]');

button.addEventListener("click", () => {
  buttonSvg.classList.toggle("bookmark--active");
  buttonSvg.classList.toggle("bookmark");
});

// show/hide answer:

const answerButton = document.querySelector('[data-js="answer-button"]');
const showAnswer = document.querySelector('[data-js="answer"]');

answerButton.addEventListener("click", () => {
  showAnswer.classList.toggle("card__answer--active");
  showAnswer.classList.toggle("card__answer--hidden");

  if (showAnswer.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }
});
