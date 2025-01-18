// 'use client'

// import { useState } from 'react'

// import Image from 'next/image'
// import Link from 'next/link'

import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function FinalThoughts() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <main className="mt-16 max-w-2xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
                Final Thoughts
            </h2>

            <p className="mt-6">
                While we wrap up with these patterns, it is important to stress out a few caveats which may creep out on you if you are not mindful as you implement them.
                First, let us recapitulate what we have covered in this article:
            </p>

            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                    <span>
                        <strong className="pr-1 font-semibold text-gray-900">Organize your screens</strong>
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                    </span>
                </li>

                <li className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                    <span>
                        <strong className="pr-1 font-semibold text-gray-900">Organize your Frame screens</strong>
                        into a set of individual files, named to match the subject of the respective content being displayed.
                    </span>
                </li>

                <li className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                    <span>
                        <strong className="pr-1 font-semibold text-gray-900">Deploy your frame</strong>
                        to a professional hosting provider, like Orbiter or Netlify.
                    </span>
                </li>
            </ul>

            <p className="mt-8">
                There are two (x2) important tradeoffs that we need to be aware of when opting for these techniques:
            </p>

            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                    <span>
                        <strong className="pr-1 font-semibold text-gray-900">3rd-Party dependency</strong>
                        is a great convenience, in the beginning of a project, but can become troublesome as platform limits restrict your development.
                        Also, API changes may REQUIRE you to change your application code, incurring additional maintenance time/costs.
                    </span>
                </li>

                <li className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                    <span>
                        <strong className="block font-semibold text-gray-900">Server dependency</strong>
                        Next.js is a powerful framework, but with great power, comes some consequences.
                        Computing cycles cost $$, and eventually we all outgrow that FREE tier.
                    </span>
                </li>
            </ul>

            <p className="mt-8">
                Making good consideration of those points will be important, in addition all good practices when dealing with state in a client-side React app remain useful on a Next.js app.
                The server layer may be able to offer a performance boost and this by itself may mitigate some computation issues.
                But it will also benefit from sticking to the common best practices when it comes to rendering performance on apps.
            </p>
        </main>
    )
}
