const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burger.onclick = function() {
    menu.classList.toggle('show-menu');
};


function updateTime() {
    setInterval(function() {var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var timeString = hours + ":" + minutes + ":" + seconds;
        document.getElementById("hour").innerHTML = timeString;
    });
}

function startTimer() {
    var startTime = Date.now();
    setInterval(function() {
        var elapsedTime = Date.now() - startTime;
        var seconds = Math.floor(elapsedTime / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var timerString = hours + ":" + minutes + ":" + seconds % 60;
        document.getElementById("chrono").innerHTML = "Temps écoulé sur la page: " + timerString;
    }, 1000);
}

document.addEventListener("click", function(event) {
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

const menuItems = document.querySelectorAll('.menu li');

menuItems.forEach((menuItem) => {
    const originalBgColor = menuItem.style.backgroundColor;
    console.log(originalBgColor)
    menuItem.addEventListener('mouseover', () => {
        const newBgColor = '';
        menuItem.style.backgroundColor = newBgColor;
        console.log(`L'ancienne couleur de fond était ${originalBgColor}, la nouvelle couleur est ${newBgColor}.`);
    });

    menuItem.addEventListener('mouseout', () => {
        menuItem.style.backgroundColor = originalBgColor;
    });
});

updateTime();
startTimer();

//Copy warning

document.addEventListener('copy', function(event) {
    console.log('Attention, le plagiat est interdit. Veuillez citer vos sources.');
});



// On sélectionne tous les éléments qui contiennent un numéro de téléphone
let phoneNumbers = document.querySelectorAll('a.telFooter');

phoneNumbers.forEach(function(phoneNumber) {
    console.log(phoneNumber);
    phoneNumber.addEventListener('copy', function(event) {
        let copiedText = event.clipboardData.getData('text/plain');
        console.log(copiedText);
        let input = prompt('Si vous voulez appeler ce numéro : ' + copiedText + ', entrez le de nouveau dans le champ ci-dessous puis validez');
        if (input === copiedText){
            console.log("Vous appelez ce numéro : " + copiedText);
            let audio = new Audio('/src/sound/sonnerie.mp3');
            audio.play();
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
