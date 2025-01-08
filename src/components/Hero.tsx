/* Import modules. */
import Image from 'next/image'
import Link from 'next/link'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function Hero() {
    return (
        <main className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
            <Image
                alt=""
                width={0}
                height={0}
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                className="absolute inset-0 -z-10 size-full object-cover"
            />

            <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl py-16 lg:py-24">

                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                            Announcing our 1st GÜRŲ NFT airdrop.{" "}
                            <Link href="/workers" className="pl-1 font-semibold text-white">
                                <span aria-hidden="true" className="absolute inset-0" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="flex flex-col gap-2 text-center font-light tracking-tight text-white">
                            <span className="text-4xl sm:text-6xl tracking-wide">
                                24x7 Developer Concierge
                            </span>

                            <span className="block text-2xl sm:text-5xl tracking-wide">
                                Dedicated to Farcaster
                            </span>

                            <span className="-mt-1 sm:-mt-3 text-5xl sm:text-8xl tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                                <span className="text-6xl sm:text-9xl italic">v2</span>
                                <span className="uppercase"> Frames</span>
                            </span>
                        </h1>

                        <p className="mt-8 w-full sm:max-w-3xl text-pretty text-justify sm:text-center text-lg font-medium text-white sm:text-xl/8 tracking-wide">
                            <span className="font-bold uppercase">Frames</span> are the NEW killer app for Creators, Founders and Teams driven to disrupt markets
                            — their spirits awakened by the power &amp; freedom of DeFi to reward and monetize one of the FASTEST growing communities of today!
                        </p>

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                href="/buidl"
                                className="rounded-md bg-purple-500 px-5 py-3 text-2xl font-semibold text-white shadow-sm hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 tracking-wider"
                            >
                                #BUIDL<span className="hidden sm:inline"> with GÜRŲ</span>
                            </Link>

                            <Link href="https://castrgurudocs.on-fleek.app/" target="_blank" className="flex items-center text-xl/6 font-semibold text-slate-100 tracking-wider">
                                ReadTheDocs
                                <ArrowTopRightOnSquareIcon className="pl-2 size-8" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Logo cloud */}
                <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-5 sm:gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <Image
                        alt="Transistor"
                        src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg"
                        width={0}
                        height={0}
                        className="col-span-2 max-h-8 sm:max-h-12 w-full object-contain lg:col-span-1"
                    />

                    <Image
                        alt="Reform"
                        src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg"
                        width={0}
                        height={0}
                        className="col-span-2 max-h-8 sm:max-h-12 w-full object-contain lg:col-span-1"
                    />

                    <Image
                        alt="Tuple"
                        src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg"
                        width={0}
                        height={0}
                        className="col-span-2 max-h-8 sm:max-h-12 w-full object-contain lg:col-span-1"
                    />

                    <Image
                        alt="SavvyCal"
                        src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg"
                        width={0}
                        height={0}
                        className="col-span-2 max-h-8 sm:max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                    />

                    <Image
                        alt="Statamic"
                        src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg"
                        width={0}
                        height={0}
                        className="col-span-2 col-start-2 max-h-8 sm:max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                    />
                </div>
            </div>

            <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </main>
    )
}
