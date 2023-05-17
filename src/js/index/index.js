function displayWord() {
  const words = document.getElementById('who_we_are').textContent.trim().split(' ');

  words.forEach((word, index) => {
    const wordElement = document.createElement('span');
    wordElement.classList.add('word');
    wordElement.innerText = word;
    wordElement.style.transitionDelay = `${index * 100}ms`;
    document.getElementById('who_we_are').appendChild(wordElement);

    setTimeout(() => {
      wordElement.classList.add('show');
    }, 100);
  });
}

 
export { displayWord };