import type { Metadata } from 'next'
import Image from 'next/image'
import { Geist, Geist_Mono } from 'next/font/google'

import '@/app/globals.css'
import Header from '@/components/Header'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

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
                {/* <Header /> */}

                <main className="">
                    {children}
                </main>

                {/* FOOTER HERE */}
            </body>
        </html>
    )
}
