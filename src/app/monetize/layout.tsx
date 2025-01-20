import type { Metadata } from 'next'

import Footer from '@/components/Footer'
import Header from '@/components/HeaderAlt'

export const metadata: Metadata = {
    title: 'Monetization — Castr GÜRŲ',
    description: 'Castr GÜRŲ offers a collection of guides to the leading monetization strategies for Farcaster builders.',
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
