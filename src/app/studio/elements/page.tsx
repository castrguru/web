import Image from 'next/image'
// import Link from 'next/link'

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
                            Elements is a complete UI asset kit for Adobe Illustrator, Adobe XD, Sketch, Balsamiq and is also available as SVG/PNG for use with other programs.
                        </p>

                        <p className="mt-6 text-base/7 text-gray-600">
                            Elements contains all of the components and styles used in the Frame kits.
                            Designers can use visual assets that exactly match all of the UI components that Castr GÜRŲ offers – down to the very last pixel.
                        </p>

                        <p className="mt-6 text-base/7 text-gray-600">
                            They can work with the components as vector files and symbols rather than writing code.
                            With Elements, designers can streamline the process of creating mockups for great looking web applications.
                        </p>

                        <p className="mt-6 text-base/7 text-gray-600">
                            Elements is available for download at no additional charge.
                        </p>

                        <div className="mt-10 flex">
                            <a
                                href="#"
                                className="flex flex-row gap-2 items-center rounded-md bg-fuchsia-600 px-5 py-3 text-2xl font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
                            >
                                Download Elements
                                <CloudArrowDownIcon className="size-8" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <Image
                                alt=""
                                width={0}
                                height={0}
                                src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                            />
                        </div>

                        <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                            <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                <Image
                                    alt=""
                                    width={0}
                                    height={0}
                                    src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>

                            <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                <Image
                                    alt=""
                                    width={0}
                                    height={0}
                                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>

                            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <Image
                                    alt=""
                                    width={0}
                                    height={0}
                                    src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
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
