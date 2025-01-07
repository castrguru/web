'use client'

// import { useState } from 'react'

import Welcome from '../../../components/welcome/Frames'

// import Image from 'next/image'
// import Link from 'next/link'

const people = [
    {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        location: "Toronto, Canada",
    },
    {
        name: "Michael Foster",
        role: "Co-Founder / CEO",
        imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        location: "Toronto, Canada",
    },
    {
        name: "Dries Vincent",
        role: "Co-Founder / CEO",
        imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        location: "Toronto, Canada",
    },
    {
        name: "Lindsay Walton",
        role: "Co-Founder / CEO",
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        location: "Toronto, Canada",
    },
    {
        name: "Courtney Henry",
        role: "Co-Founder / CEO",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
        location: "Toronto, Canada",
    },
    // More people...
];

export default function Frames() {
    return <Welcome />
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Our team</h2>
                    <p className="mt-6 text-lg/8 text-gray-300">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
                </div>
                <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
                    {people.map((person) => (
                        <li key={person.name}>
                            <img alt="" src={person.imageUrl} className="aspect-[14/13] w-full rounded-2xl object-cover" />
                            <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-white">{person.name}</h3>
                            <p className="text-base/7 text-gray-300">{person.role}</p>
                            <p className="text-sm/6 text-gray-500">{person.location}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
