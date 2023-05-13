function zoom(img){
    var width = parseInt(img.getAttribute("width"));
    var height = parseInt(img.getAttribute("height"));
    img.setAttribute("width", width * 2)
    img.setAttribute("height", height * 2)
}

export { zoom };