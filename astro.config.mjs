import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
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

