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
                'typing-jobs': [
                    'Unity Developer & C# Programmer',
                    'Backend & Game Developer',
                    'Specialist Creative Solver'
                ],
                'hero-description':
                    'Создаю увлекательные игры и приложения с акцентом на backend разработку. Специализируюсь на Unity, C# и работе с базами данных.',
                'stat-experience': 'Года опыта',
                'stat-projects': 'Проектов',
                'stat-platforms': 'Платформ',
                'btn-projects': 'Мои проекты',
                'btn-contact': 'Связаться',

                // Misc buttons/labels
                'btn-play': 'Play Market',
                'hero-name': 'Александр Халле',
                'nav-github-activity': 'GitHub-Activity',

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
                'status-completed': '🟢 Завершён',
                'modal-demo-error': 'Не удалось загрузить демо',
                'btn-retry': 'Попробовать снова',

                // Project Descriptions
                'dark-memorial-desc':
                    'Первый полноценный релиз игры на Unity. 2D проект с интересной механикой.',
                'decks-desc': 'Игра с карточными пошаговыми боями в подземельях. Unity, C#, 2.5D.',
                'blockmerge-desc': '2048 в майнкрафт-стиле. Unity, C#, 2D.',
                'wolf-runner-desc': 'Раннер в майнкрафт-стиле. Unity, C#, 3D.',
                'galactic-desc': 'Приключение про бананчика. Unity, C#, 2D.',
                'witcher-desc': 'Генерация гексагональной карты (вода, земля, лес). Unity, C#, 2D.',
                'flappy-desc': 'Мобильная аркада про сбор монеток. Unity, C#, Android.',
                'chefpro-desc':
                    'Приложение-повар: вводишь продукты из холодильника — получаешь рецепт с пошаговой инструкцией от ИИ.',
                'todis-desc': 'Приложение, показывающее, какой сегодня день.',
                'notes-desc': 'Приложение для заметок с локальным и удалённым входом.',
                'klepet-desc': 'Мобильный чат, аналог Telegram.',
                'profinder-desc': 'Сайт поиска работы.',
                'terminal-desc': 'Альтернативная версия сайта-портфолио в виде терминала.',
                'promtly-desc':
                    'Chrome Extension для улучшения промптов и анализа изображений (создание описаний по фото).',
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
                'about-description':
                    'Разработчик с акцентом на backend разработку на C#. Специализируюсь на создании приложений и игр на Unity, работе с базами данных и API. Имею опыт публикации игр на платформах Яндекс.Игры и Google Play Market.',
                'about-timeline-title': 'Опыт работы',
                'timeline-current': '2023 - настоящее время',
                'timeline-unity-title': 'Unity Developer (Фриланс)',
                'timeline-unity-1': 'Разработка и запуск игр на Unity с использованием C#',
                'timeline-unity-2': 'Публикация на платформах Яндекс.Игры, Google Play Market',
                'timeline-unity-3':
                    'Использование анимаций, 2D/3D-графики, оптимизация производительности',
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
                views: 'просмотров',
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
                'typing-jobs': [
                    'Unity Developer & C# Programmer',
                    'Backend & Game Developer',
                    'Specialist Creative Solver'
                ],
                'hero-description':
                    'I create engaging games and applications with a focus on backend development. Specializing in Unity, C#, and database work.',
                'stat-experience': 'Years Experience',
                'stat-projects': 'Projects',
                'stat-platforms': 'Platforms',
                'btn-projects': 'My Projects',
                'btn-contact': 'Contact Me',

                // Misc buttons/labels
                'btn-play': 'Play Market',
                'hero-name': 'Alexander Halle',
                'nav-github-activity': 'GitHub-Activity',

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
                'status-completed': '🟢 Completed',
                'modal-demo-error': 'Failed to load demo',
                'btn-retry': 'Try again',

                // Project Descriptions
                'dark-memorial-desc':
                    'First full Unity game release. 2D project with interesting mechanics.',
                'decks-desc': 'Card-based turn combat game in dungeons. Unity, C#, 2.5D.',
                'blockmerge-desc': '2048 in Minecraft style. Unity, C#, 2D.',
                'wolf-runner-desc': 'Runner in Minecraft style. Unity, C#, 3D.',
                'galactic-desc': 'Adventure about a little banana. Unity, C#, 2D.',
                'witcher-desc': 'Hexagonal map generation (water, land, forest). Unity, C#, 2D.',
                'flappy-desc': 'Mobile arcade about collecting coins. Unity, C#, Android.',
                'chefpro-desc':
                    'Chef app: enter fridge ingredients — get recipe with step-by-step AI instructions.',
                'todis-desc': 'App that shows what day it is today.',
                'notes-desc': 'Notes app with local and remote login.',
                'klepet-desc': 'Mobile chat, Telegram analogue.',
                'profinder-desc': 'Job search website.',
                'terminal-desc': 'Alternative portfolio website in terminal style.',
                'promtly-desc':
                    'Chrome Extension for prompt enhancement and image analysis (photo description generation).',
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
                'about-description':
                    'Developer with focus on C# backend development. Specialize in creating Unity apps and games, database and API work. Have experience publishing games on Yandex.Games and Google Play Market platforms.',
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
                views: 'views',
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

        // Media query listeners for parallax
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(max-width: 768px)');
            const pointerQuery = window.matchMedia('(pointer: coarse)');

            mediaQuery.addListener(() => this.handleParallaxMediaChange());
            pointerQuery.addListener(() => this.handleParallaxMediaChange());
        }
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
        this.initProjectModals();
        this.initScrollProgressBar();
        this.initPerformantParallax();
        this.initGSAPAnimations();
        // GitHub activity and skill bars
        this.initGitHubActivity();
        this.initSkillBars();
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
                if (
                    section &&
                    section.offsetTop <= scrollPos &&
                    section.offsetTop + section.offsetHeight > scrollPos
                ) {
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

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Add fade-in class to all major sections
        document
            .querySelectorAll('section, .project-card, .skill-icon-item, .video-card')
            .forEach(el => {
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
        let visibleIndex = 0;
        cards.forEach((card) => {
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
                card.style.display = 'flex';
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px) scale(0.95)';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                    card.classList.add('visible', 'fade-in-animate');
                }, visibleIndex * 50);
                visibleIndex++;
            } else {
                card.classList.add('filtered-out');
                card.classList.remove('visible', 'fade-in-animate');
                card.style.opacity = '0';
                card.style.transform = 'translateY(-20px) scale(0.9)';
                setTimeout(() => {
                    if (card.classList.contains('filtered-out')) {
                        card.style.display = 'none';
                    }
                }, 300);
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
            const imageObserver = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            this.loadImage(img);
                            observer.unobserve(img);
                        }
                    });
                },
                {
                    rootMargin: '50px 0px',
                    threshold: 0.1
                }
            );

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

            switch (status) {
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
            const offset = circumference - (progress / 100) * circumference;

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
                switch (status) {
                    case 'released':
                        text =
                            this.currentLang === 'ru'
                                ? 'Проект завершен и выпущен'
                                : 'Project completed and released';
                        break;
                    case 'development':
                        text =
                            this.currentLang === 'ru'
                                ? 'Проект в активной разработке'
                                : 'Project in active development';
                        break;
                    case 'concept':
                        text =
                            this.currentLang === 'ru'
                                ? 'Концепт или прототип'
                                : 'Concept or prototype';
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
            form.addEventListener('submit', e => {
                e.preventDefault();
                // Add your form submission logic here
                alert(
                    this.currentLang === 'ru'
                        ? 'Форма отправки пока не настроена'
                        : 'Form submission not yet configured'
                );
            });
        }
    }

    // Enhanced Custom Cursor Implementation
    initCustomCursor() {
        if (window.innerWidth <= 768) {
            return;
        } // Skip on mobile

        const cursor = document.querySelector('.custom-cursor');
        const follower = document.querySelector('.cursor-follower');

        if (!cursor || !follower) {
            return;
        }

        let mouseX = 0,
            mouseY = 0;
        let followerX = 0,
            followerY = 0;

        // Hide default cursor on body
        document.body.style.cursor = 'none';

        document.addEventListener('mousemove', e => {
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
        const interactiveElements = document.querySelectorAll(
            'a, button, .skill-item, .project-card, .filter-btn'
        );
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
        if (!typingElement) {
            return;
        }

        const jobs = [
            'Unity Developer & C# Programmer',
            'Backend & Game Developer',
            'Specialist Creative Solver'
        ];

        let currentJobIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        const isPaused = false;

        function typeWriter() {
            if (isPaused) {
                return;
            }

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

    // Animate progress bars in Skills on view
    initSkillBars() {
        const bars = document.querySelectorAll('.skill-bar');
        if (!('IntersectionObserver' in window)) {
            bars.forEach(bar => (bar.style.width = (bar.dataset.level || 0) + '%'));
            return;
        }
        const io = new IntersectionObserver(
            entries => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        const bar = e.target;
                        requestAnimationFrame(() => {
                            bar.style.width = (bar.dataset.level || 0) + '%';
                        });
                        io.unobserve(bar);
                    }
                });
            },
            { threshold: 0.4 }
        );
        bars.forEach(bar => {
            bar.style.width = '0%';
            io.observe(bar);
        });
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
        switch (skillType) {
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
        const icon = skillIcon.querySelector('.kotlin-icon');

        if (!parts.length || !icon) return;

        // Phase 1: Separate parts
        parts.forEach((part, index) => {
            const directions = [
                { x: -30, y: -30, rotate: -15 },
                { x: -30, y: 30, rotate: 15 },
                { x: 30, y: 0, rotate: -10 }
            ];
            const dir = directions[index] || { x: 0, y: 0, rotate: 0 };
            
            part.style.transform = `translate(${dir.x}px, ${dir.y}px) rotate(${dir.rotate}deg)`;
            part.style.opacity = '0.7';
            part.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });

        // Phase 2: Reunite parts
        setTimeout(() => {
            parts.forEach((part) => {
                part.style.transform = 'translate(0, 0) rotate(0deg)';
                part.style.opacity = '1';
            });
        }, 450);

        // Phase 3: Complete animation
        setTimeout(() => {
            parts.forEach((part) => {
                part.style.transition = '';
            });
        }, 900);
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
            const hasImage = card.querySelector(
                '.project-image, .project-preview, .project-image-placeholder'
            );
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

    // Project Modal System
    initProjectModals() {
        this.modal = document.getElementById('modal-portal');
        this.modalContainer = this.modal.querySelector('.modal-container');
        this.modalCloseBtn = this.modal.querySelector('.modal-close');
        this.modalOverlay = this.modal.querySelector('.modal-overlay');

        // Focus trap elements
        this.focusableElements = [
            this.modalCloseBtn,
            ...this.modal.querySelectorAll(
                'button:not([disabled]), a[href], input, textarea, select'
            )
        ];

        this.initModalEventListeners();
        this.initProjectClickHandlers();
    }

    initModalEventListeners() {
        // Close modal events
        this.modalCloseBtn.addEventListener('click', () => this.closeModal());
        this.modalOverlay.addEventListener('click', e => {
            if (e.target === this.modalOverlay) {
                this.closeModal();
            }
        });

        // Keyboard events
        document.addEventListener('keydown', e => {
            if (this.modal.classList.contains('active')) {
                if (e.key === 'Escape') {
                    this.closeModal();
                } else if (e.key === 'Tab') {
                    this.handleTabKeyDown(e);
                }
            }
        });

        // Retry button for fallback
        const retryBtn = this.modal.querySelector('.btn-retry');
        retryBtn?.addEventListener('click', () => this.retryDemo());
    }

    initProjectClickHandlers() {
        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach(card => {
            // Make card clickable for modal
            card.style.cursor = 'pointer';
            card.addEventListener('click', e => {
                // Don't open modal if clicking on links or buttons
                if (e.target.closest('a, button')) {
                    return;
                }

                this.openProjectModal(card);
            });

            // Add keyboard support
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', 'Open project details');

            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.openProjectModal(card);
                }
            });
        });
    }

    openProjectModal(projectCard) {
        const projectData = this.extractProjectData(projectCard);
        this.populateModal(projectData);
        this.showModal();
        this.loadProjectDemo(projectData);
    }

    extractProjectData(card) {
        const titleEl = card.querySelector('h3');
        const descEl = card.querySelector('p[data-translate], p:not([data-translate])');
        const statusEl = card.querySelector('.status-ring');
        const tagsElements = card.querySelectorAll('.tag');
        const githubLink = card.querySelector('a[href*="github"]');
        const demoLink = card.querySelector('a.btn-demo:not(.disabled)');

        return {
            title: titleEl?.textContent || 'Project',
            description: descEl?.textContent || 'No description available',
            status: statusEl?.dataset.status || 'unknown',
            tags: Array.from(tagsElements).map(tag => tag.textContent),
            githubUrl: githubLink?.href || null,
            demoUrl: demoLink?.href || null,
            hasDemo: Boolean(demoLink && !demoLink.classList.contains('disabled'))
        };
    }

    populateModal(projectData) {
        // Set title
        this.modal.querySelector('.modal-title').textContent = projectData.title;

        // Set status badge
        const statusBadge = this.modal.querySelector('.modal-status-badge');
        statusBadge.className = `modal-status-badge ${projectData.status}`;
        statusBadge.textContent = this.getStatusText(projectData.status);

        // Set description
        this.modal.querySelector('.modal-project-description').textContent =
            projectData.description;

        // Set tags
        const tagsContainer = this.modal.querySelector('.modal-tags');
        tagsContainer.innerHTML = projectData.tags
            .map(tag => `<span class="tag">${tag}</span>`)
            .join('');

        // Set action buttons
        const githubBtn = this.modal.querySelector('.modal-github-link');
        const demoBtn = this.modal.querySelector('.modal-demo-link');

        if (projectData.githubUrl) {
            githubBtn.href = projectData.githubUrl;
            githubBtn.style.display = 'flex';
        } else {
            githubBtn.style.display = 'none';
        }

        if (projectData.demoUrl && projectData.hasDemo) {
            demoBtn.href = projectData.demoUrl;
            demoBtn.style.display = 'flex';
        } else {
            demoBtn.style.display = 'none';
        }
    }

    getStatusText(status) {
        const statusMap = {
            released: '🟢 Released',
            development: '🟡 In Development',
            concept: '⚪ Concept',
            completed: '✅ Completed'
        };
        return statusMap[status] || '❓ Unknown';
    }

    loadProjectDemo(projectData) {
        const iframe = this.modal.querySelector('.modal-demo-iframe');
        const skeleton = this.modal.querySelector('.modal-skeleton');
        const fallback = this.modal.querySelector('.modal-fallback');

        // Reset states
        iframe.classList.remove('loaded');
        skeleton.style.display = 'flex';
        fallback.classList.add('hidden');

        if (projectData.demoUrl && projectData.hasDemo) {
            // Show skeleton during loading
            setTimeout(() => {
                iframe.src = projectData.demoUrl;

                iframe.onload = () => {
                    skeleton.style.display = 'none';
                    iframe.classList.add('loaded');
                };

                iframe.onerror = () => {
                    this.showFallback();
                };

                // Timeout fallback
                setTimeout(() => {
                    if (!iframe.classList.contains('loaded')) {
                        this.showFallback();
                    }
                }, 10000); // 10 second timeout
            }, 1500); // Show skeleton for 1.5 seconds
        } else {
            // No demo available
            setTimeout(() => {
                skeleton.style.display = 'none';
                fallback.classList.remove('hidden');
                fallback.querySelector('p').textContent = 'Demo not available for this project';
                fallback.querySelector('.btn-retry').style.display = 'none';
            }, 1000);
        }
    }

    showFallback() {
        const skeleton = this.modal.querySelector('.modal-skeleton');
        const fallback = this.modal.querySelector('.modal-fallback');

        skeleton.style.display = 'none';
        fallback.classList.remove('hidden');
        fallback.querySelector('.btn-retry').style.display = 'inline-flex';
    }

    retryDemo() {
        const currentProjectData = {
            demoUrl: this.modal.querySelector('.modal-demo-link').href,
            hasDemo: true
        };
        this.loadProjectDemo(currentProjectData);
    }

    showModal() {
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Set focus to modal container for screen readers
        setTimeout(() => {
            this.modalContainer.focus();
        }, 100);
    }

    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';

        // Clear iframe to stop any loading
        const iframe = this.modal.querySelector('.modal-demo-iframe');
        iframe.src = '';
        iframe.classList.remove('loaded');

        // Reset skeleton state
        const skeleton = this.modal.querySelector('.modal-skeleton');
        skeleton.style.display = 'flex';

        // Hide fallback
        const fallback = this.modal.querySelector('.modal-fallback');
        fallback.classList.add('hidden');
    }

    handleTabKeyDown(e) {
        const firstFocusable = this.focusableElements[0];
        const lastFocusable = this.focusableElements[this.focusableElements.length - 1];

        if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    }

    // Scroll Progress Bar with RAF
    initScrollProgressBar() {
        this.progressBar = document.querySelector('.scroll-progress-bar');
        this.progressFill = document.querySelector('.scroll-progress-fill');

        if (!this.progressBar || !this.progressFill) {
            return;
        }

        this.isProgressBarVisible = false;
        this.lastScrollY = 0;
        this.ticking = false;

        // Use passive scroll listener for better performance
        window.addEventListener(
            'scroll',
            () => {
                this.lastScrollY = window.scrollY;
                if (!this.ticking) {
                    requestAnimationFrame(() => this.updateProgressBar());
                    this.ticking = true;
                }
            },
            { passive: true }
        );

        // Initial call
        this.updateProgressBar();
    }

    updateProgressBar() {
        const scrollTop = this.lastScrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (docHeight <= 0) {
            this.ticking = false;
            return;
        }

        // Calculate scroll percentage
        const scrollPercent = Math.min(Math.max(scrollTop / docHeight, 0), 1);

        // Show/hide progress bar based on scroll position
        const shouldShowBar = scrollTop > 100; // Show after 100px scroll

        if (shouldShowBar !== this.isProgressBarVisible) {
            this.isProgressBarVisible = shouldShowBar;
            this.progressBar.classList.toggle('visible', shouldShowBar);
        }

        // Update progress bar width with RAF
        this.progressFill.style.width = `${scrollPercent * 100}%`;

        this.ticking = false;
    }

    // Performant Parallax with RAF and translate3d (disabled on mobile)
    initPerformantParallax() {
        // Check if device supports parallax and isn't touch-based
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

        if (isMobile || hasCoarsePointer) {
            // Disable parallax on mobile/touch devices
            this.parallaxEnabled = false;
            return;
        }

        this.parallaxEnabled = true;
        this.parallaxElements = {
            navbar: document.querySelector('.navbar'),
            starsBackground: document.querySelector('.stars-background'),
            stars: document.querySelectorAll('.star')
        };

        this.lastParallaxScrollY = 0;
        this.parallaxTicking = false;

        // Use passive scroll listener
        window.addEventListener(
            'scroll',
            () => {
                this.lastParallaxScrollY = window.scrollY;
                if (!this.parallaxTicking) {
                    requestAnimationFrame(() => this.updateParallaxElements());
                    this.parallaxTicking = true;
                }
            },
            { passive: true }
        );

        // Initial call
        this.updateParallaxElements();
    }

    updateParallaxElements() {
        if (!this.parallaxEnabled) {
            return;
        }

        const scrollY = this.lastParallaxScrollY;
        const windowHeight = window.innerHeight;

        // Navbar parallax (subtle movement)
        if (this.parallaxElements.navbar) {
            const navbarOffset = Math.min(scrollY * 0.1, 5); // Very subtle
            this.parallaxElements.navbar.style.transform = `translate3d(0, ${navbarOffset}px, 0)`;
        }

        // Stars background parallax
        if (this.parallaxElements.starsBackground) {
            const backgroundOffset = scrollY * -0.3; // Move opposite to scroll
            const rotationOffset = scrollY * 0.01; // Subtle rotation
            this.parallaxElements.starsBackground.style.transform = `translate3d(0, ${backgroundOffset}px, 0) rotate(${rotationOffset}deg)`;
        }

        // Individual stars parallax
        this.parallaxElements.stars.forEach((star, index) => {
            if (!star) {
                return;
            }

            const speed = 0.2 + index * 0.05; // Varying speeds
            const yOffset = scrollY * -speed;
            const xOffset = Math.sin(scrollY * 0.001 + index) * 10; // Subtle horizontal movement
            const rotation = scrollY * 0.02 * (index + 1); // Different rotation speeds

            star.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0) rotate(${rotation}deg)`;
        });

        this.parallaxTicking = false;
    }

    // Disable/Enable parallax based on media queries
    handleParallaxMediaChange() {
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

        const shouldDisable = isMobile || hasCoarsePointer;

        if (shouldDisable && this.parallaxEnabled) {
            // Disable parallax
            this.parallaxEnabled = false;
            this.resetParallaxElements();
        } else if (!shouldDisable && !this.parallaxEnabled) {
            // Re-enable parallax
            this.parallaxEnabled = true;
        }
    }

    resetParallaxElements() {
        // Reset all parallax transforms
        if (this.parallaxElements.navbar) {
            this.parallaxElements.navbar.style.transform = '';
        }
        if (this.parallaxElements.starsBackground) {
            this.parallaxElements.starsBackground.style.transform = '';
        }
        this.parallaxElements.stars.forEach(star => {
            if (star) {
                star.style.transform = '';
            }
        });
    }

    // GSAP Animations
    initGSAPAnimations() {
        if (typeof gsap === 'undefined') {
            return;
        }

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
        gsap.utils.toArray('section').forEach(section => {
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

        // Parallax effects moved to RAF-based system for better performance
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
            gsap.fromTo(
                card,
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
            const eventsResponse = await fetch(
                'https://api.github.com/users/Leks2000/events?per_page=100'
            );
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
                    updateText =
                        this.currentLang === 'ru'
                            ? `${diffDays} дней назад`
                            : `${diffDays} days ago`;
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
            document.getElementById('last-update').textContent =
                this.currentLang === 'ru' ? 'Недавно' : 'Recently';
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
        document.title =
            lang === 'ru'
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

            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -1;
            }

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
        document.addEventListener('keydown', e => {
            this.userInput.push(e.keyCode);

            if (this.userInput.length > this.konamiCode.length) {
                this.userInput.shift();
            }

            if (
                this.userInput.length === this.konamiCode.length &&
                this.userInput.every((code, index) => code === this.konamiCode[index])
            ) {
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

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Optional enhancements
    if (window.innerWidth > 768) {
        // Only on desktop
        new ParticleSystem();
    }

    new EasterEgg();
});

// Performance optimization for mobile
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
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

/* ============================
   FRAMER MOTION INTEGRATION - Play-to-End Animations
   ============================ */

class FramerMotionController {
    constructor() {
        this.motion = window.Motion || window.FramerMotion;
        this.animationQueue = [];
        this.isPlaying = false;
        this.init();
    }

    init() {
        if (this.motion) {
            this.initScrollAnimations();
            this.initHoverAnimations();
            this.initProjectCardAnimations();
            this.initSkillsAnimations();
            this.initBotCardAnimations();
        } else {
            console.warn('Framer Motion not loaded, using fallback animations');
            this.initFallbackAnimations();
        }
    }

    // Play-to-end animation system
    playToEndAnimation(element, animation, options = {}) {
        return new Promise(resolve => {
            const { duration = 0.6, ease = 'easeOut' } = options;

            if (this.motion) {
                this.motion.animate(element, animation, {
                    duration,
                    ease,
                    onComplete: resolve
                });
            } else {
                // Fallback CSS animation
                element.style.transition = `all ${duration}s ${ease}`;
                Object.assign(element.style, animation);
                setTimeout(resolve, duration * 1000);
            }
        });
    }

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '-50px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateOnScroll(entry.target);
                }
            });
        }, observerOptions);

        // Observe project cards, skill items, and other animated elements
        document
            .querySelectorAll('.project-card, .modern-skill-item, .skill-category-modern')
            .forEach(el => {
                observer.observe(el);
            });
    }

    animateOnScroll(element) {
        const animations = {
            '.project-card': {
                y: [50, 0],
                opacity: [0, 1],
                scale: [0.9, 1]
            },
            '.modern-skill-item': {
                x: [-30, 0],
                opacity: [0, 1]
            },
            '.skill-category-modern': {
                y: [30, 0],
                opacity: [0, 1]
            }
        };

        const selector = Object.keys(animations).find(sel => element.matches(sel));
        if (selector) {
            this.playToEndAnimation(element, animations[selector], {
                duration: 0.8,
                ease: 'easeOut'
            });
        }
    }

    initHoverAnimations() {
        // Enhanced hover animations for project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.playToEndAnimation(
                    card,
                    {
                        y: -8,
                        scale: 1.02
                    },
                    { duration: 0.3 }
                );
            });

            card.addEventListener('mouseleave', () => {
                this.playToEndAnimation(
                    card,
                    {
                        y: 0,
                        scale: 1
                    },
                    { duration: 0.3 }
                );
            });
        });

        // Bot card animations
        document.querySelectorAll('.bot-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                this.playToEndAnimation(
                    card,
                    {
                        y: -8,
                        rotateX: 5
                    },
                    { duration: 0.4 }
                );
            });

            card.addEventListener('mouseleave', () => {
                this.playToEndAnimation(
                    card,
                    {
                        y: 0,
                        rotateX: 0
                    },
                    { duration: 0.4 }
                );
            });
        });
    }

    initProjectCardAnimations() {
        // Stagger animation for project grid
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                this.playToEndAnimation(
                    card,
                    {
                        opacity: [0, 1],
                        y: [30, 0]
                    },
                    {
                        duration: 0.6,
                        ease: 'easeOut'
                    }
                );
            }, index * 100);
        });
    }

    initSkillsAnimations() {
        // Progressive skill bar animations
        const skillBars = document.querySelectorAll('.progress-bar-modern');

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const bar = entry.target;
                        const progress = bar.getAttribute('data-progress');

                        this.playToEndAnimation(
                            bar,
                            {
                                width: `${progress}%`
                            },
                            {
                                duration: 1.5,
                                ease: 'easeOut'
                            }
                        );
                    }
                });
            },
            { threshold: 0.5 }
        );

        skillBars.forEach(bar => observer.observe(bar));
    }

    initBotCardAnimations() {
        // Special animations for bot cards
        document.querySelectorAll('.bot-avatar').forEach(avatar => {
            avatar.addEventListener('click', () => {
                this.playToEndAnimation(
                    avatar,
                    {
                        rotate: 360,
                        scale: [1, 1.2, 1]
                    },
                    { duration: 0.8 }
                );
            });
        });
    }

    initFallbackAnimations() {
        // CSS-based fallback animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInUp {
                from { transform: translateY(30px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            @keyframes slideInLeft {
                from { transform: translateX(-30px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            .animate-slide-up { animation: slideInUp 0.6s ease-out forwards; }
            .animate-slide-left { animation: slideInLeft 0.6s ease-out forwards; }
        `;
        document.head.appendChild(style);
    }
}

