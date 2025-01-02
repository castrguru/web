import type { Metadata } from 'next'
// import Image from 'next/image'

import './globals.css'
import PlausibleProvider from 'next-plausible'
import Header from '../components/Header'

export const metadata: Metadata = {
    title: 'Castr GÜRŲ',
    description: 'Castr GÜRŲ for Farcaster builders.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />

                <PlausibleProvider
                    domain="castr.guru"
                    customDomain="https://plausible.castr.guru"
                >
                    {children}
                </PlausibleProvider>

                {/* FOOTER HERE */}
            </body>
        </html>
    )
}
