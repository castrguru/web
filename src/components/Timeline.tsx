// 'use client'

// import { useState } from 'react'

// import Image from 'next/image'
// import Link from 'next/link'

const timeline = [
    {
        name: 'Introduce GÜRŲS DAO',
        description: 'Launch (alpha-edition) platforms — designed specifically to support permissionless monetization for Founders and Teams.',
        date: 'Q1 2025',
        dateTime: '2025-01',
    },
    {
        name: 'Secure Operational Funding',
        description: 'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
        date: 'Q2 2025',
        dateTime: '2025-04',
    },
    {
        name: 'Launch GÜRŲ LIVE! Support',
        description: 'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
        date: 'Q3 2025',
        dateTime: '2025-07',
    },
    {
        name: 'Full Platform Launch',
        description: 'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
        date: 'O4 2025',
        dateTime: '2025-10',
    },
]

export default function Timeline() {
    return (
        <main className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {timeline.map((item) => (
                <div key={item.name}>
                    <time dateTime={item.dateTime} className="flex items-center text-sm/6 font-semibold text-fuchsia-600">
                        <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                            <circle r={2} cx={2} cy={2} fill="currentColor" />
                        </svg>
                        {item.date}
                        <div aria-hidden="true" className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" />
                    </time>

                    <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
                        {item.name}
                    </p>

                    <p className="mt-1 text-base/7 text-gray-600">
                        {item.description}
                    </p>
                </div>
            ))}
        </main>
    )
}
