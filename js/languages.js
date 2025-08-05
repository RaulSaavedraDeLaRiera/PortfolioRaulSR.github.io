const languages = {
    es: {
        // Navegación
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            skills: "Habilidades",
            projects: "Proyectos",
            experience: "Experiencia",
            education: "Estudios"
        },
        // Hero section
        hero: {
            greeting: "Soy",
            name: "Raúl Saavedra",
            title: "Desarrollador Backend y Cloud",
            description: "Apasionado por la tecnología y lo que es capaz de hacer",
            viewProjects: "Ver Proyectos",
            aboutMe: "Sobre Mí"
        },
        // About section
        about: {
            title: "Sobre Mí",
            paragraph1: "Desde pequeño siempre he preferido el ratón al balón. Cuando tuve que elegir a qué dedicarme supe que una pantalla y un teclado tenían que estar involucrados.",
            paragraph2: "Comencé con un máster en desarrollo y diseño de videojuegos pero rápidamente me di cuenta de que se me quedaba corto, quería saber más cómo funcionaba, qué hacía la magia. Por eso estudié el grado de Informática con especialización en videojuegos en la UCM. Ahí descubrí que mi pasión iba más allá de los juegos: me fascinaba cómo los unos y ceros pueden dar forma a la tecnología que usamos cada día.",
            paragraph3: "Con esta idea, completé un máster en desarrollo web y actualmente trabajo como desarrollador backend centrado en Cloud, donde pongo a prueba cada día lo que soy capaz de construir con código.",
            stats: {
                years: "Años de Estudio",
                projects: "Proyectos Completados",
                technologies: "Tecnologías Dominadas"
            }
        },
        // Skills section
        skills: {
            title: "Habilidades Técnicas",
            categories: {
                backend: "Backend",
                frontend: "Frontend",
                devprod: "Desarrollo y Productividad",
                games: "Videojuegos"
            }
        },
        // Projects section
        projects: {
            title: "Proyectos Destacados",
            project1: {
                title: "Arquitectura de Microservicios en Cloud para Procesamiento Clínico con IA",
                description: "Plataforma escalable desplegada en Google Cloud que integra múltiples microservicios para gestionar datos clínicos, autenticación y procesamiento mediante modelos de IA. Incluye servicios especializados para la validación y almacenamiento de datos, ejecución de trabajos en la nube, y sincronización con estándares FHIR y Firestore. Se utilizan tecnologías como Cloud Run, Cloud Functions, Pub/Sub, Firestore, Firebase Auth y buckets de almacenamiento, garantizando alta disponibilidad y seguridad."
            },
            project2: {
                title: "API para Gestión Clínica con App Android Nativa",
                description: "Desarrollo de API segura para gestión de datos de pacientes con autenticación y almacenamiento en base de datos. La aplicación Android nativa sincroniza datos manuales y automáticos, usando mecanismos para mantener la conexión activa y sincronización en tiempo real."
            },
            project3: {
                title: "Videojuego Móvil Con Funciones Sociales y Geoposicionamiento",
                description: "Desarrollo de un videojuego móvil con funciones sociales (ranking, sistema de amigos) y localización en tiempo real. Backend en Spring Boot con base de datos MongoDB en la nube, autenticación segura y múltiples endpoints para datos estáticos y dinámicos."
            },
            project4: {
                title: "Motor de Videojuegos 3D",
                description: "Desarrollo desde cero de un motor de videojuegos con soporte para gráficos 2D/3D, físicas, audio y scripting. Implementado en C++ y LUA, incluyendo un juego funcional construido sobre esta arquitectura propia."
            },
            privateCode: "Código Privado",
            viewOnGitHub: "Ver en GitHub"
        },
        // Experience section
        experience: {
            title: "Experiencia Laboral",
            job1: {
                title: "Cloud & Backend Developer",
                company: "Mential Health Technologies",
                period: "2025 - Presente",
                description: "Diseño e implementación de soluciones en la nube centradas en la creación de APIs RESTful, automatización de procesos y gestión de datos. Desarrollo de microservicios desplegados en Google Cloud Platform. Colaboración puntual en el desarrollo de aplicaciones móviles nativas y tareas frontend."
            },
            job2: {
                title: "Desarrollador de Videojuegos",
                company: "Proyectos Personales y Colaboraciones",
                period: "2023 - 2024",
                description: "Creación de videojuegos para dispositivos móviles utilizando Unity. Participación en la etapa de concepto y desarrollo, en colaboración con varias empresas.",
                viewPortfolio: "Ver Portfolio"
            }
        },
        // Education section
        education: {
            title: "Estudios",
            degree1: {
                title: "Máster en Web Development",
                institution: "Neoland",
                period: "2025",
                description: "Especialización en desarrollo web moderno con tecnologías frontend y backend."
            },
            degree2: {
                title: "Grado en Desarrollo de Videojuegos",
                institution: "Universidad Complutense de Madrid",
                period: "2020 - 2024",
                description: "Formación completa en programación y desarrollo de software con especialización en videojuegos."
            },
            degree3: {
                title: "Máster en Desarrollo de Videojuegos y Game Design",
                institution: "Master D",
                period: "2019 - 2020",
                description: "Introducción al desarrollo de videojuegos y diseño de experiencias interactivas."
            }
        },
        // Footer
        footer: {
            contact: "Contacto",
            sendMessage: "Enviame un mensaje",
            name: "Tu nombre",
            email: "Tu correo",
            subject: "Asunto",
            message: "Mensaje",
            sendMessageBtn: "Enviar Mensaje",
            copyright: "© 2025 Raúl Saavedra"
        }
    },
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            education: "Education"
        },
        // Hero section
        hero: {
            greeting: "I am",
            name: "Raúl Saavedra",
            title: "Backend and Cloud Developer",
            description: "Passionate about technology and what it's capable of doing",
            viewProjects: "View Projects",
            aboutMe: "About Me"
        },
        // About section
        about: {
            title: "About Me",
            paragraph1: "Since I was little, I've always preferred the mouse to the ball. When I had to choose what to dedicate myself to, I knew that a screen and a keyboard had to be involved.",
            paragraph2: "I started with a master's degree in game development and design, but I quickly realized it wasn't enough, I wanted to know more about how it worked, what made the magic happen. That's why I studied Computer Science with a specialization in video games at UCM. There I discovered that my passion went beyond games: I was fascinated by how ones and zeros can shape the technology we use every day.",
            paragraph3: "With this idea, I completed a master's degree in web development and currently work as a backend developer focused on Cloud, where I test every day what I'm capable of building with code.",
            stats: {
                years: "Years of Study",
                projects: "Completed Projects",
                technologies: "Mastered Technologies"
            }
        },
        // Skills section
        skills: {
            title: "Technical Skills",
            categories: {
                backend: "Backend",
                frontend: "Frontend",
                devprod: "Development & Productivity",
                games: "Video Games"
            }
        },
        // Projects section
        projects: {
            title: "Featured Projects",
            project1: {
                title: "Cloud Microservices Architecture for Clinical Processing with AI",
                description: "Scalable platform deployed on Google Cloud that integrates multiple microservices to manage clinical data, authentication, and processing through AI models. Includes specialized services for data validation and storage, cloud job execution, and synchronization with FHIR standards and Firestore. Uses technologies such as Cloud Run, Cloud Functions, Pub/Sub, Firestore, Firebase Auth, and storage buckets, ensuring high availability and security."
            },
            project2: {
                title: "Clinical Management API with Native Android App",
                description: "Development of a secure API for patient data management with authentication and database storage. The native Android application synchronizes manual and automatic data, using mechanisms to maintain active connection and real-time synchronization."
            },
            project3: {
                title: "Mobile Video Game with Social Features and Geopositioning",
                description: "Development of a mobile video game with social features (ranking, friend system) and real-time location. Backend in Spring Boot with MongoDB database in the cloud, secure authentication, and multiple endpoints for static and dynamic data."
            },
            project4: {
                title: "3D Game Engine",
                description: "Development from scratch of a game engine with support for 2D/3D graphics, physics, audio, and scripting. Implemented in C++ and LUA, including a functional game built on this own architecture."
            },
            privateCode: "Private Code",
            viewOnGitHub: "View on GitHub"
        },
        // Experience section
        experience: {
            title: "Work Experience",
            job1: {
                title: "Cloud & Backend Developer",
                company: "Mential Health Technologies",
                period: "2025 - Present",
                description: "Design and implementation of cloud solutions focused on creating RESTful APIs, process automation, and data management. Development of microservices deployed on Google Cloud Platform. Occasional collaboration in native mobile application development and frontend tasks."
            },
            job2: {
                title: "Video Game Developer",
                company: "Personal Projects and Collaborations",
                period: "2023 - 2024",
                description: "Creation of video games for mobile devices using Unity. Participation in the concept and development stage, in collaboration with various companies.",
                viewPortfolio: "View Portfolio"
            }
        },
        // Education section
        education: {
            title: "Education",
            degree1: {
                title: "Master's in Web Development",
                institution: "Neoland",
                period: "2025",
                description: "Specialization in modern web development with frontend and backend technologies."
            },
            degree2: {
                title: "Bachelor's in Video Game Development",
                institution: "Complutense University of Madrid",
                period: "2020 - 2024",
                description: "Complete training in programming and software development with specialization in video games."
            },
            degree3: {
                title: "Master's in Video Game Development and Game Design",
                institution: "Master D",
                period: "2019 - 2020",
                description: "Introduction to video game development and interactive experience design."
            }
        },
        // Footer
        footer: {
            contact: "Contact",
            sendMessage: "Send me a message",
            name: "Your name",
            email: "Your email",
            subject: "Subject",
            message: "Message",
            sendMessageBtn: "Send Message",
            copyright: "© 2025 Raúl Saavedra"
        }
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    const currentLang = languages[lang];
    
    // Actualizar navegación
    document.querySelectorAll('[data-text]').forEach(element => {
        const key = element.getAttribute('data-text');
        if (key) {
            const keys = key.split('.');
            let value = currentLang;
            for (const k of keys) {
                value = value[k];
            }
            if (value) {
                element.textContent = value;
            }
        }
    });

    // Actualizar elementos específicos
    updateNavigation(currentLang.nav);
    updateHero(currentLang.hero);
    updateAbout(currentLang.about);
    updateSkills(currentLang.skills);
    updateProjects(currentLang.projects);
    updateExperience(currentLang.experience);
    updateEducation(currentLang.education);
    updateFooter(currentLang.footer);
    
    // Actualizar el atributo lang del HTML
    document.documentElement.lang = lang;
    
    // Guardar preferencia en localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Actualizar el botón de idioma
    updateLanguageButton(lang);
}