/* ============================
   SKELETON LOADERS SYSTEM
   ============================ */

class SkeletonLoader {
    constructor() {
        this.skeletons = {};
        this.init();
    }

    init() {
        this.createSkeletonComponents();
        this.setupIntersectionObserver();
    }

    createSkeletonComponents() {
        // 1. Project Card Skeleton
        this.skeletons.projectCard = this.createProjectCardSkeleton();

        // 2. Skill Item Skeleton
        this.skeletons.skillItem = this.createSkillItemSkeleton();

        // 3. Bot Card Skeleton
        this.skeletons.botCard = this.createBotCardSkeleton();

        // 4. Navigation Skeleton
        this.skeletons.navigation = this.createNavigationSkeleton();

        // 5. Hero Section Skeleton
        this.skeletons.hero = this.createHeroSkeleton();

        // 6. Profile Card Skeleton
        this.skeletons.profile = this.createProfileSkeleton();

        // 7. Video Card Skeleton
        this.skeletons.video = this.createVideoSkeleton();

        // 8. GitHub API Widget Skeleton
        this.skeletons.github = this.createGitHubSkeleton();
    }

    createProjectCardSkeleton() {
        return `
            <div class="skeleton-project-card">
                <div class="skeleton skeleton-image"></div>
                <div class="skeleton-content">
                    <div class="skeleton skeleton-title"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text short"></div>
                    <div class="skeleton-tags">
                        <div class="skeleton skeleton-tag"></div>
                        <div class="skeleton skeleton-tag"></div>
                        <div class="skeleton skeleton-tag"></div>
                    </div>
                    <div class="skeleton skeleton-button"></div>
                </div>
            </div>
        `;
    }

