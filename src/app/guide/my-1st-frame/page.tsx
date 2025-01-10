import Image from 'next/image'
import Link from 'next/link'

import { ArrowTopRightOnSquareIcon, BookmarkIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export default function Welcome() {
    return (
        <div className="bg-white px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
                <p className="text-base/7 font-semibold text-fuchsia-600">
                    For Newbies
                </p>

                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    My 1st Frame
                </h1>

                <p className="mt-6 text-xl/8">
                    It’s time to get you off the sidelines and into the BIG game!
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas
                    fringilla sapien.
                </p>

                <div className="mt-10 max-w-2xl">
                    <h3 className="text-2xl font-semibold text-slate-600 tracking-wider">
                        Quick Summary
                    </h3>

                    <p className="mt-4">
                        By combining some React APIs, we can accurately manage “simple” states.
                        With Next.js though, we can quickly find situations where we need to accommodate many other requirements.
                        This guide is intended to be used as a primer for managing complex states in a Next.js app.
                        These strategies should fit the vast majority of apps around with little to no adjustments.
                    </p>

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
                                    Vercel
                                </h3>

                                <Link href="https://tailwindcss.com/" target="_blank" className="group w-fit flex flex-row gap-1 items-center">
                                    <span className="text-sky-500 tracking-widest font-medium group-hover:text-sky-400">
                                        tailwindcss.com
                                    </span>
                                    <ArrowTopRightOnSquareIcon className="size-4 text-slate-400 group-hover:text-amber-400" />
                                </Link>

                                <p className="text-slate-700 tracking-wide">
                                    Provides many advanced tools and a rock-solid cloud infrastructure to: build, scale, and secure your Farcaster frames.
                                </p>
                            </div>
                        </li>
                    </ul>

                    <p className="mt-8">
                        This guide is intended to be used as a primer for managing complex states in a Next.js app.
                        Unfortunately, the framework is way too versatile for us to cover all possible use cases in this article.
                        But these strategies should fit the vast majority of apps around with little to no adjustments.
                        If you believe there is a relevant pattern to be considered, I look forward to seeing you in the comments section!
                    </p>

                    <h2 className="mt-16 text-pretty text-3xl font-semibold tracking-tight text-gray-900">
                        From beginner to expert in 3 hours
                    </h2>

                    <p className="mt-6">
                        If you haven’t already completed the <Link href="/guide/builder-101" className="text-blue-500 font-semibold text-lg hover:underline">Builder 101</Link> guide, then please head over there and come back when you’re done.
                    </p>

                    <figure className="mt-10 border-l border-fuchsia-600 pl-9">
                        <blockquote className="font-semibold text-gray-900">
                            <p>
                                “Getting started as a builder was nerve-racking at first, but then things slowly started to make more sense, until a realized that my project was complete!”
                            </p>
                        </blockquote>

                        <figcaption className="mt-6 flex gap-x-4">
                            <Image
                                alt=""
                                width={0}
                                height={0}
                                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="size-6 flex-none rounded-full bg-gray-50"
                            />
                            <div className="text-sm/6">
                                <strong className="font-semibold text-gray-900">Londynn Lee </strong>
                                – Homemade Crypto
                            </div>
                        </figcaption>
                    </figure>

                    <p className="mt-10">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat
                        velit.
                    </p>
                </div>

                <figure className="mt-16">
                    <Image
                        alt=""
                        width={0}
                        height={0}
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3" className="aspect-video rounded-xl bg-gray-50 object-cover"
                    />

                    <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
                        <InformationCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-gray-300" />
                        Faucibus commodo massa rhoncus, volutpat.
                    </figcaption>
                </figure>

                <div className="mt-16 max-w-2xl">
                    <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
                        Everything you need to get up and running
                    </h2>

                    <p className="mt-6">
                        Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida
                        quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.
                    </p>

                    <p className="mt-8">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat
                        velit.
                    </p>
                </div>
            </div>
        </div>
    )
}
