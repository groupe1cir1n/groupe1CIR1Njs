//Définir les variables
const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burger.onclick = function() {
    //Afficher ou cache le menu
    menu.classList.toggle('show-menu');
    showMenuItems();
};


function updateTime() {
    //Afficher l'heure actuelle
    setInterval(function() {let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let timeString = hours + ":" + minutes + ":" + seconds;
        document.getElementById("hour").innerHTML = timeString;
    });
}

function startTimer() {
    //Afficher le temps écoulé sur la page
    let startTime = Date.now();
    setInterval(function() {
        let elapsedTime = Date.now() - startTime;
        let seconds = Math.floor(elapsedTime / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        // Si le temps écoulé est supérieur à 59 minutes on remet les minutes à 0
        if (minutes > 59) {
            minutes = minutes - 60;
        }
        let timerString = hours + ":" + minutes + ":" + seconds % 60;
        document.getElementById("chrono").innerHTML = "Temps écoulé sur la page: " + timerString;
    }, 1000);
}

document.addEventListener("click", function(event) {
    //Afficher une alerte si on clique sur le bouton "Membres"
    if (event.target.id === "membresNav"){
        const confirmation = confirm('Voulez vous vraiment aller sur la page membres?');
        if (confirmation === true) {
            window.location.href = "membres.html";
        }
        else {
            event.preventDefault(); // Empêche la navigation vers membres.html si la confirmation est annulée
        }
    }
});

//Récupérer les éléments du menu
const menuItems = document.querySelectorAll('.menu li');
const menuItemsElements = document.querySelectorAll('.menu li a');
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('mouseover', () => {
        let originalBgColor = getComputedStyle(menuItem).backgroundColor;
        let newBgColor = "rgb(49, 65, 83)";
        menuItem.style.backgroundColor = newBgColor;
        console.info("L'ancienne couleur de fond était " + originalBgColor + " et la nouvelle est " + newBgColor + ".")
    });
    menuItem.addEventListener('mouseout', () => {
        menuItem.style.backgroundColor = "";
    });
});

//Fonction pour l'annimation du menu
function showMenuItems() {
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('animate');
        }, index * 100); // Délai progressif de 100 ms entre chaque élément
    });
}

//Lance les fonctions updateTime et startTimer
updateTime();
startTimer();

//Copy warning

document.addEventListener('copy', function(event) {
    console.log('Attention, le plagiat est interdit. Veuillez citer vos sources.');
});



// On sélectionne tous les éléments qui contiennent un numéro de téléphone
let phoneNumbers = document.querySelectorAll('a.telFooter');

phoneNumbers.forEach(function(phoneNumber) {
    phoneNumber.addEventListener('copy', function(event) {
        // On récupère le numéro de téléphone
        const selection = document.getSelection();
        event.clipboardData.setData("text/plain", selection.toString());
        let copiedText = event.clipboardData.getData("text");
        // On demande à l'utilisateur de confirmer qu'il veut appeler ce numéro
        let input = prompt('Si vous voulez appeler ce numéro : ' + copiedText + ', entrez le de nouveau dans le champ ci-dessous puis validez');
        if (input === copiedText){ // Si l'utilisateur a entré le numéro de téléphone correctement
            console.log("Vous appelez ce numéro : " + copiedText);
            let audio = new Audio('/src/sound/sonnerie.mp3');
            audio.volume = 1;
            audio.play();
            // On arrête la sonnerie au bout de 5 secondes
            setTimeout(function() {
                audio.pause();
            }, 5000);
        }
    });
});


// Loader

document.getElementById('pageContent').classList.add('hidden');
window.addEventListener('load', function() {
    setTimeout(function () {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('loaderContainer').style.display = 'none';
        document.getElementById('pageContent').style.visibility = 'visible';
    }, 2000);
});
