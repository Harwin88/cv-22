# CV - Harwin Galvis

CV personal construido con Astro, manteniendo el diseño original del template Material Resume.

## 🚀 Comenzar

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── css/          # Estilos CSS (mantenidos del template original)
│   ├── scripts/      # Scripts JavaScript
│   └── images/       # Imágenes
├── src/
│   ├── layouts/      # Layouts de Astro
│   ├── pages/        # Páginas
│   └── components/   # Componentes (opcional)
└── package.json
```

## ✨ Características

- ✅ Diseño original preservado
- ✅ CSS y estilos reutilizados
- ✅ Funcionalidad de exportar a PDF
- ✅ Optimizado con Astro
- ✅ Responsive
- ✅ Datos dinámicos desde API de Drupal

## 📦 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

### Pasos para configurar GitHub Pages:

1. **Crear el repositorio en GitHub** (si aún no lo has hecho):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   git push -u origin main
   ```

2. **Configurar GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Click en **Settings** (Configuración)
   - En el menú lateral, click en **Pages** (Páginas)
   - En **Source** (Fuente), selecciona **GitHub Actions**
   - Guarda los cambios

3. **Hacer push al repositorio**:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push
   ```

4. **Verificar el despliegue**:
   - Ve a la pestaña **Actions** en tu repositorio de GitHub
   - Espera a que termine el workflow "Deploy to GitHub Pages"
   - Tu sitio estará disponible en: `https://TU-USUARIO.github.io/NOMBRE-REPOSITORIO/`

### Notas sobre la configuración:

- **Base URL**: El workflow automáticamente detecta el nombre del repositorio y configura la base URL correctamente
- **Deploy automático**: Cada vez que hagas push a `main` o `master`, se desplegará automáticamente
- **Deploy manual**: Puedes ejecutar el workflow manualmente desde la pestaña Actions → Deploy to GitHub Pages → Run workflow

### URL del sitio:

- Si tu repositorio es `cv-22`, la URL será: `https://TU-USUARIO.github.io/cv-22/`
- Si el repositorio es `TU-USUARIO.github.io`, la URL será: `https://TU-USUARIO.github.io/`

## 📝 Notas

Este proyecto migra el template HTML estático a Astro, consumiendo datos dinámicos desde una API de Drupal y manteniendo toda la funcionalidad y diseño original.

