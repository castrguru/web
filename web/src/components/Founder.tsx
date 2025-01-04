/* Import modules. */
import Image from 'next/image'
import Link from 'next/link'

import { HeartIcon } from '@heroicons/react/24/outline'

export default function Founder() {
    return (
        <main className="relative z-10 mt-32 bg-gray-900 pb-20 sm:mt-56 sm:pb-24 xl:pb-0">
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
                <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
                    <div
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                        className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                    />
                </div>
            </div>

            <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                    <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                        <Image
                            alt=""
                            width={0}
                            height={0}
                            src="/img/portrait.jpg"
                            className="absolute inset-0 size-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                        />
                        <div className="absolute inset-0 size-full rounded-2xl bg-black bg-opacity-40"></div>
                    </div>
                </div>

                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                    <figure className="relative isolate pt-6 sm:pt-12">
                        <svg fill="none" viewBox="0 0 162 128" aria-hidden="true" className="absolute left-0 top-0 -z-10 h-32 stroke-white/20">
                            <path
                                d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                                id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                            />
                            <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
                        </svg>

                        <blockquote className="text-xl font-semibold text-white sm:text-2xl tracking-wider">
                            <p className="leading-[45px]">
                                I figured the FASTEST route to <Link href="https://docs.farcaster.xyz/developers/frames/" target="_blank" className="text-amber-200 font-bold underline hover:text-amber-100">Frames</Link> mastery would be thru teaching others;
                                so that was my plan from the start —
                                create an open platform so
                                <HeartIcon className="ml-2 mr-3 inline size-10 text-fuchsia-300" />
                                by #BUIDLers that I’m driven to MASTER IT ALL!
                            </p>
                        </blockquote>

                        <Link href="https://x.com/0xShomari" target="_blank" className="group mt-8 flex flex-col text-base">
                            <div className="flex flex-row gap-0.5 items-center">
                                <span className="text-3xl font-medium text-amber-200 tracking-widest group-hover:text-amber-100">
                                    0
                                </span>

                                <svg className="size-5 text-amber-200 group-hover:text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>

                                <span className="pl-1 text-3xl font-medium text-amber-200 tracking-widest group-hover:text-amber-100">
                                    Shomari
                                </span>
                            </div>

                            <div className="mt-0 pl-0.5 flex flex-row items-center">
                                <span className="text-xs text-amber-500 tracking-widest uppercase group-hover:text-amber-300">
                                    Farcaster Master Builder 🚧
                                </span>
                            </div>
                        </Link>
                    </figure>
                </div>
            </div>
        </main>
    )
}
