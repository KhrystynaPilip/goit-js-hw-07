function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColorBtn = document.querySelector(".change-color");
const nameOfColor = document.querySelector(".color");
const body = document.querySelector('body')

changeColorBtn.addEventListener("click", setColor);

function setColor(event) {
  const selectedColor = getRandomHexColor(); 
  body.style.backgroundColor = selectedColor; 
  nameOfColor.textContent = selectedColor;
}