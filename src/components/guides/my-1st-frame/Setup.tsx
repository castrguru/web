// 'use client'

// import { useState } from 'react'

// import Image from 'next/image'
import Link from 'next/link'

import {
    ArrowTopRightOnSquareIcon,
    BookmarkIcon,
} from '@heroicons/react/20/solid'

export default function QuickSummary() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <main>
            <h3 className="text-2xl font-semibold text-slate-600 tracking-wider">
                Setup
            </h3>

            <p className="mt-4">
                By combining some React APIs, we can accurately manage “simple” states.
                With Next.js though, we can quickly find situations where we need to accommodate many other requirements.
                This guide is intended to be used as a primer for managing complex states in a Next.js app.
                These strategies should fit the vast majority of apps around with little to no adjustments.
            </p>

            <h3 className="mt-8 text-xl font-semibold tracking-wider">
                In order to follow this tutorial you’ll want the following:
            </h3>

            <ul role="list" className="mt-4 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                    <BookmarkIcon
                        aria-hidden="true"
                        className="mt-0.5 size-7 flex-none text-fuchsia-400"
                    />

                    <div>
                        <h3 className="text-2xl font-semibold text-slate-700 tracking-wider">
                            An account on Orbiter: sign up for a free account in less than a minute.
                        </h3>

                        <Link href="https://astro.build/" target="_blank" className="group w-fit flex flex-row gap-1 items-center">
                            <span className="text-sky-500 tracking-widest font-medium group-hover:text-sky-400">
                                astro.build
                            </span>
                            <ArrowTopRightOnSquareIcon className="size-4 text-slate-400 group-hover:text-amber-400" />
                        </Link>

                        <p className="text-slate-700 tracking-wide">
                            A beautifully simply web framework, perfectly suited for beginners and experienced builders.
                        </p>
                    </div>
                </li>

                <li className="flex gap-x-3">
                    <BookmarkIcon
                        aria-hidden="true"
                        className="mt-0.5 size-7 flex-none text-fuchsia-400"
                    />

                    <div>
                        <h3 className="text-2xl font-semibold text-slate-700 tracking-wider">
                        Node.js (version 20 or higher, I personally like using this tool for installing and managing Node versions)
                        </h3>

                        <Link href="https://tailwindcss.com/" target="_blank" className="group w-fit flex flex-row gap-1 items-center">
                            <span className="text-sky-500 tracking-widest font-medium group-hover:text-sky-400">
                                tailwindcss.com
                            </span>
                            <ArrowTopRightOnSquareIcon className="size-4 text-slate-400 group-hover:text-amber-400" />
                        </Link>

                        <p className="text-slate-700 tracking-wide">
                            One of the leading styling frameworks for creating the most beautiful user interfaces (UIs).
                        </p>
                    </div>
                </li>

                <li className="flex gap-x-3">
                    <BookmarkIcon
                        aria-hidden="true"
                        className="mt-0.5 size-7 flex-none text-fuchsia-400"
                    />

                    <div>
                        <h3 className="text-2xl font-semibold text-slate-700 tracking-wider">
                        A text editor like VSCode (or Zed if you’re cool 😉 )
                        </h3>

                        <Link href="https://tailwindcss.com/" target="_blank" className="group w-fit flex flex-row gap-1 items-center">
                            <span className="text-sky-500 tracking-widest font-medium group-hover:text-sky-400">
                                tailwindcss.com
                            </span>
                            <ArrowTopRightOnSquareIcon className="size-4 text-slate-400 group-hover:text-amber-400" />
                        </Link>

                        <p className="text-slate-700 tracking-wide">
                            Provides many advanced tools and a rock-solid cloud infrastructure to: build, scale, and secure your Farcaster frames.
                        </p>
                    </div>
                </li>
            </ul>
        </main>
    )
}
