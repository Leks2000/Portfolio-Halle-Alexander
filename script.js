// Utility Functions
class PortfolioAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.initNavbar();
        this.initMobileMenu();
        this.initScrollAnimations();
        this.initSkillBars();
        this.initTypewriter();
        this.initParticles();
        this.initContactForm();
        this.initSmoothScroll();
        this.initThemeEffects();
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

    // Intersection Observer for animations
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Special handling for skill bars
                    if (entry.target.classList.contains('skills')) {
                        this.animateSkillBars();
                    }
                    
                    // Special handling for stats
                    if (entry.target.classList.contains('hero-stats')) {
                        this.animateStats();
                    }
                }
            });
        }, observerOptions);

        // Observe sections for animations
        document.querySelectorAll('section, .project-card, .skill-category, .contact-card').forEach(el => {
            observer.observe(el);
        });
    }

    // Skill bars animation
    initSkillBars() {
        // Will be triggered by scroll animation
    }

    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach((bar, index) => {
            const level = bar.getAttribute('data-level');
            setTimeout(() => {
                bar.style.width = level + '%';
            }, index * 100);
        });
    }

    // Stats counter animation
    animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.textContent.replace('+', ''));
            let current = 0;
            const increment = target / 30; // 30 frames
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = Math.ceil(current) + (stat.textContent.includes('+') ? '+' : '');
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
                }
            };
            
            updateCounter();
        });
    }

    // Typewriter effect for hero subtitle
    initTypewriter() {
        const subtitle = document.querySelector('.hero-subtitle');
        if (!subtitle) return;

        const originalText = subtitle.textContent;
        const texts = [
            'Unity Developer & C# Programmer',
            'Game Developer & Backend Specialist',
            'Creative Problem Solver',
            'Unity Developer & C# Programmer'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typeWriter = () => {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                subtitle.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                subtitle.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            setTimeout(typeWriter, typeSpeed);
        };

        // Start typewriter after a delay
        setTimeout(typeWriter, 1000);
    }

    // Dynamic particles effect
    initParticles() {
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: fixed;
                width: 2px;
                height: 2px;
                background: rgba(0, 212, 255, 0.6);
                border-radius: 50%;
                pointer-events: none;
                z-index: -1;
                animation: float-particle 6s linear forwards;
            `;
            
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = window.innerHeight + 'px';
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 6000);
        };

        // Add particle animation CSS
        if (!document.querySelector('#particle-styles')) {
            const style = document.createElement('style');
            style.id = 'particle-styles';
            style.textContent = `
                @keyframes float-particle {
                    to {
                        transform: translateY(-${window.innerHeight + 100}px) translateX(${Math.random() * 200 - 100}px);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // Create particles periodically
        setInterval(createParticle, 3000);
    }

    // Contact form handling
    initContactForm() {
        const form = document.querySelector('.message-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Simple form validation
            if (!data.name || !data.email || !data.message) {
                this.showNotification('Пожалуйста, заполните все поля', 'error');
                return;
            }
            
            // Simulate form submission
            this.showNotification('Сообщение отправлено! Спасибо за обращение.', 'success');
            form.reset();
        });
    }

    // Notification system
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 2rem;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            border-radius: 8px;
            z-index: 9999;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Theme effects
    initThemeEffects() {
        // Mouse follow effect
        this.initMouseFollower();
        
        // Parallax effect
        this.initParallax();
        
        // Unity logo rotation on scroll
        this.initUnityLogoEffects();
    }

    initMouseFollower() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid rgba(0, 212, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
            backdrop-filter: blur(2px);
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });

        // Hover effects for interactive elements
        document.querySelectorAll('a, button, .btn, .project-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.background = 'rgba(0, 212, 255, 0.1)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'transparent';
            });
        });
    }

    initParallax() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.unity-logo, .stars-background');
            
            parallaxElements.forEach(el => {
                const speed = 0.5;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    initUnityLogoEffects() {
        const unityCube = document.querySelector('.unity-cube');
        if (!unityCube) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rotation = scrolled * 0.5;
            unityCube.style.transform = `rotateX(${rotation}deg) rotateY(${rotation}deg)`;
        });
    }
}

// Project interaction handlers
class ProjectManager {
    constructor() {
        this.initProjectCards();
    }

    initProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', this.handleProjectHover);
            card.addEventListener('mouseleave', this.handleProjectLeave);
        });
    }

    handleProjectHover(e) {
        const card = e.currentTarget;
        card.style.transform = 'translateY(-10px) scale(1.02)';
        
        // Add glow effect
        const glowOverlay = document.createElement('div');
        glowOverlay.className = 'project-glow';
        glowOverlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(108, 92, 231, 0.1));
            border-radius: 15px;
            pointer-events: none;
        `;
        
        card.style.position = 'relative';
        card.appendChild(glowOverlay);
    }

    handleProjectLeave(e) {
        const card = e.currentTarget;
        card.style.transform = 'translateY(0) scale(1)';
        
        const glow = card.querySelector('.project-glow');
        if (glow) {
            glow.remove();
        }
    }
}

// Performance optimization
class PerformanceOptimizer {
    constructor() {
        this.throttleScrollEvents();
        this.lazyLoadImages();
    }

    throttleScrollEvents() {
        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    // Scroll-dependent functions here
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Easter eggs and fun interactions
class EasterEggs {
    constructor() {
        this.initKonamiCode();
        this.initClickEffects();
    }

    initKonamiCode() {
        const konamiCode = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];
        
        let konamiIndex = 0;
        
        document.addEventListener('keydown', (e) => {
            if (e.code === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    this.activateUnityMode();
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });
    }

    activateUnityMode() {
        document.body.style.filter = 'hue-rotate(180deg)';
        
        // Create floating Unity logos
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const logo = document.createElement('div');
                logo.innerHTML = '🎮';
                logo.style.cssText = `
                    position: fixed;
                    font-size: 2rem;
                    z-index: 9999;
                    pointer-events: none;
                    animation: float-away 3s ease-out forwards;
                `;
                logo.style.left = Math.random() * window.innerWidth + 'px';
                logo.style.top = Math.random() * window.innerHeight + 'px';
                
                document.body.appendChild(logo);
                
                setTimeout(() => logo.remove(), 3000);
            }, i * 200);
        }
        
        // Reset after 5 seconds
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 5000);
    }

    initClickEffects() {
        document.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                border: 2px solid rgba(0, 212, 255, 0.6);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9998;
                animation: ripple-effect 0.6s ease-out forwards;
            `;
            
            ripple.style.left = (e.clientX - 10) + 'px';
            ripple.style.top = (e.clientY - 10) + 'px';
            
            document.body.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    }
}

// Add additional CSS animations
const additionalStyles = `
    @keyframes ripple-effect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes float-away {
        to {
            transform: translateY(-200px) rotate(360deg);
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-link.active {
        color: var(--unity-blue);
        text-shadow: var(--glow-primary);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add additional styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = additionalStyles;
    document.head.appendChild(styleSheet);
    
    // Initialize all modules
    new PortfolioAnimations();
    new ProjectManager();
    new PerformanceOptimizer();
    new EasterEggs();
    
    console.log('🎮 Portfolio loaded successfully! Try the Konami code for a surprise!');
});

// Service Worker registration for PWA (optional)
// Uncomment and create sw.js file if you want PWA functionality
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
*/