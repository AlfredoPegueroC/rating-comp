const btn = document.querySelector("#btn");
const card = document.querySelector(".rating__state");
const card2 = document.querySelector(".Tystate")
const rating = document.querySelector(".selected__rating")

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const ratingValue = document.querySelector("input[name ='radio']:checked");

  if (ratingValue === null) {
    return
  } else {
    card.style.display = "none";
    card2.style.display = "flex";
    rating.innerHTML = `You selected ${ratingValue.value} out of 5`;
  }
 
});
