
lucide.createIcons();


const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');


mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});





const sections = document.querySelectorAll('.fade-in-section');


const observer = new IntersectionObserver((entries) => {
    
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
          
            entry.target.classList.add('is-visible');
        }
    });
}, { 
    
    threshold: 0.1 
});


sections.forEach(section => {
    observer.observe(section);
});
