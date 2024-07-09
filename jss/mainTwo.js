let shoHollabTwoButton = document.querySelectorAll(".holab-button");
let showHollabTwo = document.getElementById("showHollab-2");
let overlay = document.getElementById("overlay");
showHollabTwo.style.display = "none";
shoHollabTwoButton.forEach((hollabTable) => {
  hollabTable.addEventListener("click", () => {
    showHollabTwo.style.display = "block";
    overlay.style.display = "block";
  });
});
overlay.addEventListener("click", () => {
  showHollabTwo.style.display = "none";
  overlay.style.display = "none";
});
