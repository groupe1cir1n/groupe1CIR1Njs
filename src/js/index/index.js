const textElement = document.getElementById("who_we_are");
const words = textElement.textContent.trim().split(" ");
let currentIndex = 0;

function displayWord() {
  textElement.textContent = words[currentIndex];
  currentIndex++;
  if (currentIndex >= words.length) {
    currentIndex = 0;
  }
}



export { zoom, displayWord };