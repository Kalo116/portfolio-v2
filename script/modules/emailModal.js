import { initFormValidation } from './formValidation.js';

export function initEmailModal() {
    const modal = document.getElementById('email-modal');
    const emailIcon = document.querySelector('.email-icon');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.querySelector('.mail-form');

    emailIcon.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const validateForm = initFormValidation();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        const sendButton = document.querySelector('.send-button');
        const emailButtonText = document.querySelector('.email-button-text');
        const emailLoader = document.querySelector('.email-loader');

        sendButton.disabled = true;
        emailButtonText.style.display = 'none';
        emailLoader.style.display = 'block';

        const templateParams = {
            from_name: document.getElementById('fullName').value,
            email_id: document.getElementById('email_id').value,
            message: document.getElementById('message').value
        };

        emailjs.send('service_7y7f4si', 'template_s511vgq', templateParams)
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                form.reset();
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Oops... ' + JSON.stringify(error),
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            })
            .finally(() => {
                sendButton.disabled = false;
                emailButtonText.style.display = 'block';
                emailLoader.style.display = 'none';
                modal.style.display = 'none';
            });
    });
}