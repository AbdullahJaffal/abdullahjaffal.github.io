// Literary Space JavaScript

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Elements Setup
    const literaryWorks = document.querySelectorAll('.literary-work');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeText = document.getElementById('theme-text');
    const themeIcon = themeToggleBtn.querySelector('i');
    const htmlElement = document.documentElement;
    const progressBar = document.getElementById('reading-progress');
    
    // 2. State Variables
    let currentOpenWork = null;
    let scrollPos = 0;

    // 3. Theme Initialization (Dark/Light)
    function initTheme() {
        const savedTheme = localStorage.getItem('literary-theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
            updateThemeUI(true);
        } else {
            htmlElement.classList.remove('dark');
            updateThemeUI(false);
        }
    }

    function updateThemeUI(isDark) {
        if (isDark) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            themeText.textContent = 'الوضع النهاري';
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            themeText.textContent = 'الوضع الليلي';
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        const isDark = htmlElement.classList.contains('dark');
        localStorage.setItem('literary-theme', isDark ? 'dark' : 'light');
        updateThemeUI(isDark);
    });

    // 4. Open/Close Literary Works
    function openWork(workElement) {
        scrollPos = window.scrollY; // Save current scroll position
        
        // Hide all other works from view
        literaryWorks.forEach(w => {
            if (w !== workElement) {
                w.style.display = 'none';
            }
        });

        // Switch to full article view
        const preview = workElement.querySelector('.work-preview');
        const full = workElement.querySelector('.work-full');
        
        preview.style.display = 'none';
        full.style.display = 'block';
        
        // Scroll to top of the article smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
        currentOpenWork = workElement;
    }

    function closeWork() {
        if (!currentOpenWork) return;

        const preview = currentOpenWork.querySelector('.work-preview');
        const full = currentOpenWork.querySelector('.work-full');

        // Restore preview layout
        full.style.display = 'none';
        preview.style.display = 'block';

        // Display all works again
        literaryWorks.forEach(w => {
            w.style.display = 'block';
        });

        // Return to saved scroll position
        window.scrollTo({ top: scrollPos, behavior: 'auto' });
        currentOpenWork = null;
        progressBar.style.width = '0%'; // Reset reading progress bar
    }

    // Attach click events to open/close buttons
    literaryWorks.forEach(work => {
        const previewBtn = work.querySelector('.work-preview');
        const backBtn = work.querySelector('.back-to-list');

        previewBtn.addEventListener('click', () => openWork(work));
        if (backBtn) {
            backBtn.addEventListener('click', closeWork);
        }
    });

    // 5. Reading Progress Bar Tracking
    window.addEventListener('scroll', () => {
        if (!currentOpenWork) return;
        
        // Calculate scroll percentage only when an article is open
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        progressBar.style.width = scrolled + '%';
    });

    // Run Initialization
    initTheme();
});
