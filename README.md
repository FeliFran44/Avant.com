# Avant - Fisioterapia & Rehabilitación

Una landing page premium inspirada en el diseño moderno y elegante de Equinox, creada para Avant, centro de fisioterapia con enfoque humano y personalizado.

## 🎨 Características

- **Diseño Premium**: Estilo visual minimalista con fondo oscuro, tipografía elegante y espaciado generoso
- **Totalmente Responsive**: Adaptación perfecta a móviles, tablets y escritorio
- **Sin Dependencias**: HTML, CSS y JavaScript puros (sin frameworks)
- **Animaciones Suaves**: Efectos fade-in y scroll reveal para una experiencia fluida
- **Navegación Intuitiva**: Menú responsive con botón hamburguesa para móviles
- **Contenido Personalizado**: Filosofía y manifiesto que refleja el enfoque humano de Avant

## 📁 Estructura del Proyecto

```
Avant.com/
├── index.html      # Estructura HTML principal
├── styles.css      # Estilos y diseño responsive
├── script.js       # Interactividad y animaciones
└── README.md       # Documentación
```

## 🚀 Uso

1. **Abrir el sitio**: Simplemente abre `index.html` en tu navegador
2. **No requiere servidor**: Funciona directamente desde el sistema de archivos
3. **Despliegue**: Sube los archivos a cualquier hosting web

## 🖼️ Secciones Incluidas

### 1. Hero Section
- Imagen de fondo a pantalla completa
- Mensaje principal: "Donde la Fisioterapia se convierte en una experiencia humana y personalizada"
- Botón call-to-action hacia la filosofía

### 2. Nuestra Filosofía
- Layout dividido con contenido y imagen
- Mensaje clave sobre el enfoque humano
- Texto descriptivo sobre atención personalizada
- Sin protocolos rígidos, con escucha activa

### 3. Cómo Trabajamos
- 4 pilares fundamentales con iconos SVG:
  - **Comunicación Directa y Humana**: Contacto personal sin intermediarios
  - **Formularios Previos y Seguimiento**: Historia completa desde el día uno
  - **Seguimiento Activo**: Actualizaciones relevantes sin automatismos
  - **Cuidado en los Detalles**: Trato personalizado y coherente
- Tarjetas con efecto hover

### 4. Decisión Estratégica (Manifiesto)
- Sección de impacto con fondo de imagen
- Mensajes contundentes:
  - Sin chatbots
  - Sin automatismos
  - Solo atención humana y profesional
- Call-to-action destacado

### 5. Contacto
- Formulario funcional en español
- Información de ubicación, teléfono y horarios
- Diseño en dos columnas
- Adaptado para Argentina

### 6. Footer
- Enlaces organizados: Servicios, Avant, Información
- Redes sociales (Instagram, Facebook, WhatsApp)
- Copyright y diseño elegante

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --color-primary: #0a0a0a;        /* Fondo principal */
    --color-secondary: #1a1a1a;      /* Fondo secundario */
    --color-accent: #c9a55c;         /* Color de acento (dorado) */
    --color-text: #ffffff;           /* Texto principal */
    --color-text-muted: #b0b0b0;     /* Texto secundario */
}
```

### Cambiar Imágenes

Las imágenes actuales son de Unsplash. Para reemplazarlas:

1. **Hero Section** (línea 44 en index.html):
   - Busca: `background-image: url('https://images.unsplash.com/...')`
   - Reemplaza con tu imagen

2. **Services Cards** (líneas 58-77 en index.html):
   - Modifica el atributo `style="background-image: url('...')"`

3. **Facilities Grid** (líneas 87-106 en index.html):
   - Actualiza las URLs de fondo

4. **Team Members** (líneas 116-143 en index.html):
   - Cambia las imágenes de perfil

5. **CTA Section** (línea 150 en index.html o línea 523 en styles.css):
   - Modifica el background-image

### Cambiar Textos

Todos los textos son fácilmente identificables en `index.html`:
- Títulos: busca tags `<h1>`, `<h2>`, `<h3>`
- Párrafos: tags `<p>`
- Botones: tags `<a class="btn-...">` o `<button>`

### Cambiar Logo

Reemplaza "AVANT" en línea 21 de `index.html`:
```html
<div class="nav-logo">TU LOGO AQUÍ</div>
```

## 🔧 Funcionalidades JavaScript

- **Navbar sticky**: Cambia de transparente a sólido al hacer scroll
- **Menú móvil**: Hamburguesa con animación y cierre automático
- **Scroll suave**: Navegación fluida entre secciones
- **Scroll reveal**: Animaciones al entrar elementos en viewport
- **Formulario**: Simulación de envío con feedback visual
- **Parallax**: Efecto sutil en hero y CTA (opcional)

## 📱 Breakpoints Responsive

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🌐 Navegadores Soportados

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## ⚡ Optimizaciones

- CSS puro sin preprocesadores
- JavaScript vanilla sin librerías
- Animaciones con CSS transitions y transforms
- Debounce en eventos de scroll
- Lazy loading preparado para imágenes

## 📝 Notas

- Las imágenes actuales son de **Unsplash** y **libres de derechos**
- Los textos son **placeholder genéricos** listos para reemplazar
- Los nombres del equipo y datos de contacto son **ficticios**
- El formulario no envía datos reales (requiere backend)

## 🎯 Próximos Pasos

Para poner el sitio en producción:

1. Reemplaza todas las imágenes con contenido real
2. Actualiza textos con información de la clínica
3. Configura el formulario de contacto con un backend o servicio (FormSpree, Netlify Forms, etc.)
4. Añade tu logo real
5. Actualiza metadatos SEO (title, description, keywords)
6. Añade favicon y Open Graph tags
7. Configura Google Analytics si lo necesitas

## 📞 Soporte

Este es un proyecto estático sin backend. Para añadir funcionalidades dinámicas considera:
- **Formularios**: FormSpree, Netlify Forms, EmailJS
- **CMS**: Netlify CMS, Forestry, Decap CMS
- **Hosting**: Netlify, Vercel, GitHub Pages

---

**Desarrollado con atención al detalle para ofrecer una experiencia premium** ✨
