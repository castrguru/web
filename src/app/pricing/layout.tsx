import type { Metadata } from 'next'
// import Image from 'next/image'
import { Geist, Geist_Mono } from 'next/font/google'

import Header from '../../components/HeaderFixed'
import Footer from '../../components/Footer'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Demos — Castr GÜRŲ',
    description: 'Castr GÜRŲ for Farcaster builders.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-stone-900 to-stone-700`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
