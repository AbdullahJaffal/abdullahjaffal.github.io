// Literary Space JavaScript

// UI chrome only - the literary works themselves (titles, chapters, body
// text) are never translated, by design. See data-i18n usage in
// Literature.html: only interface labels carry the attribute.
const translations = {
    en: {
        dir: "ltr",
        pageTitle: "Literary Space | Abdullah Jaffal",
        metaDescription: "A literary space by Abdullah Jaffal — fiction excerpts and literary texts.",
        mainNavAria: "Main navigation",
        brandName: "Abdullah Jaffal",
        themeDark: "Dark Mode",
        themeLight: "Light Mode",
        backToSite: "Back to portfolio",
        writersCorner: "Writer's Corner",
        pageHeading: "Literary Space",
        fictionExcerpt: "Fiction Excerpt",
        minReadTemplate: "{n} min read",
        cityIstanbul: "Istanbul",
        readMore: "Read More",
        backToList: "Back to List",
        prevChapterLabel: "Previous Chapter",
        mainList: "Main List",
        nextChapterLabel: "Next Chapter",
        moreComingSoon: "More texts coming soon...",
        copyright: "© {year} Abdullah Jaffal. All texts protected and registered."
    },
    ar: {
        dir: "rtl",
        pageTitle: "مساحة أدبية | عبد الله جفَّال",
        metaDescription: "مساحة أدبية لعبد الله جفَّال — مقتطفات روائية ونصوص أدبية.",
        mainNavAria: "التنقل الرئيسي",
        brandName: "عبد الله جفَّال",
        themeDark: "الوضع الليلي",
        themeLight: "الوضع النهاري",
        backToSite: "العودة إلى الصفحة الرئيسية",
        writersCorner: "مدونة الكاتب",
        pageHeading: "مساحة أدبية",
        fictionExcerpt: "مقتطف روائي",
        minReadTemplate: "{n} دقائق قراءة",
        cityIstanbul: "إسطنبول",
        readMore: "اقرأ المزيد",
        backToList: "العودة للقائمة",
        prevChapterLabel: "الفصل السابق",
        mainList: "القائمة الرئيسية",
        nextChapterLabel: "الفصل التالي",
        moreComingSoon: "المزيد من النصوص قادمة قريباً...",
        copyright: "© {year} عبد الله جفَّال. جميع النصوص محمية ومسجلة."
    },
    tr: {
        dir: "ltr",
        pageTitle: "Edebiyat Alanı | Abdullah Jaffal",
        metaDescription: "Abdullah Jaffal'ın edebiyat alanı — roman alıntıları ve edebi metinler.",
        mainNavAria: "Ana gezinme",
        brandName: "Abdullah Jaffal",
        themeDark: "Karanlık Mod",
        themeLight: "Aydınlık Mod",
        backToSite: "Portfolyoya dön",
        writersCorner: "Yazarın Köşesi",
        pageHeading: "Edebiyat Alanı",
        fictionExcerpt: "Roman Alıntısı",
        minReadTemplate: "{n} dakika okuma",
        cityIstanbul: "İstanbul",
        readMore: "Devamını Oku",
        backToList: "Listeye Dön",
        prevChapterLabel: "Önceki Bölüm",
        mainList: "Ana Liste",
        nextChapterLabel: "Sonraki Bölüm",
        moreComingSoon: "Yakında daha fazla metin...",
        copyright: "© {year} Abdullah Jaffal. Tüm metinler korunmakta ve kayıtlıdır."
    }
};

let currentLang = localStorage.getItem('selectedLang') || 'ar';

function applyLanguage(lang) {
    const t = translations[lang] || translations.ar;
    const dir = t.dir || (lang === 'ar' ? 'rtl' : 'ltr');

    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.dir = dir;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (t[key]) el.setAttribute('aria-label', t[key]);
    });

    document.querySelectorAll('[data-i18n-minread]').forEach(el => {
        const n = el.getAttribute('data-i18n-minread');
        if (t.minReadTemplate) el.textContent = t.minReadTemplate.replace('{n}', n);
    });

    if (t.pageTitle) document.title = t.pageTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && t.metaDescription) {
        metaDescription.setAttribute('content', t.metaDescription);
    }

    const copyrightEl = document.querySelector('[data-i18n="copyright"]');
    if (copyrightEl && t.copyright) {
        copyrightEl.textContent = t.copyright.replace('{year}', new Date().getFullYear());
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    localStorage.setItem('selectedLang', lang);
    currentLang = lang;

    // The theme button's label depends on both language and dark/light state.
    updateThemeUI(document.documentElement.classList.contains('dark'));
}

document.addEventListener('DOMContentLoaded', () => {

    // 1. Elements Setup
    const literaryWorks = document.querySelectorAll('.literary-work');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeText = document.getElementById('theme-text');
    const themeIcon = themeToggleBtn.querySelector('i');
    const htmlElement = document.documentElement;
    const progressBar = document.getElementById('reading-progress');
    const langButtons = document.querySelectorAll('.lang-btn');

    // 2. State Variables
    let currentOpenWork = null;
    let scrollPos = 0;

    themeToggleBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        const isDark = htmlElement.classList.contains('dark');
        localStorage.setItem('literary-theme', isDark ? 'dark' : 'light');
        updateThemeUI(isDark);
    });

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) applyLanguage(lang);
        });
    });

    // The progress bar is meaningless to a screen reader while collapsed
    function setProgress(percent) {
        progressBar.style.width = percent + '%';
        progressBar.setAttribute('aria-hidden', percent > 0 ? 'false' : 'true');
    }

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
                const prevTitle = prevWork.querySelector('.work-title').innerText;
                const prevChapter = prevWork.querySelector('.work-chapter') ? prevWork.querySelector('.work-chapter').innerText : '';

                prevBtn.querySelector('.title-span').innerText = prevTitle;
                const prevChapterSpan = prevBtn.querySelector('.chapter-span');
                if (prevChapterSpan) prevChapterSpan.innerText = prevChapter;

                prevBtn.classList.remove('hidden');
                prevBtn.onclick = () => switchWork(prevWork);
            } else if (prevBtn) {
                prevBtn.classList.add('hidden');
            }

            if (nextWork && nextBtn) {
                const nextTitle = nextWork.querySelector('.work-title').innerText;
                const nextChapter = nextWork.querySelector('.work-chapter') ? nextWork.querySelector('.work-chapter').innerText : '';

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
        setProgress(0); // Reset reading progress bar
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

        setProgress(scrolled);
    });

    // Run Initialization - applyLanguage() also syncs the theme button label
    // (the dark/light class itself was already applied pre-paint in <head>).
    applyLanguage(currentLang);
});

// Shared between initTheme() and applyLanguage() - module scope so a
// language switch can refresh the button label without re-reading DOM state.
function updateThemeUI(isDark) {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeText = document.getElementById('theme-text');
    const themeIcon = themeToggleBtn.querySelector('i');
    const t = translations[currentLang] || translations.ar;

    themeToggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    // Explicit aria-label so the accessible name survives even when the
    // visible label text is hidden by the narrow-screen media query.
    themeToggleBtn.setAttribute('aria-label', isDark ? t.themeLight : t.themeDark);
    if (isDark) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeText.textContent = t.themeLight;
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeText.textContent = t.themeDark;
    }
}
