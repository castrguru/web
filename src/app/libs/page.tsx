import Image from 'next/image'
import Link from 'next/link'

const posts = [
    {
        id: 'castrguru',
        title: "Main Package",
        href: "lib",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/KhC5bmR/castrguru.jpg",
        date: "castrguru",
        datetime: "2020-03-16",
        author: {
            name: "Michael Foster",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'castrguru-ui',
        title: "User Interfaces",
        href: "lib",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80",
        date: "@castrguru/ui",
        datetime: "2020-03-16",
        author: {
            name: "Michael Foster",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'castrguru-ux',
        title: "User Experiences",
        href: "lib",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/2FDCH7Y/castrguru-ux.jpg",
        date: "@castrguru/ux",
        datetime: "2020-03-16",
        author: {
            name: "Michael Foster",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'castrguru-astro',
        title: "Astro",
        href: "lib",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/tcpSpK5/astro.jpg",
        date: "@castrguru/astro",
        datetime: "2020-03-16",
        author: {
            name: "Michael Foster",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'castrguru-next',
        title: "Next.js",
        href: "lib",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/w7TTYjS/image.png",
        date: "@castrguru/next",
        datetime: "2020-03-16",
        author: {
            name: "Michael Foster",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        id: 'castrguru-monetize',
        title: "Monetize",
        href: "lib",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://i.ibb.co/p2nhM4m/monetize.jpg",
        date: "@castrguru/monetize",
        datetime: "2020-03-16",
        author: {
            name: "Michael Foster",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
]

export default function Libraries() {
    return (
        <div className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-balance text-5xl font-semibold tracking-tight text-slate-700 sm:text-6xl tracking-wide">
                        Libraries &amp; Frameworks
                    </h2>

                    <p className="mt-2 text-pretty text-lg/8 text-gray-600">
                        A collection of FREE and Open Source Software (FOSS) resources for everyone to use in their own projects.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                            <Image
                                alt=""
                                width={0}
                                height={0}
                                src={post.imageUrl} className="absolute inset-0 -z-10 size-full object-cover"
                            />

                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                            <div className="px-3 py-2 w-fit bg-white/10 rounded-2xl">
                                <h3 className="text-sm/6 text-amber-200 font-mono tracking-widest">
                                    npm install {post.date}
                                </h3>
                            </div>

                            <h3 className="pl-3 mt-3 text-3xl/6 font-semibold text-slate-100 tracking-wider">
                                <Link href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </Link>
                            </h3>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
