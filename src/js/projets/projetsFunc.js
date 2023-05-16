function returnToTopButton(){
    setTimeout(function (){
        var TopButton = document.createElement("button");
        TopButton.setAttribute("id", "returnToTopButton");
        TopButton.setAttribute("onclick", "returnToTop()");
        TopButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>';
        //Creation du CSS du bouton
        TopButton.style.width = "25px";
        TopButton.style.height = "25px";
        TopButton.style.position = "fixed";
        TopButton.style.bottom = "20px";
        TopButton.style.right = "20px";
        TopButton.style.borderRadius = "50%";
        document.body.appendChild(TopButton);
    }, 2000);
}


function changeImage(image){
    //Verifie si le nom de l'image est img1 ou img2, sachant que chaque image est dans un dossier contenant le nom du projet
    if(image.src.includes("img1")){
        //console.log("img1 to img2");
        image.src = image.src.replace("img1", "img2");
    }
    else if(image.src.includes("img2")){
        //console.log("img2 to img1");
        image.src = image.src.replace("img2", "img1");
    }
    //console.log("Ni img1 ni img2");
}


function changeImageUnderMouse(){
    document.addEventListener('click', function(event){
        var elementClicked = event.target;
        //console.log(elementClicked);
        //Verifie si l'element cliqué est une image
        if(elementClicked.tagName == "IMG"){
            changeImage(elementClicked);
        }
    });
}

export {returnToTopButton, changeImageUnderMouse};