// Funciones auxiliares para actualizar cada sección
function updateNavigation(nav) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks[0].textContent = nav.home;
    navLinks[1].textContent = nav.about;
    navLinks[2].textContent = nav.skills;
    navLinks[3].textContent = nav.projects;
    navLinks[4].textContent = nav.experience;
    navLinks[5].textContent = nav.education;
}

function updateHero(hero) {
    document.querySelector('.greeting').textContent = hero.greeting;
    document.querySelector('.name').textContent = hero.name;
    document.querySelector('.title-text').textContent = hero.title;
    document.querySelector('.description').textContent = hero.description;
    document.querySelector('.hero-actions .btn-primary').textContent = hero.viewProjects;
    document.querySelector('.hero-actions .btn-secondary').textContent = hero.aboutMe;
}

function updateAbout(about) {
    document.querySelector('#about .section-title').textContent = about.title;
    const paragraphs = document.querySelectorAll('#about .about-text p');
    paragraphs[0].textContent = about.paragraph1;
    paragraphs[1].textContent = about.paragraph2;
    paragraphs[2].textContent = about.paragraph3;
    
    const stats = document.querySelectorAll('#about .stat-item p');
    stats[0].textContent = about.stats.years;
    stats[1].textContent = about.stats.projects;
    stats[2].textContent = about.stats.technologies;
}

