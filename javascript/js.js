document.addEventListener('DOMContentLoaded', function() {

    const subscribeForm = document.querySelector('.subscribe-form');
    const loginForm = document.querySelector('.loginPage-form');

    const subscribeEmailInput = document.getElementById('s4-email');
    const subscribeNameInput = document.getElementById('s4-name');

    const loginEmailInput = document.getElementById('lp-email');
    const loginPasswordInput = document.getElementById('lp-password');
    const loginButton = document.getElementById('lp-button');

    // Subscribe event listener
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            clearErrors();

            let isValid = true;

            if (!validateEmail(subscribeEmailInput.value)) {
                showError(subscribeEmailInput, 'Please, enter a valid e-mail.');
                isValid = false;
            }

            if (subscribeNameInput.value.trim() === '') {
                showError(subscribeNameInput, 'Please, enter your name.');
                isValid = false;
            }

            if (isValid) {
                localStorage.setItem('userEmail', subscribeEmailInput.value);
                localStorage.setItem('userName', subscribeNameInput.value);
                alert("You'are subscribed!");
                subscribeForm.reset();
            }
        });
    }

    // Login event listener
    if (loginButton) {
        loginButton.addEventListener('click', function(e) {
            e.preventDefault();
            clearErrors();

            let isValid = true;

            if (!validateEmail(loginEmailInput.value)) {
                showError(loginEmailInput, 'Please, enter a valid e-mail.');
                isValid = false;
            }

            if (loginPasswordInput.value.trim() === '') {
                showError(loginPasswordInput, 'Please, enter your password.');
                isValid = false;
            }

            if (isValid) {
                window.location.href = 'kanbanPage.html';
            }
        });
    }

    // validating functions
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        input.parentNode.appendChild(errorDiv);
        input.classList.add('input-error');
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());
        
        const inputs = [subscribeEmailInput, subscribeNameInput, loginEmailInput, loginPasswordInput];
        inputs.forEach(input => {
            if (input) input.style.borderColor = '';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('kb-home');
    const loginButton = document.getElementById('login-button');

    if (homeLink) {
        homeLink.onclick = function(e) {
            e.preventDefault();
            window.location.href = 'index.html';
        };
    }

    if (loginButton) {
        loginButton.onclick = function() {
            window.location.href = 'loginPage.html';
        };
    }
});
