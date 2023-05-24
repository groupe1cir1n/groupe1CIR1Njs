function displayWord() {
  const words = document.getElementById('who_we_are').textContent.trim().split(' ');

  words.forEach((word, index) => {
    const wordElement = document.createElement('span');
    wordElement.classList.add('word');
    wordElement.innerText = word;
    wordElement.style.transitionDelay = `${index * 100}ms`;
    document.getElementById('who_we_are').appendChild(wordElement);

    // Ajouter un espace après chaque mot, sauf pour le dernier mot
    if (index < words.length - 1) {
      const spaceElement = document.createElement('span');
      spaceElement.innerHTML = '&nbsp;';
      document.getElementById('who_we_are').appendChild(spaceElement);
    }

    // Vérifier s'il y a un élément <br> dans le texte
    const nextElement = wordElement.nextElementSibling;
    if (nextElement && nextElement.tagName === 'br') {
      console.log('ca passe ici')
      const spaceElement = document.createElement('span');
      spaceElement.innerHTML = '&nbsp;';
      document.getElementById('who_we_are').appendChild(spaceElement);
      console.log('la aussi')
    }

    setTimeout(() => {
      wordElement.classList.add('show');
    }, 1000);
  });
}

displayWord();


