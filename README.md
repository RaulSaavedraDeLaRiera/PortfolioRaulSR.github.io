# Portfolio Dinámico - Raúl Saavedra

Un portafolio web moderno y dinámico desarrollado con HTML, CSS y JavaScript vanilla. Diseñado para mostrar proyectos de desarrollo de videojuegos y web de manera atractiva e interactiva.

## 🚀 Características

### ✨ Introducción Animada
- Textos que aparecen letra por letra con animaciones suaves
- Efectos de entrada escalonados para crear una experiencia envolvente
- Preloader animado con puntos saltarines

### 🎯 Tecnologías Categorizadas
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express, MongoDB
- **Desarrollo y Productividad**: Git, GitHub, Scrum, VS Code
- **Videojuegos**: Unity, Unreal Engine

Cada tecnología muestra su nivel (Beginner, Intermediate, Advanced) en tooltips al pasar el ratón.

### 📱 Proyectos Destacados
- 4 proyectos principales con páginas individuales detalladas
- Cada proyecto incluye:
  - Descripción completa
  - Tecnologías utilizadas
  - Capturas de pantalla
  - Enlaces a repositorios y demos
  - Desafíos y aprendizajes

### 🎓 Secciones de Estudios y Experiencia
- **Estudios**: Timeline horizontal con formación académica
- **Experiencia**: Tarjetas con experiencia laboral y proyectos
- Diseño responsive que se adapta a diferentes pantallas

### 🎨 Diseño Moderno
- Animaciones suaves y transiciones elegantes
- Efectos hover interactivos
- Diseño responsive para móviles, tablets y desktop
- Paleta de colores profesional y moderna

## 📁 Estructura del Proyecto

```
portfolio2/
├── index.html              # Página principal
├── css/
│   ├── style.css           # Estilos principales
│   └── project-detail.css  # Estilos para páginas de proyectos
├── js/
│   └── main.js             # Funcionalidades JavaScript
├── img/                    # Imágenes del proyecto
├── projects/               # Páginas individuales de proyectos
│   ├── flamingo-engine.html
│   ├── unity-mobile.html
│   ├── mastermind.html
│   └── monkey-delivery.html
└── README.md
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidades dinámicas y animaciones
- **Google Fonts**: Tipografía Poppins
- **Responsive Design**: Mobile-first approach

## 🎯 Funcionalidades Principales

### Animaciones y Efectos
- Preloader con animación de puntos
- Textos con efecto typewriter
- Animaciones de scroll con Intersection Observer
- Efectos parallax suaves
- Transiciones hover en elementos interactivos

### Navegación
- Header sticky con navegación suave
- Menú hamburguesa para móviles
- Navegación activa según sección visible
- Enlaces internos con scroll suave

### Interactividad
- Tooltips en tecnologías con niveles
- Contadores animados para estadísticas
- Efectos hover en proyectos y tarjetas
- Animaciones de carga para imágenes

## 📱 Responsive Design

El portafolio está completamente optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### Breakpoints Principales
- `@media (max-width: 1024px)`: Ajustes para tablets
- `@media (max-width: 768px)`: Ajustes para móviles
- `@media (max-width: 480px)`: Ajustes para móviles pequeños

## 🚀 Cómo Usar

1. **Clonar o descargar** el proyecto
2. **Abrir** `index.html` en un navegador web
3. **Navegar** por las diferentes secciones
4. **Hacer clic** en los proyectos para ver detalles

## 📝 Personalización

### Añadir Nuevas Tecnologías
Editar el archivo `index.html` en la sección de skills:

```html
<div class="skill-item" data-level="Intermediate">
    <span class="skill-name">Nueva Tecnología</span>
    <div class="skill-tooltip">Intermediate</div>
</div>
```

### Añadir Nuevos Proyectos
1. Crear nueva página HTML en `projects/`
2. Añadir tarjeta de proyecto en `index.html`
3. Actualizar enlaces y contenido

### Modificar Colores
Editar las variables CSS en `css/style.css`:

```css
:root {
    --primary-color: #0c1618;
    --secondary-color: #6f1d1b;
    --accent-color: #e74c3c;
    /* ... más variables */
}
```

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario**: #0c1618 (Azul oscuro)
- **Secundario**: #6f1d1b (Rojo oscuro)
- **Acento**: #e74c3c (Rojo vibrante)
- **Texto**: #2c3e50 (Gris oscuro)
- **Fondo**: #f8f9fa (Gris claro)

### Tipografía
- **Familia**: Poppins (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700
- **Tamaños**: Escalado responsive

### Espaciado
- **Container**: max-width 120rem
- **Padding**: 2rem (móvil) - 4rem (desktop)
- **Gaps**: 1rem - 4rem según contexto

## 🔧 Optimizaciones

### Rendimiento
- CSS y JS minificados
- Imágenes optimizadas
- Lazy loading para imágenes
- Animaciones optimizadas con `requestAnimationFrame`

### Accesibilidad
- Estructura semántica HTML5
- Navegación por teclado
- Contraste de colores adecuado
- Textos alternativos en imágenes

### SEO
- Meta tags optimizados
- Estructura de encabezados correcta
- URLs descriptivas
- Sitemap incluido

## 📄 Licencia

Este proyecto es de uso personal y educativo. Puedes usarlo como base para tu propio portafolio.

## 👨‍💻 Autor

**Raúl Saavedra**
- GitHub: [@RaulSaavedraRiera](https://github.com/RaulSaavedraRiera)
- Estudiante de Desarrollo de Videojuegos y Web Development

---

*Desarrollado con ❤️ y mucho café ☕* 