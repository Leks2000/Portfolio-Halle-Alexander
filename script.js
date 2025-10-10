// Multilingual Portfolio System
class PortfolioManager {
    constructor() {
        this.currentLang = 'ru';
        this.translations = {
            ru: {
                // Navigation
                'nav-home': 'Главная',
                'nav-projects': 'Проекты',
                'nav-skills': 'Навыки',
                'nav-about': 'О себе',
                'nav-content': 'Контент',
                'nav-contact': 'Контакты',
                
                // Hero Section
                'hero-subtitle': 'Unity Developer & C# Programmer',
                'hero-description': 'Создаю увлекательные игры и приложения с акцентом на backend разработку. Специализируюсь на Unity, C# и работе с базами данных.',
                'stat-experience': 'Года опыта',
                'stat-projects': 'Проектов',
                'stat-platforms': 'Платформ',
                'btn-projects': 'Мои проекты',
                'btn-contact': 'Связаться',
                
                // Projects Section
                'projects-title': 'Мои проекты',
                'filter-all': 'Все',
                'filter-games': '🎮 Игры',
                'filter-mobile': '📱 Мобильные',
                'filter-web': '🌐 Сайты',
                'filter-extensions': '⚙️ Расширения',
                'filter-bots': '🤖 Telegram-боты',
                'btn-code': 'Код',
                'btn-demo': 'Сайт',
                'status-released': 'Релиз',
                'status-development': 'В разработке',
                'status-concept': 'Концепт',
                
                // Project Descriptions
                'dark-memorial-desc': 'Первый полноценный релиз игры на Unity. 2D проект с интересной механикой.',
                'decks-desc': 'Игра с карточными пошаговыми боями в подземельях. Unity, C#, 2.5D.',
                'blockmerge-desc': '2048 в майнкрафт-стиле. Unity, C#, 2D.',
                'wolf-runner-desc': 'Раннер в майнкрафт-стиле. Unity, C#, 3D.',
                'galactic-desc': 'Приключение про бананчика. Unity, C#, 2D.',
                'witcher-desc': 'Генерация гексагональной карты (вода, земля, лес). Unity, C#, 2D.',
                'flappy-desc': 'Мобильная аркада про сбор монеток. Unity, C#, Android.',
                'chefpro-desc': 'Приложение-повар: вводишь продукты из холодильника — получаешь рецепт с пошаговой инструкцией от ИИ.',
                'todis-desc': 'Приложение, показывающее, какой сегодня день.',
                'notes-desc': 'Приложение для заметок с локальным и удалённым входом.',
                'klepet-desc': 'Мобильный чат, аналог Telegram.',
                'profinder-desc': 'Сайт поиска работы.',
                'terminal-desc': 'Альтернативная версия сайта-портфолио в виде терминала.',
                'promtly-desc': 'Chrome Extension для улучшения промптов и анализа изображений (создание описаний по фото).',
                'newsbot-desc': 'Telegram-бот, публикующий ИИ-новости с мемами и шутками.',
                'meme-bot-desc': 'Присылает случайные мемы пользователю.',
                
                // Skills Section
                'skills-title': 'Навыки',
                
                // About Section
                'about-title': 'О себе',
                'about-role': 'Разработчик игр на Unity',
                'about-exp-label': 'Опыт:',
                'about-exp-value': '3 года 4 месяца',
                'about-location-label': 'Местоположение:',
                'about-location-value': 'Санкт-Петербург, Россия',
                'about-status-label': 'Статус:',
                'about-status-value': 'Готов к переезду',
                'about-description': 'Разработчик с акцентом на backend разработку на C#. Специализируюсь на создании приложений и игр на Unity, работе с базами данных и API. Имею опыт публикации игр на платформах Яндекс.Игры и Google Play Market.',
                'about-timeline-title': 'Опыт работы',
                'timeline-current': '2023 - настоящее время',
                'timeline-unity-title': 'Unity Developer (Фриланс)',
                'timeline-unity-1': 'Разработка и запуск игр на Unity с использованием C#',
                'timeline-unity-2': 'Публикация на платформах Яндекс.Игры, Google Play Market',
                'timeline-unity-3': 'Использование анимаций, 2D/3D-графики, оптимизация производительности',
                'timeline-unity-4': 'Монетизация через внутриигровую рекламу и покупки',
                'timeline-unity-5': 'Поддержка и обновление проектов',
                'timeline-intern-date': 'Май - Август 2023',
                'timeline-intern-title': 'Стажер-программист',
                'timeline-intern-company': 'СПб информационно-аналитический центр',
                'timeline-intern-1': 'Настройка баз данных PostgreSQL и MySQL',
                'timeline-intern-2': 'Оптимизация SQL-запросов',
                'timeline-intern-3': 'Разработка внутренних веб-приложений на .NET Core',
                
                // Content Section
                'content-title': 'Контент',
                'content-video-title': '🎵 Видео-проекты',
                'content-music-title': '🎧 Music (Spotify)',
                'views': 'просмотров',
                'ai-photo-title': 'AI оживление фотографий',
                'daggerstyle-title': 'Daggerstyle game video',
                
                // Contact Section
                'contact-title': 'Связаться со мной',
                'contact-info-title': 'Контактная информация',
                'contact-phone': 'Телефон',
                'contact-location': 'Местоположение',
                'contact-location-value': 'Санкт-Петербург, Россия',
                
                // Footer
                'footer-copyright': '© 2025 Александр Халле. Все права защищены.'
            },
            en: {
                // Navigation
                'nav-home': 'Home',
                'nav-projects': 'Projects',
                'nav-skills': 'Skills',
                'nav-about': 'About',
                'nav-content': 'Content',
                'nav-contact': 'Contact',
                
                // Hero Section
                'hero-subtitle': 'Unity Developer & C# Programmer',
                'hero-description': 'I create engaging games and applications with a focus on backend development. Specializing in Unity, C#, and database work.',
                'stat-experience': 'Years Experience',
                'stat-projects': 'Projects',
                'stat-platforms': 'Platforms',
                'btn-projects': 'My Projects',
                'btn-contact': 'Contact Me',
                
                // Projects Section
                'projects-title': 'My Projects',
                'filter-all': 'All',
                'filter-games': '🎮 Games',
                'filter-mobile': '📱 Mobile',
                'filter-web': '🌐 Websites',
                'filter-extensions': '⚙️ Extensions',
                'filter-bots': '🤖 Telegram Bots',
                'btn-code': 'Code',
                'btn-demo': 'Website',
                'status-released': 'Released',
                'status-development': 'In Development',
                'status-concept': 'Concept',
                
                // Project Descriptions
                'dark-memorial-desc': 'First full Unity game release. 2D project with interesting mechanics.',
                'decks-desc': 'Card-based turn combat game in dungeons. Unity, C#, 2.5D.',
                'blockmerge-desc': '2048 in Minecraft style. Unity, C#, 2D.',
                'wolf-runner-desc': 'Runner in Minecraft style. Unity, C#, 3D.',
                'galactic-desc': 'Adventure about a little banana. Unity, C#, 2D.',
                'witcher-desc': 'Hexagonal map generation (water, land, forest). Unity, C#, 2D.',
                'flappy-desc': 'Mobile arcade about collecting coins. Unity, C#, Android.',
                'chefpro-desc': 'Chef app: enter fridge ingredients — get recipe with step-by-step AI instructions.',
                'todis-desc': 'App that shows what day it is today.',
                'notes-desc': 'Notes app with local and remote login.',
                'klepet-desc': 'Mobile chat, Telegram analogue.',
                'profinder-desc': 'Job search website.',
                'terminal-desc': 'Alternative portfolio website in terminal style.',
                'promtly-desc': 'Chrome Extension for prompt enhancement and image analysis (photo description generation).',
                'newsbot-desc': 'Telegram bot publishing AI news with memes and jokes.',
                'meme-bot-desc': 'Sends random memes to users.',
                
                // Skills Section
                'skills-title': 'Skills',
                
                // About Section
                'about-title': 'About Me',
                'about-role': 'Unity Game Developer',
                'about-exp-label': 'Experience:',
                'about-exp-value': '3 years 4 months',
                'about-location-label': 'Location:',
                'about-location-value': 'Saint Petersburg, Russia',
                'about-status-label': 'Status:',
                'about-status-value': 'Ready to relocate',
                'about-description': 'Developer with focus on C# backend development. Specialize in creating Unity apps and games, database and API work. Have experience publishing games on Yandex.Games and Google Play Market platforms.',
                'about-timeline-title': 'Work Experience',
                'timeline-current': '2023 - present',
                'timeline-unity-title': 'Unity Developer (Freelance)',
                'timeline-unity-1': 'Development and launch of Unity games using C#',
                'timeline-unity-2': 'Publishing on Yandex.Games, Google Play Market platforms',
                'timeline-unity-3': 'Using animations, 2D/3D graphics, performance optimization',
                'timeline-unity-4': 'Monetization through in-game advertising and purchases',
                'timeline-unity-5': 'Project support and updates',
                'timeline-intern-date': 'May - August 2023',
                'timeline-intern-title': 'Software Engineer Intern',
                'timeline-intern-company': 'SPb Information Analytics Center',
                'timeline-intern-1': 'PostgreSQL and MySQL database configuration',
                'timeline-intern-2': 'SQL query optimization',
                'timeline-intern-3': 'Internal web application development on .NET Core',
                
                // Content Section
                'content-title': 'Content',
                'content-video-title': '🎵 Video Projects',
                'content-music-title': '🎧 Music (Spotify)',
                'views': 'views',
                'ai-photo-title': 'AI photo animation',
                'daggerstyle-title': 'Daggerstyle game video',
                
                // Contact Section
                'contact-title': 'Contact Me',
                'contact-info-title': 'Contact Information',
                'contact-phone': 'Phone',
                'contact-location': 'Location',
                'contact-location-value': 'Saint Petersburg, Russia',
                
                // Footer
                'footer-copyright': '© 2025 Alexander Halle. All rights reserved.'
            }
        };
        this.init();
    }

