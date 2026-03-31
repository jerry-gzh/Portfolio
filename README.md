# 📘 Manual Operativo — Portafolio DevOps

Documento operativo para instalación, previsualización y despliegue del portafolio en GitHub Pages. Este manual está redactado para cualquier lector, con pasos claros y verificables.

## 🧭 Alcance
Este manual cubre:
- Instalación de dependencias
- Previsualización local
- Build de producción
- Variables de entorno (EmailJS)
- Despliegue en GitHub Pages

## ✅ Requisitos
- Node.js 18 LTS o superior
- npm 9+ (o yarn)
- Acceso al repositorio en GitHub (para deploy)

## 📦 Instalación
1. Abre una terminal en la raíz del proyecto.
2. Instala dependencias:
```bash
npm install
```

## 👀 Previsualización local (dev)
1. Inicia el servidor de desarrollo:
```bash
npm start
```
2. Abre en el navegador:
```
http://localhost:3000
```

Si el puerto 3000 está ocupado, el sistema preguntará si deseas usar otro puerto.

## 🏗️ Build de producción
1. Genera el build:
```bash
npm run build
```
2. (Opcional) Previsualiza el build local:
```bash
npx serve -s build
```

## 🔐 Variables de entorno (EmailJS)
Crea un archivo `.env` en la raíz del proyecto con los siguientes valores:
```bash
REACT_APP_EMAILJS_SERVICE_ID=tu_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=tu_template_id
REACT_APP_EMAILJS_PUBLIC_API=tu_public_key
```

Notas:
- Reinicia el servidor de desarrollo después de crear o modificar `.env`.
- No subas `.env` al repositorio público.

## 🚀 Despliegue en GitHub Pages
Este proyecto ya incluye `gh-pages` y scripts listos para desplegar.

### 1) Verifica el campo `homepage`
En `package.json`, asegúrate de que `homepage` tenga el valor correcto:
- Con dominio propio: `https://tudominio.com`
- Sin dominio propio: `https://<usuario>.github.io/<repo>`

### 2) Ejecuta el despliegue
```bash
npm run deploy
```

### 3) Configura GitHub Pages
En GitHub:
- Ve a **Settings → Pages**
- Selecciona la rama `gh-pages`

Si usas dominio propio, el script `predeploy` genera `build/CNAME` automáticamente.

## 🧰 Operación y mantenimiento
- Si cambias el dominio, actualiza `homepage` en `package.json`.
- Si el formulario no envía, revisa las variables de entorno y configuración en EmailJS.
- Para actualizar dependencias, ejecuta:
```bash
npm update
```

## 🧪 Validación rápida
- `npm start` abre el sitio en local.
- `npm run build` genera el build sin errores.
- `npm run deploy` publica en GitHub Pages.

## 🆘 Solución de problemas
- **`react-scripts: command not found`**
  Ejecuta `npm install` para reinstalar dependencias.
- **Puerto ocupado**
  Acepta cambiar de puerto cuando el sistema lo solicite.

---

Si necesitas agregar CI/CD, métricas o un dominio adicional, se recomienda documentarlo como un anexo a este manual.
