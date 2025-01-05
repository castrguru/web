'use client'

// import { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

// import Image from 'next/image'
// import Link from 'next/link'

import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: `What's the difference between development and production plans?`,
        answer: `Development plans are billed per-user whereas Production plan bills you for how much you use on a monthly basis.`,
    },
    {
        question: `What's the difference between Farcaster Frames and Telegram Mini Apps?`,
        answer: `Frames are permissionless. Mini apps are NOT!`,
    },
]

export default function Faq() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <main className="mx-auto my-32 max-w-7xl px-6 sm:my-56 lg:px-8">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Frequently asked questions
                </h2>

                <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                    {faqs.map((faq) => (
                        <Disclosure key={faq.question} as="div" className="pt-6">
                            <dt>
                                <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                    <span className="text-base/7 font-semibold">
                                        {faq.question}
                                    </span>

                                    <span className="ml-6 flex h-7 items-center">
                                        <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                                        <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                                    </span>
                                </DisclosureButton>
                            </dt>

                            <DisclosurePanel as="dd" className="mt-2 pr-12">
                                <p className="text-base/7 text-gray-600">
                                    {faq.answer}
                                </p>
                            </DisclosurePanel>
                        </Disclosure>
                    ))}
                </dl>
            </div>
        </main>
    )
}