    createSkillItemSkeleton() {
        return `
            <div class="skeleton-skill-item">
                <div class="skeleton skeleton-icon"></div>
                <div class="skeleton-skill-content">
                    <div class="skeleton skeleton-skill-name"></div>
                    <div class="skeleton skeleton-progress-bar"></div>
                </div>
            </div>
        `;
    }

    createBotCardSkeleton() {
        return `
            <div class="skeleton-bot-card">
                <div class="skeleton-bot-header">
                    <div class="skeleton skeleton-avatar"></div>
                    <div class="skeleton-bot-info">
                        <div class="skeleton skeleton-bot-title"></div>
                        <div class="skeleton skeleton-bot-desc"></div>
                        <div class="skeleton-bot-tags">
                            <div class="skeleton skeleton-tag"></div>
                            <div class="skeleton skeleton-tag"></div>
                        </div>
                    </div>
                    <div class="skeleton skeleton-button"></div>
                </div>
            </div>
        `;
    }

    createNavigationSkeleton() {
        return `
            <div class="skeleton-nav">
                <div class="skeleton skeleton-logo"></div>
                <div class="skeleton-nav-items">
                    <div class="skeleton skeleton-nav-item"></div>
                    <div class="skeleton skeleton-nav-item"></div>
                    <div class="skeleton skeleton-nav-item"></div>
                    <div class="skeleton skeleton-nav-item"></div>
                </div>
            </div>
        `;
    }

