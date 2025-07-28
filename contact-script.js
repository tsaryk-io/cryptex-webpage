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

// Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Simulate form submission (replace with actual submission logic)
            handleFormSubmission(formObject);
        });
    }
    
    // Add loading animation for form elements
    const formGroups = document.querySelectorAll('.form-group');
    const contactInfo = document.querySelector('.contact-info');
    const contactFormContainer = document.querySelector('.contact-form-container');
    
    // Animate contact info
    if (contactInfo) {
        contactInfo.style.opacity = '0';
        contactInfo.style.transform = 'translateX(-30px)';
        contactInfo.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            contactInfo.style.opacity = '1';
            contactInfo.style.transform = 'translateX(0)';
        }, 200);
    }
    
    // Animate form container
    if (contactFormContainer) {
        contactFormContainer.style.opacity = '0';
        contactFormContainer.style.transform = 'translateX(30px)';
        contactFormContainer.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            contactFormContainer.style.opacity = '1';
            contactFormContainer.style.transform = 'translateX(0)';
        }, 400);
    }
    
    // Animate form groups
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        group.style.transition = `all 0.5s ease ${(index * 0.1) + 0.6}s`;
        
        setTimeout(() => {
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
        }, (index * 100) + 600);
    });
});

function handleFormSubmission(formData) {
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = '#969696';
    
    // Simulate API call delay
    setTimeout(() => {
        // Create success message
        showSuccessMessage('Thank you for your message! We\'ll get back to you soon.');
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = '#000000';
        
        // Log form data (replace with actual submission logic)
        console.log('Form submitted:', formData);
        
    }, 1500);
}

function showSuccessMessage(message) {
    // Remove existing success message if any
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = message;
    successMessage.style.display = 'block';
    successMessage.style.opacity = '0';
    successMessage.style.transform = 'translateY(-10px)';
    successMessage.style.transition = 'all 0.3s ease';
    
    // Insert before the form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(successMessage, form);
    
    // Animate in
    setTimeout(() => {
        successMessage.style.opacity = '1';
        successMessage.style.transform = 'translateY(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        successMessage.style.opacity = '0';
        successMessage.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            if (successMessage.parentNode) {
                successMessage.parentNode.removeChild(successMessage);
            }
        }, 300);
    }, 5000);
}

// Form validation enhancements
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
});

function validateField(field) {
    const isValid = field.checkValidity();
    
    if (!isValid) {
        field.classList.add('error');
        field.style.borderColor = '#ff4444';
    } else {
        field.classList.remove('error');
        field.style.borderColor = '#00cc44';
    }
    
    return isValid;
}