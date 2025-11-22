# 🚀 GUÍA RÁPIDA - Hotel Dubai

## 1️⃣ CÓMO ACCEDER AL PANEL ADMIN

El panel admin **NO está en el menú principal** (es privado). Para acceder:

### Opción A: Escribir la URL directamente
```
http://localhost:8000/admin/login.html
```

### Opción B: Cuando esté en internet
```
https://tu-sitio.netlify.app/admin/login.html
```

### Credenciales de Acceso:
- **Email:** hoteldubai2019@gmail.com
- **Contraseña:** hoteldubai2019

---

## 2️⃣ CÓMO SUBIR LA PÁGINA A INTERNET

### MÉTODO RÁPIDO (5 minutos):

#### Paso 1: Inicializar Git
```bash
# Abrir PowerShell en la carpeta del proyecto
cd "d:\DESARROLLO WEB\hotel_website_multi"

# Inicializar git
git init

# Agregar todos los archivos
git add .

# Crear commit
git commit -m "🎉 Sitio web Hotel Dubai completo"
```

#### Paso 2: Crear Repositorio en GitHub
1. Ir a https://github.com/new
2. Nombre: `hotel-dubai-website`
3. Hacer clic en "Create repository"
4. **COPIAR** la URL que te da (algo como: `https://github.com/TU_USUARIO/hotel-dubai-website.git`)

#### Paso 3: Conectar y Subir
```bash
# Conectar con GitHub (reemplaza con TU URL)
git remote add origin https://github.com/TU_USUARIO/hotel-dubai-website.git

# Cambiar a rama main
git branch -M main

# Subir todo
git push -u origin main
```

#### Paso 4: Desplegar en Netlify
1. Ir a https://www.netlify.com
2. Hacer clic en "Sign up with GitHub"
3. Hacer clic en "Add new site" → "Import an existing project"
4. Seleccionar "Deploy with GitHub"
5. Buscar tu repositorio `hotel-dubai-website`
6. Hacer clic en "Deploy site"
7. **¡LISTO!** En 2 minutos tendrás tu URL

---

## 3️⃣ URLs IMPORTANTES

Después de desplegar tendrás:

### Sitio Público:
- **Inicio:** `https://tu-sitio.netlify.app`
- **Habitaciones:** `https://tu-sitio.netlify.app/habitaciones.html`
- **Reservas:** `https://tu-sitio.netlify.app/reservas.html`
- **Contacto:** `https://tu-sitio.netlify.app/contacto.html`
- **Ubicación:** `https://tu-sitio.netlify.app/ubicacion.html`

### Panel Admin (PRIVADO):
- **Login:** `https://tu-sitio.netlify.app/admin/login.html`
- **Dashboard:** `https://tu-sitio.netlify.app/admin/dashboard.html`
- **Reservas:** `https://tu-sitio.netlify.app/admin/reservas.html`
- **Mensajes:** `https://tu-sitio.netlify.app/admin/mensajes.html`

---

## 4️⃣ COMANDOS GIT ÚTILES

### Para hacer cambios después:
```bash
# Ver qué cambió
git status

# Agregar cambios
git add .

# Guardar cambios
git commit -m "Descripción de los cambios"

# Subir a GitHub (Netlify se actualiza automáticamente)
git push
```

---

## 5️⃣ VERIFICAR QUE TODO FUNCIONA

### En Local (http://localhost:8000):
- ✅ Todas las páginas cargan
- ✅ Formulario de reservas funciona
- ✅ Formulario de contacto funciona
- ✅ Panel admin accesible en `/admin/login.html`
- ✅ Puedes hacer login con las credenciales
- ✅ Dashboard muestra estadísticas
- ✅ Puedes ver reservas y mensajes

### Después de Desplegar:
- ✅ Todas las páginas cargan en internet
- ✅ Imágenes se ven bien
- ✅ Formularios funcionan
- ✅ Panel admin funciona
- ✅ Responsive en móvil

---

## 6️⃣ CRÉDITOS

✅ **Footer actualizado** en todas las páginas:
```
© 2024 Hotel Dubai. Todos los derechos reservados. | Diseñado con ❤️ por Dayron
```

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### "No puedo acceder al admin"
- Verifica que estés usando la URL correcta: `/admin/login.html`
- El admin NO aparece en el menú (es privado)

### "Git no está instalado"
```bash
# Descargar Git desde:
https://git-scm.com/download/win
```

### "No puedo hacer push a GitHub"
```bash
# Configurar credenciales
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

---

## 📞 CONTACTO

Si tienes problemas:
1. Revisar `DEPLOYMENT_GUIDE.md` (guía completa)
2. Revisar `TODO.md` (lo que falta)
3. Revisar `README.md` (documentación)

---

**¡Tu sitio está LISTO para internet!** 🚀
