export function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const sideNav = document.querySelector('.side-nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        sideNav.classList.toggle('active');
    });

    // Close navigation when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !sideNav.contains(e.target)) {
            hamburger.classList.remove('active');
            sideNav.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.side-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
            hamburger.classList.remove('active');
            sideNav.classList.remove('active');
        });
    });
}