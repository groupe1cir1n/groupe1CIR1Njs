import { zoom } from "./index.js";

function main() {
    var imgAnalyse = document.getElementById("img_analyse");
    zoom(imgAnalyse);
    imgAnalyse.addEventListener("mouseover", function() {
        zoom(imgAnalyse);
    });
}

main();