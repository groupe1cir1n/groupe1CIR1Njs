function zoom(img){
    var width = parseInt(img.getAttribute("width"));
    var height = parseInt(img.getAttribute("height"));
    img.style.setAttribute("width", width * 2);
    console.log(img.style);
    img.style.setAttribute("height", height * 2);
}

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