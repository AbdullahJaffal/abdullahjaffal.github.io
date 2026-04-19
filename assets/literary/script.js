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

    function setupNavigation(workElement) {
        const worksArray = Array.from(literaryWorks);
        const currentIndex = worksArray.indexOf(workElement);

        const prevWork = worksArray[currentIndex - 1];
        const nextWork = worksArray[currentIndex + 1];

        const navContainer = workElement.querySelector('.article-navigation');
        
        if (navContainer) {
            const prevBtn = navContainer.querySelector('.prev-btn');
            const nextBtn = navContainer.querySelector('.next-btn');

            if (prevWork && prevBtn) {
                const prevTitle = prevWork.querySelector('h3').innerText;
                const prevChapter = prevWork.querySelector('h4') ? prevWork.querySelector('h4').innerText : '';
                
                prevBtn.querySelector('.title-span').innerText = prevTitle;
                const prevChapterSpan = prevBtn.querySelector('.chapter-span');
                if (prevChapterSpan) prevChapterSpan.innerText = prevChapter;
                
                prevBtn.classList.remove('hidden');
                prevBtn.onclick = () => switchWork(prevWork);
            } else if (prevBtn) {
                prevBtn.classList.add('hidden');
            }

            if (nextWork && nextBtn) {
                const nextTitle = nextWork.querySelector('h3').innerText;
                const nextChapter = nextWork.querySelector('h4') ? nextWork.querySelector('h4').innerText : '';
                
                nextBtn.querySelector('.title-span').innerText = nextTitle;
                const nextChapterSpan = nextBtn.querySelector('.chapter-span');
                if (nextChapterSpan) nextChapterSpan.innerText = nextChapter;
                
                nextBtn.classList.remove('hidden');
                nextBtn.onclick = () => switchWork(nextWork);
            } else if (nextBtn) {
                nextBtn.classList.add('hidden');
            }
        }
    }

    // الانتقال المباشر بين النصوص دون العودة للقائمة
    function switchWork(targetWork) {
        if (currentOpenWork) {
            // إخفاء النص الحالي وتهيئة شكله المبدئي
            currentOpenWork.querySelector('.work-full').style.display = 'none';
            currentOpenWork.querySelector('.work-preview').style.display = 'block';
            currentOpenWork.style.display = 'none';
        }
        // فتح النص المستهدف (نمرر false كي لا نقوم بتحديث نقطة سكرول القائمة الرئيسية)
        openWork(targetWork, false);
    }

    // 4. Open/Close Literary Works
    function openWork(workElement, saveScroll = true) {
        if (saveScroll) {
            scrollPos = window.scrollY; // Save current scroll position
        }
        
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
        workElement.style.display = 'block'; // Ensure the target is visible
        
        // Scroll to top of the article smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
        currentOpenWork = workElement;

        // تهيئة أزرار التنقل لهذا المقال
        setupNavigation(workElement);
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
        // إصلاح المشكلة: استخدام querySelectorAll لجلب جميع أزرار العودة للقائمة
        const backBtns = work.querySelectorAll('.back-to-list');

        previewBtn.addEventListener('click', () => openWork(work, true));
        
        // تفعيل كل أزرار العودة (العلوي والسفلي)
        backBtns.forEach(btn => {
            btn.addEventListener('click', closeWork);
        });
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
