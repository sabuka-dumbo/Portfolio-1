// Add this to your existing JavaScript file or create a new one

// Back to top functionality
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.scroll-div');
    if (window.scrollY > 300) {
        backToTop.classList.add('show-back-to-top');
    } else {
        backToTop.classList.remove('show-back-to-top');
    }
});

// Add click handler for back to top
const scrollDiv = document.querySelector('.scroll-div');
scrollDiv.addEventListener('click', function(e) {
    if (e.target === scrollDiv && scrollDiv.classList.contains('show-back-to-top')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Project card hover effects enhancement
const projectCards = document.querySelectorAll('.w-div1');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
        this.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
    });
});

// Gallery image click effect
const galleryImages = document.querySelectorAll('.w-pic');
galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// Video hover effect
const videos = document.querySelectorAll('video');
videos.forEach(video => {
    video.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 15px 35px rgba(90, 76, 172, 0.25)';
    });
    
    video.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 10px 30px rgba(90, 76, 172, 0.2)';
    });
});

// Add loading animation removal when content loads
window.addEventListener('load', function() {
    const mediaElements = document.querySelectorAll('.w-img1, .w-video1, .w-pic');
    mediaElements.forEach(el => {
        el.style.animation = 'none';
        el.style.background = '';
    });
});