    createHeroSkeleton() {
        return `
            <div class="skeleton-hero">
                <div class="skeleton skeleton-hero-title"></div>
                <div class="skeleton skeleton-hero-subtitle"></div>
                <div class="skeleton skeleton-hero-desc"></div>
                <div class="skeleton-hero-stats">
                    <div class="skeleton skeleton-stat"></div>
                    <div class="skeleton skeleton-stat"></div>
                    <div class="skeleton skeleton-stat"></div>
                </div>
            </div>
        `;
    }

    createProfileSkeleton() {
        return `
            <div class="skeleton-profile">
                <div class="skeleton skeleton-profile-photo"></div>
                <div class="skeleton skeleton-profile-name"></div>
                <div class="skeleton skeleton-profile-title"></div>
                <div class="skeleton-profile-links">
                    <div class="skeleton skeleton-profile-link"></div>
                    <div class="skeleton skeleton-profile-link"></div>
                    <div class="skeleton skeleton-profile-link"></div>
                </div>
            </div>
        `;
    }

    createVideoSkeleton() {
        return `
            <div class="skeleton-video">
                <div class="skeleton skeleton-video-thumb"></div>
                <div class="skeleton-video-info">
                    <div class="skeleton skeleton-video-title"></div>
                    <div class="skeleton skeleton-video-desc"></div>
                </div>
            </div>
        `;
    }

