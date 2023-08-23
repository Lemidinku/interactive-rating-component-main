const thankYouCard = document.getElementById("thank-you-card");
const ratingCard = document.getElementById("rating-card");
const form = document.querySelector("form");

let selectedRating = 0;

function updateChecked() {
  const choices = document.getElementsByClassName("choice");

  for (const choice of choices) {
    let label = choice.querySelector("label");
    let radio = choice.querySelector("input");
    if (radio.checked) {
      label.classList.add("checked");
      selectedRating = radio.value;
    } else {
      label.classList.remove("checked");
    }
  }
}

const radioButtons = document.getElementsByClassName("radio-buttons")[0];
let ratingDisplay = document.getElementById("selected-value");

radioButtons.addEventListener("click", updateChecked);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ratingDisplay.innerHTML = selectedRating;
  ratingCard.style.display = "none";
  thankYouCard.style.display = "block";
});
