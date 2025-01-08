import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: '/create/',
    //             destination: '/new/',
    //         },
    //     ]
    // },
}

export default nextConfig
