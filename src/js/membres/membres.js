
let editMode = false;
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function () {

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


            if (editMode === true) {
                const confirmation = confirm('Voulez vous vraiment quitter le mode édition?');
                if (confirmation === true) {
                    console.log("Désactivation du mode édition");
                    editMode = false;
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
            else{
                const adminName = prompt('Entrez le nom du profil administrateur :');
                if (adminName === 'admin') {
                    const adminPwd = prompt('Entrez le mot de passe du profil administrateur :');
                    if (adminPwd === 'admin_pwd') {
                        editMode = true;
                        console.log('Mode édition activé !');
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
                    }
                } else {
                    alert('Nom de profil administrateur incorrect !');
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
    //Create the newMember
    const newCard = document.createElement('div');
    newCard.classList.add('NewMembresJS', 'SmallCard', 'Card');

    //Add the image of the newMember
    const cardIMG = document.createElement('img');
    cardIMG.setAttribute('src', '/src/img/membres/NewCard.jpg')
    cardIMG.className = 'cardImg';
    cardIMG.setAttribute('alt', 'Nom du membre')
    newCard.appendChild(cardIMG);


    //Add the hover of the newMember
    const CardHover = document.createElement('div');
    CardHover.className = 'BigCardHover';


    //Add the name of the newMember
    const memberName = document.createElement('h2');
    memberName.innerText = 'Nom du membre';
    CardHover.appendChild(memberName);

    newCard.appendChild(CardHover);

    //Add the delete button of the newMember
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Supprimer';
    deleteButton.id = 'deleteButton';
    deleteButton.addEventListener('click', function() {
        newCard.remove();
    });
    newCard.appendChild(deleteButton);

    //Add the modal of the newMember
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
    //Add the content of the modal
    modalContent.appendChild(closeBtn);

    //Add the image of the modal
    const modalIMG = document.createElement('img');
    modalIMG.setAttribute('src', '/src/img/membres/NewCard.jpg')
    modalIMG.className = 'cardImg';
    modalIMG.setAttribute('alt', 'Nom du membre')
    modalContent.appendChild(modalIMG);

    //Add the hover of the modal
    const modalHover = document.createElement('div');
    modalHover.className = 'BigCardHover';

    //Add the name of the modal
    const modalName = document.createElement('h2');
    modalName.innerText = 'Nom du membre';


    modalHover.appendChild(modalName);
    modalContent.appendChild(modalHover);
    modal.appendChild(modalContent);

    //Add the action when the newMember is clicked for the modal
    newCard.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    //Add the newMember to the page
    const membersContainer = document.getElementById('NewMembres');
    membersContainer.appendChild(newCard);
    membersContainer.appendChild(modal);
}


//Modal for the card

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