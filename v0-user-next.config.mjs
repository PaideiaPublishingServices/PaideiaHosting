/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configura la ruta base si vas a publicar en un subdominio de github.io
  // basePath: '/paideiahosting',
  // Si estás usando un dominio personalizado, no necesitas basePath
  images: {
    unoptimized: true,
  },
  // Desactiva el uso de la carpeta /public para la exportación estática
  // Esto es necesario para GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
};

export default nextConfig;

