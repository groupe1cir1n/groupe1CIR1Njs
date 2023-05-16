
let editMode = false;
//Verifie si toute la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    //Attends la fin du loader pour afficher le bouton
    setTimeout(function () {
        //Création du bouton Mode édition
        const editButton = document.createElement('button');
        editButton.innerText = 'Mode édition';

        editButton.style.position = 'fixed';
        editButton.style.top = '70px';
        editButton.style.right = '20px';
        editButton.style.padding = '10px';
        editButton.style.background = '#48435C';
        editButton.style.color = 'white';
        editButton.style.border = 'none';
        editButton.style.borderRadius = '5px';
        editButton.style.boxShadow = '1px 1px 5px grey';
        editButton.style.cursor = 'pointer';

        editButton.addEventListener('click', function() {
            //Verifie si le mode édition est activé si oui demande confirmation pour le désactiver
            if (editMode === true) {
                const confirmation = confirm('Voulez vous vraiment quitter le mode édition?');
                if (confirmation === true) {
                    console.log("Désactivation du mode édition");
                    editMode = false;
                    //Supprime le bouton ajouter un membre
                    editButton.style.background = '#48435C';
                    const removeMemberButton = document.getElementById('addMemberButton');
                    removeMemberButton.remove();
                    const MembersJS = document.querySelectorAll('.NewMembresJS')
                    MembersJS.forEach(function(element) {
                        const deleteButton = document.getElementById('deleteButton')
                        deleteButton.remove();
                    });

                }
            }
            //Si le mode édition n'est pas activé demande le nom et le mot de passe du profil administrateur
            else{
                const adminName = prompt('Entrez le nom du profil administrateur :');
                if (adminName === 'admin') {
                    const adminPwd = prompt('Entrez le mot de passe du profil administrateur :');
                    if (adminPwd === 'admin_pwd') {
                        editMode = true;
                        console.log('Mode édition activé !');
                        //Création du bouton ajouter un membre
                        editButton.style.background = 'red';
                        const addMemberButton = document.createElement('button');
                        addMemberButton.innerText = 'Ajouter un membre';
                        addMemberButton.id = 'addMemberButton';
                        addMemberButton.style.position = 'fixed';
                        addMemberButton.style.top = '120px';
                        addMemberButton.style.right = '20px';
                        addMemberButton.style.padding = '10px';
                        addMemberButton.style.background = '#48435C';
                        addMemberButton.style.color = 'white';
                        addMemberButton.style.border = 'none';
                        addMemberButton.style.borderRadius = '5px';
                        addMemberButton.style.boxShadow = '1px 1px 5px grey';
                        addMemberButton.style.cursor = 'pointer';
                        addMemberButton.addEventListener('click', function() {
                            addMember();
                        });
                        document.body.appendChild(addMemberButton);
                    } else {
                        alert('Mot de passe du profil administrateur incorrect !');
                        console.error('Mot de passe du profil administrateur incorrect !');
                    }
                } else {
                    alert('Nom de profil administrateur incorrect !');
                    console.error('Nom de profil administrateur incorrect !');
                }
            }
        });

        document.body.appendChild(editButton);
    }, 2000);

/*
    document.addEventListener('mouseover', function(e){
        const ayoub = document.getElementById('AyoubKarine');
        const bubbles = document.createElement('span');
        bubbles.style.left = e.offsetX + 'px';
        bubbles.style.top = e.offsetY + 'px';
        ayoub.appendChild(bubbles);
    });
    */
});

function addMember() {
    //Création de la nouvelle carte
    const newCard = document.createElement('div');
    newCard.classList.add('NewMembresJS', 'SmallCard', 'Card');

    //Ajout de l'image de la nouvelle carte
    const cardIMG = document.createElement('img');
    cardIMG.setAttribute('src', '/src/img/membres/NewCard.jpg')
    cardIMG.className = 'cardImg';
    cardIMG.setAttribute('alt', 'Nom du membre')
    newCard.appendChild(cardIMG);


    //Ajout de l'hover de la nouvelle carte
    const CardHover = document.createElement('div');
    CardHover.className = 'BigCardHover';


    //Ajout du nom de la nouvelle carte
    const memberName = document.createElement('h2');
    memberName.innerText = 'Nom du membre';
    CardHover.appendChild(memberName);

    newCard.appendChild(CardHover);

    //Ajoout du bouton supprimer
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Supprimer';
    deleteButton.id = 'deleteButton';
    deleteButton.addEventListener('click', function() {
        newCard.remove();
    });
    newCard.appendChild(deleteButton);

    //Ajout du modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modalContent.appendChild(closeBtn);

    //Ajout de l'image du modal
    const modalIMG = document.createElement('img');
    modalIMG.setAttribute('src', '/src/img/membres/NewCard.jpg')
    modalIMG.className = 'cardImg';
    modalIMG.setAttribute('alt', 'Nom du membre')
    modalContent.appendChild(modalIMG);

    //Ajout de l'hover du modal
    const modalHover = document.createElement('div');
    modalHover.className = 'BigCardHover';

    //Ajoout du nom du modal
    const modalName = document.createElement('h2');
    modalName.innerText = 'Nom du membre';


    modalHover.appendChild(modalName);
    modalContent.appendChild(modalHover);
    modal.appendChild(modalContent);

    //Ajoout de l'event click sur la nouvelle carte pour afficher le modal
    newCard.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    //Ajout de la nouvelle carte et du modal a la page
    const membersContainer = document.getElementById('NewMembres');
    membersContainer.appendChild(newCard);
    membersContainer.appendChild(modal);
}


//Modal pour la carte de chaque membre

const cards = document.querySelectorAll('.Card');
const modals = document.querySelectorAll('.modal');
const closeBtns = document.querySelectorAll('.close');

function displayModal(event) {
    const cardIndex = Array.from(cards).findIndex((card) => card === event.currentTarget);
    modals[cardIndex].style.display = 'block';
}

function closeModal(event) {
    const modal = event.currentTarget.closest('.modal');
    modal.style.display = 'none';
}

cards.forEach(function(card) {
    card.addEventListener('click', displayModal);
});

closeBtns.forEach(function(btn) {
    btn.addEventListener('click', closeModal);
});