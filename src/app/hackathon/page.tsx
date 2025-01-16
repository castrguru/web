// import Image from 'next/image'
import Notice from '@/components/Notice'

import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function Hackathon() {
    return (
        <div className="bg-white px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
                <p className="text-base/7 font-semibold text-fuchsia-600 tracking-wider">
                    #HACKATHON
                </p>

                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Castr GÜRŲ’s #HACKATHON Page
                </h1>

                <p className="mt-6 text-xl/8">
                    Take a look at what we have for #HACKATHON:WEEK ONE
                </p>
                <div className="mt-10 max-w-2xl">
                    <p>
                        Introducing Frameify by Castr GÜRŲ.
                    </p>
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <a href="/downloads" className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="block font-semibold text-gray-900">Download for Desktop</strong>
                                Available on Window, macOS and Linux.
                            </span>
                        </a>

                        <a href="https://frameify.xyz" target="_blank" className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="block font-semibold text-gray-900">Frameify.xyz</strong>
                                Check out the Frameify web app.
                            </span>
                        </a>

                        <a href="https://github.com/castrguru/frameify" target="_blank" className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="block font-semibold text-gray-900">GitHub Repository</strong>
                                Take a look at the source code.
                            </span>
                        </a>
                    </ul>

                    <p className="mt-8">
                        Vote for Frameify and support the future for v2 Frame on Farcaster!
                    </p>
                </div>
            </div>

            <Notice />
        </div>
    )
}
