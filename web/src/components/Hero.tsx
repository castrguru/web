'use client'

// import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, BoltIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Blank() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <main className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
            <Image
                alt=""
                width={0}
                height={0}
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                className="absolute inset-0 -z-10 size-full object-cover"
            />

            <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl py-12 sm:py-16 lg:py-24">

                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                            Announcing our 1st GÜRŲ NFT airdrop.{" "}
                            <Link href="/" className="font-semibold text-white">
                                <span aria-hidden="true" className="absolute inset-0" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="flex flex-col gap-2 text-center font-light tracking-tight text-stone-200">
                            <span className="text-5xl sm:text-6xl tracking-wide">
                                24x7 #BUIDL Concierge
                            </span>

                            <span className="block text-5xl tracking-wide">
                                Dedicated To Farcaster
                            </span>

                            <span className="-mt-3 text-6xl sm:text-8xl tracking-widest text-fuchsia-300">
                                <span className="text-7xl sm:text-9xl italic">v2</span>
                                <span className="uppercase"> Frames</span>
                            </span>
                        </h1>

                        <p className="mt-8 w-full sm:max-w-3xl text-pretty text-center text-lg font-medium text-fuchsia-200/80 sm:text-xl/8 tracking-wide">
                            <span className="font-bold uppercase">Frames</span> are the NEW killer app for Creators, Founders and Teams driven to disrupt markets
                            — their spirits awakened by the power &amp; freedom of DeFi to reward and monetize one of the FASTEST growing communities of today!
                        </p>

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="/"
                                className="rounded-md bg-indigo-500 px-5 py-3 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                            >
                                Get started now
                            </Link>

                            <Link href="/" className="text-xl/6 font-semibold text-white">
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Logo cloud */}
                <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img alt="Transistor" src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />

                    <img alt="Reform" src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />

                    <img alt="Tuple" src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />

                    <img alt="SavvyCal" src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />

                    <img
                        alt="Statamic"
                        src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg"
                        width={158}
                        height={48}
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                    />
                </div>
            </div>

            <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </main>
    )
}
