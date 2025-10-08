// ============================================================================
// Computer Engineering Department Website - JavaScript
// ============================================================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all interactive features
    initializeNavigation();
    initializeTabs();
    initializeForms();
    initializeScrollEffects();
    initializeMobileMenu();
    
});

// ============================================================================
// Navigation Functions
// ============================================================================

function initializeNavigation() {
    // Highlight active navigation item based on current page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initializeMobileMenu() {
    // Add mobile menu toggle if needed
    const navbar = document.querySelector('.navbar');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.style.display = 'none';
    
    // Add mobile menu functionality
    mobileMenuBtn.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('mobile-open');
    });
    
    // Add responsive behavior
    function checkMobile() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
            navbar.appendChild(mobileMenuBtn);
        } else {
            mobileMenuBtn.style.display = 'none';
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.remove('mobile-open');
        }
    }
    
    window.addEventListener('resize', checkMobile);
    checkMobile();
}

// ============================================================================
// Tab Functions
// ============================================================================

function initializeTabs() {
    // Initialize project tabs
    if (typeof showProjects === 'undefined') {
        window.showProjects = function(category) {
            // Hide all project sections
            const sections = document.querySelectorAll('.project-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Remove active class from all tab buttons
            const tabs = document.querySelectorAll('.tab-btn');
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected section
            const targetSection = document.getElementById(category);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Add active class to clicked tab
            event.target.classList.add('active');
        };
    }
    
    // Initialize publication tabs
    if (typeof showPublications === 'undefined') {
        window.showPublications = function(category) {
            // Hide all publication sections
            const sections = document.querySelectorAll('.publication-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Remove active class from all tab buttons
            const tabs = document.querySelectorAll('.tab-btn');
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected section
            const targetSection = document.getElementById(category);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Add active class to clicked tab
            event.target.classList.add('active');
        };
    }
    
    // Initialize event tabs
    if (typeof showEvents === 'undefined') {
        window.showEvents = function(category) {
            // Hide all event sections
            const sections = document.querySelectorAll('.event-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Remove active class from all tab buttons
            const tabs = document.querySelectorAll('.tab-btn');
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected section
            const targetSection = document.getElementById(category);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Add active class to clicked tab
            event.target.classList.add('active');
        };
    }
}

// ============================================================================
// Form Functions
// ============================================================================

function initializeForms() {
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Validate form
            if (validateContactForm(formObject)) {
                // Show success message
                showNotification('Thank you for your message! We will get back to you soon.', 'success');
                
                // Reset form
                this.reset();
                
                // In a real application, you would send the data to a server
                console.log('Form submitted:', formObject);
            }
        });
    }
    
    // Add real-time validation
    const requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');
    
    requiredFields.forEach(field => {
        field.addEventListener('blur', function() {
            validateField(this);
        });
        
        field.addEventListener('input', function() {
            // Remove error styling when user starts typing
            this.classList.remove('error');
        });
    });
}

function validateContactForm(data) {
    let isValid = true;
    const errors = [];
    
    // Validate required fields
    if (!data.firstName || data.firstName.trim() === '') {
        errors.push('First name is required');
        highlightField('firstName');
        isValid = false;
    }
    
    if (!data.lastName || data.lastName.trim() === '') {
        errors.push('Last name is required');
        highlightField('lastName');
        isValid = false;
    }
    
    if (!data.email || data.email.trim() === '') {
        errors.push('Email is required');
        highlightField('email');
        isValid = false;
    } else if (!isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
        highlightField('email');
        isValid = false;
    }
    
    if (!data.category || data.category === '') {
        errors.push('Please select an inquiry category');
        highlightField('category');
        isValid = false;
    }
    
    if (!data.subject || data.subject.trim() === '') {
        errors.push('Subject is required');
        highlightField('subject');
        isValid = false;
    }
    
    if (!data.message || data.message.trim() === '') {
        errors.push('Message is required');
        highlightField('message');
        isValid = false;
    }
    
    // Show errors if any
    if (!isValid) {
        showNotification('Please correct the following errors:\n' + errors.join('\n'), 'error');
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    // Check if required field is empty
    if (field.hasAttribute('required') && value === '') {
        isValid = false;
    }
    
    // Validate email format
    if (field.type === 'email' && value !== '' && !isValidEmail(value)) {
        isValid = false;
    }
    
    // Add/remove error styling
    if (!isValid) {
        field.classList.add('error');
    } else {
        field.classList.remove('error');
    }
    
    return isValid;
}

function highlightField(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.add('error');
        field.focus();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============================================================================
// Notification System
// ============================================================================

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.classList.add('notification', `notification-${type}`);
    
    // Set message
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        max-width: 400px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => hideNotification(notification));
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
}

function hideNotification(notification) {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// ============================================================================
// Scroll Effects
// ============================================================================

function initializeScrollEffects() {
    // Add scroll-to-top button
    createScrollToTopButton();
    
    // Add navbar background on scroll
    addNavbarScrollEffect();
    
    // Add fade-in animation for cards
    addFadeInAnimation();
}

function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.classList.add('scroll-to-top');
    scrollBtn.innerHTML = '↑';
    scrollBtn.title = 'Scroll to Top';
    
    // Add styles
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
    
    // Add click event
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    document.body.appendChild(scrollBtn);
}

function addNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    }
}

function addFadeInAnimation() {
    // Create intersection observer for fade-in effects
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const elementsToAnimate = document.querySelectorAll(`
        .highlight-card,
        .link-card,
        .activity-card,
        .achievement-category,
        .info-card,
        .objective-card,
        .faculty-card,
        .resource-card,
        .project-card,
        .event-card
    `);
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Add CSS for fade-in effect
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// ============================================================================
// Utility Functions
// ============================================================================

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

// Format date function
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return new Date(date).toLocaleDateString('en-US', options);
}

// ============================================================================
// Error Handling
// ============================================================================

// Global error handler
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // In production, you might want to send errors to a logging service
});

// ============================================================================
// Feature Detection and Polyfills
// ============================================================================

// Check for required features and provide fallbacks
function checkFeatureSupport() {
    // Check for IntersectionObserver support
    if (!window.IntersectionObserver) {
        console.warn('IntersectionObserver not supported. Animations disabled.');
        // Load polyfill or disable animations
    }
    
    // Check for CSS Grid support
    if (!CSS.supports('display', 'grid')) {
        console.warn('CSS Grid not supported. Layout may be affected.');
        // Apply flexbox fallbacks
    }
}

// Initialize feature detection
checkFeatureSupport();

// ============================================================================
// Additional Interactive Features
// ============================================================================

// Add loading states for dynamic content
function showLoading(element) {
    element.innerHTML = '<div class="loading">Loading...</div>';
    element.style.opacity = '0.6';
}

function hideLoading(element) {
    element.style.opacity = '1';
}

// Add search functionality (if needed in the future)
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function(e) {
            const query = e.target.value.toLowerCase();
            // Implement search logic here
            console.log('Searching for:', query);
        }, 300));
    }
}

// Print functionality
function printPage() {
    window.print();
}

// Social sharing (basic implementation)
function shareOnSocialMedia(platform, url, text) {
    let shareUrl = '';
    
    switch (platform) {
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Export functions that might be needed globally
window.departmentWebsite = {
    showProjects,
    showPublications,
    showEvents,
    showNotification,
    printPage,
    shareOnSocialMedia
};

console.log('Computer Engineering Department Website loaded successfully!');