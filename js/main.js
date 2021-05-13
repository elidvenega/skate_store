const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav_links');
const navLinks = document.querySelectorAll('.nav_links li')

const navSlide = function () {
    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7 + 0}s`
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}
navSlide();