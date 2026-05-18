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
            title: "Ingeniero backend y de datos · plataformas cloud, datos e IA",
            description: "Diseño sistemas escalables donde datos, backend e inteligencia artificial trabajan juntos",
            viewProjects: "Ver Proyectos",
            aboutMe: "Sobre Mí"
        },
        // About section
        about: {
            title: "Sobre Mí",
            paragraph1: "Soy ingeniero backend y de datos, enfocado en construir plataformas escalables, sistemas de datos y servicios impulsados por IA.",
            paragraph2: "Mi trabajo cruza backend, plataformas de datos e inteligencia artificial: datos clínicos y analítica a escala en cloud y BigQuery; sistemas distribuidos y microservicios en Python, Kotlin y Java; pipelines multimodales que convierten texto, audio y señales de comportamiento en marcadores estructurados; capas agénticas y orquestación multi-agente para decisiones e intervenciones en tiempo casi real; arquitecturas orientadas a eventos y orquestación de flujos complejos; infraestructura en la nube, CI/CD y aislamiento de entornos con rigor operativo.",
            paragraph3: "Uno de los retos que más me importa es la integridad de los datos en entornos sensibles: registros longitudinales de salud, evidencia del mundo real y flujos donde la calidad y la fiabilidad no son opcionales.",
            paragraph4: "Disfruto llevar problemas técnicos difíciles a sistemas listos para producción, con bases de ingeniería sólidas y un uso consciente de la inteligencia artificial.",
            paragraph5: "Abierto a conversar sobre arquitectura backend, plataformas de datos e IA en contextos regulados.",
            stats: {
                years: "Años de Estudio",
                projects: "Proyectos hechos",
                technologies: "Tecnologías Dominadas"
            }
        },
        // Skills section
        skills: {
            title: "Habilidades Técnicas",
            categories: {
                data: "Data & Cloud",
                backend: "Backend",
                ai: "IA y sistemas",
                frontend: "Frontend",
                devprod: "Desarrollo y Productividad",
                games: "Videojuegos"
            }
        },
        // Projects section
        projects: {
            title: "Proyectos Destacados",
            project1: {
                title: "Asistente multi-agente de dieta y salud (IA)",
                description: "Asistente de salud multi-agente con Google ADK y FastAPI. Arquitectura con orquestador y agentes especializados (recomendaciones, estadísticas de usuario, seguridad de contenido). Límites configurables, capa de datos mock y persistencia de sesión opcional con Vertex AI."
            },
            project2: {
                title: "Plataforma Social de Fitness",
                description: "Plataforma social para crear retos deportivos multi-actividad, compartir progreso y seguir métricas con dashboards (React 19 + Vite + Chart.js). Backend Express + MongoDB con JWT, Swagger y despliegue completo en Render/Netlify."
            },
            project3: {
                title: "Medallion Fitness Pipeline",
                description: "Portfolio fitness data lake construido con Dataform y BigQuery, implementando una arquitectura Medallion Bronze → Silver → Gold. Procesa eventos de usuario simulados y datos de entrenamiento con pipelines incrementales, verificaciones de calidad de datos y control de acceso basado en roles. Diseñado para mostrar patrones modernos de ingeniería de datos y conjuntos de datos listos para análisis."
            },
            project4: {
                title: "Aplicación Web para la Enseñanza",
                description: "Aplicación full-stack construida con NestJS, MongoDB, Next.js, TypeScript y JWT. Permite diseñar cursos modulares, gestionar bases de datos de alumnos y controlar el progreso mediante herencia estructurada de cursos, módulos y ejercicios."
            },
            project5: {
                title: "Link Shortener Serverless en AWS",
                description: "Acortador de URLs fullstack desplegado sobre arquitectura serverless en AWS. Frontend React servido desde S3 + CloudFront, API REST con API Gateway v2 y autenticación JWT con Cognito. Backend con cuatro funciones Lambda en Node.js y DynamoDB como base de datos NoSQL. Toda la infraestructura definida como código con Terraform."
            },
            project6: {
                title: "Motor de Videojuegos 3D",
                description: "Desarrollo desde cero de un motor de videojuegos con soporte para gráficos 2D/3D, físicas, audio y scripting. Implementado en C++ y LUA, incluyendo un juego funcional construido sobre esta arquitectura propia."
            },
            project7: {
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
            job0: {
                title: "Chief Technology Officer (CTO)",
                company: "Mential Health Technologies",
                period: "mar. 2026 - Presente",
                summary: "Liderazgo técnico, arquitectura y ejecución hands-on: datos clínicos a escala, IA y backend en GCP.",
                description: "",
                projects: {
                    overview: {
                        title: "Chief Technology Officer (CTO)",
                        intro: "",
                        bullets: [
                            "Arquitectura de plataforma end-to-end: backend, datos, pipelines de IA e infraestructura en la nube.",
                            "Plataforma cloud-native de datos clínicos en Google Cloud / BigQuery (ingesta, transformación, analítica; 5M+ registros).",
                            "Pipelines de IA multimodal y capa agéntica multi-agente para orquestación de decisiones e intervenciones en tiempo casi real.",
                            "Microservicios y arquitectura orientada a eventos en Python, Kotlin y Java; CI/CD, entornos aislados y decisiones técnicas de producto en equipo reducido."
                        ],
                        techStack: "Python · Kotlin · Java · FastAPI · BigQuery · GCP · IA / agentes · microservicios · event-driven",
                        tags: ["Python", "Kotlin", "Java", "FastAPI", "BigQuery", "GCP", "IA agéntica", "Microservicios", "Event-Driven"]
                    }
                }
            },
            job1: {
                title: "Backend and Data Engineer",
                company: "Mential Health Technologies",
                period: "2025 - mar. 2026",
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
            copyright: "© 2026 Raul Saavedra"
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
            title: "Backend & data engineer · cloud platforms, data, and AI",
            description: "I build scalable systems where data, backend, and intelligence reinforce each other",
            viewProjects: "View Projects",
            aboutMe: "About Me"
        },
        // About section
        about: {
            title: "About Me",
            paragraph1: "I'm a backend and data engineer focused on building scalable platforms, data systems, and AI-driven services.",
            paragraph2: "My work sits at the intersection of backend systems, data platforms, and AI: clinical-scale data and analytics on cloud and BigQuery; distributed backends and microservices in Python, Kotlin, and Java; multimodal pipelines turning behavioral, text, and session data into structured clinical markers; agentic layers and multi-agent orchestration for decisions and near-real-time interventions; event-driven architectures and workflow orchestration; cloud infrastructure, CI/CD, and disciplined environment isolation.",
            paragraph3: "A core challenge I care deeply about is data integrity in sensitive domains—longitudinal health records, real-world evidence, and workflows where quality and reliability are non-negotiable.",
            paragraph4: "I enjoy turning hard technical problems into production-grade systems that pair strong engineering foundations with thoughtful use of AI.",
            paragraph5: "Open to conversations about backend architecture, data platforms, and AI in regulated environments.",
            stats: {
                years: "Years of Study",
                projects: "Projects built",
                technologies: "Mastered Technologies"
            }
        },
        // Skills section
        skills: {
            title: "Technical Skills",
            categories: {
                data: "Data & Cloud",
                backend: "Backend",
                ai: "AI & systems",
                frontend: "Frontend",
                devprod: "Development & Productivity",
                games: "Video Games"
            }
        },
        // Projects section
        projects: {
            title: "Featured Projects",
            project1: {
                title: "AI Multi-Agent Diet & Health Assistant",
                description: "Multi-agent AI health assistant built with Google ADK and FastAPI. Orchestrator-based architecture with specialized backend agents for recommendations, user stats, and content safety. Configurable limits, mock data abstraction, and optional session persistence via Vertex AI."
            },
            project2: {
                title: "Fitness Social Platform",
                description: "Social platform for creating multi-activity fitness challenges, sharing progress, and tracking metrics through interactive dashboards (React 19 + Vite + Chart.js). Express + MongoDB backend with JWT, Swagger and full deployment on Render/Netlify."
            },
            project3: {
                title: "Medallion Fitness Pipeline",
                description: "Portfolio fitness data lake built with Dataform and BigQuery, implementing a Bronze → Silver → Gold Medallion Architecture. Processes simulated user events and workout data with incremental pipelines, data quality checks, and role-based access control. Designed to showcase modern data engineering patterns and analytics-ready datasets."
            },
            project4: {
                title: "Web Application for Teaching",
                description: "Full-stack platform (NestJS, MongoDB, Next.js, TypeScript, JWT) where teachers build modular courses, manage student databases and track progress through inherited course/module/exercise structures."
            },
            project5: {
                title: "Serverless Link Shortener on AWS",
                description: "Full-stack URL shortener deployed on a serverless AWS architecture. React frontend served from S3 + CloudFront, REST API via API Gateway v2, JWT authentication with Cognito, four Node.js Lambda functions, and DynamoDB as the NoSQL database. All infrastructure defined as code with Terraform."
            },
            project6: {
                title: "3D Game Engine",
                description: "Development from scratch of a game engine with support for 2D/3D graphics, physics, audio, and scripting. Implemented in C++ and LUA, including a functional game built on this own architecture."
            },
            project7: {
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
            job0: {
                title: "Chief Technology Officer (CTO)",
                company: "Mential Health Technologies",
                period: "Mar 2026 - Present",
                summary: "Technical leadership, architecture, and hands-on delivery: clinical-scale data, AI, and backend on GCP.",
                description: "",
                projects: {
                    overview: {
                        title: "Chief Technology Officer (CTO)",
                        intro: "",
                        bullets: [
                            "End-to-end platform architecture: backend, data, AI pipelines, and cloud infrastructure.",
                            "Cloud-native clinical data platform on Google Cloud / BigQuery—ingestion, transformation, analytics; 5M+ records.",
                            "Multimodal AI pipelines and an agentic multi-agent layer for decision orchestration and near-real-time interventions.",
                            "Event-driven microservices in Python, Kotlin, and Java; CI/CD, isolated environments, and product-facing technical leadership in a small team."
                        ],
                        techStack: "Python · Kotlin · Java · FastAPI · BigQuery · GCP · AI / agents · microservices · event-driven",
                        tags: ["Python", "Kotlin", "Java", "FastAPI", "BigQuery", "GCP", "Agentic AI", "Microservices", "Event-Driven"]
                    }
                }
            },
            job1: {
                title: "Backend and Data Engineer",
                company: "Mential Health Technologies",
                period: "2025 - Mar 2026",
                summary: "Cloud solutions and automation to deliver secure digital health services.",
                description: "I worked on cloud data platforms, AI systems and distributed microservices: BigQuery data lakes, intelligent agent workflows, Kotlin/Java APIs and multimodal pipelines for text, audio and behavioural signals. I drove secure integrations, CI/CD automation and observability on GCP so clinical decisions could rely on trusted, real-time data.",
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
            copyright: "© 2026 Raul Saavedra"
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
    const texts = about.paragraphs || [
        about.paragraph1,
        about.paragraph2,
        about.paragraph3,
        about.paragraph4,
        about.paragraph5
    ].filter(Boolean);
    paragraphs.forEach((p, i) => {
        if (texts[i]) {
            p.textContent = texts[i];
            p.style.display = '';
        } else {
            p.style.display = 'none';
        }
    });
    
    const stats = document.querySelectorAll('#about .stat-item p');
    stats[0].textContent = about.stats.years;
    stats[1].textContent = about.stats.projects;
    stats[2].textContent = about.stats.technologies;
}

function updateSkills(skills) {
    document.querySelector('#skills .section-title').textContent = skills.title;
    
    const skillCategories = document.querySelectorAll('#skills .category-title');
    if (skillCategories.length >= 6) {
        skillCategories[0].textContent = skills.categories.backend;
        skillCategories[1].textContent = skills.categories.data;
        skillCategories[2].textContent = skills.categories.ai;
        skillCategories[3].textContent = skills.categories.frontend;
        skillCategories[4].textContent = skills.categories.devprod;
        skillCategories[5].textContent = skills.categories.games;
    } else if (skillCategories.length >= 5) {
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
    const projectKeys = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6', 'project7'];

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

        const introEl = card.querySelector('.experience-detail-intro');
        const bulletsEl = card.querySelector('.experience-bullets');
        const techEl = card.querySelector('.experience-detail-tech');
        const descriptionEl = card.querySelector('.project-info p:not(.experience-detail-intro):not(.experience-detail-tech)');

        if (introEl && project.intro !== undefined) {
            introEl.textContent = project.intro;
            introEl.style.display = project.intro ? 'block' : 'none';
        }
        if (bulletsEl && project.bullets) {
            bulletsEl.innerHTML = '';
            project.bullets.forEach(text => {
                const li = document.createElement('li');
                li.textContent = text;
                bulletsEl.appendChild(li);
            });
            bulletsEl.style.display = project.bullets.length ? 'block' : 'none';
        }
        if (techEl && project.techStack !== undefined) {
            techEl.textContent = project.techStack;
            techEl.style.display = project.techStack ? 'block' : 'none';
        }
        if (descriptionEl && project.description !== undefined) {
            descriptionEl.textContent = project.description;
        }

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