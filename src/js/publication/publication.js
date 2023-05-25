function search() {
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