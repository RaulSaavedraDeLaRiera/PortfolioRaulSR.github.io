document.addEventListener('DOMContentLoaded', function() {
    // Pantalla de carga
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Menú móvil
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navegación fija
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // Enlaces activos
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elementos con animaciones
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Efectos hover para habilidades
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Contadores animados
    const statNumbers = document.querySelectorAll('.stat-item h3');
    
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + '+';
        }, 30);
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent);
                animateCounter(entry.target, target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Efectos parallax suaves
    const parallaxElements = document.querySelectorAll('.hero-image, .about-stats');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Smooth scroll para enlaces internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efectos de hover para proyectos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efecto de escritura
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Animaciones al hacer scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.skill-category, .project-card, .experience-card, .education-card');
        
        elements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Configurar elementos animados
    const animatedOnScrollElements = document.querySelectorAll('.skill-category, .project-card, .experience-card, .education-card');
    animatedOnScrollElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar una vez al cargar

    // Efectos hover para timeline
    const timelineItems = document.querySelectorAll('.timeline-content');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Carga de imágenes
    const images = document.querySelectorAll('img:not(.avatar)');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
        
        img.style.opacity = '0';
        img.style.transform = 'scale(0.9)';
        img.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });

    // Efectos hover para botones
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animación del logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            logo.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0)';
        }, 500);
    }

    // Efectos hover para enlaces sociales
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) rotate(5deg)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    // Optimización de scroll
    let ticking = false;
    
    function updateOnScroll() {
        updateActiveNav();
        animateOnScroll();
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);

    // Animaciones de secciones
    const sectionsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        sectionsObserver.observe(section);
    });

    // Carga inicial
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Efectos hover para categorías
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        });

        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        });
    });

    // Efectos hover para experiencia
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.borderLeftColor = '#e74c3c';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.borderLeftColor = '#6f1d1b';
        });
    });

    // Efectos hover para educación
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.borderLeftColor = '#e74c3c';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.borderLeftColor = '#6f1d1b';
        });
    });

    // Animación del footer
    const footer = document.querySelector('.footer');
    if (footer) {
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        footer.style.opacity = '0';
        footer.style.transform = 'translateY(30px)';
        footer.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        
        footerObserver.observe(footer);
    }

    // Toggle del formulario de contacto
    document.getElementById('showContactForm').addEventListener('click', function() {
        const formContainer = document.getElementById('contactFormContainer');
        const isVisible = formContainer.style.display !== 'none';
        
        if (isVisible) {
            formContainer.style.display = 'none';
            this.textContent = 'Enviame un mensaje';
        } else {
            formContainer.style.display = 'block';
            this.textContent = 'Cerrar';
        }
    });

    // Manejo del formulario
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevenir el envío normal del formulario
        
        const formData = new FormData(this);
        
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(() => {
            const successTick = document.getElementById('successTick');
            successTick.classList.add('show');
            
            this.reset();
            
            setTimeout(() => {
                successTick.classList.remove('show');
            }, 2000);
        })
        .catch(() => {
            this.reset();
        });
    });

    // Gestión de habilidades
    function initializeSkillItems() {
        const skillItems = document.querySelectorAll('.skill-item');
        let activeSkill = null;
        let hoverTimeout = null;

        skillItems.forEach(item => {
                    const normalWidth = item.offsetWidth;
        
        const skillLevel = item.querySelector('.skill-level');
        let estimatedWidth = normalWidth;
        
        if (skillLevel) {
            const tempSpan = document.createElement('span');
            tempSpan.textContent = skillLevel.textContent;
            tempSpan.style.position = 'absolute';
            tempSpan.style.visibility = 'hidden';
            tempSpan.style.fontSize = '1.2rem';
            tempSpan.style.fontWeight = '600';
            tempSpan.style.textTransform = 'uppercase';
            tempSpan.style.letterSpacing = '0.5px';
            
            document.body.appendChild(tempSpan);
            const levelWidth = tempSpan.offsetWidth;
            document.body.removeChild(tempSpan);
            
            estimatedWidth = Math.max(normalWidth, levelWidth + 20);
        }
            
            item.style.setProperty('--initial-width', estimatedWidth + 'px');
            
            // Mouse enter
            item.addEventListener('mouseenter', function(e) {
                            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
                hoverTimeout = null;
            }

            if (activeSkill && activeSkill !== this) {
                activeSkill.classList.remove('skill-active');
            }

            this.classList.add('skill-active');
            activeSkill = this;

            this.style.transform = 'translateY(-3px)';
            this.style.zIndex = '100';
            const initialWidth = this.style.getPropertyValue('--initial-width');
            if (initialWidth) {
                this.style.width = initialWidth;
                this.style.minWidth = initialWidth;
                this.style.maxWidth = initialWidth;
            }
            });

            // Mouse leave
            item.addEventListener('mouseleave', function(e) {
                            hoverTimeout = setTimeout(() => {
                this.classList.remove('skill-active');
                this.style.transform = 'translateY(0)';
                this.style.zIndex = '1';
                
                if (activeSkill === this) {
                    activeSkill = null;
                }
            }, 100);
            });

            // Eventos táctiles
            item.addEventListener('touchstart', function(e) {
                e.preventDefault();
                this.classList.add('skill-active');
                this.style.transform = 'translateY(-3px)';
                this.style.zIndex = '100';
                const initialWidth = this.style.getPropertyValue('--initial-width');
                if (initialWidth) {
                    this.style.width = initialWidth;
                    this.style.minWidth = initialWidth;
                    this.style.maxWidth = initialWidth;
                }
            });

            item.addEventListener('touchend', function(e) {
                setTimeout(() => {
                    this.classList.remove('skill-active');
                    this.style.transform = 'translateY(0)';
                    this.style.zIndex = '1';
                }, 2000);
            });
        });

        // Limpiar estado al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.skill-item')) {
                skillItems.forEach(item => {
                    item.classList.remove('skill-active');
                    item.style.transform = 'translateY(0)';
                    item.style.zIndex = '1';
                });
                activeSkill = null;
            }
        });
    }
}); 