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
            title: "Ingeniero de Software y Data, especializado en Cloud",
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
                data: "Data & Cloud",
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
                title: "Plataforma Social de Fitness",
                description: "Plataforma social para crear retos deportivos multi-actividad, compartir progreso y seguir métricas con dashboards (React 19 + Vite + Chart.js). Backend Express + MongoDB con JWT, Swagger y despliegue completo en Render/Netlify."
            },
            project2: {
                title: "Aplicación Web para la Enseñanza",
                description: "Aplicación full-stack construida con NestJS, MongoDB, Next.js, TypeScript y JWT. Permite diseñar cursos modulares, gestionar bases de datos de alumnos y controlar el progreso mediante herencia estructurada de cursos, módulos y ejercicios."
            },
            project3: {
                title: "Motor de Videojuegos 3D",
                description: "Desarrollo desde cero de un motor de videojuegos con soporte para gráficos 2D/3D, físicas, audio y scripting. Implementado en C++ y LUA, incluyendo un juego funcional construido sobre esta arquitectura propia."
            },
            project4: {
                title: "Videojuego Móvil Con Funciones Sociales y Geoposicionamiento",
                description: "Desarrollo de un videojuego móvil con funciones sociales (ranking, sistema de amigos) y localización en tiempo real. Backend en Spring Boot con base de datos MongoDB en la nube, autenticación segura y múltiples endpoints para datos estáticos y dinámicos."
            },
            privateCode: "Código Privado",
            viewOnGitHub: "Ver en GitHub"
        },
        // Experience section
        experience: {
            title: "Experiencia Laboral",
            projectsLabel: "Proyectos destacados",
            job1: {
                title: "Backend and Data Engineer",
                company: "Mential Health Technologies",
                period: "2025 - Presente",
                summary: "Soluciones cloud y automatización para proporcionar servicios de salud digitales seguros.",
                description: "Trabajo en plataformas de datos cloud, sistemas de IA y microservicios distribuidos: data lakes en BigQuery, orquestación de agentes inteligentes, APIs en Kotlin/Java y pipelines multimodales para texto, audio y señales de comportamiento. Lidero integraciones seguras, automatización CI/CD y observabilidad end-to-end en GCP, conectando decisiones clínicas con datos confiables y en tiempo real.",
                projects: {
                    project1: {
                        title: "Arquitectura de Microservicios en Cloud para Procesamiento Clínico con IA",
                        description: "Plataforma escalable desplegada en Google Cloud que integra múltiples microservicios para gestionar datos clínicos, autenticación y procesamiento mediante modelos de IA. Incluye servicios especializados para la validación y almacenamiento de datos, ejecución de trabajos en la nube y sincronización con estándares FHIR y Firestore.",
                        tags: ["Microservicios", "Python", "Flask", "Java", "Express", "Cloud Run", "Cloud Functions", "Pub/Sub", "Firestore", "Firebase Auth", "Buckets", "FHIR"],
                        ctaLabel: "Código Privado"
                    },
                    project2: {
                        title: "API para Gestión Clínica con App Android Nativa",
                        description: "Desarrollo de API segura para gestión de datos de pacientes con autenticación y almacenamiento en base de datos. La aplicación Android nativa sincroniza datos manuales y automáticos, usando mecanismos para mantener la conexión activa y la sincronización en tiempo real.",
                        tags: ["API REST", "FastAPI", "Python", "Kotlin", "Android", "Firestore", "Firebase Auth"],
                        ctaLabel: "Código Privado"
                    },
                    project3: {
                        title: "Plataforma BigQuery Data Lake Automatizada",
                        description: "Diseño de un data lake cloud-native en BigQuery con pipelines de ingestión, limpieza y estandarización automatizados usando SQL y Dataform, modelos analíticos gobernados, automatización CI/CD y monitoreo para insights confiables y repetibles.",
                        tags: ["BigQuery", "Dataform", "SQL", "Data Lake", "Automatización", "CI/CD", "GCP"],
                        ctaLabel: "Código Privado"
                    }
                }
            },
            job2: {
                title: "Desarrollador de Videojuegos",
                company: "KeyDuck Studios y Colaboraciones",
                period: "2023 - 2024",
                summary: "Conceptualización y desarrollo de juegos móviles con Unity.",
                description: "Creación de videojuegos para dispositivos móviles utilizando Unity. Participación en la etapa de concepto y desarrollo, en colaboración con varias empresas.",
                viewPortfolio: "Ver Portfolio",
                ctaUrl: "https://keyduckstudios-portfolio.my.canva.site/mobile-casual-games",
                placeholderText: "Consulta mi portfolio para ver ejemplos en detalle.",
                ctaDescription: "Explora mi portfolio para ver ejemplos de videojuegos."
            },
            placeholder: "Selecciona un proyecto para ver los detalles."
        },
        // Education section
        education: {
            title: "Estudios",
            degree1: {
                title: "Master's in Web Application Development",
                institution: "Neoland",
                period: "2025",
                description: "Programa de desarrollo web full-stack centrado en tecnologías modernas de JavaScript: frontend (HTML, CSS, JavaScript, React) y backend (Node.js, Express, MongoDB), control de versiones, APIs, programación asíncrona y buenas prácticas con proyecto final full-stack."
            },
            degree2: {
                title: "BSc in Computer Science with a Specialization in Game Development",
                institution: "Universidad Complutense de Madrid",
                period: "2020 - 2024",
                description: "Grado en Desarrollo de Videojuegos por la UCM: ingeniería informática de cuatro años combinando algoritmos, estructuras de datos, gráficos, sistemas operativos, redes, programación concurrente, IA, física y sistemas interactivos en tiempo real."
            },
            degree3: {
                title: "Máster en Desarrollo de Videojuegos y Game Design",
                institution: "Master D",
                period: "2019 - 2020",
                description: "Programa de game development y game design enfocado en buenas prácticas de arquitectura, optimización de rendimiento, diseño narrativo y construcción de experiencias interactivas complejas para múltiples plataformas."
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
            title: "Software and Data Engineer, specialized in Cloud",
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
                data: "Data & Cloud",
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
                title: "Fitness Social Platform",
                description: "Social platform for creating multi-activity fitness challenges, sharing progress, and tracking metrics through interactive dashboards (React 19 + Vite + Chart.js). Express + MongoDB backend with JWT, Swagger and full deployment on Render/Netlify."
            },
            project2: {
                title: "Web Application for Teaching",
                description: "Full-stack platform (NestJS, MongoDB, Next.js, TypeScript, JWT) where teachers build modular courses, manage student databases and track progress through inherited course/module/exercise structures."
            },
            project3: {
                title: "3D Game Engine",
                description: "Development from scratch of a game engine with support for 2D/3D graphics, physics, audio, and scripting. Implemented in C++ and LUA, including a functional game built on this own architecture."
            },
            project4: {
                title: "Mobile Video Game with Social Features and Geopositioning",
                description: "Development of a mobile video game with social features (ranking, friend system) and real-time location. Backend in Spring Boot with MongoDB database in the cloud, secure authentication, and multiple endpoints for static and dynamic data."
            },
            privateCode: "Private Code",
            viewOnGitHub: "View on GitHub"
        },
        // Experience section
        experience: {
            title: "Work Experience",
            projectsLabel: "Highlighted projects",
            job1: {
                title: "Backend and Data Engineer",
                company: "Mential Health Technologies",
                period: "2025 - Present",
                summary: "Cloud solutions and automation to deliver secure digital health services.",
                description: "I lead cloud data platforms, AI orchestration and distributed microservices: BigQuery data lakes, intelligent agent workflows, Kotlin/Java APIs and multimodal pipelines for text, audio and behavioural signals. I drive secure integrations, CI/CD automation and observability on GCP so that clinical decisions always rely on trusted, real-time data.",
                projects: {
                    project1: {
                        title: "Cloud Microservices Architecture for Clinical Processing with AI",
                        description: "Scalable platform deployed on Google Cloud that integrates multiple microservices to manage clinical data, authentication, and processing through AI models. Includes specialized services for data validation and storage, cloud job execution, and synchronization with FHIR standards and Firestore.",
                        tags: ["Microservices", "Python", "Flask", "Java", "Express", "Cloud Run", "Cloud Functions", "Pub/Sub", "Firestore", "Firebase Auth", "Buckets", "FHIR"],
                        ctaLabel: "Private Code"
                    },
                    project2: {
                        title: "Clinical Management API with Native Android App",
                        description: "Secure API for patient data management with authentication and database storage. The native Android application synchronizes manual and automatic data, using mechanisms to maintain an active connection and real-time sync.",
                        tags: ["REST API", "FastAPI", "Python", "Kotlin", "Android", "Firestore", "Firebase Auth"],
                        ctaLabel: "Private Code"
                    },
                    project3: {
                        title: "BigQuery Data Lake Automation Platform",
                        description: "Designed a cloud-native BigQuery data lake with SQL/Dataform pipelines for ingestion, cleansing and orchestration, analytical models, governed semantics and CI/CD workflows that guarantee reliable, auditable insights.",
                        tags: ["BigQuery", "Dataform", "SQL", "Data Lake", "Automation", "CI/CD", "GCP"],
                        ctaLabel: "Private Code"
                    }
                }
            },
            job2: {
                title: "Video Game Developer",
                company: "KeyDuck Studios and Collaborations",
                period: "2023 - 2024",
                summary: "Designing and building mobile games with Unity.",
                description: "Creation of video games for mobile devices using Unity. Participation in the concept and development stage, in collaboration with various companies.",
                viewPortfolio: "View Portfolio",
                ctaUrl: "https://keyduckstudios-portfolio.my.canva.site/mobile-casual-games",
                placeholderText: "Check my portfolio to explore selected projects.",
                ctaDescription: "Visit my portfolio to see mobile game examples."
            },
            placeholder: "Select a project to see the details."
        },
        // Education section
        education: {
            title: "Education",
            degree1: {
                title: "Master's in Web Application Development",
                institution: "Neoland",
                period: "2025",
                description: "Full-stack web development program focused on modern JavaScript technologies. Covered frontend (HTML, CSS, JavaScript, React), backend (Node.js, Express, MongoDB), version control, APIs, async programming and engineering best practices, finishing with a full-stack capstone."
            },
            degree2: {
                title: "BSc in Computer Science with a Specialization in Game Development",
                institution: "Complutense University of Madrid",
                period: "2020 - 2024",
                description: "Four-year engineering program combining computer science, software engineering and game development: algorithms, data structures, computer graphics, operating systems, networking, multithreaded programming, testing, AI, physics simulation and real-time interactive systems."
            },
            degree3: {
                title: "Master's in Video Game Development and Game Design",
                institution: "Master D",
                period: "2019 - 2020",
                description: "Comprehensive game development and game design program focused on architecture best practices, performance optimization, narrative design, and building complex interactive experiences across platforms."
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
    navLinks[3].textContent = nav.experience;
    navLinks[4].textContent = nav.projects;
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
    if (skillCategories.length >= 5) {
        skillCategories[0].textContent = skills.categories.backend;
        skillCategories[1].textContent = skills.categories.data;
        skillCategories[2].textContent = skills.categories.frontend;
        skillCategories[3].textContent = skills.categories.devprod;
        skillCategories[4].textContent = skills.categories.games;
    } else if (skillCategories.length >= 4) {
        skillCategories[0].textContent = skills.categories.backend;
        skillCategories[1].textContent = skills.categories.frontend;
        skillCategories[2].textContent = skills.categories.devprod;
        skillCategories[3].textContent = skills.categories.games;
    }
}

function updateProjects(projects) {
    document.querySelector('#projects .section-title').textContent = projects.title;
    
    const projectCards = document.querySelectorAll('#projects .project-card');
    // Orden real: project1, project2, project3, project4
    const projectKeys = ['project1', 'project2', 'project3', 'project4'];

    projectKeys.forEach((key, index) => {
        const card = projectCards[index];
        if (!card || !projects[key]) return;
        card.querySelector('.project-title').textContent = projects[key].title;
        card.querySelector('.project-info p').textContent = projects[key].description;
    });
    
    document.querySelectorAll('#projects .btn-github').forEach(btn => {
        btn.textContent = projects.viewOnGitHub;
    });
}

function updateExperience(experience) {
    document.querySelector('#experience .section-title').textContent = experience.title;

    document.querySelectorAll('.experience-projects-title').forEach(title => {
        title.textContent = experience.projectsLabel;
    });

    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        const key = item.dataset.experienceKey;
        const data = experience[key];
        if (!data) return;

        const titleEl = item.querySelector('.experience-item-title');
        if (titleEl) titleEl.textContent = data.title;

        const companyEl = item.querySelector('.experience-company');
        if (companyEl) companyEl.textContent = data.company;

        const dateEl = item.querySelector('.experience-date');
        if (dateEl) dateEl.textContent = data.period;

        const summaryEl = item.querySelector('.experience-summary');
        if (summaryEl && data.summary) summaryEl.textContent = data.summary;

        const subtitleEl = item.querySelector('.experience-role-subtitle');
        if (subtitleEl) {
            if (data.subtitle) {
                subtitleEl.textContent = data.subtitle;
                subtitleEl.style.display = 'block';
            } else {
                subtitleEl.style.display = 'none';
            }
        }

        const descriptionEl = item.querySelector('.experience-description');
        if (descriptionEl) {
            if (data.description) {
                descriptionEl.textContent = data.description;
                descriptionEl.style.display = 'block';
            } else {
                descriptionEl.style.display = 'none';
            }
        }

    });

    const detailCards = document.querySelectorAll('.experience-detail-card');
    detailCards.forEach(card => {
        const detailKey = card.dataset.projectDetail;
        if (!detailKey) return;
        const [jobKey, projectKey] = detailKey.split('.');
        const jobData = experience[jobKey];
        if (!jobData || !jobData.projects || !jobData.projects[projectKey]) return;
        const project = jobData.projects[projectKey];

        const titleEl = card.querySelector('.project-title');
        if (titleEl) titleEl.textContent = project.title;

        const descriptionEl = card.querySelector('.project-info p');
        if (descriptionEl) descriptionEl.textContent = project.description;

        const tagsContainer = card.querySelector('.project-tags-grid');
        if (tagsContainer && project.tags) {
            tagsContainer.innerHTML = '';
            project.tags.forEach(tag => {
                const tagEl = document.createElement('span');
                tagEl.className = 'tag';
                tagEl.textContent = tag;
                tagsContainer.appendChild(tagEl);
            });
        }

        const timelineLabel = document.querySelector(`.timeline-node[data-project-key="${projectKey}"] .timeline-label`);
        if (timelineLabel) {
            timelineLabel.textContent = project.title;
        }
    });

    const generalPlaceholder = document.querySelector('.experience-detail-placeholder[data-placeholder-type="general"] p');
    if (generalPlaceholder && experience.placeholder) {
        generalPlaceholder.textContent = experience.placeholder;
    }

    const ctaPlaceholders = document.querySelectorAll('.experience-detail-placeholder[data-placeholder-type="cta"]');
    ctaPlaceholders.forEach(placeholderEl => {
        const jobKey = placeholderEl.dataset.placeholderJob;
        const jobData = experience[jobKey];
        if (!jobData) return;

        const textEl = placeholderEl.querySelector('.experience-cta-text');
        if (textEl && jobData.ctaDescription) {
            textEl.textContent = jobData.ctaDescription;
        }

        const btnEl = placeholderEl.querySelector('.experience-cta-btn');
        if (btnEl && jobData.viewPortfolio) {
            btnEl.textContent = jobData.viewPortfolio;
        }
        if (btnEl && jobData.ctaUrl) {
            btnEl.href = jobData.ctaUrl;
        }
    });
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
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLanguage);
}); 