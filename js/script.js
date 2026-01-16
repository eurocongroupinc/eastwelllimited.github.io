document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });

    // 2. Mobile Menu Toggle
    const toggle = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.nav-menu');
    
    if(toggle) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.innerHTML = menu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }

    // 3. Navbar Sticky Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
            navbar.style.padding = "10px 0";
        } else {
            navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
            navbar.style.padding = "15px 0";
        }
    });

    // 4. Product Category Filters (Simple Tab Implementation)
    const buttons = document.querySelectorAll('.category-btn');
    const categories = document.querySelectorAll('.product-category');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            categories.forEach(cat => {
                if (filter === 'all' || cat.id === filter) {
                    cat.style.display = 'block';
                    // Re-trigger AOS for hidden elements
                    setTimeout(() => AOS.refresh(), 100);
                } else {
                    cat.style.display = 'none';
                }
            });
        });
    });
});