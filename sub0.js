function test(){

var dateOfBirthInput = document.getElementById("dateOfBirth").value;

    // Créer un objet Date pour la date de naissance saisie
    var dateOfBirth = new Date(dateOfBirthInput);

    // Créer un objet Date pour la date d'aujourd'hui
    var today = new Date();
    // Vérifier si la date de naissance est supérieure à la date d'aujourd'hui
    if (dateOfBirth > today) {
        // Afficher un message d'erreur dans une boîte de dialogue alert
        alert("La date de naissance ne peut pas être dans le futur.");
    }

}



document.addEventListener('DOMContentLoaded', function () {
    //const form = document.querySelector('form');
    const nomInput = document.getElementById('name');
    const prenomInput = document.getElementById('fn');
    const telInput = document.getElementById('tel');
    const bdateInput = document.getElementById('dateOfBirth');
    const passwordInput = document.getElementById('password');
    const emailInput = document.getElementById('mail');

    if (!prenomInput || !nomInput || !telInput || !bdateInput || !passwordInput || !emailInput) {
        console.error("One or more required elements not found.");
        return;
    }

    // Add keyup event listener to email input
    emailInput.addEventListener('keyup', function() {
        const emailValue = emailInput.value.trim();
        const isValidEmail = validateEmail(emailValue);
        if (isValidEmail) {
            showSuccess(emailInput);
        } else {
            showError(emailInput, 'Email invalide');
        }
    });

    function validateEmail(email) {
        // Regular expression to validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Check if the email matches the regular expression and contains "@esprit.tn"
        return emailRegex.test(email) && email.includes('@esprit.tn');
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        verif();
    });

    function verif() {
        let isValid = true;

        if (!/^[a-zA-Z]+$/.test(nomInput.value) || nomInput.value.length < 1) {
            showError(nomInput, 'Nom invalide');
            isValid = false;
        } else {
            showSuccess(nomInput);
        }

        if (prenomInput.value.length < 1) {
            showError(prenomInput, 'Prénom invalide');
            isValid = false;
        } else {
            showSuccess(prenomInput);
        }

        if (!/^\d{8}$/.test(telInput.value)) {
            showError(telInput, 'Numéro de téléphone invalide');
            isValid = false;
        } else {
            showSuccess(telInput);
        }

        const bdate = new Date(bdateInput.value);
        const today = new Date();
        if (isNaN(bdate) || bdate >= today) {
            showError(bdateInput, 'Date de naissance invalide');
            isValid = false;
        } else {
            showSuccess(bdateInput);
        }

        const passwordValue = passwordInput.value.trim();
        if (passwordValue === '') {
            showError(passwordInput, 'Le mot de passe est requis');
            isValid = false;
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(passwordValue)) {
            showError(passwordInput, 'Mot de passe invalide');
            isValid = false;
        } else {
            showSuccess(passwordInput);
        }

        if (isValid) {
            alert('Formulaire validé avec succès');
        }
        return isValid;
    }

    function showError(input, message) {
        input.classList.remove('success');
        input.classList.add('error');
        input.nextElementSibling.textContent = message;
        input.nextElementSibling.style.color = 'red';
    }

    function showSuccess(input) {
        input.classList.remove('error');
        input.classList.add('success');
        input.nextElementSibling.textContent = 'Valide';
        input.nextElementSibling.style.color = 'green';
    }
});
