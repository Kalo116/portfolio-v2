export function initFormValidation() {
    const form = document.querySelector('.mail-form');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email_id');
    const messageInput = document.getElementById('message');

    const addError = (input, message) => {
        const existingError = input.parentElement.querySelector('.error-message');
        if (!existingError) {
            const errorElement = document.createElement('span');
            errorElement.className = 'error-message';
            errorElement.textContent = message;
            input.parentElement.appendChild(errorElement);
        }
    };

    const removeError = (input) => {
        const errorElement = input.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateInput = (input, validationFn, errorMessage) => {
        if (!validationFn(input.value.trim())) {
            addError(input, errorMessage);
            return false;
        }
        removeError(input);
        return true;
    };

    fullNameInput.addEventListener('input', () => validateInput(fullNameInput, value => value !== '', 'Name is required'));
    emailInput.addEventListener('input', () => validateInput(emailInput, validateEmail, 'Please enter a valid email'));
    messageInput.addEventListener('input', () => validateInput(messageInput, value => value !== '', 'Message is required'));

    return () => {
        let isValid = true;
        isValid = validateInput(fullNameInput, value => value !== '', 'Name is required') && isValid;
        isValid = validateInput(emailInput, validateEmail, 'Please enter a valid email') && isValid;
        isValid = validateInput(messageInput, value => value !== '', 'Message is required') && isValid;
        return isValid;
    };
}