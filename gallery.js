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








const images = [
    "images/gallery_1.jpg",
    "images/gallery_2.jpg",
    "images/gallery_3.jpg",
    "images/gallery_4.jpg",
    "images/gallery_5.jpg",
    "images/gallery_6.jpg"
];

let current = 0;

function openLightbox(index) {
    current = index;
    updateLightbox();
}

function updateLightbox() {
    document.getElementById('lightbox-img').src = images[current];

    const thumbs = document.getElementById('lightbox-thumbs');
    thumbs.innerHTML = '';
    images.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        if (i === current) img.classList.add('active');
        img.addEventListener('click', () => { current = i; updateLightbox(); });
        thumbs.appendChild(img);
    });
}

document.getElementById('prevBtn').addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    updateLightbox();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    current = (current + 1) % images.length;
    updateLightbox();
});

// Відкриття по кліку
document.querySelectorAll('[data-img]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        openLightbox(parseInt(link.dataset.index));
    });
});

// Клавіатура ← →
document.addEventListener('keydown', e => {
    const modal = document.getElementById('lightbox');
    if (!modal.classList.contains('show')) return;
    if (e.key === 'ArrowLeft')  { current = (current - 1 + images.length) % images.length; updateLightbox(); }
    if (e.key === 'ArrowRight') { current = (current + 1) % images.length; updateLightbox(); }
});


