let sections = Array.from(document.querySelectorAll('section'));
let h2s = Array.from(document.querySelectorAll('h2'));
let skillIcons = Array.from(document.querySelectorAll('.img-icon-wrapper i'));
let colorIcon = document.querySelector('#color-changer');
let emailIcon = document.querySelector('.email-icon');


function onClickHandler() {
    if (colorIcon.className == 'fa-solid fa-sun') {
        colorIcon.className = 'fa-solid fa-moon';

        sections
            .filter(el => el.id != 'contacts')
            .map(s => {
                s.style.backgroundColor = '#fff';
                s.style.color = '#131313';
            });

        h2s
            .filter(el => el.parentElement.id != 'contacts')
            .map(h2Element => h2Element.style.color = 'black');
        skillIcons.map(skillIcon => skillIcon.style.color = 'black');

    } else {
        colorIcon.className = 'fa-solid fa-sun';

        sections
            .filter(el => el.id != 'contacts')
            .map(s => {
                s.style.backgroundColor = '#131313';
                s.style.color = '#fff';
            });

        h2s
            .filter(el => el.parentElement.id != 'contacts')
            .map(h2Element => h2Element.style.color = '#fff');

        skillIcons.map(skillIcon => skillIcon.style.color = '#fff');

    };
};


const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav-bar');

hamburger.onclick = function () {
    navbar.classList.toggle('active');
};

emailIcon.addEventListener('click', (e) => {
    console.log(`clicked email`);
    console.log(`${e.value}`);
});