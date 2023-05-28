function search(event) {
  //ajout de la fonction entrée pour la recherche
  if(event.key === 'Enter'){
    const searchInput = document.getElementById('entry_text');
    const searchTerm = searchInput.value.trim().toLowerCase();  // on récupère le terme recherché en minuscule
    const paragraphs = document.querySelectorAll('.publi p');   // on prend tous les paragraphes

    for (let i = 0; i < paragraphs.length; i++) {  // boucle qui parcourt tous les paragraphes
      const paragraph = paragraphs[i];
      const paragraphText = paragraph.textContent.toLowerCase(); // on récupère le texte du paragraphe en minuscule

      if (paragraphText.includes(searchTerm)) {   //on cherche si le texte du paragraphe contient le terme recherché
        paragraph.style.display = 'block';      // si oui, on affiche le paragraphe
      } else {
        paragraph.style.display = 'none';    // sinon, on le cache
      }
    }
  }
  //ajout de la fonction click pour la recherche
  else{
    const searchInput = document.getElementById('entry_text');
    const searchTerm = searchInput.value.trim().toLowerCase();  // on récupère le terme recherché en minuscule
    const paragraphs = document.querySelectorAll('.publi p');   // on prend tous les paragraphes

    for (let i = 0; i < paragraphs.length; i++) {  // boucle qui parcourt tous les paragraphes
      const paragraph = paragraphs[i];
      const paragraphText = paragraph.textContent.toLowerCase(); // on récupère le texte du paragraphe en minuscule

      if (paragraphText.includes(searchTerm)) {   //on cherche si le texte du paragraphe contient le terme recherché
        paragraph.style.display = 'block';      // si oui, on affiche le paragraphe
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