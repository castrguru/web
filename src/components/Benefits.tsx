'use client'

// import { useState } from 'react'

import Image from 'next/image'
// import Link from 'next/link'

import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
} from '@heroicons/react/20/solid'

const features = [
    {
        name: `Always Be #BUIDLing.`,
        description: `A mobile-friendly Studio offers a premium developer experience (DX) from anywhere at any time.`,
        icon: CloudArrowUpIcon,
    },
    {
        name: `End-to-end data encryption.`,
        description: `Enjoy the peace of mind in knowing that ALL data communications are encrypted end-to-end.`,
        icon: LockClosedIcon,
    },
    {
        name: `Simple queues.`,
        description: `Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.`,
        icon: ArrowPathIcon,
    },
    {
        name: `Access control lists.`,
        description: `Share private and sensitive data with ONLY those that you trust with that information.`,
        icon: FingerPrintIcon,
    },
    {
        name: `Powerful data API.`,
        description: `Conveniently access your entire application database from ANY client automagically.`,
        icon: Cog6ToothIcon,
    },
    {
        name: `Automatic data backups.`,
        description: `You will NEVER have to worry about lost data — our archives are redundant across the interplanetary file system.`,
        icon: ServerIcon,
    },
]

export default function Benefits() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <main className="mt-16 sm:mt-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-2xl/7 font-semibold text-fuchsia-600">
                        Quick Introduction
                    </h2>

                    <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
                        Not a dev? No problem.
                    </p>

                    <p className="mt-6 text-lg/8 text-gray-600">
                        We’ll show you how to get a Frame deployed in under 15 minutes;
                        and published for EVERYONE to discover your brilliance!
                    </p>
                </div>
            </div>

            <div className="relative overflow-hidden pt-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <Image
                        alt="App screenshot"
                        src="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
                        width={2432}
                        height={1442}
                        className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                    />

                    <div aria-hidden="true" className="relative">
                        <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                            <dt className="inline text-xl font-semibold text-gray-900">
                                <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-fuchsia-600" />
                                {feature.name}
                            </dt>{" "}

                            <dd className="inline text-lg">
                                {feature.description}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </main>
    )
}
