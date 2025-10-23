// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class when user scrolls down
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// MOBILE MENU TOGGLE
// ========================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for navbar height
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

const revealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('revealed');
        }
    });
};

// Initial check on page load
window.addEventListener('load', revealOnScroll);

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// ========================================
// TEAM MODAL
// ========================================

const teamMembers = document.querySelectorAll('.team-member');
const teamModal = document.getElementById('teamModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalRole = document.getElementById('modalRole');
const modalSpecialty = document.getElementById('modalSpecialty');
const modalBio = document.getElementById('modalBio');
const modalFocus = document.getElementById('modalFocus');
const modalCTA = document.getElementById('modalCTA');
const modalCTAText = document.getElementById('modalCTAText');

// WhatsApp reception number
const whatsappNumber = '59898213627';

// Open modal when clicking team member
teamMembers.forEach(member => {
    member.addEventListener('click', () => {
        const name = member.dataset.name;
        const role = member.dataset.role;
        const specialty = member.dataset.specialty;
        const image = member.dataset.image;
        const bio = member.dataset.bio;
        const focus = member.dataset.focus;
        
        // Populate modal with data
        modalImage.style.backgroundImage = `url('${image}')`;
        modalName.textContent = name;
        modalRole.textContent = role;
        modalSpecialty.textContent = specialty;
        modalBio.innerHTML = bio;
        modalFocus.innerHTML = focus;
        
        // Update CTA button
        modalCTAText.textContent = `Atender con ${name.split(' ').slice(1).join(' ')}`;
        const whatsappMessage = `Hola, Quiero atenderme con ${name}`;
        modalCTA.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        modalCTA.target = '_blank';
        
        // Show modal
        teamModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
const closeModal = () => {
    teamModal.classList.remove('active');
    document.body.style.overflow = 'auto';
};

modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside
teamModal.addEventListener('click', (e) => {
    if (e.target === teamModal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && teamModal.classList.contains('active')) {
        closeModal();
    }
});

// ========================================
// PARALLAX EFFECT (Optional Enhancement)
// ========================================

const parallaxElements = document.querySelectorAll('.hero, .cta-section');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        element.style.backgroundPositionY = `${yPos}px`;
    });
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy functions
const efficientScroll = debounce(() => {
    revealOnScroll();
});

window.addEventListener('scroll', efficientScroll);

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================

// Keyboard navigation for mobile menu
navToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navToggle.click();
    }
});

// Focus management
const focusableElements = document.querySelectorAll(
    'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
);

// Trap focus in mobile menu when open
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.focus();
    }
});

// ========================================
// LOADING OPTIMIZATION
// ========================================

// Lazy load images (if using img tags instead of background-image)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// CONSOLE MESSAGE (Optional)
// ========================================

console.log('%c🏥 Welcome to Avant Health & Wellness', 'font-size: 16px; font-weight: bold; color: #c9a55c;');
console.log('%cTransform your health today.', 'font-size: 12px; color: #b0b0b0;');
