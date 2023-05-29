function displayWord() {
  const words = document.getElementById('LabHidden').textContent.trim().split(' ');
  words.forEach((word, index) => {
    const wordElement = document.createElement('span');
    wordElement.classList.add('word');
    wordElement.innerText = word;
    wordElement.style.transitionDelay = `${index * 100}ms`;
    //Si le module d'index par 15 atteint 0, on ajoute un <br>
    if (index % 15 === 0) {
        const brElement = document.createElement('br');
        document.getElementById('who_we_are').appendChild(brElement);
    }
    document.getElementById('who_we_are').appendChild(wordElement);

    // Ajouter un espace après chaque mot, sauf pour le dernier mot
    if (index < words.length - 1) {
      const spaceElement = document.createElement('span');
      spaceElement.innerHTML = '&nbsp;';
      document.getElementById('who_we_are').appendChild(spaceElement);
    }

    setTimeout(() => {
      wordElement.classList.add('show');
    }, 1000);
  });
}

/*
function slide(element, distance, duration, delay) {
  element.style.transform = `translateX(-${distance}px)`;   // Déplacer l'élément vers la gauche
  element.style.transition = `transform ${duration}ms ease ${delay}ms`;   // Ajouter une transition

  setTimeout(() => {  // Remettre l'élément à sa position initiale
    element.style.transform = 'translateX(0)';  // Déplacer l'élément vers la gauche
  }, 0);
}
const element = document.getElementById('LabHidden');   // Récupérer l'élément à animer 
displayWord();
slide(element, 100, 500, 200); 
*/

function slide({ timing, draw, duration }) {
  const start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction passe de 0 à 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // Calculer l'état courant de l'animation
    const progress = timing(timeFraction);

    draw(progress); // Dessinez-le

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

function draw(progress) {
  const train = document.getElementById('train');
  train.style.left = progress + 'px';
}

// Appel de la fonction displayWord
displayWord();

setTimeout(() => {
  slide({
    timing: function(timeFraction) {
      return timeFraction; // Utilisation du timing linéaire par défaut
    },
    draw: draw,
    duration: 2000 // Durée de l'animation en millisecondes
  });
}, 1000); // Temps d'attente pour que l'animation des mots soit terminée (ajustez si nécessaire)


