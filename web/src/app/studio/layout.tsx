'use client'

import { useState } from 'react'
// import type { Metadata } from 'next'

// import Image from 'next/image'
import Link from 'next/link'

import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import { CodeBracketIcon, RocketLaunchIcon, BuildingStorefrontIcon, PaintBrushIcon, RectangleGroupIcon, PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline'

// export const metadata: Metadata = {
//     title: 'Studio — Castr GÜRŲ',
//     description: 'Castr GÜRŲ for Farcaster builders.',
// }

const navigation = [
    { name: 'Concierge', href: '/studio', icon: BuildingStorefrontIcon, current: false },
    { name: 'Frames', href: '/studio/frames', icon: RectangleGroupIcon, current: false },
    { name: 'Launcher', href: '/studio/launcher', icon: RocketLaunchIcon, current: false },
    { name: 'Icon Studio', href: '/studio/icon', icon: PhotoIcon, current: true },
    { name: 'Theme Studio', href: '/studio/theme', icon: PaintBrushIcon, current: false },
    // { name: 'Media Center', href: '/studio', icon: MusicalNoteIcon, current: false },
    { name: 'Code Snippets', href: '/studio/code', icon: CodeBracketIcon, current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <main>
            <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                <DialogBackdrop transition className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0" />

                <div className="fixed inset-0 flex">
                    <DialogPanel transition className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full">
                        <TransitionChild>
                            <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                                <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                                    <span className="sr-only">Close sidebar</span>
                                    <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                                </button>
                            </div>
                        </TransitionChild>

                        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                            <Link href="/" className="flex h-16 shrink-0 items-center">
                                <img alt="Castr Guru" src="/icon.svg" className="size-10" />
                            </Link>

                            <nav className="flex flex-1 flex-col">
                                <ul role="list" className="-mx-2 flex-1 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className={classNames(item.current ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white", "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold")}
                                            >
                                                <item.icon aria-hidden="true" className="size-6 shrink-0" />
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4">
                <Link href="/" className="flex h-16 shrink-0 items-center justify-center">
                    <img alt="Castr Guru" src="/icon.svg" className="size-10" />
                </Link>

                <nav className="mt-8">
                    <ul role="list" className="flex flex-col items-center space-y-1">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className={classNames(item.current ? "bg-gray-800 text-white" : "text-gray-400 hover:bg-gray-800 hover:text-white", "group flex gap-x-3 rounded-md p-3 text-sm/6 font-semibold")}>
                                    <item.icon aria-hidden="true" className="size-6 shrink-0" />
                                    <span className="sr-only">{item.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {children}
        </main>
    )
}
