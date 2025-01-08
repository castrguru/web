// import Image from 'next/image'
import Link from 'next/link'

import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function Buidl() {
    return (
        <div className="bg-white px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
                <p className="text-base/7 font-semibold text-fuchsia-600 tracking-wider">
                    For Builders
                </p>

                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    TIME TO #BUIDL .. LFG!!
                </h1>

                <p className="mt-6 text-xl/8">
                    This is your first step to deploying a NEW frame to the Farcaster ecosystem.
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas
                    fringilla sapien.
                </p>
                <div className="mt-10 max-w-2xl">
                    <p>
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat
                        velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                    </p>
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 size-7 flex-none text-fuchsia-600" />
                            <Link href="/build/newbie">
                                <strong className="block text-lg font-semibold text-gray-900 tracking-wide">
                                    I have never built a web app before ↴
                                </strong>
                                We recommend you start with the My 1st Frame tutorial.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                                ratione.
                            </Link>
                        </li>

                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 size-7 flex-none text-fuchsia-600" />
                            <Link href="/build/rose">
                                <strong className="block text-lg font-semibold text-gray-900 tracking-wide">
                                    I just want a simple frame (eg. blog or media gallery) ↴
                                </strong>
                                We recommend you start with Rosé.
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                                ratione.
                            </Link>
                        </li>

                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 size-7 flex-none text-fuchsia-600" />
                            <Link href="/build/taylor">
                                <strong className="block text-lg font-semibold text-gray-900 tracking-wide">
                                    I have coding experience with React ↴
                                </strong>
                                We recommend you start with Taylor.
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            </Link>
                        </li>

                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 size-7 flex-none text-fuchsia-600" />
                            <Link href="/build/britney">
                                <strong className="block text-lg font-semibold text-gray-900 tracking-wide">
                                    I have general web coding experience ↴
                                </strong>
                                We recommend you start with Britney.
                                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                            </Link>
                        </li>
                    </ul>

                    <p className="mt-8">
                        Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing
                        egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                    </p>
                </div>
            </div>
        </div>
    )
}
