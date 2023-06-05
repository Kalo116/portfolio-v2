let emailSection = document.getElementById('mail')
let emailSectionTitle = document.querySelector('.email-title');
let form = document.querySelector('.mail-form');
let sendButton = document.querySelector('.send-button');
let colorIcon = document.querySelector('#color-changer');
let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('.nav-bar');

hamburger.onclick = function () {
    navbar.classList.toggle('active');
};

form.addEventListener('submit', function (event) {
    event.preventDefault();

    sendButton.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_s511vgq';

    console.log(form);

    emailjs.sendForm(serviceID, templateID, form)
        .then(() => {
            sendButton.value = 'Send Email';
            alert('Email was sent successfully!');
            window.location.href = "/index.html";
        }, (err) => {
            sendButton.value = 'There was a problem sending email. Please try again later...';
            alert(JSON.stringify(err));
        });
});

function onClickHandler() {
    if (colorIcon.className == 'fa-solid fa-sun') {
        colorIcon.className = 'fa-solid fa-moon';
        emailSection.style.backgroundColor = '#fff';
        emailSectionTitle.style.color = 'black';
    } else {
        colorIcon.className = 'fa-solid fa-sun';
        emailSection.style.backgroundColor = '#131313';
        emailSectionTitle.style.color = '#fff';
    };
};
