import type { Metadata } from 'next'
// import Image from 'next/image'

import Header from '@/components/HeaderAlt'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: 'Downloads — Castr GÜRŲ',
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
                {children}
                <Footer />
            </body>
        </html>
    )
}
