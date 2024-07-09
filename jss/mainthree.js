let changeImgs = document.getElementById("img");
const inptChange = document.getElementById("upload");
inptChange.addEventListener("change", () => {
  changeImgs.src = URL.createObjectURL(inptChange.files[0]);
});
let showHollabClick = document.querySelectorAll(".showHollabButton");
let showHollab = document.getElementById("showHollab");
let overlay = document.getElementById("overlay");
showHollabClick.forEach((hollbs) => {
  hollbs.addEventListener("click", () => {
    showHollab.style.display = "block";
    overlay.style.display = "block";
  });
});
overlay.addEventListener("click", () => {
    showHollab.style.display = "none";
    overlay.style.display = "none";
  });
  