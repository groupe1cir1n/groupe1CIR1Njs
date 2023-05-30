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
  slideAndDisapear();
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

function slideAndDisapear(){
    //Quand tout le texte est apparu, il fait une translation vers la droite puis vers la gauche avant de revenir à sa position initiale, puis tout s’efface et le cycle recommence.
    const element = document.getElementById('who_we_are');   // Récupérer l'élément à animer
    setTimeout(() => {  // Mettre l'élément a gauche
        element.style.transform = 'translateX(-5%)';
    }, 5000);
    setTimeout(() => {  // Remettre l'élément à sa position initiale
        element.style.transform = 'translateX(0)';
    }, 5500);
    setTimeout(() => {  // Mettre l'élément a droite
        element.style.transform = 'translateX(5%)';
    }, 6000);
    setTimeout(() => {  // Remettre l'élément à sa position initiale
        element.style.transform = 'translateX(0)';
    }, 6500);
    setTimeout(() => {
        element.innerHTML = '';
    }, 7000);
    setTimeout(() => {
        displayWord();
    }, 7250);
}

// Appel de la fonction displayWord
displayWord();

// Appel de la fonction slide