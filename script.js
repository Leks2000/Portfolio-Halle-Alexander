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

        // Show top projects by default
        this.filterProjects('top', projectCards);

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
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 100);
            } else {
                card.classList.add('filtered-out', 'hidden');
                card.classList.remove('visible');
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

    // New Skills Grid Initialization
    initAnimatedSkills() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const skillType = item.dataset.skill;
                this.triggerNewSkillAnimation(skillType, item);
            });
        });
    }

    triggerNewSkillAnimation(skillType, element) {
        // Enhanced animations with custom JavaScript triggers
        switch(skillType) {
            case 'csharp':
                this.triggerCSharpAnimation(element);
                break;
            case 'kotlin':
                this.triggerKotlinAnimation(element);
                break;
            case 'unity':
                this.triggerUnityAnimation(element);
                break;
            default:
                console.log(`Animation triggered for ${skillType}`);
        }
    }

    triggerCSharpAnimation(element) {
        const sparks = element.querySelectorAll('.spark');
        sparks.forEach((spark, index) => {
            setTimeout(() => {
                spark.style.animation = 'none';
                spark.offsetHeight; // Trigger reflow
                spark.style.animation = 'sparkAppear 1.2s ease-out';
            }, index * 200);
        });
    }

    triggerKotlinAnimation(element) {
        const parts = element.querySelectorAll('.kotlin-part');
        parts.forEach((part, index) => {
            setTimeout(() => {
                part.style.animation = 'none';
                part.offsetHeight; // Trigger reflow
                part.style.animation = `kotlinSplit${index + 1} 1.5s ease-in-out`;
            }, index * 100);
        });
    }

    triggerUnityAnimation(element) {
        const cube = element.querySelector('.unity-cube');
        if (cube) {
            cube.style.animation = 'none';
            cube.offsetHeight; // Trigger reflow
            cube.style.animation = 'unityRotate 2s ease-in-out';
        }
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

        // Smooth section transitions with enhanced effects
        gsap.utils.toArray('section').forEach((section, index) => {
            gsap.fromTo(section, 
                {
                    opacity: 0.7,
                    y: 80,
                    scale: 0.95
                },
                {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 90%',
                        end: 'bottom 10%',
                        scrub: 2,
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.5,
                    ease: 'power2.out'
                }
            );
        });

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