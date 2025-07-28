// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link, .nav-btn');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 100; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
});

// Add loading animation for hero section
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    const heroBtn = document.querySelector('.hero-btn');
    
    if (heroTitle && heroBtn) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        heroBtn.style.opacity = '0';
        heroBtn.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroTitle.style.transition = 'all 0.8s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 200);
        
        setTimeout(() => {
            heroBtn.style.transition = 'all 0.6s ease';
            heroBtn.style.opacity = '1';
            heroBtn.style.transform = 'translateY(0)';
        }, 500);
    }
});

// Architecture Card Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const clickableCards = document.querySelectorAll('.clickable-card');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.getElementById('modalClose');
    
    // Add click event to each clickable card
    clickableCards.forEach(card => {
        card.addEventListener('click', function() {
            const cardType = this.getAttribute('data-card');
            const hiddenDetail = this.querySelector('.hidden-detail');
            
            if (hiddenDetail) {
                // Clone the hidden detail content for the modal
                const modalContent = hiddenDetail.cloneNode(true);
                modalContent.style.display = 'flex';
                modalContent.style.flexDirection = 'row';
                modalContent.style.width = '100%';
                modalContent.style.height = '100%';
                modalContent.style.minHeight = '400px';
                
                // Clear previous content and add new content
                modalBody.innerHTML = '';
                modalBody.appendChild(modalContent);
                
                // Show modal
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });
    
    // Close modal functionality
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    
    // Close button click
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Click outside modal to close
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Escape key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
});

// Dataset Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleHeaders = document.querySelectorAll('.toggle-header');
    
    toggleHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const targetId = this.getAttribute('data-toggle');
            const targetContent = document.getElementById(targetId);
            const isActive = this.classList.contains('active');
            
            // Close all other toggles
            toggleHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove('active');
                    const otherId = otherHeader.getAttribute('data-toggle');
                    const otherContent = document.getElementById(otherId);
                    if (otherContent) {
                        otherContent.classList.remove('active');
                    }
                }
            });
            
            // Toggle current item
            if (isActive) {
                this.classList.remove('active');
                targetContent.classList.remove('active');
            } else {
                this.classList.add('active');
                targetContent.classList.add('active');
            }
        });
    });
});

// Work Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const workToggleHeaders = document.querySelectorAll('.work-toggle-header');
    
    workToggleHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const targetId = this.getAttribute('data-toggle');
            const targetContent = document.getElementById(targetId);
            const isActive = this.classList.contains('active');
            
            // Close all other toggles
            workToggleHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove('active');
                    const otherId = otherHeader.getAttribute('data-toggle');
                    const otherContent = document.getElementById(otherId);
                    if (otherContent) {
                        otherContent.classList.remove('active');
                    }
                }
            });
            
            // Toggle current item
            if (isActive) {
                this.classList.remove('active');
                targetContent.classList.remove('active');
            } else {
                this.classList.add('active');
                targetContent.classList.add('active');
            }
        });
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
    
    // Observe work items and FAQ items for staggered animation
    const workItems = document.querySelectorAll('.work-item');
    const faqItems = document.querySelectorAll('.faq-item');
    
    [...workItems, ...faqItems].forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});