/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Génère le dossier /out
    distDir: 'out',   // S'assure que le nom du dossier est correct
    images: {
        unoptimized: true, // Requis pour le mode export
    },
    // FORCE LES CHEMINS RELATIFS
    assetPrefix: './',
}

module.exports = nextConfig