    createGitHubSkeleton() {
        return `
            <div class="skeleton-github">
                <div class="skeleton skeleton-github-header"></div>
                <div class="skeleton-github-repos">
                    <div class="skeleton skeleton-repo"></div>
                    <div class="skeleton skeleton-repo"></div>
                    <div class="skeleton skeleton-repo"></div>
                </div>
            </div>
        `;
    }

    showSkeleton(container, type) {
        if (this.skeletons[type]) {
            container.innerHTML = this.skeletons[type];
            container.classList.add('skeleton-container');
        }
    }

    hideSkeleton(container, content) {
        container.classList.remove('skeleton-container');
        container.innerHTML = content;
    }

    setupIntersectionObserver() {
        // Lazy loading with skeleton loaders
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        const skeletonType = element.dataset.skeleton;

                        if (skeletonType) {
                            this.loadContentWithSkeleton(element, skeletonType);
                            observer.unobserve(element);
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[data-skeleton]').forEach(el => {
            observer.observe(el);
        });
    }

    loadContentWithSkeleton(element, type) {
        // Show skeleton
        this.showSkeleton(element, type);

        // Simulate loading time
        setTimeout(
            () => {
                // Hide skeleton and show content
                this.hideSkeleton(element, element.dataset.originalContent || '');
            },
            800 + Math.random() * 400
        );
    }
}

