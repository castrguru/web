import Link from 'next/link'
// import Notice from '@/components/Notice'

import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function Hackathon() {
    return (
        <div className="bg-white px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
                <p className="text-base/7 font-semibold text-fuchsia-600 tracking-wider">
                    #HACKATHON
                </p>

                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    $HACKATHON WEEK:ONE
                </h1>

                <p className="mt-6 text-xl/8">
                    It’s been a fun week building on Farcaster’s new v2 frames.
                    Learned a lot about the protocol and looking forward to what’s next.
                    <span className="px-1 text-2xl font-bold">After you vote,</span>
                    please be sure to visit <Link href="https://castr.guru/roadmap/" className="text-2xl font-bold text-blue-500 hover:underline">castr.guru/roadmap</Link> to learn more about future plans with Frames.
                </p>

                <div className="mt-10 max-w-2xl">
                    <p>
                        Introducing FRAMEIFY by Castr GÜRŲ, as the fastest and easiest way to create a new frame on Farcaster.
                    </p>

                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">

                        <a href="https://frameify.xyz" target="_blank" className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="block text-2xl font-semibold text-blue-500 hover:underline">
                                    FRAMEIFY.xyz
                                </strong>
                                Check out the Frameify web app.
                            </span>
                        </a>

                        <a href="/downloads" className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="block text-2xl font-semibold text-blue-500 hover:underline">
                                    Download for Desktop
                                </strong>
                                Available on Window, macOS and Linux.
                            </span>
                        </a>

                        <a href="https://github.com/castrguru/frameify" target="_blank" className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="block text-2xl font-semibold text-blue-500 hover:underline">
                                    GitHub Repository
                                </strong>
                                Take a look at the source code.
                            </span>
                        </a>
                    </ul>

                    <p className="mt-8">
                        Vote for Frameify and support the future for v2 Frames on Farcaster!
                    </p>
                </div>
            </div>

            {/* <Notice /> */}
        </div>
    )
}
