import Image from 'next/image'
import Link from 'next/link'

import {
    AcademicCapIcon,
    BookmarkSquareIcon,
    CheckCircleIcon,
    InformationCircleIcon,
} from '@heroicons/react/20/solid'

import QuickSummary from '@/components/guides/my-1st-frame/QuickSummary'
import Setup from '@/components/guides/my-1st-frame/Setup'

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
                </p>

                <div className="mt-10 max-w-2xl">
                    <QuickSummary />
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
                        The Composable Web
                    </h2>

                    <p className="mt-6">
                        Concepts such as Composable Web and Jamstack continue to be popular in 2025
                        — or at least the principle of combining JavaScript, API, and (HTML) Markup for web development.
                        Nowadays, the concept is oftentimes just known as Modern web development.
                    </p>

                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="block font-semibold text-gray-900">Heavy Use of APIs</strong>
                                into a set of individual files, named to match the subject of the screen.
                            </span>
                        </li>

                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="block font-semibold text-gray-900">Loops.</strong>
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            </span>
                        </li>

                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="block font-semibold text-gray-900">Events.</strong>
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

                <div className="mt-16 max-w-2xl">
                    <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
                        Final Considerations
                    </h2>

                    <p className="mt-6">
                        While we wrap up with these patterns, it is important to stress out a few caveats which may creep out on you if you are not mindful as you implement them.
                        First, let us recapitulate what we have covered in this article:
                    </p>

                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="font-semibold text-gray-900">Organize your frame screens </strong>
                                into a set of individual files, named to match the subject of the respective content being displayed.
                            </span>
                        </li>

                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="block font-semibold text-gray-900">Loops.</strong>
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            </span>
                        </li>

                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="block font-semibold text-gray-900">Events.</strong>
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

                <div className="mt-16 max-w-2xl">
                    <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
                        Try It For Yourself
                    </h2>

                    <p className="mt-6">
                        You can check the patterns described in this article live on nextjs-layout-state.netlify.app or check out the code on github.com/atilafassina/nextjs-layout-state.
                        You can even just click this button to instantly clone it to your chosen Git provider and deploy it to Netlify:
                    </p>
                </div>

                <div className="mt-16 max-w-2xl">
                    <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
                        References
                    </h2>

                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <BookmarkSquareIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="font-semibold text-gray-900">Next.js Layouts </strong>
                            </span>
                        </li>

                        <li className="flex gap-x-3">
                            <BookmarkSquareIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="block font-semibold text-gray-900">Jōtai</strong>
                            </span>
                        </li>

                        <li className="flex gap-x-3">
                            <BookmarkSquareIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="block font-semibold text-gray-900">Events.</strong>
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="mt-16 max-w-2xl">
                    <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900">
                        Further Reading
                    </h2>

                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <AcademicCapIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span className="text-sm">
                                <strong className="block text-lg font-semibold text-gray-900">A Guide To Image Optimization On Jamstack Sites </strong>
                                into a set of individual files, named to match the subject of the respective content being displayed.
                            </span>
                        </li>

                        <li className="flex gap-x-3">
                            <AcademicCapIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span className="text-sm">
                                <strong className="block text-lg font-semibold text-gray-900">A New Pattern For The Jamstack: Segmented Rendering</strong>
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            </span>
                        </li>

                        <li className="flex gap-x-3">
                            <AcademicCapIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span className="text-sm">
                                <strong className="block text-lg font-semibold text-gray-900">Full Stack GraphQL With Next.js, Neo4j AuraDB And Vercel</strong>
                                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                            </span>
                        </li>

                        <li className="flex gap-x-3">
                            <AcademicCapIcon aria-hidden="true" className="mt-0.5 size-7 flex-none text-fuchsia-600" />
                            <span className="text-sm">
                                <strong className="block text-lg font-semibold text-gray-900">How To Build A Multilingual Website With Nuxt.js</strong>
                                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                            </span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
