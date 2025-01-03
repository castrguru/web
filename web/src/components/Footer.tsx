'use client'

// import { useState } from 'react'

import Image from 'next/image'
// import Link from 'next/link'

// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, BoltIcon, XMarkIcon } from '@heroicons/react/24/outline'

const footerNavigation = {
    solutions: [
        { name: "Marketing", href: "#" },
        { name: "Analytics", href: "#" },
        { name: "Automation", href: "#" },
        { name: "Commerce", href: "#" },
        { name: "Insights", href: "#" },
    ],
    support: [
        { name: "Submit ticket", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Guides", href: "#" },
    ],
    company: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Jobs", href: "#" },
        { name: "Press", href: "#" },
    ],
    legal: [
        { name: "Terms of service", href: "#" },
        { name: "Privacy policy", href: "#" },
        { name: "License", href: "#" },
    ],
}

export default function Footer() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <footer className="mt-32 bg-gray-900 sm:mt-56">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <Image
                        alt="Castr Guru logo"
                        width={0}
                        height={0}
                        src="/icon.svg" className="size-16"
                    />

                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm/6 font-semibold text-white">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm/6 font-semibold text-white">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm/6 font-semibold text-white">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.company.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm/6 font-semibold text-white">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-sm/6 text-gray-400 hover:text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
