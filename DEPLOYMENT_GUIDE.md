# 🚀 Guía de Despliegue - Hotel Dubai

## 📋 Pasos para Subir a GitHub y Netlify

---

## PASO 1: Preparar Git y GitHub

### 1.1 Inicializar Git (si no está inicializado)

```bash
# Abrir terminal en la carpeta del proyecto
cd "d:\DESARROLLO WEB\hotel_website_multi"

# Verificar si ya tiene git
git status

# Si no tiene git, inicializar
git init
```

### 1.2 Crear archivo .gitignore

Crear un archivo `.gitignore` en la raíz del proyecto con este contenido:

```
# Sistema operativo
.DS_Store
Thumbs.db
desktop.ini

# Editores
.vscode/
.idea/
*.swp
*.swo

# Node modules (si usas npm en el futuro)
node_modules/

# Logs
*.log
npm-debug.log*

# Temporal
.tmp/
temp/
```

### 1.3 Configurar Git (primera vez)

```bash
# Configurar tu nombre y email
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

---

## PASO 2: Crear Repositorio en GitHub

### 2.1 Ir a GitHub
1. Abrir https://github.com
2. Hacer clic en el botón **"+"** (arriba derecha)
3. Seleccionar **"New repository"**

### 2.2 Configurar el Repositorio
- **Repository name:** `hotel-dubai-website`
- **Description:** "Sitio web oficial del Hotel Dubai en Chiriaco, Perú"
- **Visibility:** Public (o Private si prefieres)
- **NO** marcar "Initialize this repository with a README"
- Hacer clic en **"Create repository"**

### 2.3 Copiar la URL del Repositorio
GitHub te mostrará algo como:
```
https://github.com/TU_USUARIO/hotel-dubai-website.git
```
**¡Copia esta URL!**

---

## PASO 3: Subir el Código a GitHub

### 3.1 Agregar todos los archivos

```bash
# Agregar todos los archivos
git add .

# Verificar qué se va a subir
git status
```

### 3.2 Hacer el primer commit

```bash
# Crear el commit inicial
git commit -m "🎉 Sitio web completo Hotel Dubai - Versión 1.0"
```

### 3.3 Conectar con GitHub y subir

```bash
# Conectar con tu repositorio (reemplaza con TU URL)
git remote add origin https://github.com/TU_USUARIO/hotel-dubai-website.git

# Cambiar a rama main
git branch -M main

# Subir todo a GitHub
git push -u origin main
```

### 3.4 Verificar
Ve a tu repositorio en GitHub y verifica que todos los archivos estén ahí.

---

## PASO 4: Desplegar en Netlify

### Opción A: Desde GitHub (Recomendado)

#### 4.1 Ir a Netlify
1. Abrir https://www.netlify.com
2. Hacer clic en **"Sign up"** (o "Log in" si ya tienes cuenta)
3. Seleccionar **"Sign up with GitHub"**
4. Autorizar a Netlify

#### 4.2 Importar desde GitHub
1. Hacer clic en **"Add new site"** → **"Import an existing project"**
2. Seleccionar **"Deploy with GitHub"**
3. Buscar y seleccionar tu repositorio `hotel-dubai-website`
4. Configurar el despliegue:
   - **Branch to deploy:** `main`
   - **Build command:** (dejar vacío)
   - **Publish directory:** (dejar vacío o poner `/`)
5. Hacer clic en **"Deploy site"**

#### 4.3 Esperar el Despliegue
Netlify tardará 1-2 minutos en desplegar. Verás el progreso en tiempo real.

#### 4.4 Obtener la URL
Una vez desplegado, Netlify te dará una URL como:
```
https://random-name-123456.netlify.app
```

### Opción B: Arrastrar y Soltar (Más Rápido)

#### 4.1 Ir a Netlify
1. Abrir https://app.netlify.com/drop
2. Arrastrar la carpeta `hotel_website_multi` completa
3. Soltar en el área indicada
4. Esperar que suba (1-2 minutos)
5. ¡Listo! Te dará una URL

---

## PASO 5: Personalizar el Dominio en Netlify

### 5.1 Cambiar el Nombre del Sitio
1. En Netlify, ir a **"Site settings"**
2. Hacer clic en **"Change site name"**
3. Poner algo como: `hotel-dubai-chiriaco`
4. Guardar

Tu URL será: `https://hotel-dubai-chiriaco.netlify.app`

