function searchTitle(event) {
  //ajout de la fonction entrée pour la recherche
  if(event.key === 'Enter'){
    const searchInput = document.getElementById('entry_title');
    const searchTerm = searchInput.value.trim().toLowerCase();  // on récupère le terme recherché en minuscule
    const paragraphs = document.querySelectorAll('.publi p');   // on prend tous les paragraphes

    for (let i = 0; i < paragraphs.length; i++) {  // boucle qui parcourt tous les paragraphes
      const paragraph = paragraphs[i];
      const paragraphText = paragraph.textContent.toLowerCase(); // on récupère le texte du paragraphe en minuscule
      const titleSpan = paragraph.querySelector(".title"); // on recherche le span avec la classe "title" dans le paragraphe

      if (paragraphText.includes(searchTerm) && (titleSpan && titleSpan.textContent.toLowerCase().includes(searchTerm))) {
        paragraph.style.display = 'block';      // si le texte du paragraphe ou l'auteur correspond au terme recherché, on l'affiche
      } else {
        paragraph.style.display = 'none';    // sinon, on le cache
      }
    }
  }
  //ajout de la fonction click pour la recherche
  else{
    const searchInput = document.getElementById('entry_title');
    const searchTerm = searchInput.value.trim().toLowerCase();  // on récupère le terme recherché en minuscule
    const paragraphs = document.querySelectorAll('.publi p');   // on prend tous les paragraphes

    for (let i = 0; i < paragraphs.length; i++) {  // boucle qui parcourt tous les paragraphes
      const paragraph = paragraphs[i];
      const paragraphText = paragraph.textContent.toLowerCase(); // on récupère le texte du paragraphe en minuscule

      const titleSpan = paragraph.querySelector(".title"); // on recherche le span avec la classe "title" dans le paragraphe

      if (paragraphText.includes(searchTerm) && (titleSpan && titleSpan.textContent.toLowerCase().includes(searchTerm))) {
        paragraph.style.display = 'block';      // si le texte du paragraphe ou l'auteur correspond au terme recherché, on l'affiche
      } else {
        paragraph.style.display = 'none';    // sinon, on le cache
      }
    }
  }
}

function searchAuthor(event) {
  //ajout de la fonction entrée pour la recherche
  if(event.key === 'Enter'){
    const searchInput = document.getElementById('entry_author');
    const searchTerm = searchInput.value.trim().toLowerCase();  // on récupère le terme recherché en minuscule
    const paragraphs = document.querySelectorAll('.publi p');   // on prend tous les paragraphes

    for (let i = 0; i < paragraphs.length; i++) {  // boucle qui parcourt tous les paragraphes
      const paragraph = paragraphs[i];
      const paragraphText = paragraph.textContent.toLowerCase(); // on récupère le texte du paragraphe en minuscule
      const authorSpan = paragraph.querySelector(".author"); // on recherche le span avec la classe "author" dans le paragraphe

      if (paragraphText.includes(searchTerm) && (authorSpan && authorSpan.textContent.toLowerCase().includes(searchTerm))) {
        paragraph.style.display = 'block';      // si le texte du paragraphe ou l'auteur correspond au terme recherché, on l'affiche
      } else {
        paragraph.style.display = 'none';    // sinon, on le cache
      }
    }
  }
  //ajout de la fonction click pour la recherche
  else{
    const searchInput = document.getElementById('entry_author');
    const searchTerm = searchInput.value.trim().toLowerCase();  // on récupère le terme recherché en minuscule
    const paragraphs = document.querySelectorAll('.publi p');   // on prend tous les paragraphes

    for (let i = 0; i < paragraphs.length; i++) {  // boucle qui parcourt tous les paragraphes
      const paragraph = paragraphs[i];
      const paragraphText = paragraph.textContent.toLowerCase(); // on récupère le texte du paragraphe en minuscule

      const authorSpan = paragraph.querySelector(".author"); // on recherche le span avec la classe "author" dans le paragraphe

      if (paragraphText.includes(searchTerm) && (authorSpan && authorSpan.textContent.toLowerCase().includes(searchTerm))) {
        paragraph.style.display = 'block';      // si le texte du paragraphe ou l'auteur correspond au terme recherché, on l'affiche
      } else {
        paragraph.style.display = 'none';    // sinon, on le cache
      }
    }
  }
}

