function searchAndHighlight() {
    const searchInput = document.getElementById('text_entry');
    const searchTerm = searchInput.value.trim();
    const content = document.getElementById('content');
    const result = document.getElementById('result');
    
    // Effacer le contenu précédent
    result.innerHTML = '';
  
    // Rechercher et mettre en évidence le terme de recherche
    const regex = new RegExp(`\\b${searchTerm}\\b`, 'gi');
    const matches = content.innerHTML.match(regex);
    if (matches) {
      matches.forEach(match => {
        const matchElement = document.createElement('span');
        matchElement.innerText = match;
        matchElement.classList.add('highlight');
        result.appendChild(matchElement);
      });
    }
  
  