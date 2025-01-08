import Image from 'next/image'
import Link from 'next/link'

import { CloudArrowDownIcon } from '@heroicons/react/24/outline'

export default function Example() {
    return (
        <div className="overflow-hidden bg-white py-16">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Castr Elements
                        </h2>

                        <p className="mt-6 text-xl/8 text-gray-600">
                            A complete UI asset kit for Adobe Illustrator, Adobe XD, Sketch, Balsamiq
                            — also available as SVG/PNG for use with other programs.
                        </p>

                        <p className="mt-6 text-base/7 text-gray-600">
                            Elements contains all of the components and styles used in the Frame kits.
                            Designers can use visual assets that exactly match all of the UI components that Castr GÜRŲ offers – down to the very last pixel.
                        </p>

                        <p className="mt-6 text-base/7 text-gray-600">
                            Designers can work with the components as vector files and symbols rather than writing code.
                            Elements greatly streamlines the process of creating mockups for amazing looking Farcaster frames.
                        </p>

                        <p className="mt-6 text-base/7 text-gray-600">
                            Elements is available for download at NO additional charge.
                        </p>

                        <div className="mt-10 flex">
                            <Link
                                href="/downloads"
                                className="flex flex-row gap-2 items-center rounded-md bg-fuchsia-600 px-5 py-3 text-2xl font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
                            >
                                Download Elements
                                <CloudArrowDownIcon className="size-8" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <Image
                                alt=""
                                width={0}
                                height={0}
                                src="https://images.unsplash.com/photo-1591040092219-081fb773589c?q=80"
                                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                            />
                        </div>

                        <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                            <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                <Image
                                    alt=""
                                    width={0}
                                    height={0}
                                    src="https://images.unsplash.com/photo-1568149537268-2790e1d5c4c8?q=80"
                                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>

                            <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                <Image
                                    alt=""
                                    width={0}
                                    height={0}
                                    src="https://images.unsplash.com/photo-1613574714687-c33b9e90200d?q=80"
                                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>

                            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <Image
                                    alt=""
                                    width={0}
                                    height={0}
                                    src="https://images.unsplash.com/photo-1560961911-0ac252fecc71?q=80"
                                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