function searchDate(event) {
  //ajout de la fonction entrée pour la recherche
  if(event.key === 'Enter'){
    const searchInput = document.getElementById('entry_date');
    const searchTerm = searchInput.value.trim().toLowerCase();  // on récupère le terme recherché en minuscule
    const paragraphs = document.querySelectorAll('.publi p');   // on prend tous les paragraphes

    for (let i = 0; i < paragraphs.length; i++) {  // boucle qui parcourt tous les paragraphes
      const paragraph = paragraphs[i];
      const paragraphText = paragraph.textContent.toLowerCase(); // on récupère le texte du paragraphe en minuscule
      const dateSpan = paragraph.querySelector(".date"); // on recherche le span avec la classe "date" dans le paragraphe

      if (paragraphText.includes(searchTerm) && (dateSpan && dateSpan.textContent.toLowerCase().includes(searchTerm))) {
        paragraph.style.display = 'block';      // si le texte du paragraphe ou l'auteur correspond au terme recherché, on l'affiche
      } else {
        paragraph.style.display = 'none';    // sinon, on le cache
      }
    }
  }
  //ajout de la fonction click pour la recherche
  else{
    const searchInput = document.getElementById('entry_date');
    const searchTerm = searchInput.value.trim().toLowerCase();  // on récupère le terme recherché en minuscule
    const paragraphs = document.querySelectorAll('.publi p');   // on prend tous les paragraphes

    for (let i = 0; i < paragraphs.length; i++) {  // boucle qui parcourt tous les paragraphes
      const paragraph = paragraphs[i];
      const paragraphText = paragraph.textContent.toLowerCase(); // on récupère le texte du paragraphe en minuscule

      const dateSpan = paragraph.querySelector(".date"); // on recherche le span avec la classe "date" dans le paragraphe

      if (paragraphText.includes(searchTerm) && (dateSpan && dateSpan.textContent.toLowerCase().includes(searchTerm))) {
        paragraph.style.display = 'block';      // si le texte du paragraphe ou l'auteur correspond au terme recherché, on l'affiche
      } else {
        paragraph.style.display = 'none';    // sinon, on le cache
      }
    }
  }
}


function revue(){
  const searchTerm = 'pink square';   // recherche de 'pink square'
  const paragraphs = document.querySelectorAll('.publi p'); // on prend tous les paragraphes
  for (let i = 0; i < paragraphs.length; i++) { // boucle qui parcourt tous les paragraphes
    const paragraph = paragraphs[i];
    const images = paragraph.getElementsByTagName('img');  
    let isPinkSquare = false; // on initialise la variable à false  
    for (let j = 0; j < images.length; j++) {   // boucle qui parcourt toutes les images
      const image = images[j];
      const altText = image.getAttribute('alt').toLowerCase();  // on récupère le texte alternatif de l'image en minuscule
      if (altText.includes(searchTerm)) {     // on cherche si le texte alternatif de l'image contient le terme recherché
        isPinkSquare = true;
        break;
      }
    }  
    paragraph.style.display = isPinkSquare ? 'block' : 'none';    // si oui, on affiche le paragraphe, sinon on le cache
  }
}


// meme fonction que revue
function communication(){
  const searchTerm = 'blue square';
  const paragraphs = document.querySelectorAll('.publi p');
  for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];
    const images = paragraph.getElementsByTagName('img');  
    let isBlueSquare = false;
    for (let j = 0; j < images.length; j++) {
      const image = images[j];
      const altText = image.getAttribute('alt').toLowerCase();
      if (altText.includes(searchTerm)) {
        isBlueSquare = true;
        break;
      }
    }  
    paragraph.style.display = isBlueSquare ? 'block' : 'none';
  }
}


//function reset

function reset(){
  const paragraphs = document.querySelectorAll('.publi p');
  for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];
    paragraph.style.display = 'block';
  }
}


/*function allParameters(event){
  const paragraphs = document.querySelectorAll('.publi p');   // on prend tous les paragraphes
  for (let i = 0; i < paragraphs.length; i++) {  // boucle qui parcourt tous les paragraphes
    const paragraph = paragraphs[i];
    const paragraphText = paragraph.textContent.toLowerCase(); // on récupère le texte du paragraphe en minuscule

    if(document.getElementById('all').checked){
      if(paragraphText.searchDate(event) && paragraphText.searchAuthor(event) && paragraphText.searchTitle(event)){
        paragraph.style.display = 'block';      // si le texte du paragraphe ou l'auteur correspond au terme recherché, on l'affiche
      } else {
        paragraph.style.display = 'none';    // sinon, on le cache
      }
    }
    else if(document.getElementById('revue').checked){
      if(paragraphText.searchDate(event) && paragraphText.searchAuthor(event) && paragraphText.searchTitle(event)){
        paragraph.style.display = 'block';      // si le texte du paragraphe ou l'auteur correspond au terme recherché, on l'affiche
      } else {
        paragraph.style.display = 'none';    // sinon, on le cache
      }
    }
    else if(document.getElementById('communication').checked){
      if(paragraphText.searchDate(event) && paragraphText.searchAuthor(event) && paragraphText.searchTitle(event)){
        paragraph.style.display = 'block';      // si le texte du paragraphe ou l'auteur correspond au terme recherché, on l'affiche
      } else {
        paragraph.style.display = 'none';    // sinon, on le cache
      }
    }
  }
}*/


