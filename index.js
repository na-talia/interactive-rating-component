const ratingPage = document.querySelector(".first-page");
const thankYouPage = document.querySelector(".second-page");
const ratingButtons = document.querySelector(".rating-buttons");
const selectedRating = document.getElementById("selected-rating");
const submitButton = document.getElementById("submit-btn");

ratingButtons.addEventListener("click", (e) => {
  let selectedNumber = e.target.innerText;
  selectedRating.innerText = selectedNumber;
 
  submitButton.addEventListener("click", () => {
    ratingPage.style.display = "none";
    //thankYouPage.className = ""; - removing all classes from the element
    thankYouPage.classList.remove("hidden"); //classList.remove() method removes an individual class/classes
  });
});
