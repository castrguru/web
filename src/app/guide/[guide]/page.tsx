import Image from 'next/image'
import Link from 'next/link'

import {
    CheckCircleIcon,
    InformationCircleIcon,
} from '@heroicons/react/20/solid'

import FinalSummary from '@/components/guides/my-1st-frame/FinalSummary'
import WhatNext from '@/components/guides/my-1st-frame/WhatNext'
import FurtherReading from '@/components/guides/my-1st-frame/Reading'
import References from '@/components/guides/my-1st-frame/References'
import Setup from '@/components/guides/my-1st-frame/Setup'
import Tldr from '@/components/guides/my-1st-frame/Tldr'
// import TryIt from '@/components/guides/my-1st-frame/TryIt'

export async function generateStaticParams() {
    return [
        { guide: 'my-1st-frame' },
        { guide: 'my-1st-game' },
    ]
}

interface Params {
    guide: string;
}

export default async function Guide({
    params,
}: {
    params: Promise<Params>
}) {
    const { guide } = await params
console.log('GUIDE', guide)

    let description
    // let imgUrl
    // let updatedAt
    // let pkg
    // let timestamp
    let title

    /* Lazy import. */
    const my1stFrame = (await import('./my-1st-frame')).default

    switch(guide) {
    case 'my-1st-frame':
        title = my1stFrame.title
        description = my1stFrame.description
        // imgUrl = my1stFrame.imgUrl
        // pkg = my1stFrame.pkg
        // updatedAt = my1stFrame.updatedAt
        // timestamp = my1stFrame.timestamp
        break
    case 'ui':
        title = 'User Interface'
        description = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, quaerat! Officia nihil ipsam modi eveniet, laudantium quae ratione consequatur? Non deserunt laudantium dolorem officiis ipsam laboriosam eaque laborum a perferendis?`
        // imgUrl = 'https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80'
        // pkg = '@castrguru/ui'
        // updatedAt = 'January 1, 2025'
        // timestamp = '2021-06-05'
        break
    default:
        // nothing
        title = 'Unknown Guide'
        description = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, quaerat! Officia nihil ipsam modi eveniet, laudantium quae ratione consequatur? Non deserunt laudantium dolorem officiis ipsam laboriosam eaque laborum a perferendis?`
    }

    return (
        <div className="bg-white px-6 lg:px-8 py-16">
            <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
                <h4 className="text-sm/7 font-semibold text-fuchsia-600 uppercase tracking-widest">
                    User Guides
                </h4>

                <h1 className="mt-2 text-6xl font-light tracking-tight text-slate-600">
                    { title }
                </h1>

                <Image
                    alt="A girl standing in an artist studio"
                    width={0}
                    height={0}
                    src="https://i.ibb.co/z64Hvbv/my-1st-frame.jpg"
                    className="my-5 w-full border border-fuchsia-500 rounded-xl shadow-md"
                />

                <p className="mt-6 text-xl/8">
                    { description }
                </p>

                <div className="text-xl/9">
                    <Tldr />

                    <Setup />

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
                        Composable Your Frame
                    </h2>

                    <p className="mt-6">
                        Concepts such as Composable Web and Jamstack continue to be popular in 2025
                        — or at least the principle of combining JavaScript, API, and (HTML) Markup for web development.
                        Nowadays, the concept is oftentimes just known as Modern web development.
                    </p>

                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-slate-700 text-lg/8">
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="pr-1 text-xl font-semibold">Handling notifications</strong>
                                requires a back-end server to process and store the data.
                            </span>
                        </li>

                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="pr-1 text-xl font-semibold">Handling authentication</strong>
                                is a 2nd area that can often lead to confusion for new builders.
                            </span>
                        </li>

                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="pr-1 text-xl font-semibold">Events.</strong>
                                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                            </span>
                        </li>
                    </ul>

                    <p className="mt-8">
                        There are two (2) important tradeoffs that we need to be aware of when opting for these techniques:
                    </p>

                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="block font-semibold text-gray-900">#1</strong>
                                into a set of individual files, named to match the subject of the screen.
                            </span>
                        </li>

                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="block font-semibold text-gray-900">#2</strong>
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            </span>
                        </li>
                    </ul>

                    <p className="mt-8">
                        Making good consideration of those points will be important, in addition all good practices when dealing with state in a client-side React app remain useful on a Next.js app.
                        The server layer may be able to offer a performance boost and this by itself may mitigate some computation issues.
                        But it will also benefit from sticking to the common best practices when it comes to rendering performance on apps.
                    </p>
                </div>

                <FinalSummary />

                <WhatNext />

                {/* <TryIt /> */}

                <References />

                <FurtherReading />

            </div>
        </div>
    )
}
