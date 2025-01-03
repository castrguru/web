import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // FIXME Temp fix to error
    // "Application error: a client-side exception has occurred (see the browser console for more information)."
    // (https://stackoverflow.com/questions/72607999/next-js-application-error-a-client-side-exception-has-occurred-see-the-browser)
    reactStrictMode: false,
}

export default nextConfig
