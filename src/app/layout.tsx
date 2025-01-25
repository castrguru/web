import moment from 'moment'
import type { Metadata } from 'next'
// import Image from 'next/image'

import './globals.css'
import PlausibleProvider from 'next-plausible'

const FRAME_METADATA = {
    version: 'next',
    // imageUrl: 'https://castr.guru/og.png',
    imageUrl: 'https://castr.guru/banner.jpg?' + moment().unix(),
    button: {
        title: `Build Your Imagination`,
        action: {
            type: 'launch_frame',
            name: 'Launcher',
            url: 'https://castr.guru',
            splashImageUrl: 'https://castr.guru/splash.gif',
            splashBackgroundColor: "#9218d2",
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
            <body>
                <PlausibleProvider
                    domain="castr.guru"
                    customDomain="https://plausible.castr.guru"
                >
                    {children}
                </PlausibleProvider>
            </body>
        </html>
    )
}
