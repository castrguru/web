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
            {
                source: '/buidl/',
                destination: '/build/',
            },
            {
                source: '/create/',
                destination: '/build/',
            },
            {
                source: '/new/',
                destination: '/build/',
            },
        ]
    },
}

export default nextConfig
