// 'use client'

// import { useState } from 'react'

// import Image from 'next/image'
// import Link from 'next/link'

// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, BoltIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function TryIt() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <main className="mt-16 max-w-2xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
                Try It For Yourself
            </h2>

            <p className="mt-6">
                You can check the patterns described in this article live on nextjs-layout-state.netlify.app or check out the code on github.com/atilafassina/nextjs-layout-state.
                You can even just click this button to instantly clone it to your chosen Git provider and deploy it to Netlify:
            </p>
        </main>
    )
}
