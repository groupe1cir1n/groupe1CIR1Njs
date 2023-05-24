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

    // Vérifier s'il y a un élément <br> dans le texte


    setTimeout(() => {
      wordElement.classList.add('show');
    }, 100);
  });
}

displayWord();


