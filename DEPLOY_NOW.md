# 🚀 COMANDOS PARA SUBIR A GITHUB

## ✅ Estado Actual
- Git inicializado ✅
- Commit creado ✅  
- Remote configurado ✅
- Listo para push ✅

---

## 📝 EJECUTA ESTOS COMANDOS EN GIT BASH

Abre **Git Bash** en la carpeta del proyecto y ejecuta:

```bash
# 1. Navegar a la carpeta (si no estás ahí)
cd "/d/DESARROLLO WEB/hotel_website_multi"

# 2. Subir a GitHub
git push -u origin main
```

**Nota:** Te pedirá autenticación de GitHub:
- Usuario: `dayronsena123`
- Contraseña: Tu contraseña de GitHub (o Personal Access Token)

---

## 🌐 DESPUÉS: SUBIR A NETLIFY

### Paso 1: Ir a Netlify
1. Abrir: https://www.netlify.com
2. Clic en **"Sign up with GitHub"**
3. Autorizar Netlify

### Paso 2: Importar Proyecto
1. Clic en **"Add new site"** → **"Import an existing project"**
2. Seleccionar **"Deploy with GitHub"**
3. Buscar: `hotel-dubai-website`
4. Clic en el repositorio

### Paso 3: Configurar
- **Branch to deploy:** `main`
- **Build command:** (dejar vacío)
- **Publish directory:** (dejar vacío)
- Clic en **"Deploy site"**

### Paso 4: Esperar
- Netlify desplegará en 2-3 minutos
- Te dará una URL: `https://random-name.netlify.app`

### Paso 5: Cambiar URL (Opcional)
1. **"Site settings"** → **"Change site name"**
2. Poner: `hotel-dubai-chiriaco`
3. URL final: `https://hotel-dubai-chiriaco.netlify.app`

---

## 🔐 CONFIGURAR FIREBASE (IMPORTANTE)

### En la consola de Firebase:

1. Ir a: https://console.firebase.google.com
2. Seleccionar proyecto: `hotel-dubai`
3. Menú lateral → **"Firestore Database"**
4. Pestaña **"Reglas"** (Rules)
5. Reemplazar con esto:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir lectura/escritura de reservas
    match /reservations/{document=**} {
      allow read, write: if true;
    }
    
    // Permitir lectura/escritura de mensajes
    match /messages/{document=**} {
      allow read, write: if true;
    }
  }
}
```

6. Clic en **"Publicar"** (Publish)

**⚠️ IMPORTANTE:** Estas reglas son para desarrollo. Para producción deberías agregar autenticación.

---

## ✅ VERIFICAR QUE TODO FUNCIONA

Una vez desplegado en Netlify:

1. ✅ Abrir la URL del sitio
2. ✅ Probar hacer una reserva
3. ✅ Ir al admin: `tu-url.netlify.app/admin/login.html`
4. ✅ Login con: `hoteldubai2019@gmail.com` / `hoteldubai2019`
5. ✅ Verificar que aparezca la reserva en el dashboard

---

## 📞 ENVIAR AL CLIENTE

**URL del sitio:** `https://hotel-dubai-chiriaco.netlify.app`

**Credenciales Admin (por WhatsApp):**
```
Panel Administrativo:
URL: https://hotel-dubai-chiriaco.netlify.app/admin/login.html
Email: hoteldubai2019@gmail.com
Contraseña: hoteldubai2019
```

---

## 🎉 ¡LISTO!

El sitio estará funcionando en internet con base de datos real en Firebase.

**Created by Dayron**
