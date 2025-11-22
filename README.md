# 🏨 Hotel Dubai - Sitio Web Oficial

> Sitio web moderno y completo para Hotel Dubai en Chiriaco, Perú

[![Estado](https://img.shields.io/badge/estado-activo-success.svg)](https://github.com)
[![Licencia](https://img.shields.io/badge/licencia-MIT-blue.svg)](LICENSE)

## 📋 Descripción

Sitio web profesional para Hotel Dubai ubicado en Chiriaco, Perú. Incluye sistema de reservas en línea, formulario de contacto funcional, panel administrativo completo y diseño responsive premium.

## ✨ Características

### Frontend
- ✅ Diseño moderno con gradientes y animaciones
- ✅ 100% Responsive (móvil, tablet, desktop)
- ✅ Sistema de diseño con variables CSS
- ✅ Animaciones suaves y micro-interacciones
- ✅ Optimizado para SEO
- ✅ Integración con Google Maps
- ✅ Integración con redes sociales

### Funcionalidades
- 📅 **Sistema de Reservas** - Formulario completo con cálculo automático de precios
- 📧 **Formulario de Contacto** - Validación y almacenamiento de mensajes
- 🔐 **Panel Administrativo** - Gestión de reservas y mensajes
- 📊 **Dashboard** - Estadísticas en tiempo real
- 💾 **Almacenamiento Local** - Persistencia de datos con localStorage

## 🚀 Instalación

### Opción 1: Servidor Local

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/hotel-dubai-website.git

# Navegar a la carpeta
cd hotel-dubai-website

# Iniciar servidor con Python
python -m http.server 8000

# O con Node.js
npx http-server -p 8000
```

Abrir en el navegador: `http://localhost:8000`

### Opción 2: Abrir Directamente
Simplemente abrir `index.html` en tu navegador favorito.

## 📁 Estructura del Proyecto

```
hotel_website_multi/
├── index.html              # Página de inicio
├── habitaciones.html       # Catálogo de habitaciones
├── reservas.html          # Sistema de reservas
├── ubicacion.html         # Ubicación y mapa
├── contacto.html          # Formulario de contacto
├── sitemap.xml            # Mapa del sitio
├── robots.txt             # SEO
├── css/
│   ├── design-system.css  # Variables y sistema de diseño
│   ├── animations.css     # Animaciones
│   ├── styles.css         # Estilos principales
│   └── responsive.css     # Media queries
├── js/
│   ├── main.js           # Funcionalidad principal
│   ├── reservas.js       # Sistema de reservas
│   ├── contact.js        # Formulario de contacto
│   └── admin.js          # Panel administrativo
├── admin/
│   ├── login.html        # Login del administrador
│   ├── dashboard.html    # Dashboard
│   ├── reservas.html     # Gestión de reservas
│   └── mensajes.html     # Gestión de mensajes
└── img/
    └── logo.jpg          # Logo del hotel
```

## 🔐 Panel Administrativo

### Acceso
**URL:** `/admin/login.html`

> **Nota de Seguridad:** Las credenciales de acceso son confidenciales y solo deben ser conocidas por el personal autorizado del hotel.

### Funcionalidades
- Ver y gestionar reservas
- Cambiar estado de reservas
- Ver y responder mensajes
- Estadísticas en tiempo real
- Exportar datos a CSV

## 📱 Información de Contacto

- **Dirección:** Jr. Awajun 150, Chiriaco, Perú, 01811
- **Teléfono:** 963 728 301
- **Email:** hoteldubai2019@gmail.com
- **Facebook:** [Hotel Dubai](https://web.facebook.com/profile.php?id=61581230575946)

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Primary | `#1a4d7a` | Azul profundo - Navegación |
| Secondary | `#d4af37` | Dorado - Acentos |
| Accent | `#ff6b35` | Naranja - CTAs |
| Success | `#28a745` | Verde - Confirmaciones |

## 🛠️ Tecnologías

- HTML5
- CSS3 (Variables, Flexbox, Grid)
- JavaScript (ES6+)
- Google Fonts (Playfair Display, Inter)
- Google Maps API
- LocalStorage

## 📊 SEO

- Meta tags completos
- Open Graph tags
- Sitemap.xml
- Robots.txt
- Estructura semántica HTML5
- URLs amigables

## 🌐 Navegadores Soportados

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## 📝 Notas para Producción

1. **Base de Datos:** Migrar de localStorage a base de datos real (MongoDB/PostgreSQL)
2. **Emails:** Integrar EmailJS o Nodemailer para envíos reales
3. **Autenticación:** Implementar sistema seguro con JWT y hash de contraseñas
4. **Imágenes:** Reemplazar imágenes de muestra con fotos reales del hotel
5. **Optimización:** Minificar CSS/JS y convertir imágenes a WebP

## 🚀 Despliegue

### Netlify (Recomendado)
```bash
# Conectar con GitHub
git remote add origin https://github.com/TU_USUARIO/hotel-dubai-website.git
git push -u origin main

# En Netlify:
# 1. New site from Git
# 2. Seleccionar repositorio
# 3. Deploy
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

## 👨‍💻 Desarrollador

**Created by Dayron**

## 📄 Licencia

© 2024 Hotel Dubai. Todos los derechos reservados.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📞 Soporte

Para soporte o consultas:
- Email: hoteldubai2019@gmail.com
- Teléfono: 963 728 301
- WhatsApp: [+51 963 728 301](https://wa.me/51963728301)

---

**Desarrollado con ❤️ para Hotel Dubai, Chiriaco, Perú**
