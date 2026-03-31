# Portafolio — DevOps

Portafolio personal construido con React y desplegado en GitHub Pages.

## Stack
- React 18 + Create React App
- i18next (ES/EN)
- EmailJS (formulario de contacto)

## Requisitos
- Node.js 18 LTS (o superior)
- npm 9+ (o yarn)

## Instalación
```bash
npm install
```

## Desarrollo (preview local)
```bash
npm start
```
Abre `http://localhost:3000`.

## Build de producción
```bash
npm run build
```
Para previsualizar el build localmente:
```bash
npx serve -s build
```

## Variables de entorno (EmailJS)
Crea un archivo `.env` en la raíz con:
```bash
REACT_APP_EMAILJS_SERVICE_ID=tu_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=tu_template_id
REACT_APP_EMAILJS_PUBLIC_API=tu_public_key
```
Reinicia el servidor después de agregarlo.

## Despliegue en GitHub Pages
Este proyecto usa `gh-pages` y ya incluye los scripts necesarios.

1. Asegúrate de tener un repo en GitHub y el `remote` configurado.
2. Verifica el campo `homepage` en `package.json`.
   - Con dominio propio: `https://tudominio.com`
   - Sin dominio: `https://<usuario>.github.io/<repo>`
3. Ejecuta el deploy:
```bash
npm run deploy
```

### Configuración en GitHub
- En **Settings → Pages** selecciona la rama `gh-pages`.
- Si usas dominio propio, el script `predeploy` crea `build/CNAME` automáticamente.

## Notas
- Si cambias el dominio, actualiza `homepage` en `package.json`.
- Si el formulario no envía, revisa las variables de entorno y tu configuración en EmailJS.
