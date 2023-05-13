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

updateTime();
startTimer();