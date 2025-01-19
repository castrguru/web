import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    // output: 'export',
    output: 'standalone',
    // trailingSlash: true,
    images: {
        unoptimized: true,
    },
    async rewrites() {
        return [
            // build
            { source: '/buidl/', destination: '/build/' },
            { source: '/create/', destination: '/build/' },
            { source: '/new/', destination: '/build/' },

            // libs
            { source: '/lib/', destination: '/libs/' },
        ]
    },
}

export default nextConfig
