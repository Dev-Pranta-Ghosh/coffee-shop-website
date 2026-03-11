// ==========================================
// MOBILE MENU TOGGLE FUNCTIONALITY
// ==========================================

// Select the menu button and navbar elements from the DOM
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

// Add click event listener to toggle mobile menu
menu.onclick = () => {
    // Toggle the 'fa-times' class on the menu button (hamburger to X transformation)
    menu.classList.toggle('fa-times');
    
    // Toggle the 'active' class on navbar to show/hide the menu
    navbar.classList.toggle('active');
};

// ==========================================
// SCROLL BEHAVIOR - Close menu on scroll
// ==========================================

// Add scroll event listener to window
window.onscroll = () => {
    // Remove the 'fa-times' class when user scrolls (close hamburger icon)
    menu.classList.remove('fa-times');
    
    // Remove the 'active' class from navbar to hide the menu
    navbar.classList.remove('active');
};

// ==========================================
// IMAGE SLIDER FUNCTIONALITY
// ==========================================

// Select all images in the image-slider container
document.querySelectorAll('.image-slider img').forEach(images => {
    // Add click event listener to each slider image
    images.onclick = () => {
        // Get the source attribute of the clicked image
        var src = images.getAttribute('src');
        
        // Update the main home image source with the clicked image
        document.querySelector('.main-home-image').src = src;
    };
});

// ==========================================
// SWIPER REVIEW SLIDER INITIALIZATION
// ==========================================

// Initialize Swiper for the review/testimonial slider
var swiper = new Swiper(".review-slider", {
    // Space between slides in pixels
    spaceBetween: 20,
    
    // Pagination configuration
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Allow clicking on pagination dots
    },
    
    // Enable continuous loop mode
    loop: true,
    
    // Show grab cursor for better UX
    grabCursor: true,
    
    // Autoplay configuration
    autoplay: {
        delay: 7500, // 7.5 seconds between slides
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    
    // Responsive breakpoints for different screen sizes
    breakpoints: {
        // Mobile devices (0px and above)
        0: {
            slidesPerView: 1
        },
        // Tablets (768px and above)
        768: {
            slidesPerView: 2
        }
    },
});
