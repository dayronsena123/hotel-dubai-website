# 🚀 GUÍA RÁPIDA - Subir a Internet

## ✅ TODO ESTÁ LISTO

El proyecto está verificado y listo para subir a internet.

---

## 📋 PASOS PARA SUBIR

### PASO 1: Crear Repositorio en GitHub

1. Abrir: https://github.com/new
2. **Nombre:** `hotel-dubai-website`
3. **Descripción:** "Sitio web Hotel Dubai - Chiriaco, Perú"
4. Seleccionar **Public**
5. **NO** marcar "Initialize with README"
6. Clic en **"Create repository"**
7. **COPIAR** la URL (ejemplo: `https://github.com/TU_USUARIO/hotel-dubai-website.git`)

---

### PASO 2: Conectar y Subir (PowerShell)

```powershell
# Navegar a la carpeta del proyecto
cd "d:\DESARROLLO WEB\hotel_website_multi"

# Conectar con GitHub (REEMPLAZA con TU URL copiada)
git remote add origin https://github.com/TU_USUARIO/hotel-dubai-website.git

# Cambiar a rama main
git branch -M main

# Subir todo
git push -u origin main
```

**Nota:** Te pedirá autenticación de GitHub. Usa tu usuario y contraseña (o token).

---

### PASO 3: Desplegar en Netlify (GRATIS)

1. Ir a: https://www.netlify.com
2. Clic en **"Sign up with GitHub"**
3. Autorizar Netlify
4. Clic en **"Add new site"** → **"Import an existing project"**
5. Seleccionar **"Deploy with GitHub"**
6. Buscar y seleccionar: `hotel-dubai-website`
7. Configuración:
   - Branch: `main`
   - Build command: (dejar vacío)
   - Publish directory: (dejar vacío)
8. Clic en **"Deploy site"**

**¡LISTO!** En 2-3 minutos tu sitio estará en línea.

---

### PASO 4: Personalizar URL (Opcional)

1. En Netlify, ir a **"Site settings"**
2. Clic en **"Change site name"**
3. Escribir: `hotel-dubai-chiriaco`
4. Tu URL final será: `https://hotel-dubai-chiriaco.netlify.app`

---

## 🔐 IMPORTANTE: Credenciales del Admin

**NO están en el código público** ✅

Debes enviar al cliente por WhatsApp:
- Email: `hoteldubai2019@gmail.com`
- Contraseña: `hoteldubai2019`
- URL del admin: `https://tu-sitio.netlify.app/admin/login.html`

---

## ✅ Verificación Final

Después de desplegar, verificar:
- [ ] Sitio carga correctamente
- [ ] Todas las páginas funcionan
- [ ] Formulario de reservas funciona
- [ ] Formulario de contacto funciona
- [ ] Panel admin accesible
- [ ] Responsive en móvil
- [ ] Mapa de Google funciona

---

## 📞 Mostrar al Cliente

**URL Principal:** `https://tu-sitio.netlify.app`

**Páginas para mostrar:**
1. Inicio
2. Habitaciones
3. Reservas (hacer una prueba)
4. Contacto
5. Ubicación
6. Admin (con sus credenciales)

---

## 🎉 ¡Todo Listo!

El sitio está **100% completo** y listo para ser mostrado al cliente.

**Created by Dayron**
