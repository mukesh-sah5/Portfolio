document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and pages
        document.querySelectorAll('.nav-button').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked button and corresponding page
        button.classList.add('active');
        document.getElementById(button.dataset.page).classList.add('active');
    });
});

// Add hover effect to CTA button
document.querySelector('.cta-button').addEventListener('mouseover', function() {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 5px 15px rgba(125, 255, 179, 0.3)';
});

document.querySelector('.cta-button').addEventListener('mouseout', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = 'none';
    
   
});








document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});