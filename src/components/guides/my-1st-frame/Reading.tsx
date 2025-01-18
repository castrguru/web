// 'use client'

// import { useState } from 'react'

// import Image from 'next/image'
// import Link from 'next/link'

import { AcademicCapIcon } from '@heroicons/react/20/solid'

export default function Reading() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <main className="mt-16 max-w-2xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
                Further Reading
            </h2>

            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                    <AcademicCapIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                    <a href="https://cloudcannon.com/tutorials/astro-beginners-tutorial-series/" target="_blank" className="text-sm">
                        <strong className="block text-lg font-semibold text-gray-900">
                            Creating an Astro Site: Beginners’ Tutorial
                        </strong>
                        in this lesson you will learn how to create an Astro site.
                    </a>
                </li>

                <li className="flex gap-x-3">
                    <AcademicCapIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                    <a href="https://daily.dev/blog/tailwind-css-basics-for-beginners" target="_blank" className="text-sm">
                        <strong className="block text-lg font-semibold text-gray-900">
                            Tailwind CSS Basics for Beginners
                        </strong>
                        Learn the basics of Tailwind CSS, a utility-first CSS framework that simplifies web design for beginners and experienced developers.
                    </a>
                </li>

                <li className="flex gap-x-3">
                    <AcademicCapIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                    <a href="https://www.codecademy.com/article/getting-started-with-netlify" target="_blank" className="text-sm">
                        <strong className="block text-lg font-semibold text-gray-900">
                            Getting Started with Netlify
                        </strong>
                        Netlify is an all-in-one platform that makes it incredibly easy to deploy static web applications to the world in record time.
                    </a>
                </li>

            </ul>
        </main>
    )
}
