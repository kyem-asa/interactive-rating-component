let clickedRating = "";

document
  .querySelector(".rating__submissions")
  .addEventListener("mouseover", function () {
    document
      .getElementById("rating-one")
      .addEventListener("click", function () {
        clickedRating = "1";
      });
    document
      .getElementById("rating-two")
      .addEventListener("click", function () {
        clickedRating = "2";
      });
    document
      .getElementById("rating-three")
      .addEventListener("click", function () {
        clickedRating = "3";
      });
    document
      .getElementById("rating-four")
      .addEventListener("click", function () {
        clickedRating = "4";
      });
    document
      .getElementById("rating-five")
      .addEventListener("click", function () {
        clickedRating = "5";
      });
  });

document.querySelector(".rating__btn").addEventListener("click", function () {
  document.querySelector(".rating").style.display = "none";
  document.querySelector(".submitted-state").style.display = "flex";

  document.querySelector(
    ".submitted-state__selection"
  ).textContent = `You rated ${clickedRating} out of 5`;
});
