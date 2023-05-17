import { zoom, displayWord } from "./index.js";

function main() {
    const intervalId = setInterval(displayWord, 1000);
    var imgAnalyse = document.getElementById("img_analyse");
    zoom(imgAnalyse);
    imgAnalyse.addEventListener("click", function(){
        zoom(imgAnalyse);
    });
    alert("Hello World!");
}

main();