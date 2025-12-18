const { PHASE_DEVELOPMENT_SERVER } = require('next/dist/shared/lib/constants')

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER

    return ({
        images: {
            unoptimized: true,
        },
        ...(!isDev && {
            output: 'export',
            distDir: 'out',
            assetPrefix: './',
        }),
    })
}

module.exports = nextConfig