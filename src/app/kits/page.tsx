import Image from 'next/image'
import Link from 'next/link'

import GuruLive from '@/components/cta/GuruLive'

const nocoders = [
    {
        id: 'first',
        title: "My 1st Frame",
        href: "/kit/starter",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/vY8HzYv/my-first-frame.jpg",
        date: "x5 screens",
        datetime: "2020-03-16",
        author: {
            name: "Astro + TS + Tailwind",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'naked',
        title: "Bare Naked",
        href: "/kit/naked",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/sHR9gtb/bare-naked.jpg",
        date: "x2 screens",
        datetime: "2020-03-16",
        author: {
            name: "HTML + JS + CSS",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'kitchen',
        title: "The Kitchen Sink",
        href: "/kit/kitchen-sink",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/ZWcvXK8/the-kitchen-sink.jpg",
        date: "x17 screens",
        datetime: "2020-03-16",
        author: {
            name: "Next.js + TS + Tailwind",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
]

const coders = [
    {
        id: 'taylor',
        title: "Taylor",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/THhmJdT/taylor.jpg",
        date: "x12 screens",
        datetime: "2020-03-16",
        author: {
            name: "Next.js + TS + Tailwind",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'rose',
        title: "Rosé",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/wB8xNTL/rose.jpg",
        date: "x12 screens",
        datetime: "2020-03-16",
        author: {
            name: "Astro + TS + Tailwind",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'britney',
        title: "Britney",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/GkDBNsL/britney.jpg",
        date: "x12 screens",
        datetime: "2020-03-16",
        author: {
            name: "Nuxt.js + TS + Tailwind",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'christina',
        title: "Christina",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/MgRBd23/christina.jpg",
        date: "x8 screens",
        datetime: "2020-03-16",
        author: {
            name: "React + TS + Tailwind",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'kelsea',
        title: "Kelsea",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/mT1ZLpv/020c54a4-1566-45d5-aeaf-d7037c9a3d34.jpg",
        date: "x8 screens",
        datetime: "2020-03-16",
        author: {
            name: "Vue.js + TS + Tailwind",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'shakira',
        title: "Shakira",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/JtZh51d/image.png",
        date: "x6 screens",
        datetime: "2020-03-16",
        author: {
            name: "Svelte + TS + Tailwind",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'rihanna',
        title: "Rihanna",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/CWfF9Fc/37b17445-5c30-4a24-b972-413844aa7ae2.jpg",
        date: "x6 screens",
        datetime: "2020-03-16",
        author: {
            name: "Angular + TS + Tailwind",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'mariah',
        title: "Mariah",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/MPXvYcQ/image.png",
        date: "x6 screens",
        datetime: "2020-03-16",
        author: {
            name: "Gatsby + TS + Tailwind",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'gwen',
        title: "Gwen",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/fHnzwJM/image.png",
        date: "x4 screens",
        datetime: "2020-03-16",
        author: {
            name: "Express on Node.js",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'billy',
        title: "Billy",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/CbYgrHC/image.png",
        date: "x4 screens",
        datetime: "2020-03-16",
        author: {
            name: "Django on Python",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'sia',
        title: "Sia",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/JK9kZTW/image.png",
        date: "x4 screens",
        datetime: "2020-03-16",
        author: {
            name: "Rspack on Rust",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'aaliyah',
        title: "Aaliyah",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/pz4nwd8/image.png",
        date: "x4 screens",
        datetime: "2020-03-16",
        author: {
            name: "Laravel on PHP",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'celine',
        title: "Celine",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/mydTZ6B/image.png",
        date: "x4 screens",
        datetime: "2020-03-16",
        author: {
            name: "ASP on .NET",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'amy',
        title: "Amy",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/KjZqGPZ/image.png",
        date: "x4 screens",
        datetime: "2020-03-16",
        author: {
            name: "Ruby on Rails",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'madonna',
        title: "Madonna",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/y5RXdH6/image.png",
        date: "x4 screens",
        datetime: "2020-03-16",
        author: {
            name: "Spring on Java",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
]

const gamers = [
    {
        id: 'rosalia',
        title: "Rosalia",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/yqd8WVy/image.png",
        date: "x10 screens",
        datetime: "2020-03-16",
        author: {
            name: "GDScript on Godot",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'ariana',
        title: "Ariana",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/XxHcm29/ariana.jpg",
        date: "x4 screens",
        datetime: "2020-03-16",
        author: {
            name: "C++ on Unreal",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'dua',
        title: "Dua",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/NKLgGPm/dua.jpg",
        date: "x4 screens",
        datetime: "2020-03-16",
        author: {
            name: "C# on Unity",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
]

export default function Example() {
    return (
        <div className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Farcaster Frame Kits
                    </h2>

                    <p className="mt-2 text-lg/8 text-gray-600">
                        Get started with these kits that give your ... The Kitchen Sink
                    </p>
                </div>

                <h2 className="pl-3 mt-16 text-2xl font-bold text-slate-600 tracking-widest uppercase">
                    Royalty FREE Kits for Low-No Coders
                    <small className="pl-2 text-sky-400 font-bold normal-case">
                        (x{nocoders?.length || 0})
                    </small>
                </h2>

                <div className="mx-auto mt-5 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {nocoders.map((post) => (
                        <article key={post.id} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-48 sm:pt-48 lg:pt-80">
                            <Image
                                alt=""
                                width={0}
                                height={0}
                                src={post.imageUrl}
                                className="absolute inset-0 -z-10 size-full object-cover"
                            />

                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                                <time dateTime={post.datetime} className="mr-8">
                                    {post.date}
                                </time>

                                <div className="-ml-4 flex items-center gap-x-4">
                                    <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
                                        <circle r={1} cx={1} cy={1} />
                                    </svg>
                                    <div className="flex gap-x-2.5">
                                        <Image
                                            alt=""
                                            width={0}
                                            height={0}
                                            src={post.author.imageUrl}
                                            className="size-6 flex-none rounded-full bg-white/10"
                                        />
                                        {post.author.name}
                                    </div>
                                </div>
                            </div>

                            <h3 className="mt-3 text-3xl/6 font-semibold text-amber-200 tracking-widest">
                                <Link href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </Link>
                            </h3>
                        </article>
                    ))}
                </div>

                <h2 className="pl-3 mt-16 text-2xl font-bold text-slate-600 tracking-widest uppercase">
                    Premium Kits for Coders
                    <small className="pl-2 text-sky-400 font-bold normal-case">
                        (x{coders?.length || 0})
                    </small>
                </h2>

                <div className="mx-auto mt-5 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {coders.map((post) => (
                        <article key={post.id} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-48 sm:pt-48 lg:pt-80">
                            <Image
                                alt=""
                                width={0}
                                height={0}
                                src={post.imageUrl}
                                className="absolute inset-0 -z-10 size-full object-cover"
                            />

                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                                <time dateTime={post.datetime} className="mr-8">
                                    {post.date}
                                </time>

                                <div className="-ml-4 flex items-center gap-x-4">
                                    <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
                                        <circle r={1} cx={1} cy={1} />
                                    </svg>
                                    <div className="flex gap-x-2.5">
                                        <Image
                                            alt=""
                                            width={0}
                                            height={0}
                                            src={post.author.imageUrl}
                                            className="size-6 flex-none rounded-full bg-white/10"
                                        />
                                        {post.author.name}
                                    </div>
                                </div>
                            </div>

                            <h3 className="mt-3 text-4xl/6 font-semibold text-amber-200 tracking-widest">
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </h3>
                        </article>
                    ))}
                </div>

                <h2 className="pl-3 mt-16 text-2xl font-bold text-slate-600 tracking-widest uppercase">
                    Premium Kits for Gamers
                    <small className="pl-2 text-sky-400 font-bold normal-case">
                        (x{gamers?.length || 0})
                    </small>
                </h2>

                <div className="mx-auto mt-5 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {gamers.map((post) => (
                        <article key={post.id} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-48 sm:pt-48 lg:pt-80">
                            <Image
                                alt=""
                                width={0}
                                height={0}
                                src={post.imageUrl}
                                className="absolute inset-0 -z-10 size-full object-cover"
                            />

                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                                <time dateTime={post.datetime} className="mr-8">
                                    {post.date}
                                </time>

                                <div className="-ml-4 flex items-center gap-x-4">
                                    <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
                                        <circle r={1} cx={1} cy={1} />
                                    </svg>
                                    <div className="flex gap-x-2.5">
                                        <Image
                                            alt=""
                                            width={0}
                                            height={0}
                                            src={post.author.imageUrl}
                                            className="size-6 flex-none rounded-full bg-white/10"
                                        />
                                        {post.author.name}
                                    </div>
                                </div>
                            </div>

                            <h3 className="mt-3 text-4xl/6 font-semibold text-amber-200 tracking-widest">
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </h3>
                        </article>
                    ))}
                </div>

                <GuruLive />
            </div>
        </div>
    )
}
