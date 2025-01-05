'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import { ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { BoltIcon } from '@heroicons/react/24/outline'

import Image from 'next/image'
import Link from 'next/link'

const services = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of your traffic',
        href: '#',
        icon: ChartPieIcon
    },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

const callsToAction = [
    {
        name: 'Watch demo',
        href: '#',
        icon: PlayCircleIcon
    },
    {
        name: 'Contact sales',
        href: '#',
        icon: PhoneIcon
    },
]

/* GÜRŲs */
const gurus = [
    {
        name: 'My Profile',
        href: '#',
        description: 'Learn more about our gurus values and mission to empower others'
    },
    {
        name: 'Marketplace',
        href: '#',
        description: 'Looking for you next career opportunity? See all of our open positions'
    },
    {
        name: 'Support',
        href: '#',
        description: 'Get in touch with our dedicated support team or reach out on our community forums',
    },
    {
        name: 'Blog',
        href: '#',
        description: 'Read our latest announcements and get perspectives from our team'
    },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-stone-700">
            <nav aria-label="Global" className="mx-auto flex w-full items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Castr Guru</span>

                        <Image
                            alt=""
                            width={0}
                            height={0}
                            src="/icon.svg"
                            className="size-14"
                        />
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                <PopoverGroup className="hidden lg:flex lg:gap-x-12">

                    <Link href="/kits" className="text-xl/6 font-semibold text-stone-300">
                        Kits
                    </Link>

                    <Link href="/studio" className="text-xl/6 font-semibold text-stone-300">
                        Studio
                    </Link>

                    <Link href="/manager" className="text-xl/6 font-semibold text-stone-300">
                        Manager
                    </Link>

                    <Link href="/guides" className="text-xl/6 font-semibold text-stone-300">
                        Guides
                    </Link>

                </PopoverGroup>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        href="/"
                        className="group flex flex-row gap-1 text-xl/6 font-semibold text-stone-300 hover:text-stone-200"
                    >
                        Connect
                        <BoltIcon className="size-6 text-amber-500 group-hover:text-amber-300" />
                    </Link>
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Castr Guru</span>

                                <Image
                                    alt=""
                                    width={0}
                                    height={0}
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </Link>

                            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>

                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {services.map((item) => (
                                        <a key={item.name} href={item.href} className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                            </div>
                                            {item.name}
                                        </a>
                                    ))}
                                </div>

                                <div className="space-y-2 py-6">
                                    <a href="/kits" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Frame Kits
                                    </a>

                                    <a href="/studio" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Frame Studio
                                    </a>

                                    {gurus.map((item) => (
                                        <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                            {item.name}
                                        </a>
                                    ))}
                                </div>

                                <div className="py-6">
                                    <a href="/manager" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Manager
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center">
                        {callsToAction.map((item) => (
                            <a key={item.name} href={item.href} className="p-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-100">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