function updateSkills(skills) {
    document.querySelector('#skills .section-title').textContent = skills.title;
    
    const skillCategories = document.querySelectorAll('#skills .category-title');
    if (skillCategories.length >= 4) {
        skillCategories[0].textContent = skills.categories.backend;
        skillCategories[1].textContent = skills.categories.frontend;
        skillCategories[2].textContent = skills.categories.devprod;
        skillCategories[3].textContent = skills.categories.games;
    }
}

function updateProjects(projects) {
    document.querySelector('#projects .section-title').textContent = projects.title;
    
    const projectCards = document.querySelectorAll('#projects .project-card');
    projectCards[0].querySelector('.project-title').textContent = projects.project1.title;
    projectCards[0].querySelector('.project-info p').textContent = projects.project1.description;
    
    projectCards[1].querySelector('.project-title').textContent = projects.project2.title;
    projectCards[1].querySelector('.project-info p').textContent = projects.project2.description;
    
    projectCards[2].querySelector('.project-title').textContent = projects.project3.title;
    projectCards[2].querySelector('.project-info p').textContent = projects.project3.description;
    
    projectCards[3].querySelector('.project-title').textContent = projects.project4.title;
    projectCards[3].querySelector('.project-info p').textContent = projects.project4.description;
    
    // Actualizar botones
    document.querySelectorAll('.btn-blocked').forEach(btn => {
        btn.textContent = projects.privateCode;
    });
    
    document.querySelectorAll('.btn-github').forEach(btn => {
        btn.textContent = projects.viewOnGitHub;
    });
}

