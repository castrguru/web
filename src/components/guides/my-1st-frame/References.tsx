// 'use client'

// import { useState } from 'react'

// import Image from 'next/image'
// import Link from 'next/link'

import { BookmarkSquareIcon } from '@heroicons/react/20/solid'

export default function References() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <main className="mt-16 max-w-2xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
                References
            </h2>

            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                    <BookmarkSquareIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                    <a href="https://docs.farcaster.xyz/developers/frames/v2/" target="_blank">
                        <strong className="font-semibold text-gray-900">Frames v2 Introduction</strong>
                    </a>
                </li>

                <li className="flex gap-x-3">
                    <BookmarkSquareIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                    <a href="https://github.com/farcasterxyz/frames" target="_blank">
                        <strong className="block font-semibold text-gray-900">Frames GitHub Repo</strong>
                    </a>
                </li>
            </ul>
        </main>
    )
}
