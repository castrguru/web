import Image from 'next/image'

import Strategies from '../../components/monetize/Strategies'

export default function Monetize() {
    return (
        <div className="overflow-hidden bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-4xl">
                    <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Monetize Your Community
                    </h1>

                    <p className="mt-6 text-balance text-xl/8 text-gray-700">
                        Helping Founders and Teams pay their bills since 2025...
                    </p>
                </div>

                <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                    <div className="lg:pr-8">
                        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">
                            Our mission
                        </h2>

                        <p className="mt-8 text-base/7 text-gray-600">
                            Monetization strategies for mobile app builders are crucial to generating revenue and ensuring the sustainability of an app.
                            With millions of apps available in the market, it’s essential to have a well-planned monetization strategy to stand out and attract users.
                        </p>

                        <p className="mt-6 text-base/7 text-gray-600">
                            Below, we’ll introduce/review some of the leading strategies for mobile app builders:
                        </p>

                    </div>

                    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                                <Image
                                    alt=""
                                    width={0}
                                    height={0}
                                    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>

                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <Image
                                    alt=""
                                    width={0}
                                    height={0}
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>

                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                                <Image
                                    alt=""
                                    width={0}
                                    height={0}
                                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>

                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <Image
                                    alt=""
                                    width={0}
                                    height={0}
                                    src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="max-lg:mt-16 lg:col-span-1">
                        <p className="text-xl/7 font-semibold text-gray-500 tracking-widest uppercase">
                            The Numbers
                        </p>

                        <hr className="mt-6 border-t border-gray-200" />

                        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                                <dt className="text-base/6 text-slate-600 tracking-wider">
                                    App Earnings
                                </dt>

                                <dd className="order-first text-6xl font-semibold text-slate-600 tracking-tight">
                                    $<span>134</span>K
                                </dd>
                            </div>

                            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                                <dt className="text-base/6 text-slate-600 tracking-wider">
                                    Founders &amp; Teams
                                </dt>

                                <dd className="order-first text-6xl font-semibold text-slate-600 tracking-tight">
                                    <span>88</span>
                                </dd>
                            </div>

                            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                                <dt className="text-base/6 text-slate-600 tracking-wider">
                                    Active Users
                                </dt>

                                <dd className="order-first text-6xl font-semibold text-slate-600 tracking-tight">
                                    <span>12</span>K
                                </dd>
                            </div>

                            <div className="flex flex-col gap-y-2">
                                <dt className="text-base/6 text-slate-600 tracking-wider">
                                    User Transactions
                                </dt>

                                <dd className="order-first text-6xl font-semibold text-slate-600 tracking-tight">
                                    <span>1.7</span>M
                                </dd>
                            </div>
                        </dl>
                    </div>
                </section>

                <Strategies />
            </div>
        </div>
    )
}
