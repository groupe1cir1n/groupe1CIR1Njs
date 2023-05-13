function validateForm() {
    var prenomNom = document.getElementById("usrnInp").value;
    var email = document.getElementById("emailInp").value;
    var message = document.getElementById("textarea1Inp").value;

    var prenomNomRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var isPrenomNomValid = prenomNomRegex.test(prenomNom);
    var isEmailValid = emailRegex.test(email);
    var isMessageValid = message.length >= 20 && message.length <= 1000;
    //console.log(isPrenomNomValid, isEmailValid, isMessageValid);
    //console.log(prenomNom, email, message);

    var submitBtn = document.getElementById("submitBtn");
    var prenomNomError = document.getElementById("usrnError");
    var emailError = document.getElementById("emailError");
    var messageError = document.getElementById("textarea1Error");

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
    var random = Math.floor(Math.random() * 2);
    if (random === 0) {
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

console.log("contacts.js chargé !");