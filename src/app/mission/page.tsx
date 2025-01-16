// import Image from 'next/image'

import { CheckCircleIcon } from '@heroicons/react/20/solid'

import Timeline from '@/components/Timeline'

export default function Mission() {
    return (
        <div className="bg-white px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
                <p className="text-base/7 font-semibold text-fuchsia-600">
                    GÜRŲS DAO
                </p>

                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Our Mission
                </h1>

                <p className="mt-6 text-xl/8">
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
                            <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="font-semibold text-gray-900">Data types.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
                                ratione.
                            </span>
                        </li>

                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="font-semibold text-gray-900">Loops.</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            </span>
                        </li>

                        <li className="flex gap-x-3">
                            <CheckCircleIcon aria-hidden="true" className="mt-1 size-5 flex-none text-fuchsia-600" />
                            <span>
                                <strong className="font-semibold text-gray-900">Events.</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                            </span>
                        </li>
                    </ul>

                    <p className="mt-8">
                        Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing
                        egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                    </p>

                    <h2 className="mt-16 text-pretty text-3xl font-semibold tracking-tight text-gray-900">
                        24x7 Concierge for #BUIDLers
                    </h2>

                    <p className="mt-6">
                        Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
                        mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.
                    </p>

                    <div className="my-10">
                        <Timeline />
                    </div>

                </div>

            </div>
        </div>
    )
}
