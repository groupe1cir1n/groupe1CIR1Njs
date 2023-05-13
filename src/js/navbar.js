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

    menuItem.addEventListener('mouseover', () => {
        const newBgColor = '#314153'; // Remplacez '#ccc' par la nouvelle couleur que vous souhaitez utiliser
        menuItem.style.backgroundColor = newBgColor;
        console.log(`L'ancienne couleur de fond était ${originalBgColor}, la nouvelle couleur est ${newBgColor}.`);
    });

    menuItem.addEventListener('mouseout', () => {
        menuItem.style.backgroundColor = originalBgColor;
    });
});

updateTime();
startTimer();