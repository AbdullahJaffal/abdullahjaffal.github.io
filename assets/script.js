// Translations object
const translations = {
    en: {
        dir: "ltr",
        name: "Abdullah Jaffal",
        subtitle: "A personal space under construction",
        footer: "&copy; 2026 Abdullah Jaffal. All rights reserved."
    },
    ar: {
        dir: "rtl",
        name: "عبد الله جفاّل",
        subtitle: "مساحة شخصية، قيد الإنشاء",
        footer: "&copy; 2026 عبد الله جفال. جميع الحقوق محفوظة."
    },
    tr: {
        dir: "ltr",
        name: "Abdullah Jaffal",
        subtitle: "Kişisel bir alan, geliştirilme sürecinde",
        footer: "&copy; 2026 Abdullah Jaffal. Tüm hakları saklıdır."
    },
    ru: {
        dir: "ltr",
        name: "Абдулла Джаффал",
        subtitle: "Личное пространство, в процессе создания",
        footer: "&copy; 2026 Абдулла Джаффал. Все права защищены."
    }
};

// DOM Elements
const bodyElement = document.body;
const nameElement = document.getElementById('name');
const subtitleElement = document.getElementById('subtitle');
const footerElement = document.getElementById('footer-text');
const langButtons = document.querySelectorAll('.lang-btn');

// Current language
let currentLang = localStorage.getItem('selectedLang') || 'en';

// Function to apply language
function applyLanguage(lang) {
    // Update body direction
    bodyElement.dir = translations[lang].dir;
    
    // Add Arabic class for specific styling
    if (lang === 'ar') {
        subtitleElement.classList.add('arabic');
    } else {
        subtitleElement.classList.remove('arabic');
    }
    
    // Fade out content
    [nameElement, subtitleElement, footerElement].forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.3s ease';
    });
    
    // Update content after fade out
    setTimeout(() => {
        nameElement.textContent = translations[lang].name;
        subtitleElement.textContent = translations[lang].subtitle;
        footerElement.innerHTML = translations[lang].footer;
        
        // Fade in content
        [nameElement, subtitleElement, footerElement].forEach(el => {
            el.style.opacity = '1';
        });
    }, 300);
    
    // Update active button
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Save to localStorage
    localStorage.setItem('selectedLang', lang);
    currentLang = lang;
}

// Function to setup event listeners
function setupEventListeners() {
    // Add click events to language buttons
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) {
                applyLanguage(lang);
            }
        });
    });
    
    // Add hover effect to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-3px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });
}

// Initialize page
function initPage() {
    // Apply saved language
    applyLanguage(currentLang);
    
    // Setup event listeners
    setupEventListeners();
    
    // Handle window resize for responsive adjustments
    window.addEventListener('resize', handleResize);
}

// Handle window resize
function handleResize() {
    // Adjust font sizes for mobile
    if (window.innerWidth < 768) {
        document.querySelector('.language-switcher').style.flexWrap = 'wrap';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);
