import type { Metadata } from 'next'

import Footer from '../../components/Footer'
import Header from '../../components/HeaderFixed'

export const metadata: Metadata = {
    title: 'Term of Service — Castr GÜRŲ',
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
