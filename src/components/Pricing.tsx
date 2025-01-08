'use client'

// import { useState } from 'react'

// import Image from 'next/image'
import Link from 'next/link'

import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
    {
        name: `FOSS + Guest Concierge`,
        id: `tier-free`,
        href: `/`,
        priceDaily: `$0.00`,
        description: `Dare to bring your WILDEST DREAMS and we'll handle the rest. You're 100% covered from concept to shipped!`,
        features: [
            `3 Guest Frame Kits`,
            `1 Supported Framework`,
            `10 Error Reports /per hour`,
            `3 Bug Analysis /per hour`,
            `72-hour support response time`,
            `Basic uptime monitoring`,
            `Advanced analytics`,
        ],
        featured: false,
    },
    {
        name: `FOSS + PRO Concierge`,
        id: `tier-pro`,
        href: `/`,
        priceDaily: `$0.15`,
        description: `Dedicated support and infrastructure for your company.`,
        features: [
            `20+ Premium Frame Kits`,
            `16 Supported Frameworks`,
            `1K Error Reports /per hour`,
            `50 Bug Analysis /per hour`,
            `24-hour support response time`,
            `Advanced uptime monitoring`,
            `Unlimited subscribers`,
            `Advanced analytics`,
            `Dedicated support representative`,
            `Marketing automations`,
            `Custom integrations`
        ],
        featured: true,
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <main className="relative isolate mt-32 bg-white px-6 sm:mt-56 lg:px-8">
            <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div>

            <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-base/7 font-semibold text-fuchsia-600">
                    Ready to #BUIDL like a PRO?!
                </h2>

                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-5xl">
                    Choose the right plan for you
                </p>

                <p className="mt-6 text-lg/8 text-gray-600">
                    Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
                </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier, tierIdx) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.featured ? "relative bg-gray-900 shadow-2xl" : "bg-white/60 sm:mx-8 lg:mx-0",
                            tier.featured ? "" : tierIdx === 0 ? "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none" : "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl",
                            "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
                        )}
                    >
                        <h3 id={tier.id} className={classNames(tier.featured ? "text-fuchsia-400" : "text-fuchsia-600", "text-2xl/7 font-semibold")}>
                            {tier.name}
                        </h3>

                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span className={classNames(tier.featured ? "text-white" : "text-gray-900", "text-5xl font-semibold tracking-tight")}>
                                {tier.priceDaily}
                            </span>

                            <span className={classNames(tier.featured ? "text-gray-400" : "text-gray-500", "text-base")}>
                                /day per frame
                            </span>
                        </p>

                        <p className={classNames(tier.featured ? "text-gray-300" : "text-gray-600", "mt-6 text-base/7")}>
                            {tier.description}
                        </p>

                        <ul role="list" className={classNames(tier.featured ? "text-gray-300" : "text-gray-600", "mt-8 space-y-3 text-base/6 sm:mt-10")}>
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon aria-hidden="true" className={classNames(tier.featured ? "text-fuchsia-400" : "text-fuchsia-600", "h-6 w-5 flex-none")} />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <a
                            href={tier.href}
                            aria-describedby={tier.id}
                            className={classNames(
                                tier.featured
                                    ? "bg-fuchsia-500 text-white shadow-sm hover:bg-fuchsia-400 focus-visible:outline-fuchsia-500"
                                    : "text-fuchsia-600 ring-1 ring-inset ring-fuchsia-200 hover:ring-fuchsia-300 focus-visible:outline-fuchsia-600",
                                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-2xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                            )}
                        >
                            Get started today
                        </a>
                    </div>
                ))}
            </div>

            <Link href="/amma" className="group mx-auto mt-16 max-w-lg px-10 py-5 flex flex-col sm:mt-20 sm:gap-y-0 lg:max-w-4xl bg-fuchsia-50 border-2 border-fuchsia-200 rounded-xl shadow hover:bg-fuchsia-600 hover:border-fuchsia-300">
                <h2 className="text-fuchsia-700 font-bold text-2xl tracking-wider group-hover:text-fuchsia-50">
                    Ask Amma LIVE! Case Support
                </h2>

                <h3 className="text-fuchsia-600 font-bold text-xl tracking-wide group-hover:text-fuchsia-50">
                    Billed to your account @ $0.35 /min per case
                </h3>

                <small className="text-fuchsia-500 italic tracking-wider group-hover:text-fuchsia-50">
                    ( a minimum of $5.00 in escrow MUST be available to open a new case )
                </small>
            </Link>
        </main>
    )
}
