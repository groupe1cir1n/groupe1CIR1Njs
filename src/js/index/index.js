
var imgAnalyse = document.getElementById("img_analyse");

function zoom(img){
    img.setAtribute("width", "width*2px")
    img.setAtribute("height", "height*2px")
}

addEventListener("mouseover", zoom(imgAnalyse));

