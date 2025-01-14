// 'use client'

// import { useState } from 'react'

// import Image from 'next/image'
// import Link from 'next/link'

export default function Community() {
    return (
        <div className="bg-white">
            <main className="isolate">
                {/* Hero section */}
                <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-5">
                    <div aria-hidden="true" className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96" />
                    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                            <h1 className="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
                                We’re a passionate group of people building the future of ecommerce
                            </h1>

                            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                                <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                                    qui lorem cupidatat commodo.
                                </p>
                            </div>

                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                            />
                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
                </div>

                {/* Stats */}
                <div className="mx-auto my-16 max-w-7xl px-6 sm:my-20 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            We approach work as a place to make the world better
                        </h2>

                        <p className="mt-6 text-base/7 text-gray-600">
                            Diam nunc lacus lacus aliquam turpis enim.
                            Eget hac velit est euismod lacus.
                            Est non placerat nam arcu.
                            Cras purus nibh cursus sit eu in id.
                            Integer vel nibh.
                        </p>
                    </div>

                    <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
                                250k
                            </p>

                            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                <p className="text-lg font-semibold tracking-tight text-gray-900">
                                    Users on the platform
                                </p>

                                <p className="mt-2 text-base/7 text-gray-600">
                                    Vel labore deleniti veniam consequuntur sunt nobis.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                            <p className="flex-none text-3xl font-bold tracking-tight text-white">
                                $8.9 billion
                            </p>

                            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                <p className="text-lg font-semibold tracking-tight text-white">
                                    We’re proud that our customers have made over $8 billion in total revenue.
                                </p>

                                <p className="mt-2 text-base/7 text-gray-400">
                                    Eu duis porta aliquam ornare. Elementum eget magna egestas.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                            <p className="flex-none text-3xl font-bold tracking-tight text-white">
                                401,093
                            </p>

                            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                                <p className="text-lg font-semibold tracking-tight text-white">
                                    Transactions this year
                                </p>

                                <p className="mt-2 text-base/7 text-indigo-200">
                                    Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
