import { defineConfig } from 'astro/config';

// https://astro.build/config
// Base URL para GitHub Pages
// Si tienes un repositorio con nombre de usuario (usuario.github.io), la base será "/"
// Si tu repositorio es cualquier otro nombre (ej: cv-22), la base será "/nombre-repo/"
const getBaseURL = () => {
  // En GitHub Actions, detecta automáticamente el nombre del repositorio
  if (process.env.GITHUB_REPOSITORY) {
    const [, repo] = process.env.GITHUB_REPOSITORY.split('/');
    // Si el repositorio termina en .github.io, la base es "/"
    if (repo.endsWith('.github.io')) {
      return '/';
    }
    // Si no, usa el nombre del repositorio
    return `/${repo}/`;
  }
  // Para desarrollo local, puedes cambiar esto por el nombre de tu repositorio
  // Por defecto, usa "cv-22" (cambia esto si tu repositorio tiene otro nombre)
  return '/cv-22/';
};

export default defineConfig({
  // Base URL para GitHub Pages
  base: getBaseURL(),
  // Configuración para que los assets estén en public
  publicDir: 'public',
  // Configuración de build
  build: {
    assets: 'assets'
  },
  // Configuración del servidor
  server: {
    port: 4321,
    host: true
  }
});

