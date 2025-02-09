import Image from 'next/image'
import Link from 'next/link'

// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, BoltIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function GuruLive() {
    return (
        <div className="my-20 relative bg-gray-900 rounded-3xl overflow-hidden">
            <div className="relative h-80 overflow-hidden bg-fuchsia-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                <div className="size-full">
                    <Image
                        alt=""
                        width={0}
                        height={0}
                        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42"
                        className="size-full object-cover"
                    />
                    <div className="absolute inset-0 size-full bg-black bg-opacity-70"></div>
                </div>


                <svg viewBox="0 0 926 676" aria-hidden="true" className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]">
                    <path
                        d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
                        fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
                        fillOpacity=".4"
                    />
                    <defs>
                        <linearGradient id="60c3c621-93e0-4a09-a0e6-4c228a0116d8" x1="926.392" x2="-109.635" y1=".176" y2="321.024" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#776FFF" />
                            <stop offset={1} stopColor="#FF4694" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="relative mx-auto max-w-7xl py-12 sm:py-16 lg:px-8 lg:py-20">
                <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                    <h2 className="pl-0.5 text-sm/7 font-semibold text-fuchsia-500 tracking-widest uppercase">
                        World-class Support Team
                    </h2>

                    <p className="mt-2 text-4xl font-semibold tracking-wide text-white sm:text-5xl">
                        24x7 Developer Concierge
                    </p>

                    <p className="mt-6 text-lg/8 text-slate-300 tracking-wide">
                        For you ultimate convenience, our team of GÜRŲs are available 24x7 to provide you with the expert assistance you need at the time that you need it.
                    </p>

                    <div className="mt-8">
                        <Link
                            href="/amma"
                            className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-lg font-semibold text-slate-100 shadow-sm hover:bg-fuchsia-200/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-200 tracking-wider"
                        >
                            Visit the Ask Amma LIVE Center
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
