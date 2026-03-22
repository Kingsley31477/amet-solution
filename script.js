// Navigation Background Shift on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '15px 8%';
        nav.style.background = '#020c1b';
    } else {
        nav.style.padding = '25px 8%';
        nav.style.background = 'rgba(10, 25, 47, 0.9)';
    }
});

// Form Submission & Validation
const contactForm = document.getElementById('contact-form');
const responseMsg = document.getElementById('form-response');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    
    // Simulate Success Message
    responseMsg.style.marginTop = "20px";
    responseMsg.style.color = "#ffd700";
    responseMsg.innerHTML = <i class="fas fa-check-circle"></i> Excellence, ${name}! Your inquiry has been sent to Kingsley. Expect a reply at the foundation.;
    
    contactForm.reset();
});

// Smooth Scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});