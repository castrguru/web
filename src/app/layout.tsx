import moment from 'moment'
import type { Metadata } from 'next'
import Script from 'next/script'

import './globals.css'

const FRAME_METADATA = {
    version: 'next',
    imageUrl: 'https://castr.guru/poster.jpg?' + moment().unix(),
    button: {
        // title: `💡 🚧 Build Ur BIG Idea 👨‍💻 🚀`, // 32-char max
        // title: `💡 👨‍💻 Build Ur BIG Idea 🤖 🚀`, // 32-char max
        title: `👨‍💻 Build Your BIG 🚀 Idea 💡`, // 31 of 32-char max
        // title: `💡 🚧 Start Ur BIG Idea 👨‍💻 🚀`, // 32-char max
        action: {
            type: 'launch_frame',
            name: 'Castr GÜRŲ',
            url: 'https://castr.guru',
            splashImageUrl: 'https://castr.guru/splash.gif',
            splashBackgroundColor: "#bb67e8",
        },
    },
}

export const metadata: Metadata = {
    title: 'Castr GÜRŲ',
    description: 'Castr GÜRŲ for Farcaster builders.',
    openGraph: {
        images: [
            { url: 'https://castr.guru/icon.png' },
        ],
    },
    other: {
        'fc:frame': JSON.stringify(FRAME_METADATA),
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
            <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
        </html>
    )
}
