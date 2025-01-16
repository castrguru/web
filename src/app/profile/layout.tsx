import type { Metadata } from 'next'
// import Image from 'next/image'

import Header from '@/components/HeaderAlt'

export const metadata: Metadata = {
    title: 'Profile Manager — Castr GÜRŲ',
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
                <header className="sticky top-0 z-50">
                    <Header />
                </header>
                {children}
            </body>
        </html>
    )
}