    init() {
        this.detectLanguage();
        this.initNavbar();
        this.initMobileMenu();
        this.initScrollAnimations();
        this.initProjectFilters();
        this.initLanguageSwitcher();
        this.initContactForm();
        this.initSmoothScroll();
        this.initProgressRings();
        this.applyTranslations();
    }

    // Language Detection and Management
    detectLanguage() {
        const savedLang = localStorage.getItem('portfolio-lang');
        if (savedLang) {
            this.currentLang = savedLang;
        } else {
            const browserLang = navigator.language.toLowerCase();
            this.currentLang = browserLang.startsWith('ru') ? 'ru' : 'en';
            localStorage.setItem('portfolio-lang', this.currentLang);
        }
    }

    initLanguageSwitcher() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(btn => {
            if (btn.dataset.lang === this.currentLang) {
                btn.classList.add('active');
            }
            
            btn.addEventListener('click', () => {
                const newLang = btn.dataset.lang;
                if (newLang !== this.currentLang) {
                    this.switchLanguage(newLang);
                    
                    // Update active button
                    langButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                }
            });
        });
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('portfolio-lang', lang);
        document.documentElement.lang = lang;
        this.applyTranslations();
    }

    applyTranslations() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.dataset.translate;
            if (this.translations[this.currentLang][key]) {
                element.textContent = this.translations[this.currentLang][key];
            }
        });
    }

    // Navigation functionality
    initNavbar() {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Active link highlighting
        const updateActiveLink = () => {
            const scrollPos = window.scrollY + 100;
            navLinks.forEach(link => {
                const section = document.querySelector(link.getAttribute('href'));
                if (section && 
                    section.offsetTop <= scrollPos && 
                    section.offsetTop + section.offsetHeight > scrollPos) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', updateActiveLink);
    }

    // Mobile menu toggle
    initMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        hamburger?.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger?.classList.remove('active');
                navMenu?.classList.remove('active');
            });
        });
    }

    // Smooth scrolling
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Scroll animations with fade-in
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Add fade-in class to all major sections
        document.querySelectorAll('section, .project-card, .skill-icon-item, .video-card').forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }

    // Project Filtering System
    initProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.dataset.filter;
                this.filterProjects(filter, projectCards);
            });
        });
    }

    filterProjects(filter, cards) {
        cards.forEach(card => {
            const category = card.dataset.category;
            
            if (filter === 'all' || category === filter) {
                card.classList.remove('hidden');
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
                card.classList.add('hidden');
            }
        });
    }

    // Progress Ring Animations
    initProgressRings() {
        const rings = document.querySelectorAll('.progress-ring__circle');
        
        rings.forEach(ring => {
            const status = ring.closest('.status-ring').dataset.status;
            let progress;
            
            switch(status) {
                case 'released':
                    progress = 100;
                    break;
                case 'development':
                    progress = 50;
                    break;
                case 'concept':
                    progress = 20;
                    break;
                default:
                    progress = 0;
            }
            
            const circumference = 2 * Math.PI * 27; // radius = 27
            const offset = circumference - (progress / 100 * circumference);
            
            ring.style.strokeDashoffset = offset;
        });

        // Add tooltips
        document.querySelectorAll('.status-ring').forEach(ring => {
            ring.addEventListener('mouseenter', () => {
                const tooltip = document.createElement('div');
                tooltip.className = 'status-tooltip';
                const status = ring.dataset.status;
                
                let text;
                switch(status) {
                    case 'released':
                        text = this.currentLang === 'ru' ? 'Проект завершен и выпущен' : 'Project completed and released';
                        break;
                    case 'development':
                        text = this.currentLang === 'ru' ? 'Проект в активной разработке' : 'Project in active development';
                        break;
                    case 'concept':
                        text = this.currentLang === 'ru' ? 'Концепт или прототип' : 'Concept or prototype';
                        break;
                }
                
                tooltip.textContent = text;
                tooltip.style.cssText = `
                    position: absolute;
                    top: -40px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: var(--bg-tertiary);
                    color: var(--text-primary);
                    padding: 0.5rem 1rem;
                    border-radius: 5px;
                    font-size: 0.8rem;
                    white-space: nowrap;
                    z-index: 1000;
                    box-shadow: var(--shadow-card);
                `;
                
                ring.appendChild(tooltip);
            });
            
            ring.addEventListener('mouseleave', () => {
                const tooltip = ring.querySelector('.status-tooltip');
                if (tooltip) {
                    tooltip.remove();
                }
            });
        });
    }

    // Contact form (placeholder for future implementation)
    initContactForm() {
        const form = document.querySelector('.message-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                // Add your form submission logic here
                alert(this.currentLang === 'ru' ? 
                    'Форма отправки пока не настроена' : 
                    'Form submission not yet configured');
            });
        }
    }
}

// Particle System (optional enhancement)
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = this.createCanvas();
        this.ctx = this.canvas.getContext('2d');
        this.init();
    }

    createCanvas() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '-1';
        document.body.appendChild(canvas);
        return canvas;
    }

    init() {
        this.resize();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Easter Egg - Konami Code
class EasterEgg {
    constructor() {
        this.konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        this.userInput = [];
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            this.userInput.push(e.keyCode);
            
            if (this.userInput.length > this.konamiCode.length) {
                this.userInput.shift();
            }
            
            if (this.userInput.length === this.konamiCode.length && 
                this.userInput.every((code, index) => code === this.konamiCode[index])) {
                this.activateEasterEgg();
            }
        });
    }

    activateEasterEgg() {
        // Add special effects
        document.body.style.filter = 'hue-rotate(180deg)';
        
        setTimeout(() => {
            document.body.style.filter = '';
            alert('🎮 Unity Developer Mode Activated! 🎮');
        }, 2000);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioManager();
    
    // Optional enhancements
    if (window.innerWidth > 768) { // Only on desktop
        new ParticleSystem();
    }
    
    new EasterEgg();
});

// Performance optimization for mobile
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
    document.head.appendChild(script);
}