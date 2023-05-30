
document.addEventListener('DOMContentLoaded', function() {
    const platfTech = document.querySelectorAll('.Modal_Selector');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close');
    function displayModal(event) {
        const platfTechIndex = Array.from(platfTech).findIndex((platforme) => platforme === event.currentTarget);
        modals[platfTechIndex].style.display = 'block';
        //Verification de l'id, si il correspond a LivingLab affiche les 150 premiers élément du text LivingLabText
        if(modals[platfTechIndex].id === 'LivingLab'){
            document.getElementById("LivingLabTextModal").innerHTML = truncateText("LivingLabText", 150);
        }
        if(modals[platfTechIndex].id === "EnvironnementHybridesConnectés"){
            document.getElementById("EnvironnementHybridesConnectésTextModal").innerHTML = truncateText("EnvironnementHybridesConnectésText", 150);
        }
    }

    function closeModal(event) {
        const modal = event.currentTarget.closest('.modal');
        modal.style.display = 'none';
    }

    platfTech.forEach(function (card) {
        card.addEventListener('click', displayModal);
    });

    closeBtns.forEach(function (btn) {
        btn.addEventListener('click', closeModal);
    });

    function truncateText(elementId, maxLength) {
        let element = document.getElementById(elementId);
        if (element) {
            let text = element.textContent.trim();
            if (text.length > maxLength) {
                return text.substring(0, maxLength) + "...";
            } else {
                return text;
            }
        }
        return "";
    }
});