// import Image from 'next/image'

import { ArrowPathIcon, ChevronRightIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

import Benefits from '../../components/studio/Benefits'
import Ideas from '../../components/studio/Ideas'
import Notify from '../../components/studio/Notify'
// import Testimonials from '../../components/studio/Testimonials'

const primaryFeatures = [
    {
        name: "Push to deploy.",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
        icon: CloudArrowUpIcon,
    },
    {
        name: "SSL certificates.",
        description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
        icon: LockClosedIcon,
    },
    {
        name: "Database backups.",
        description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
        icon: ServerIcon,
    },
]



export default function Example() {
    // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <main className="bg-white pb-32">
            {/* Hero section */}
            <div className="relative isolate pt-5">
                <svg aria-hidden="true" className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
                    <defs>
                        <pattern x="50%" y={-1} id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width={200} height={200} patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
                    </svg>
                    <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
                </svg>

                <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-20">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                        <div className="flex">
                            <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-base/6 text-gray-600 tracking-wider ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                <span className="font-semibold text-fuchsia-600">
                                    100% Free &amp; Open Source Software
                                </span>

                                <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />

                                <a href="https://github.com/castrguru/studio/" target="_blank" className="flex items-center gap-x-1">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    View it on GitHub
                                    <ChevronRightIcon aria-hidden="true" className="-mr-2 size-5 text-gray-400" />
                                </a>
                            </div>
                        </div>

                        <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-slate-600 sm:text-7xl">
                            <span className="text-amber-500">Build. </span>
                            <span className="text-sky-500">Publish. </span>
                            <span className="text-green-500">Monetize </span>
                            <span className="text-4xl sm:text-6xl">
                                Farcaster <span className="text-5xl sm:text-7xl italic">v2</span> Frames Effortlessly
                            </span>
                        </h1>

                        <p className="mt-8 text-pretty text-lg/7 font-medium text-gray-500 sm:text-xl/9 tracking-wider">
                            <strong>STUDIO</strong> is a lightweight (app) companion that runs directly on your Windows, macOS or Linux desktop
                            — always there to expertly guide you through ALL the good, the bad, and even those unexplainable experiences you’ll face when building your wildest dreams.
                        </p>

                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="/downloads"
                                className="rounded-md bg-fuchsia-600 px-5 py-3 text-2xl font-semibold text-white shadow-sm tracking-widest hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
                            >
                                Go to Downloads
                            </a>

                            <a href="https://docs.castr.guru" target="_blank" className="text-xl/6 font-semibold text-gray-900">
                                ReadTheDocs <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
                        <svg role="img" viewBox="0 0 366 729" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                            <title>App screenshot</title>
                            <defs>
                                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                                    <rect rx={36} width={316} height={684} />
                                </clipPath>
                            </defs>
                            <path
                                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                                fill="#4B5563"
                            />
                            <path d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z" fill="#343E4E" />
                            <foreignObject width={316} height={684} clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)" transform="translate(24 24)">
                                <img alt="" src="https://tailwindui.com/plus/img/component-images/mobile-app-screenshot.png" />
                            </foreignObject>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Logo cloud */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img alt="Transistor" src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-400.svg" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                    <img alt="Reform" src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-400.svg" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                    <img alt="Tuple" src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-400.svg" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                    <img alt="SavvyCal" src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-400.svg" width={158} height={48} className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />
                    <img
                        alt="Statamic"
                        src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-400.svg"
                        width={158}
                        height={48}
                        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                    />
                </div>
            </div>

            {/* Feature section */}
            <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
                        <div className="lg:row-start-2 lg:max-w-md">
                            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">Boost your productivity. Start using our app today.</h2>
                            <p className="mt-6 text-lg/8 text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla. Ac euismod vel sit maecenas.</p>
                        </div>
                        <img
                            alt="Product screenshot"
                            src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                            width={2432}
                            height={1442}
                            className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
                        />
                        <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                            <dl className="max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                                {primaryFeatures.map((feature) => (
                                    <div key={feature.name} className="relative">
                                        <dt className="ml-9 inline-block font-semibold text-white">
                                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-fuchsia-500" />
                                            {feature.name}
                                        </dt>{" "}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div aria-hidden="true" className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu">
                        <div
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
                        />
                    </div>
                </div>
            </div>

            <Ideas />

            <Benefits />

            <Notify />

            {/* <Testimonials /> */}
        </main>
    )
}
