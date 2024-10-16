$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });

    let hamberger = document.querySelector('.hamberger'); // Corrected spelling
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    if (hamberger) {
        hamberger.addEventListener('click', function() {
            console.log("Hamberger clicked!"); // Debugging statement
            mobileNav.classList.add('open');  
        });
    }

    if (times) {
        times.addEventListener('click', function() {
            console.log("Times clicked!"); // Debugging statement
            mobileNav.classList.remove('open');  
        });
    }
});