function updateExperience(experience) {
    document.querySelector('#experience .section-title').textContent = experience.title;
    
    const experienceCards = document.querySelectorAll('#experience .experience-card');
    experienceCards[0].querySelector('h3').textContent = experience.job1.title;
    experienceCards[0].querySelector('.company').textContent = experience.job1.company;
    experienceCards[0].querySelector('p:not(.company)').textContent = experience.job1.description;
    
    experienceCards[1].querySelector('h3').textContent = experience.job2.title;
    experienceCards[1].querySelector('.company').textContent = experience.job2.company;
    experienceCards[1].querySelector('p:not(.company)').textContent = experience.job2.description;
    experienceCards[1].querySelector('.btn-primary').textContent = experience.job2.viewPortfolio;
}

function updateEducation(education) {
    document.querySelector('#education .section-title').textContent = education.title;
    
    const educationCards = document.querySelectorAll('#education .education-card');
    educationCards[0].querySelector('h3').textContent = education.degree1.title;
    educationCards[0].querySelector('.institution').textContent = education.degree1.institution;
    educationCards[0].querySelector('p:not(.institution)').textContent = education.degree1.description;
    
    educationCards[1].querySelector('h3').textContent = education.degree2.title;
    educationCards[1].querySelector('.institution').textContent = education.degree2.institution;
    educationCards[1].querySelector('p:not(.institution)').textContent = education.degree2.description;
    
    educationCards[2].querySelector('h3').textContent = education.degree3.title;
    educationCards[2].querySelector('.institution').textContent = education.degree3.institution;
    educationCards[2].querySelector('p:not(.institution)').textContent = education.degree3.description;
}

function updateFooter(footer) {
    document.querySelector('.footer-name').textContent = footer.contact;
    document.querySelector('.contact-title').textContent = footer.contact;
    document.querySelector('#showContactForm').textContent = footer.sendMessage;
    
    const form = document.querySelector('#contactForm');
    form.querySelector('input[name="name"]').placeholder = footer.name;
    form.querySelector('input[name="email"]').placeholder = footer.email;
    form.querySelector('input[name="subject"]').placeholder = footer.subject;
    form.querySelector('textarea[name="message"]').placeholder = footer.message;
    form.querySelector('.btn-primary').textContent = footer.sendMessageBtn;
    
    document.querySelector('.footer-bottom p').textContent = footer.copyright;
}

function updateLanguageButton(currentLang) {
    const languageBtn = document.querySelector('.language-toggle');
    if (currentLang === 'es') {
        languageBtn.innerHTML = '<span class="active">ES</span><span>/</span><span>EN</span>';
    } else {
        languageBtn.innerHTML = '<span>ES</span><span>/</span><span class="active">EN</span>';
    }
}

// Inicializar idioma al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(savedLanguage);
}); 