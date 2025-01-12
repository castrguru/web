import type { Metadata } from 'next'

import Footer from '../../components/Footer'
import Header from '../../components/HeaderAlt'

export const metadata: Metadata = {
    title: '$HACKATHON Week One — Castr GÜRŲ',
    description: 'A weekly Farcaster event, created by @jpfraneto and clanker, to support builders.',
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
