/**
 * Jacob Rozansky - Neuro-Performance Coaching
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all modules
    initModeToggle();
    initMobileMenu();
    initSmoothScroll();
    initFormHandling();
    initAnimations();
});

/**
 * Parent/Student Mode Toggle
 * Switches the site between parent-focused and student-focused content
 */
function initModeToggle() {
    const modeSwitch = document.getElementById('mode-switch');
    const parentLabel = document.getElementById('parent-label');
    const studentLabel = document.getElementById('student-label');
    const heroParent = document.getElementById('hero-parent');
    const heroStudent = document.getElementById('hero-student');

    if (!modeSwitch) return;

    // Check for saved preference
    const savedMode = localStorage.getItem('siteMode');
    if (savedMode === 'student') {
        modeSwitch.checked = true;
        activateStudentMode();
    } else {
        activateParentMode();
    }

    // Handle toggle change
    modeSwitch.addEventListener('change', function() {
        if (this.checked) {
            activateStudentMode();
            localStorage.setItem('siteMode', 'student');
        } else {
            activateParentMode();
            localStorage.setItem('siteMode', 'parent');
        }
    });

    function activateParentMode() {
        document.body.classList.remove('student-mode');
        if (parentLabel) parentLabel.classList.add('active');
        if (studentLabel) studentLabel.classList.remove('active');
        if (heroParent) heroParent.style.display = 'flex';
        if (heroStudent) heroStudent.style.display = 'none';
    }

    function activateStudentMode() {
        document.body.classList.add('student-mode');
        if (studentLabel) studentLabel.classList.add('active');
        if (parentLabel) parentLabel.classList.remove('active');
        if (heroParent) heroParent.style.display = 'none';
        if (heroStudent) heroStudent.style.display = 'flex';
    }
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (!mobileMenuBtn || !navLinks) return;

    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');

        // Animate hamburger to X
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Form Handling
 */
function initFormHandling() {
    // Contact Form
    const contactForm = document.getElementById('main-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this, 'Thank you for your message! Jacob Rozansky will get back to you within 24-48 hours.');
        });
    }

    // Cube Challenge Form
    const cubeForm = document.getElementById('cube-form');
    if (cubeForm) {
        cubeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this, 'Check your email for the Cube Challenge from Jacob Rozansky!');
        });
    }
}

function handleFormSubmit(form, successMessage) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Create success message
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success';
        successDiv.style.cssText = `
            background: #10b981;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            text-align: center;
        `;
        successDiv.textContent = successMessage;

        // Replace form with success message
        form.innerHTML = '';
        form.appendChild(successDiv);
    }, 1000);
}

/**
 * Scroll Animations
 */
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate
    const animateElements = document.querySelectorAll(
        '.problem-card, .method-card, .why-card, .service-card, .testimonial-card, ' +
        '.ef-skill, .philosophy-card, .skill-card, .research-card, .faq-item'
    );

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Add CSS for animated state
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }
}

/**
 * Utility Functions
 */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Brain Node Labels (for hero section)
 */
document.querySelectorAll('.brain-node').forEach(node => {
    const label = node.getAttribute('data-label');
    if (label) {
        node.textContent = label;
    }
});

/**
 * Active Navigation Highlighting
 */
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', throttle(updateActiveNav, 100));
