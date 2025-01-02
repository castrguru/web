import Head from 'next/head'
import Image from 'next/image'
import { Geist, Geist_Mono } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export default function Home() {
    return (
        <>
            <Head>
                <title>Castr GÜRŲ</title>
                <meta name="description" content="Castr GÜRŲ for Farcaster builders." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div
                className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
            >
                <main className={styles.main}>
                    <Image
                        className="size-32"
                        src="/icon.svg"
                        alt="Castr Guru logo"
                        width={0}
                        height={0}
                        priority
                    />

                    <h1 className="-mt-5 text-5xl font-light text-rose-400 tracking-widest italic">
                        Castr GÜRŲ
                    </h1>

                    <ol className="pl-10 list-decimal">
                        <li>
                            Get started by editing <code>pages/index.js</code>.
                        </li>
                        <li>Save and see your changes instantly.</li>
                    </ol>

                    <div className={styles.ctas}>
                        <a
                            className={styles.primary}
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className={styles.logo}
                                src="/vercel.svg"
                                alt="Vercel logomark"
                                width={20}
                                height={20}
                            />
                            Get started
                        </a>

                        <a
                            href="https://docs.castr.guru"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondary}
                        >
                            Read our docs
                        </a>
                    </div>
                </main>

                <footer className={styles.footer}>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/file.svg"
                            alt="File icon"
                            width={16}
                            height={16}
                        />
                        Learn
                    </a>

                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/window.svg"
                            alt="Window icon"
                            width={16}
                            height={16}
                        />
                        Examples
                    </a>

                    <a
                        href="https://docs.castr.guru"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/globe.svg"
                            alt="Globe icon"
                            width={16}
                            height={16}
                        />
                        Go to docs.castr.guru →
                    </a>
                </footer>
            </div>
        </>
    )
}