/* ============================
   ENHANCED MODAL SYSTEM WITH PORTALS
   ============================ */

class ModalManager {
    constructor() {
        this.activeModal = null;
        this.focusTrap = null;
        this.portalContainer = document.getElementById('modal-portal');
        this.init();
    }

    init() {
        this.setupPortal();
        this.setupEventListeners();
        this.setupKeyboardNavigation();
    }

    setupPortal() {
        if (!this.portalContainer) {
            this.portalContainer = document.createElement('div');
            this.portalContainer.id = 'modal-portal';
            this.portalContainer.className = 'modal-portal';
            document.body.appendChild(this.portalContainer);
        }
    }

    setupEventListeners() {
        // Close modal on overlay click
        this.portalContainer.addEventListener('click', e => {
            if (e.target.classList.contains('modal-overlay')) {
                this.closeModal();
            }
        });

        // Close modal button
        document.addEventListener('click', e => {
            if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close')) {
                this.closeModal();
            }
        });

        // Project card click handlers
        document.addEventListener('click', e => {
            const projectCard = e.target.closest('.project-card');
            if (projectCard && !e.target.closest('a, button')) {
                e.preventDefault();
                this.openProjectModal(projectCard);
            }
        });
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', e => {
            if (this.activeModal) {
                switch (e.key) {
                    case 'Escape':
                        this.closeModal();
                        break;
                    case 'Tab':
                        this.handleTabNavigation(e);
                        break;
                }
            }
        });
    }

    handleTabNavigation(e) {
        if (!this.activeModal) {
            return;
        }

        const focusableElements = this.activeModal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    }

    openProjectModal(projectCard) {
        const projectData = this.extractProjectData(projectCard);
        const modalHTML = this.generateModalHTML(projectData);

        this.portalContainer.innerHTML = modalHTML;
        this.activeModal = this.portalContainer.querySelector('.modal-overlay');

        // Setup focus trap
        this.setupFocusTrap();

        // Show modal with animation
        requestAnimationFrame(() => {
            this.portalContainer.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Load demo iframe if available
        this.loadDemoContent(projectData);
    }

    extractProjectData(card) {
        return {
            title: card.querySelector('h3')?.textContent || 'Project',
            description: card.querySelector('p')?.textContent || '',
            tags: Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent),
            githubUrl: card.querySelector('.btn-code')?.href || '',
            demoUrl: card.querySelector('.btn-demo')?.href || '',
            imageUrl: card.querySelector('.project-image')?.src || '',
            status: this.extractStatus(card)
        };
    }

    extractStatus(card) {
        const statusElement = card.querySelector('.status-text');
        return statusElement ? statusElement.textContent : 'Unknown';
    }

    generateModalHTML(data) {
        return `
            <div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <div class="modal-container" tabindex="-1">
                    <button class="modal-close" aria-label="Close modal" type="button">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 id="modal-title" class="modal-title">${data.title}</h2>
                            <div class="modal-status">
                                <span class="modal-status-badge">${data.status}</span>
                            </div>
                        </div>
                        <div class="modal-body">
                            <div class="modal-demo-container">
                                <div class="modal-skeleton">
                                    <div class="skeleton skeleton-demo"></div>
                                    <div class="modal-skeleton-text">
                                        <div class="skeleton skeleton-text"></div>
                                        <div class="skeleton skeleton-text short"></div>
                                    </div>
                                </div>
                                <iframe class="modal-demo-iframe" 
                                        frameborder="0" 
                                        allowfullscreen 
                                        title="Project Demo"
                                        src="${data.demoUrl}">
                                </iframe>
                                <div class="modal-fallback hidden">
                                    <div class="fallback-content">
                                        <i class="fas fa-exclamation-triangle"></i>
                                        <p>Не удалось загрузить демо</p>
                                        <button class="btn btn-retry" type="button">
                                            <i class="fas fa-redo"></i>
                                            <span>Попробовать снова</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-description">
                                <p class="modal-project-description">${data.description}</p>
                                <div class="modal-tags">
                                    ${data.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                </div>
                            </div>
                            <div class="modal-actions">
                                ${
                                    data.githubUrl
                                        ? `
                                    <a class="btn btn-code modal-github-link" 
                                       href="${data.githubUrl}" 
                                       target="_blank" rel="noopener noreferrer">
                                        <i class="fab fa-github"></i>
                                        <span>Код</span>
                                    </a>
                                `
                                        : ''
                                }
                                ${
                                    data.demoUrl
                                        ? `
                                    <a class="btn btn-demo modal-demo-link" 
                                       href="${data.demoUrl}" 
                                       target="_blank" rel="noopener noreferrer">
                                        <i class="fas fa-external-link-alt"></i>
                                        <span>Демо</span>
                                    </a>
                                `
                                        : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    loadDemoContent(data) {
        const iframe = this.portalContainer.querySelector('.modal-demo-iframe');
        const skeleton = this.portalContainer.querySelector('.modal-skeleton');
        const fallback = this.portalContainer.querySelector('.modal-fallback');

        if (!data.demoUrl || !iframe) {
            skeleton.style.display = 'none';
            fallback.classList.remove('hidden');
            return;
        }

        const timeoutId = setTimeout(() => {
            skeleton.style.display = 'none';
            fallback.classList.remove('hidden');
        }, 10000);

        iframe.onload = () => {
            clearTimeout(timeoutId);
            skeleton.style.display = 'none';
            iframe.style.display = 'block';
        };

        iframe.onerror = () => {
            clearTimeout(timeoutId);
            skeleton.style.display = 'none';
            fallback.classList.remove('hidden');
        };
    }

    setupFocusTrap() {
        const firstFocusable = this.activeModal.querySelector('button, [href], input');
        if (firstFocusable) {
            firstFocusable.focus();
        }
    }

    closeModal() {
        if (this.activeModal) {
            this.portalContainer.classList.remove('active');
            document.body.style.overflow = '';

            setTimeout(() => {
                this.portalContainer.innerHTML = '';
                this.activeModal = null;
            }, 300);
        }
    }
}

/* ============================
   LAZY LOADING WITH SRCSET
   ============================ */

class LazyLoader {
    constructor() {
        this.imageObserver = null;
        this.init();
    }

    init() {
        this.setupImageObserver();
        this.setupSrcsetSupport();
    }

    setupImageObserver() {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };

        this.imageObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                    this.imageObserver.unobserve(entry.target);
                }
            });
        }, options);

        // Observe all images with data-src
        document.querySelectorAll('img[data-src], img[data-srcset]').forEach(img => {
            this.imageObserver.observe(img);
        });
    }

    setupSrcsetSupport() {
        // Convert regular images to responsive ones
        document.querySelectorAll('.project-image').forEach(img => {
            if (!img.hasAttribute('data-src') && img.src) {
                const originalSrc = img.src;

                // Create responsive srcset
                const srcset = this.generateSrcset(originalSrc);
                img.setAttribute('data-srcset', srcset);
                img.setAttribute('data-src', originalSrc);
                img.setAttribute(
                    'data-sizes',
                    '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px'
                );

                // Replace with placeholder
                img.src = this.generatePlaceholder(400, 250);

                this.imageObserver.observe(img);
            }
        });
    }

    generateSrcset(originalSrc) {
        // Generate different sizes for responsive loading
        const baseUrl = originalSrc.split('?')[0];
        return `
            ${baseUrl}?w=400 400w,
            ${baseUrl}?w=800 800w,
            ${baseUrl}?w=1200 1200w
        `.trim();
    }

    generatePlaceholder(width, height) {
        // Generate SVG placeholder
        return `data:image/svg+xml;base64,${btoa(`
            <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#1a1a28;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#2a2a3a;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#gradient)"/>
                <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#7575a0" 
                      text-anchor="middle" dy=".3em">Загрузка...</text>
            </svg>
        `)}`;
    }

    loadImage(img) {
        // Add skeleton loading effect
        img.classList.add('loading');

        const tempImg = new Image();

        tempImg.onload = () => {
            // Update src and srcset
            if (img.hasAttribute('data-srcset')) {
                img.srcset = img.getAttribute('data-srcset');
                img.sizes = img.getAttribute('data-sizes') || '100vw';
            }

            if (img.hasAttribute('data-src')) {
                img.src = img.getAttribute('data-src');
            }

            // Remove loading class with animation
            img.classList.remove('loading');
            img.classList.add('loaded');
        };

        tempImg.onerror = () => {
            img.classList.remove('loading');
            img.classList.add('error');
        };

        // Start loading
        tempImg.src = img.getAttribute('data-src');
    }
}

/* ============================
   GITHUB API INTEGRATION WITH CACHING
   ============================ */

class GitHubIntegration {
    constructor() {
        this.username = 'Leks2000';
        this.cacheDuration = 10 * 60 * 1000; // 10 minutes
        this.apiUrl = `https://api.github.com/users/${this.username}`;
        this.init();
    }

    init() {
        this.loadGitHubData();
        this.setupRefreshButton();
    }

    async loadGitHubData() {
        const cachedData = this.getCachedData();

        if (cachedData && !this.isCacheExpired(cachedData.timestamp)) {
            this.renderGitHubWidget(cachedData.data);
            return;
        }

        try {
            const [userData, reposData] = await Promise.all([
                this.fetchWithRetry(`${this.apiUrl}`),
                this.fetchWithRetry(`${this.apiUrl}/repos?sort=updated&per_page=6`)
            ]);

            const data = {
                user: userData,
                repos: reposData
            };

            this.cacheData(data);
            this.renderGitHubWidget(data);
        } catch (error) {
            console.error('Failed to load GitHub data:', error);
            this.renderErrorWidget();
        }
    }

    async fetchWithRetry(url, maxRetries = 3) {
        for (let i = 0; i < maxRetries; i++) {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                return await response.json();
            } catch (error) {
                if (i === maxRetries - 1) {
                    throw error;
                }
                await this.delay(1000 * Math.pow(2, i)); // Exponential backoff
            }
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getCachedData() {
        try {
            const cached = localStorage.getItem('github_data');
            return cached ? JSON.parse(cached) : null;
        } catch (error) {
            return null;
        }
    }

    cacheData(data) {
        try {
            localStorage.setItem(
                'github_data',
                JSON.stringify({
                    data,
                    timestamp: Date.now()
                })
            );
        } catch (error) {
            console.warn('Failed to cache GitHub data:', error);
        }
    }

    isCacheExpired(timestamp) {
        return Date.now() - timestamp > this.cacheDuration;
    }

    renderGitHubWidget(data) {
        // Update stat cards
        const repoCount = document.getElementById('repo-count');
        const totalCommits = document.getElementById('total-commits');
        const lastUpdate = document.getElementById('last-update');

        if (repoCount) {
            repoCount.textContent = data.user.public_repos || '-';
        }

        // Calculate estimated commits from repos
        const estimatedCommits = Math.floor(data.user.public_repos * 25); // Rough estimate
        if (totalCommits) {
            totalCommits.textContent = estimatedCommits + '+';
        }

        // Format last update
        if (lastUpdate && data.repos.length > 0) {
            const lastRepo = data.repos[0]; // Most recently updated
            const updateDate = new Date(lastRepo.updated_at);
            const now = new Date();
            const diffDays = Math.floor((now - updateDate) / (1000 * 60 * 60 * 24));

            let updateText;
            if (diffDays === 0) {
                updateText = 'Сегодня';
            } else if (diffDays === 1) {
                updateText = 'Вчера';
            } else if (diffDays < 7) {
                updateText = `${diffDays} дн. назад`;
            } else {
                updateText = 'Недавно';
            }

            lastUpdate.textContent = updateText;
        }

        // Render detailed widget
        const container = document.getElementById('github-widget');
        if (!container) {
            return;
        }

        container.innerHTML = `
            <div class="github-widget">
                <div class="github-header">
                    <div class="github-avatar">
                        <img src="${data.user.avatar_url}" alt="${data.user.name}" loading="lazy">
                    </div>
                    <div class="github-info">
                        <h3>${data.user.name || data.user.login}</h3>
                        <p>@${data.user.login}</p>
                        <div class="github-stats">
                            <span><i class="fas fa-code-branch"></i> ${data.user.public_repos} repos</span>
                            <span><i class="fas fa-users"></i> ${data.user.followers} followers</span>
                        </div>
                    </div>
                    <button class="github-refresh" onclick="gitHubIntegration.loadGitHubData()">
                        <i class="fas fa-sync-alt"></i>
                    </button>
                </div>
                <div class="github-repos">
                    ${data.repos
                        .map(
                            repo => `
                        <div class="github-repo">
                            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                                <h4>${repo.name}</h4>
                                <p>${repo.description || 'No description'}</p>
                                <div class="repo-stats">
                                    <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                                    <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                                    ${repo.language ? `<span class="repo-language">${repo.language}</span>` : ''}
                                </div>
                            </a>
                        </div>
                    `
                        )
                        .join('')}
                </div>
            </div>
        `;
    }

    renderErrorWidget() {
        // Set fallback values for stat cards
        const repoCount = document.getElementById('repo-count');
        const totalCommits = document.getElementById('total-commits');
        const lastUpdate = document.getElementById('last-update');

        if (repoCount) {
            repoCount.textContent = '20+';
        }
        if (totalCommits) {
            totalCommits.textContent = '500+';
        }
        if (lastUpdate) {
            lastUpdate.textContent = 'Недавно';
        }

        const container = document.getElementById('github-widget');
        if (!container) {
            return;
        }

        container.innerHTML = `
            <div class="github-widget error">
                <div class="github-error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <p>Failed to load GitHub data</p>
                    <button class="btn btn-retry" onclick="gitHubIntegration.loadGitHubData()">
                        <i class="fas fa-redo"></i> Retry
                    </button>
                </div>
            </div>
        `;
    }

    setupRefreshButton() {
        // Auto-refresh every 5 minutes when page is active
        setInterval(
            () => {
                if (document.visibilityState === 'visible') {
                    this.loadGitHubData();
                }
            },
            5 * 60 * 1000
        );
    }
}

/* ============================
   PERFORMANCE OPTIMIZED FILTERS
   ============================ */

class OptimizedFilters {
    constructor() {
        this.projectsData = [];
        this.activeFilter = 'top';
        this.isAnimating = false;
        this.init();
    }

    init() {
        this.cacheProjectsData();
        this.setupFilterButtons();
        this.setupSearchFeature();
        this.optimizeInitialRender();
    }

    cacheProjectsData() {
        // Cache all project data for instant filtering
        const projects = document.querySelectorAll('.project-card');
        this.projectsData = Array.from(projects).map(card => ({
            element: card,
            category: card.getAttribute('data-category'),
            isTop: card.getAttribute('data-top') === 'true',
            title: card.querySelector('h3')?.textContent.toLowerCase() || '',
            tags: Array.from(card.querySelectorAll('.tag')).map(tag =>
                tag.textContent.toLowerCase()
            )
        }));
    }

    setupFilterButtons() {
        const filterButtons = document.querySelectorAll('.filter-btn');

        filterButtons.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                const filter = btn.getAttribute('data-filter');
                this.applyFilter(filter);
                this.updateActiveButton(btn);
            });
        });
    }

    setupSearchFeature() {
        // Add search functionality
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Поиск проектов...';
        searchInput.className = 'project-search';

        const filtersContainer = document.querySelector('.project-filters');
        filtersContainer.appendChild(searchInput);

        // Debounced search
        let searchTimeout;
        searchInput.addEventListener('input', e => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.applySearch(e.target.value);
            }, 300);
        });
    }

    applyFilter(filter) {
        if (this.isAnimating || filter === this.activeFilter) {
            return;
        }

        this.isAnimating = true;
        this.activeFilter = filter;

        // Use RequestAnimationFrame for smooth animations
        requestAnimationFrame(() => {
            const visibleProjects = this.projectsData.filter(project => {
                switch (filter) {
                    case 'all':
                        return true;
                    case 'top':
                        return project.isTop;
                    default:
                        return project.category === filter;
                }
            });

            this.animateFilterTransition(visibleProjects);
        });
    }

    applySearch(searchTerm) {
        const term = searchTerm.toLowerCase().trim();

        if (!term) {
            this.applyFilter(this.activeFilter);
            return;
        }

        const matchingProjects = this.projectsData.filter(project => {
            return project.title.includes(term) || project.tags.some(tag => tag.includes(term));
        });

        this.animateFilterTransition(matchingProjects);
    }

    animateFilterTransition(visibleProjects) {
        const allProjects = this.projectsData.map(p => p.element);
        const visibleElements = visibleProjects.map(p => p.element);

        // Hide non-matching projects
        allProjects.forEach((element, index) => {
            const isVisible = visibleElements.includes(element);

            if (isVisible) {
                element.style.display = 'block';
                element.style.animation = `slideInUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.05}s forwards`;
            } else {
                element.style.animation = 'slideOutDown 0.3s ease-in forwards';
                setTimeout(() => {
                    element.style.display = 'none';
                }, 300);
            }
        });

        // Reset animation flag
        setTimeout(() => {
            this.isAnimating = false;
        }, 600);
    }

    updateActiveButton(activeBtn) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }

    optimizeInitialRender() {
        // Apply initial filter without animation
        this.applyFilter('top');

        // Preload filter animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideOutDown {
                from { transform: translateY(0); opacity: 1; }
                to { transform: translateY(30px); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

/* ============================
   INITIALIZE ALL SYSTEMS
   ============================ */

// Initialize all new systems when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Framer Motion Controller
    window.framerMotionController = new FramerMotionController();

    // Initialize Skeleton Loader System
    window.skeletonLoader = new SkeletonLoader();

    // Initialize Enhanced Modal System
    window.modalManager = new ModalManager();

    // Initialize Lazy Loading
    window.lazyLoader = new LazyLoader();

    // Initialize GitHub Integration
    window.gitHubIntegration = new GitHubIntegration();

    // Initialize Optimized Filters
    window.optimizedFilters = new OptimizedFilters();

    console.log('🚀 Enhanced Portfolio Systems Initialized');
});
