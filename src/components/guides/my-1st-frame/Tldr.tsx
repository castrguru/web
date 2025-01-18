// 'use client'

// import { useState } from 'react'

// import Image from 'next/image'
import Link from 'next/link'

import {
    ArrowTopRightOnSquareIcon,
    BookmarkIcon,
} from '@heroicons/react/20/solid'

export default function Tldr() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <main className="my-20">
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-600 tracking-wider">
                TL;DR
            </h3>

            <p className="mt-4">
                Farcaster v2 Frames are an updated version of the Frames protocol, which allows full-fledged web apps to run inside the Warpcast (and any compatible with Farcaster protocol) client.
                The primary benefit is a direct connection to Farcaster “user context”, in a similar fashion to Facebook Apps (back in 2012).
                It’s this context (offering direct monitization opportunities), that makes Frames so attractive to builders than the standard web.
            </p>

            <section className="my-4 p-5 bg-rose-100 border-2 border-rose-300 rounded-2xl shadow">
                <h3 className="pr-2 inline text-lg font-bold tracking-wide">
                    You Should Know! —
                </h3>

                The following guide was created specifically for 1st-time builders.
                These are individuals whom are looking for an A to Z tutorial on getting started with a full Web Application Framework <em>(in our case, that’s <a href="https://astro.build/" target="_blank" className="text-lg font-bold text-rose-700 hover:underline">Astro</a>)</em>.

                <p className="mt-3">
                    If you would like an express guide to get a Frame up and running quickly, then check out
                    <a href="/guide/frameify-to-orbiter" className="text-lg font-bold text-rose-700 hover:underline"> Frameify-to-Orbiter </a>
                    for a quick &amp; easy solution, that takes only a few minutes to deploy.
                </p>
            </section>

            <h3 className="mt-8 text-xl font-semibold tracking-wider">
                Let’s look at what we’ll cover in this guide:
            </h3>

            <ul role="list" className="mt-4 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                    <BookmarkIcon
                        aria-hidden="true"
                        className="mt-0.5 size-7 flex-none text-fuchsia-400"
                    />

                    <div>
                        <h3 className="text-2xl font-semibold text-slate-700 tracking-wider">
                            Astro Framework
                        </h3>

                        <Link href="https://astro.build/" target="_blank" className="group w-fit flex flex-row gap-1 items-center">
                            <span className="text-sky-500 tracking-widest font-medium group-hover:text-sky-400">
                                astro.build
                            </span>
                            <ArrowTopRightOnSquareIcon className="size-4 text-slate-400 group-hover:text-amber-400" />
                        </Link>

                        <p className="text-slate-700 tracking-wide">
                            A beautifully simply web framework, perfectly suited for beginners and experienced builders.
                        </p>
                    </div>
                </li>

                <li className="flex gap-x-3">
                    <BookmarkIcon
                        aria-hidden="true"
                        className="mt-0.5 size-7 flex-none text-fuchsia-400"
                    />

                    <div>
                        <h3 className="text-2xl font-semibold text-slate-700 tracking-wider">
                            Tailwind CSS
                        </h3>

                        <Link href="https://tailwindcss.com/" target="_blank" className="group w-fit flex flex-row gap-1 items-center">
                            <span className="text-sky-500 tracking-widest font-medium group-hover:text-sky-400">
                                tailwindcss.com
                            </span>
                            <ArrowTopRightOnSquareIcon className="size-4 text-slate-400 group-hover:text-amber-400" />
                        </Link>

                        <p className="text-slate-700 tracking-wide">
                            One of the leading styling frameworks for creating the most beautiful user interfaces (UIs).
                        </p>
                    </div>
                </li>

                <li className="flex gap-x-3">
                    <BookmarkIcon
                        aria-hidden="true"
                        className="mt-0.5 size-7 flex-none text-fuchsia-400"
                    />

                    <div>
                        <h3 className="text-2xl font-semibold text-slate-700 tracking-wider">
                            Netlify
                        </h3>

                        <Link href="https://www.netlify.com/" target="_blank" className="group w-fit flex flex-row gap-1 items-center">
                            <span className="text-sky-500 tracking-widest font-medium group-hover:text-sky-400">
                                www.netlify.com
                            </span>
                            <ArrowTopRightOnSquareIcon className="size-4 text-slate-400 group-hover:text-amber-400" />
                        </Link>

                        <p className="text-slate-700 tracking-wide">
                            Provides many advanced tools and a rock-solid cloud infrastructure to: build, scale, and secure your Farcaster frames.
                        </p>
                    </div>
                </li>

                <li className="flex gap-x-3">
                    <BookmarkIcon
                        aria-hidden="true"
                        className="mt-0.5 size-7 flex-none text-fuchsia-400"
                    />

                    <div>
                        <h3 className="text-2xl font-semibold text-slate-700 tracking-wider">
                            Frames v2 SDK
                        </h3>

                        <Link href="https://docs.farcaster.xyz/developers/frames/v2/" target="_blank" className="group w-fit flex flex-row gap-1 items-center">
                            <span className="text-sky-500 tracking-widest font-medium group-hover:text-sky-400">
                                farcaster.xyz
                            </span>
                            <ArrowTopRightOnSquareIcon className="size-4 text-slate-400 group-hover:text-amber-400" />
                        </Link>

                        <p className="text-slate-700 tracking-wide">
                            Provides access to the Farcaster network, which we need in order to perform authentication and customize our user experience.
                        </p>
                    </div>
                </li>

            </ul>
        </main>
    )
}
