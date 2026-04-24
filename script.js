document.addEventListener("DOMContentLoaded", function() {
    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeSections = document.querySelectorAll('.fade-in-section');
    fadeSections.forEach(section => {
        observer.observe(section);
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            // If target doesn't exist, we just prevent default.
            // Since some CTAs have placeholder #apply links, we can add a small alert for demo purposes
            if (!targetElement) {
                alert('申し込みフォームへ遷移します（※デモ用）');
                return;
            }

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
