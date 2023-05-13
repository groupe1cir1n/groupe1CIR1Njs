
console.log("Membres.js started");
let editMode = false;
document.addEventListener('DOMContentLoaded', function() {

    const editButton = document.createElement('button');
    editButton.innerText = 'Mode édition';

    editButton.style.position = 'fixed';
    editButton.style.top = '150px';
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
            if (confirmation === true) {console.log("Désactivation du mode édition");
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
                    addMemberButton.style.top = '200px';
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


    document.addEventListener('mouseover', function(e){
        const ayoub = document.getElementById('AyoubKarine');
        const bubbles = document.createElement('span');
        bubbles.style.left = e.offsetX + 'px';
        bubbles.style.top = e.offsetY + 'px';
        ayoub.appendChild(bubbles);
    });
});

function addMember() {
    console.log('Add Member')
    const newCard = document.createElement('div');
    newCard.classList.add('NewMembresJS', 'SmallCard');

    const cardIMG = document.createElement('img');
    cardIMG.setAttribute('src', '/src/img/membres/NewCard.jpg')
    cardIMG.className = 'cardImg';
    cardIMG.setAttribute('alt', 'Nom du membre')
    newCard.appendChild(cardIMG);

    const CardHover = document.createElement('div');
    CardHover.className = 'BigCardHover';

    const memberName = document.createElement('h2');
    memberName.innerText = 'Nom du membre';
    CardHover.appendChild(memberName);

    newCard.appendChild(CardHover);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Supprimer';
    deleteButton.id = 'deleteButton';
    deleteButton.addEventListener('click', function() {
        newCard.remove();
    });
    newCard.appendChild(deleteButton);

    const membersContainer = document.getElementById('NewMembres');
    membersContainer.appendChild(newCard);
}


console.log("Membres.js loaded");