const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});












      // Smooth scrolling and active class toggle
      function setActive(link) {
        const links = document.querySelectorAll('.carousel-links a');
        links.forEach((link) => link.classList.remove('active'));
        link.classList.add('active');
    }

    // Scroll smoothly when name is clicked
    document.querySelectorAll('.carousel-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });








/* big CAROUSEL CODE */

const carousel = document.querySelector('.caro');
const carouselItems = document.querySelectorAll('.caro-item2');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const totalItems = carouselItems.length;
const itemsToShow = 5; // Number of items to show at once
let currentIndex = itemsToShow; // Start after the cloned initial set

// Clone first and last few items for infinite loop effect
carouselItems.forEach(item => {
    carousel.appendChild(item.cloneNode(true)); // Clone to the end
    carousel.insertBefore(item.cloneNode(true), carousel.firstChild); // Clone to the start
});

// Adjust the carousel's initial position
carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;

prevBtn.addEventListener('click', () => {
    currentIndex--;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
    if (currentIndex === 0) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            currentIndex = totalItems;
            carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
        }, 500);
    }
});

nextBtn.addEventListener('click', () => {
    currentIndex++;
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
    if (currentIndex === totalItems * 5) {
        setTimeout(() => {
            carousel.style.transition = 'none';
            currentIndex = totalItems;
            carousel.style.transform = `translateX(-${currentIndex * (100 / itemsToShow)}%)`;
        }, 500);
    }
});
