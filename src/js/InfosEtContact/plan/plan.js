document.addEventListener('DOMContentLoaded', function() {
    //Partie GPS

    // Coordonnées GPS de l'ISEN Brest
    const isenBrestCoords = { lat: 48.406824, lng: -4.495341 };
    const isenNantesCoords = { lat: 47.274389, lng: -1.505243};
    const isenRennesCoords = { lat: 48.127666, lng: -1.691556};
    const isenCaenCoords = { lat: 49.182666, lng: -0.370666};

    // Fonction pour calculer la distance entre deux coordonnées géographiques
    function calculateDistanceBrest(position) {
        let userCoords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        // Calcul de la distance en kilomètres
        let distanceBrest = getDistanceFromLatLonInKm(userCoords, isenBrestCoords);
        // Affichage de la distance
        let distanceBrestElement = document.getElementById("distanceBrest");
        distanceBrestElement.textContent =
            "Distance entre votre position et l'ISEN Brest : " + distanceBrest + " km";
    }

    function calculateDistanceNantes(position){
        let userCoords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        let distanceNantes = getDistanceFromLatLonInKm(userCoords, isenNantesCoords);
        let distanceNantesElement = document.getElementById("distanceNantes");
        distanceNantesElement.textContent =
            "Distance entre votre position et l'ISEN Nantes : " + distanceNantes + " km";
    }

    function calculateDistanceRennes(position){
        let userCoords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        let distanceRennes = getDistanceFromLatLonInKm(userCoords, isenRennesCoords);
        let distanceRennesElement = document.getElementById("distanceRennes");
        distanceRennesElement.textContent =
            "Distance entre votre position et l'ISEN Rennes : " + distanceRennes + " km";
    }

    function calculateDistanceCaen(position){
        let userCoords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        let distanceCaen = getDistanceFromLatLonInKm(userCoords, isenCaenCoords);
        let distanceCaenElement = document.getElementById("distanceCaen");
        distanceCaenElement.textContent =
            "Distance entre votre position et l'ISEN Caen : " + distanceCaen + " km";
    }

    // Fonction pour calculer la distance entre deux coordonnées géographiques en kilomètres
    function getDistanceFromLatLonInKm(coords1, coords2) {
        let earthRadius = 6371; // Rayon de la Terre en kilomètres
        let dLat = deg2rad(coords2.lat - coords1.lat);
        let dLon = deg2rad(coords2.lng - coords1.lng);
        let a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(coords1.lat)) *
            Math.cos(deg2rad(coords2.lat)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let distance = earthRadius * c;
        return distance.toFixed(2);
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    let carteBrest = document.getElementById("distanceBrestButton");
    carteBrest.addEventListener("click", function() {
        // Obtention de la position de l'utilisateur
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    calculateDistanceBrest(position);
                },
                function(error) {
                    if (error.code === error.PERMISSION_DENIED) {
                        alert("Vous avez refusé la géolocalisation.");
                    }
                });
        }
        else {
            alert("La géolocalisation n'est pas supportée par votre navigateur.");
        }
    });

    let carteNantes = document.getElementById("distanceNantesButton");
    carteNantes.addEventListener("click", function() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    calculateDistanceNantes(position);
                },
                function(error) {
                    if (error.code === error.PERMISSION_DENIED) {
                        alert("Vous avez refusé la géolocalisation.");
                    }
                });
        }
        else {
            alert("La géolocalisation n'est pas supportée par votre navigateur.");
        }
    });

    let carteRennes = document.getElementById("distanceRennesButton");
    carteRennes.addEventListener("click", function() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    calculateDistanceRennes(position);
                },
                function(error) {
                    if (error.code === error.PERMISSION_DENIED) {
                        alert("Vous avez refusé la géolocalisation.");
                    }
                });
        }
        else {
            alert("La géolocalisation n'est pas supportée par votre navigateur.");
        }
    });

    let carteCaen = document.getElementById("distanceCaenButton");
    carteCaen.addEventListener("click", function() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
                    calculateDistanceCaen(position);
                },
                function(error) {
                    if (error.code === error.PERMISSION_DENIED) {
                        alert("Vous avez refusé la géolocalisation.");
                    }
                });
        }
        else {
            alert("La géolocalisation n'est pas supportée par votre navigateur.");
        }
    });

    //Partie Météo

    // Définir votre clé d'API
    const apiKey = '03be1ec9a991156f495f1430c1ad67e0';

    // Récupérer les données météorologiques pour chaque ville
    function getWeather(city, elementId) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const weatherData = {
                    temperature: data.main.temp,
                    condition: data.weather[0].description
                };

                document.getElementById(elementId).innerHTML = `Météo à ${city} : ${weatherData.temperature}°C, ${weatherData.condition}`;
            })
            .catch(error => {
                console.log('Une erreur s\'est produite :', error);
            });
    }

    // Appeler la fonction pour chaque ville
    getWeather('Brest', 'weatherWidgetBrest');
    getWeather('Nantes', 'weatherWidgetNantes');
    getWeather('Rennes', 'weatherWidgetRennes');
    getWeather('Caen', 'weatherWidgetCaen');
});

