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
                'typing-jobs': ['Unity Developer & C# Programmer', 'Backend & Game Developer', 'Specialist Creative Solver'],
                'hero-description': 'Создаю увлекательные игры и приложения с акцентом на backend разработку. Специализируюсь на Unity, C# и работе с базами данных.',
                'stat-experience': 'Года опыта',
                'stat-projects': 'Проектов',
                'stat-platforms': 'Платформ',
                'btn-projects': 'Мои проекты',
                'btn-contact': 'Связаться',
                
                // Projects Section
                'projects-title': 'Мои проекты',
                'filter-top': '⭐ Топ',
                'filter-all': 'Все',
                'filter-games': '🎮 Игры',
                'filter-mobile': '📱 Приложения',
                'filter-web': '🌐 Сайты',
                'filter-extensions': '⚙️ Расширения',
                'filter-bots': '🤖 Боты',
                'btn-code': 'Код',
                'btn-demo': 'Сайт',
                'status-released': '🟢 Релиз',
                'status-development': '🟡 В разработке',
                'status-concept': '⚪ Концепт',
                'status-completed': '✅ Завершён',
                
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
                'technical-skills-title': 'Технические навыки',
                'tech-programming': 'Языки программирования',
                'tech-dotnet': 'Технологии .NET',
                'tech-gamedev': 'Разработка игр',
                'tech-databases': 'Базы данных',
                'tech-tools': 'Инструменты',
                
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
                
                // GitHub Section
                'nav-github': 'GitHub',
                'github-title': 'GitHub Activity',
                'github-repositories': 'Репозиториев',
                'github-last-update': 'Последнее обновление',
                'github-commits': 'Коммитов',
                'github-activity-title': '📈 Активность коммитов',
                'github-open': 'Открыть мой GitHub',
                
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
                'typing-jobs': ['Unity Developer & C# Programmer', 'Backend & Game Developer', 'Specialist Creative Solver'],
                'hero-description': 'I create engaging games and applications with a focus on backend development. Specializing in Unity, C#, and database work.',
                'stat-experience': 'Years Experience',
                'stat-projects': 'Projects',
                'stat-platforms': 'Platforms',
                'btn-projects': 'My Projects',
                'btn-contact': 'Contact Me',
                
                // Projects Section
                'projects-title': 'My Projects',
                'filter-top': '⭐ Top',
                'filter-all': 'All',
                'filter-games': '🎮 Games',
                'filter-mobile': '📱 Applications',
                'filter-web': '🌐 Websites',
                'filter-extensions': '⚙️ Extensions',
                'filter-bots': '🤖 Bots',
                'btn-code': 'Code',
                'btn-demo': 'Website',
                'status-released': '🟢 Released',
                'status-development': '🟡 In Development',
                'status-concept': '⚪ Concept',
                'status-completed': '✅ Completed',
                
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
                'technical-skills-title': 'Technical Skills',
                'tech-programming': 'Programming Languages',
                'tech-dotnet': '.NET Technologies',
                'tech-gamedev': 'Game Development',
                'tech-databases': 'Databases',
                'tech-tools': 'Tools',
                
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
                
                // GitHub Section
                'nav-github': 'GitHub',
                'github-title': 'GitHub Activity',
                'github-repositories': 'Repositories',
                'github-last-update': 'Last Update',
                'github-commits': 'Commits',
                'github-activity-title': '📈 Commit Activity',
                'github-open': 'Open my GitHub',
                
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
        this.initCustomCursor();
        this.initTypingAnimation();
        this.initAnimatedSkills();
        this.initProjectPlaceholders();
        this.initGSAPAnimations();
        this.initGitHubActivity();
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
            btn.addEventListener('click', () => {
                const newLang = btn.dataset.lang;
                if (newLang !== this.currentLang) {
                    this.switchLanguage(newLang);
                }
            });
        });
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

        // Enhanced active link highlighting
        const updateActiveLink = () => {
            const scrollPos = window.scrollY + 100;
            let activeFound = false;
            
            navLinks.forEach(link => {
                const section = document.querySelector(link.getAttribute('href'));
                if (section && 
                    section.offsetTop <= scrollPos && 
                    section.offsetTop + section.offsetHeight > scrollPos) {
                    
                    if (!activeFound) {
                        navLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                        activeFound = true;
                        
                        // Add smooth animation to active link
                        if (typeof gsap !== 'undefined') {
                            gsap.to(link, {
                                scale: 1.05,
                                duration: 0.2,
                                ease: 'power2.out'
                            });
                            
                            gsap.to(link, {
                                scale: 1,
                                duration: 0.2,
                                delay: 0.2,
                                ease: 'power2.out'
                            });
                        }
                    }
                }
            });
            
            // Add parallax effect to navbar
            if (typeof gsap !== 'undefined') {
                const scrollSpeed = window.scrollY * 0.5;
                gsap.set('.navbar', {
                    y: Math.min(scrollSpeed, 10)
                });
            }
        };

        // Throttle scroll event for better performance
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(updateActiveLink, 10);
        });
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
        const projectsGrid = document.querySelector('.projects-grid');

        // Show skeleton loaders initially
        this.showSkeletonLoaders(projectsGrid);

        // Initialize projects on page load with loading simulation
        setTimeout(() => {
            this.hideSkeletonLoaders(projectsGrid);
            projectsGrid.classList.add('projects-loaded');
            // Show top projects by default
            this.filterProjects('top', projectCards);
            // Initialize lazy loading
            this.initLazyLoading();
        }, 1500);

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
        cards.forEach((card, index) => {
            const category = card.dataset.category;
            const isTop = card.dataset.top === 'true';
            let shouldShow = false;
            
            if (filter === 'all') {
                shouldShow = true;
            } else if (filter === 'top') {
                shouldShow = isTop;
            } else {
                shouldShow = category === filter;
            }
            
            if (shouldShow) {
                card.classList.remove('filtered-out', 'hidden');
                card.style.display = 'block';
                setTimeout(() => {
                    card.classList.add('visible', 'fade-in-animate');
                }, index * 50); // Faster stagger, smoother appearance
            } else {
                card.classList.add('filtered-out');
                card.classList.remove('visible', 'fade-in-animate');
                setTimeout(() => {
                    if (card.classList.contains('filtered-out')) {
                        card.style.display = 'none';
                    }
                }, 500); // Hide after animation completes
            }
        });
    }

    // Skeleton Loaders
    showSkeletonLoaders(projectsGrid) {
        projectsGrid.classList.add('loading');
        
        // Create 6-8 skeleton cards
        for (let i = 0; i < 7; i++) {
            const skeletonCard = this.createSkeletonCard();
            projectsGrid.appendChild(skeletonCard);
        }
    }

    hideSkeletonLoaders(projectsGrid) {
        projectsGrid.classList.remove('loading');
        // Remove all skeleton cards
        const skeletonCards = projectsGrid.querySelectorAll('.skeleton-card');
        skeletonCards.forEach(card => card.remove());
    }

    createSkeletonCard() {
        const card = document.createElement('div');
        card.className = 'skeleton-card';
        card.innerHTML = `
            <div class="skeleton skeleton-image"></div>
            <div class="skeleton skeleton-status"></div>
            <div class="skeleton skeleton-title"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text short"></div>
            <div class="skeleton-tags">
                <div class="skeleton skeleton-tag"></div>
                <div class="skeleton skeleton-tag"></div>
                <div class="skeleton skeleton-tag"></div>
            </div>
            <div class="skeleton-buttons">
                <div class="skeleton skeleton-button"></div>
                <div class="skeleton skeleton-button"></div>
            </div>
        `;
        return card;
    }

    // Lazy Loading for Images
    initLazyLoading() {
        const images = document.querySelectorAll('.project-image');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        this.loadImage(img);
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.1
            });

            images.forEach(img => {
                img.classList.add('loading');
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            images.forEach(img => this.loadImage(img));
        }
    }

    loadImage(img) {
        if (img.src && !img.classList.contains('loaded')) {
            img.onload = () => {
                img.classList.remove('loading');
                img.classList.add('loaded');
            };
            img.onerror = () => {
                img.classList.remove('loading');
                img.classList.add('error');
            };
            
            // If image already cached, trigger load immediately
            if (img.complete) {
                img.onload();
            }
        }
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

        // Add tooltips with better event handling
        document.querySelectorAll('.status-ring').forEach(ring => {
            let tooltip = null;
            
            const showTooltip = () => {
                // Remove existing tooltip to prevent duplicates
                if (tooltip) {
                    tooltip.remove();
                }
                
                tooltip = document.createElement('div');
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
                    top: -45px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0, 0, 0, 0.9);
                    color: var(--text-primary);
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    font-size: 0.8rem;
                    white-space: nowrap;
                    z-index: 1000;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                    border: 1px solid var(--unity-blue);
                    pointer-events: none;
                    opacity: 0;
                    transition: opacity 0.2s ease;
                `;
                
                ring.appendChild(tooltip);
                
                // Animate in
                requestAnimationFrame(() => {
                    tooltip.style.opacity = '1';
                });
            };
            
            const hideTooltip = () => {
                if (tooltip) {
                    tooltip.style.opacity = '0';
                    setTimeout(() => {
                        if (tooltip && tooltip.parentNode) {
                            tooltip.remove();
                        }
                        tooltip = null;
                    }, 200);
                }
            };
            
            ring.addEventListener('mouseenter', showTooltip);
            ring.addEventListener('mouseleave', hideTooltip);
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

    // Enhanced Custom Cursor Implementation
    initCustomCursor() {
        if (window.innerWidth <= 768) return; // Skip on mobile
        
        const cursor = document.querySelector('.custom-cursor');
        const follower = document.querySelector('.cursor-follower');
        
        if (!cursor || !follower) return;
        
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;
        
        // Hide default cursor on body
        document.body.style.cursor = 'none';
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });
        
        // Smooth follower animation
        function updateFollower() {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;
            
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
            
            requestAnimationFrame(updateFollower);
        }
        updateFollower();
        
        // Enhanced click animation with light circle expansion
        document.addEventListener('mousedown', () => {
            cursor.classList.add('clicked');
            follower.classList.add('clicked');
            
            // Create expanding circle effect
            this.createClickEffect(mouseX, mouseY);
        });
        
        document.addEventListener('mouseup', () => {
            cursor.classList.remove('clicked');
            follower.classList.remove('clicked');
        });
        
        // Hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .skill-item, .project-card, .filter-btn');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                follower.style.transform = 'translate(-50%, -50%) scale(1.2)';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                follower.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }

    // Create click effect with expanding light circle
    createClickEffect(x, y) {
        const clickEffect = document.createElement('div');
        clickEffect.className = 'click-effect';
        clickEffect.style.left = x + 'px';
        clickEffect.style.top = y + 'px';
        
        document.body.appendChild(clickEffect);
        
        // Remove the effect after animation completes
        setTimeout(() => {
            if (clickEffect.parentNode) {
                clickEffect.parentNode.removeChild(clickEffect);
            }
        }, 600);
    }
    
    // Typing Animation for Hero Section
    initTypingAnimation() {
        const typingElement = document.getElementById('typewriter-text');
        if (!typingElement) return;
        
        const jobs = [
            'Unity Developer & C# Programmer',
            'Backend & Game Developer',
            'Specialist Creative Solver'
        ];
        
        let currentJobIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let isPaused = false;
        
        function typeWriter() {
            if (isPaused) return;
            
            const currentJob = jobs[currentJobIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentJob.substring(0, currentCharIndex - 1);
                currentCharIndex--;
                
                if (currentCharIndex === 0) {
                    isDeleting = false;
                    currentJobIndex = (currentJobIndex + 1) % jobs.length;
                    setTimeout(typeWriter, 800); // Pause before typing next phrase
                    return;
                }
                setTimeout(typeWriter, 50); // Faster deletion
            } else {
                typingElement.textContent = currentJob.substring(0, currentCharIndex + 1);
                currentCharIndex++;
                
                if (currentCharIndex === currentJob.length) {
                    isDeleting = true;
                    setTimeout(typeWriter, 2500); // Longer pause to read the complete phrase
                    return;
                }
                setTimeout(typeWriter, 100); // Consistent typing speed
            }
        }
        
        // Start typing animation after initial delay
        setTimeout(typeWriter, 1500);
    }

    // Enhanced Skills Grid Initialization with Framer Motion Play-to-End Animations
    initAnimatedSkills() {
        const skillItems = document.querySelectorAll('.skill-item');
        const techSkillItems = document.querySelectorAll('.tech-skill-item');
        
        // Initialize Framer Motion for main skill icons
        skillItems.forEach(item => {
            const skillIcon = item.querySelector('.skill-icon');
            if (skillIcon && typeof Motion !== 'undefined') {
                let isAnimating = false;
                
                const handleHoverStart = () => {
                    if (!isAnimating) {
                        isAnimating = true;
                        this.triggerFramerMotionAnimation(item, skillIcon);
                        
                        setTimeout(() => {
                            isAnimating = false;
                        }, 1000);
                    }
                };
                
                item.addEventListener('mouseenter', handleHoverStart);
                item.addEventListener('focus', handleHoverStart);
            }
        });

        // Initialize Framer Motion for tech skills (progress bars section)
        techSkillItems.forEach(item => {
            const techIcon = item.querySelector('.tech-skill-icon');
            const progressBar = item.querySelector('.tech-progress');
            
            if (techIcon && typeof Motion !== 'undefined') {
                let isAnimating = false;
                
                const handleInteraction = () => {
                    if (!isAnimating) {
                        isAnimating = true;
                        this.triggerTechSkillAnimation(techIcon, progressBar);
                        
                        setTimeout(() => {
                            isAnimating = false;
                        }, 800);
                    }
                };
                
                item.addEventListener('mouseenter', handleInteraction);
                item.addEventListener('focus', handleInteraction);
            }
        });
    }

    triggerFramerMotionAnimation(item, skillIcon) {
        const skillType = item.dataset.skill;
        
        // Container remains stable - only animate internal elements
        switch(skillType) {
            case 'csharp':
                this.animateCSharpIcon(skillIcon);
                break;
            case 'kotlin':
                this.animateKotlinIcon(skillIcon);
                break;
            case 'unity':
                this.animateUnityIcon(skillIcon);
                break;
            case 'sql':
                this.animateSQLIcon(skillIcon);
                break;
            case 'dotnet':
                this.animateDotNetIcon(skillIcon);
                break;
            case 'git':
                this.animateGitIcon(skillIcon);
                break;
            default:
                this.animateGenericIcon(skillIcon);
        }
    }

    animateCSharpIcon(skillIcon) {
        const sparks = skillIcon.querySelectorAll('.spark');
        const energyCircle = skillIcon.querySelector('.energy-circle');
        
        // Animate sparks with stagger
        sparks.forEach((spark, index) => {
            setTimeout(() => {
                spark.style.transform = 'scale(0) rotate(0deg)';
                spark.style.opacity = '0';
                spark.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                
                requestAnimationFrame(() => {
                    spark.style.transform = 'scale(1.5) rotate(360deg)';
                    spark.style.opacity = '1';
                });
                
                setTimeout(() => {
                    spark.style.transform = 'scale(1) rotate(360deg)';
                }, 400);
            }, index * 100);
        });

        // Animate energy circle
        if (energyCircle) {
            energyCircle.style.transform = 'scale(0.8)';
            energyCircle.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            requestAnimationFrame(() => {
                energyCircle.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    energyCircle.style.transform = 'scale(1)';
                }, 400);
            });
        }
    }

    animateKotlinIcon(skillIcon) {
        const parts = skillIcon.querySelectorAll('.kotlin-part');
        
        parts.forEach((part, index) => {
            setTimeout(() => {
                part.style.transform = 'translateX(-20px) rotate(-15deg)';
                part.style.transition = 'all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                
                setTimeout(() => {
                    part.style.transform = 'translateX(0) rotate(0deg)';
                }, 50);
            }, index * 80);
        });
    }

    animateUnityIcon(skillIcon) {
        const cube = skillIcon.querySelector('.unity-cube');
        
        if (cube) {
            cube.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
            cube.style.transition = 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            requestAnimationFrame(() => {
                cube.style.transform = 'rotateX(360deg) rotateY(360deg) scale(1.1)';
                
                setTimeout(() => {
                    cube.style.transform = 'rotateX(360deg) rotateY(360deg) scale(1)';
                }, 800);
            });
        }
    }

    animateSQLIcon(skillIcon) {
        const digits = skillIcon.querySelectorAll('.data-digit');
        const database = skillIcon.querySelector('.database-main');
        
        if (database) {
            database.style.transform = 'scale(1) rotateY(0deg)';
            database.style.transition = 'transform 0.6s ease-out';
            
            requestAnimationFrame(() => {
                database.style.transform = 'scale(1.2) rotateY(180deg)';
                setTimeout(() => {
                    database.style.transform = 'scale(1) rotateY(360deg)';
                }, 300);
            });
        }

        digits.forEach((digit, index) => {
            setTimeout(() => {
                digit.style.transform = 'translateY(-10px)';
                digit.style.opacity = '0.3';
                digit.style.transition = 'all 0.4s ease-out';
                
                setTimeout(() => {
                    digit.style.transform = 'translateY(0)';
                    digit.style.opacity = '1';
                }, 200);
            }, index * 100);
        });
    }

    animateDotNetIcon(skillIcon) {
        const frameworkLines = skillIcon.querySelector('.framework-lines');
        const dotnetText = skillIcon.querySelector('.dotnet-text');
        
        if (frameworkLines) {
            frameworkLines.style.transform = 'scaleX(0.5) scaleY(0.5)';
            frameworkLines.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
            
            requestAnimationFrame(() => {
                frameworkLines.style.transform = 'scaleX(1.2) scaleY(1.2)';
                setTimeout(() => {
                    frameworkLines.style.transform = 'scaleX(1) scaleY(1)';
                }, 500);
            });
        }

        if (dotnetText) {
            dotnetText.style.transform = 'scale(1)';
            dotnetText.style.transition = 'transform 0.6s ease-out';
            
            setTimeout(() => {
                dotnetText.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    dotnetText.style.transform = 'scale(1)';
                }, 300);
            }, 200);
        }
    }

    animateGitIcon(skillIcon) {
        const branches = skillIcon.querySelectorAll('.git-branch');
        const gitIcon = skillIcon.querySelector('.git-icon');
        
        if (gitIcon) {
            gitIcon.style.transform = 'rotate(0deg) scale(1)';
            gitIcon.style.transition = 'transform 0.8s ease-in-out';
            
            requestAnimationFrame(() => {
                gitIcon.style.transform = 'rotate(360deg) scale(1.1)';
                setTimeout(() => {
                    gitIcon.style.transform = 'rotate(360deg) scale(1)';
                }, 600);
            });
        }

        branches.forEach((branch, index) => {
            setTimeout(() => {
                branch.style.strokeDashoffset = '100';
                branch.style.transition = 'stroke-dashoffset 0.8s ease-out';
                
                requestAnimationFrame(() => {
                    branch.style.strokeDashoffset = '0';
                });
            }, index * 200);
        });
    }

    animateGenericIcon(skillIcon) {
        // Generic bounce animation for skills without specific animations
        skillIcon.style.transform = 'scale(1)';
        skillIcon.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        
        requestAnimationFrame(() => {
            skillIcon.style.transform = 'scale(1.15)';
            setTimeout(() => {
                skillIcon.style.transform = 'scale(1)';
            }, 250);
        });
    }

    triggerTechSkillAnimation(techIcon, progressBar) {
        // Animate tech skill icon
        techIcon.style.transform = 'scale(1) rotateZ(0deg)';
        techIcon.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        requestAnimationFrame(() => {
            techIcon.style.transform = 'scale(1.2) rotateZ(10deg)';
            setTimeout(() => {
                techIcon.style.transform = 'scale(1) rotateZ(0deg)';
            }, 300);
        });

        // Animate progress bar
        if (progressBar) {
            const currentWidth = progressBar.style.width;
            progressBar.style.width = '0%';
            progressBar.style.transition = 'width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            setTimeout(() => {
                progressBar.style.width = currentWidth;
            }, 100);
        }
    }

    // Add placeholders for projects without images
    initProjectPlaceholders() {
        const projectCards = document.querySelectorAll('.project-card');
        const gradients = [
            'linear-gradient(135deg, #4CAF50, #00d4ff)',
            'linear-gradient(135deg, #ff6b35, #a855f7)',
            'linear-gradient(135deg, #00d4ff, #4CAF50)',
            'linear-gradient(135deg, #a855f7, #ff6b35)',
            'linear-gradient(135deg, #ff6b35, #00d4ff)',
            'linear-gradient(135deg, #4CAF50, #a855f7)'
        ];
        
        projectCards.forEach((card, index) => {
            const hasImage = card.querySelector('.project-image, .project-preview, .project-image-placeholder');
            const projectContent = card.querySelector('.project-content');
            const projectTitle = card.querySelector('h3')?.textContent;
            
            if (!hasImage && projectContent && projectTitle) {
                // Create project preview container
                const previewContainer = document.createElement('div');
                previewContainer.className = 'project-preview';
                
                // Create placeholder
                const placeholder = document.createElement('div');
                placeholder.className = 'project-image-placeholder';
                placeholder.style.background = gradients[index % gradients.length];
                placeholder.textContent = projectTitle;
                
                previewContainer.appendChild(placeholder);
                
                // Insert before project content
                card.insertBefore(previewContainer, projectContent);
            }
        });
    }
    
    // GSAP Animations
    initGSAPAnimations() {
        if (typeof gsap === 'undefined') return;
        
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero section animation
        gsap.from('.hero-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-subtitle-container', {
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.3,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-description', {
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.6,
            ease: 'power3.out'
        });
        
        // Section animations
        gsap.utils.toArray('section').forEach((section) => {
            gsap.from(section.querySelectorAll('h2, h3'), {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                },
                duration: 1,
                y: 50,
                opacity: 0,
                stagger: 0.2,
                ease: 'power3.out'
            });
        });
        
        // New Skills grid animations
        gsap.from('.skills-category', {
            scrollTrigger: {
                trigger: '.new-skills-grid',
                start: 'top 85%'
            },
            duration: 1,
            y: 60,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
        });

        gsap.from('.skill-item', {
            scrollTrigger: {
                trigger: '.new-skills-grid',
                start: 'top 80%'
            },
            duration: 0.8,
            y: 40,
            opacity: 0,
            scale: 0.9,
            stagger: 0.08,
            ease: 'back.out(1.4)'
        });
        
        // Technical skills animation
        gsap.from('.tech-category', {
            scrollTrigger: {
                trigger: '.technical-skills',
                start: 'top 80%'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
        });
        
        // Projects animation
        gsap.from('.project-card', {
            scrollTrigger: {
                trigger: '.projects-grid',
                start: 'top 80%'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            scale: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)'
        });

        // Enhanced Parallax background effect
        gsap.to('.stars-background', {
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1
            },
            y: -150,
            rotation: 0.5,
            ease: 'none'
        });

        // Individual star parallax effects
        gsap.utils.toArray('.star').forEach((star, index) => {
            gsap.to(star, {
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1
                },
                y: -50 - (index * 10),
                x: Math.sin(index) * 20,
                rotation: index * 45,
                ease: 'none'
            });
        });

        // Section animations removed - they were causing poor UX performance

        // Navigation active section highlighting
        gsap.utils.toArray('section').forEach(section => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top 30%',
                end: 'bottom 30%',
                onEnter: () => this.updateActiveNavLink(section.id),
                onEnterBack: () => this.updateActiveNavLink(section.id)
            });
        });

        // Enhanced project cards entrance
        gsap.utils.toArray('.project-card').forEach((card, index) => {
            gsap.fromTo(card, 
                {
                    opacity: 0,
                    y: 60,
                    rotationX: -15,
                    scale: 0.9
                },
                {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    scale: 1,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'back.out(1.4)'
                }
            );
        });

        // Floating elements effect
        gsap.utils.toArray('.hero-visual, .unity-logo-container').forEach(element => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                },
                y: -50,
                rotation: 2,
                ease: 'none'
            });
        });

        // GitHub section animation
        gsap.from('.github-stats .stat-card', {
            scrollTrigger: {
                trigger: '.github-activity',
                start: 'top 80%'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }

    // Navigation active section highlighting
    updateActiveNavLink(sectionId) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
    
    // GitHub Activity Integration
    async initGitHubActivity() {
        try {
            // Fetch GitHub user data
            const userResponse = await fetch('https://api.github.com/users/Leks2000');
            const userData = await userResponse.json();
            
            // Update repository count
            document.getElementById('repo-count').textContent = userData.public_repos || '-';
            
            // Fetch recent events for commit count
            const eventsResponse = await fetch('https://api.github.com/users/Leks2000/events?per_page=100');
            const events = await eventsResponse.json();
            
            // Count push events (commits)
            const pushEvents = events.filter(event => event.type === 'PushEvent');
            const totalCommits = pushEvents.reduce((sum, event) => {
                return sum + (event.payload.commits ? event.payload.commits.length : 0);
            }, 0);
            
            document.getElementById('total-commits').textContent = totalCommits || '-';
            
            // Update last activity
            if (events.length > 0) {
                const lastUpdate = new Date(events[0].created_at);
                const now = new Date();
                const diffTime = Math.abs(now - lastUpdate);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                
                let updateText = '';
                if (diffDays === 1) {
                    updateText = this.currentLang === 'ru' ? '1 день назад' : '1 day ago';
                } else if (diffDays < 7) {
                    updateText = this.currentLang === 'ru' ? `${diffDays} дней назад` : `${diffDays} days ago`;
                } else {
                    updateText = this.currentLang === 'ru' ? 'Неделю назад' : 'A week ago';
                }
                
                document.getElementById('last-update').textContent = updateText;
            }
        } catch (error) {
            console.log('GitHub API error:', error);
            // Fallback values
            document.getElementById('repo-count').textContent = '20+';
            document.getElementById('total-commits').textContent = '500+';
            document.getElementById('last-update').textContent = this.currentLang === 'ru' ? 'Недавно' : 'Recently';
        }
    }

    // Enhanced Language Switcher
    switchLanguage(lang) {
        this.currentLang = lang;
        
        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (this.translations[lang][key]) {
                element.textContent = this.translations[lang][key];
            }
        });
        
        // Restart typing animation with new language
        if (document.getElementById('typing-animation')) {
            this.initTypingAnimation();
        }
        
        // Update GitHub activity with new language
        this.initGitHubActivity();
        
        // Update document title
        document.title = lang === 'ru' 
            ? 'Александр Халле - Unity Developer Portfolio'
            : 'Alexander Halle - Unity Developer Portfolio';
            
        // Save language preference
        localStorage.setItem('portfolio-lang', lang);
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