### 5.2 Agregar Dominio Personalizado (Opcional)
Si tienes un dominio propio (ej: `hoteldubai.com`):

1. En Netlify, ir a **"Domain settings"**
2. Hacer clic en **"Add custom domain"**
3. Ingresar tu dominio
4. Seguir las instrucciones para configurar DNS

---

## PASO 6: Configurar Variables de Entorno (Futuro)

Cuando integres servicios reales (emails, pagos), necesitarás variables de entorno:

1. En Netlify, ir a **"Site settings"** → **"Environment variables"**
2. Agregar variables como:
   - `EMAIL_SERVICE_KEY`
   - `PAYMENT_API_KEY`
   - etc.

---

## PASO 7: Actualizaciones Futuras

### Cuando hagas cambios en el código:

```bash
# 1. Guardar cambios
git add .

# 2. Crear commit con mensaje descriptivo
git commit -m "✨ Agregada nueva funcionalidad X"

# 3. Subir a GitHub
git push

# 4. Netlify se actualizará automáticamente (si usaste Opción A)
```

---

## 📝 Comandos Git Útiles

```bash
# Ver estado actual
git status

# Ver historial de commits
git log --oneline

# Crear una nueva rama
git checkout -b nueva-funcionalidad

# Cambiar de rama
git checkout main

# Ver ramas
git branch

# Descargar cambios de GitHub
git pull
```

---

## 🔧 Solución de Problemas

### Error: "Permission denied"
```bash
# Configurar credenciales de GitHub
git config --global credential.helper store
git push
# Te pedirá usuario y contraseña/token
```

### Error: "Repository not found"
```bash
# Verificar la URL del repositorio
git remote -v

# Si está mal, cambiarla
git remote set-url origin https://github.com/TU_USUARIO/hotel-dubai-website.git
```

### Error al hacer push
```bash
# Forzar el push (solo si es necesario)
git push -f origin main
```

---

## 📱 Verificar el Sitio Desplegado

Una vez desplegado, verifica:

✅ Todas las páginas cargan correctamente
✅ Las imágenes se ven bien
✅ El formulario de reservas funciona
✅ El formulario de contacto funciona
✅ El panel admin funciona (admin/login.html)
✅ El sitio es responsive en móvil
✅ Los enlaces de Facebook funcionan

---

## 🎯 URLs Importantes

Después del despliegue tendrás:

- **Sitio Web:** `https://tu-sitio.netlify.app`
- **Panel Admin:** `https://tu-sitio.netlify.app/admin/login.html`
- **Repositorio GitHub:** `https://github.com/TU_USUARIO/hotel-dubai-website`

---

## 📞 Soporte

Si tienes problemas:

1. **GitHub Issues:** Crear un issue en tu repositorio
2. **Netlify Support:** https://www.netlify.com/support/
3. **Documentación:**
   - Git: https://git-scm.com/doc
   - GitHub: https://docs.github.com
   - Netlify: https://docs.netlify.com

---

## 🎉 ¡Felicidades!

Tu sitio web del Hotel Dubai ahora está:
- ✅ En GitHub (respaldado y versionado)
- ✅ Desplegado en Netlify (accesible desde cualquier lugar)
- ✅ Con HTTPS automático (seguro)
- ✅ Con despliegue continuo (actualizaciones automáticas)

**¡Ahora puedes compartir la URL con tus clientes!** 🚀

---

**Desarrollado con ❤️ para Hotel Dubai, Chiriaco, Perú**
