import { zoom, displayWord } from "./index.js";

function main() {
    let imgAnalyse = document.getElementById("img_analyse");
    zoom(imgAnalyse);
    imgAnalyse.addEventListener("click", function() {
        zoom(imgAnalyse);
    });
}

main();