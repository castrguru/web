// 'use client'

// import { useState } from 'react'

// import Image from 'next/image'
// import Link from 'next/link'

// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, BoltIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Notify() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <main className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    ADD (+) this frame and get notified when we’re launching
                </h2>

                <p className="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">
                    Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.
                </p>

                <div className="mx-auto mt-10 flex justify-center max-w-md gap-x-4">
                    <button className="flex-none rounded-md bg-gradient-to-r from-slate-100 to-slate-300 px-5 py-3 text-3xl font-semibold text-amber-800 shadow-sm tracking-widest hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white8">
                        Yes! Notify me
                    </button>
                </div>

                <svg viewBox="0 0 1024 1024" aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2">
                    <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                    <defs>
                        <radialGradient r={1} cx={0} cy={0} id="759c1415-0410-454c-8f7c-9a820de03641" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                            <stop stopColor="#7775D6" />
                            <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </main>
    )
}
