function validateForm() {
    //Récupérer les valeurs des champs
    var prenomNom = document.getElementById("usrnInp").value;
    var email = document.getElementById("emailInp").value;
    var message = document.getElementById("textarea1Inp").value;

    //Définir les expressions régulières
    var prenomNomRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Tester les valeurs des champs avec les expressions régulières
    var isPrenomNomValid = prenomNomRegex.test(prenomNom);
    var isEmailValid = emailRegex.test(email);
    var isMessageValid = message.length >= 20 && message.length <= 1000;
    //console.log(isPrenomNomValid, isEmailValid, isMessageValid);
    //console.log(prenomNom, email, message);

    //Récupérer les éléments d'erreur
    var submitBtn = document.getElementById("submitBtn");
    var prenomNomError = document.getElementById("usrnError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("textarea1Error");


    //Afficher les messages d'erreur
    if (isPrenomNomValid) {
        prenomNomError.innerHTML = "";
    } else {
        prenomNomError.innerHTML = "Le prénom et le nom doivent contenir 2 mots séparés d'un espace";
    }

    if (isEmailValid) {
        emailError.innerHTML = "";
    } else {
        emailError.innerHTML = "L'adresse email doit être valide";
    }

    if (isMessageValid) {
        messageError.innerHTML = "";
    } else {
        messageError.innerHTML = "Le message doit contenir entre 20 et 1000 caractères";
    }

    if (isPrenomNomValid && isEmailValid && isMessageValid) {
        submitBtn.disabled = false;
        submitBtn.classList.remove("btn-notvalid");
    } else {
        submitBtn.disabled = true;
        //Edit css for the button to be gray
        submitBtn.classList.add("btn-notvalid");
    }
}


document.getElementById("submitBtn").addEventListener("click", function() {
    //Pile ou face
    let pileOuFace = prompt("Pile ou face ?");
    let result = 0;
    if (pileOuFace.toLowerCase() === "pile") {
        result = 0;
    }
    else if(pileOuFace.toLowerCase() === "face"){
        result = 1;
    }
    else{
        alert("Vous n'avez pas entré pile ou face ! Vous devez tous recommencer !")
        console.error("Ni pile, ni face !");
        window.location.reload();
    }
    let random = Math.floor(Math.random() * 2);
    if (random === result) {
        alert("Vous avez gagné ! Votre message a bien été envoyé !");
    }
    else{
        alert("Ratio! Vous avez perdu! Vous devez tous recommencer!")
        window.location.reload();
    }
});

// appeler la fonction validateForm à chaque fois qu'un champ est modifié
document.getElementById("usrnInp").addEventListener("input", validateForm);
document.getElementById("emailInp").addEventListener("input", validateForm);
document.getElementById("textarea1Inp").addEventListener("input", validateForm);

//Appeler la fonction validateForm au chargement de la page
validateForm();

console.log("contacts.js chargé !");
