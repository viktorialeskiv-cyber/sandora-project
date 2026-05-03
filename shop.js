const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    navMenu.classList.toggle('open');
});

// Закрити меню при кліку на посилання
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('open');
        navMenu.classList.remove('open');
    });
});