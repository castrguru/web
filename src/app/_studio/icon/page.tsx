import Image from 'next/image'
// import Link from 'next/link'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline'
import { BellIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import Brands from '../../../components/icon/Brands'
import Icons from '../../../components/icon/General'
import FooterMin from '../../../components/FooterMin'

const userNavigation = [
    { name: 'Your profile', href: '/profile' },
    { name: 'Sign out', href: '/profile' },
]

export default function Studio() {
    return (
        <>
            <div className="lg:pl-20">
                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                    {/* <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button> */}

                    {/* Separator */}
                    <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />

                    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                        <form action="#" method="GET" className="grid flex-1 grid-cols-1">
                            <input
                                name="search"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm/6"
                            />
                            <MagnifyingGlassIcon aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400" />
                        </form>
                        <div className="flex items-center gap-x-4 lg:gap-x-6">
                            <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">View notifications</span>
                                <BellIcon aria-hidden="true" className="size-6" />
                            </button>

                            {/* Separator */}
                            <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" />

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative">
                                <MenuButton className="-m-1.5 flex items-center p-1.5">
                                    <span className="sr-only">Open user menu</span>
                                    <Image
                                        alt=""
                                        width={0}
                                        height={0}
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="size-8 rounded-full bg-gray-50"
                                    />
                                    <span className="hidden lg:flex lg:items-center">
                                        <span aria-hidden="true" className="ml-4 text-sm/6 font-semibold text-gray-900">
                                            Tom Cook
                                        </span>
                                        <ChevronDownIcon aria-hidden="true" className="ml-2 size-5 text-gray-400" />
                                    </span>
                                </MenuButton>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    {userNavigation.map((item) => (
                                        <MenuItem key={item.name}>
                                            <a href={item.href} className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none">
                                                {item.name}
                                            </a>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>

                <main className="xl:pl-96 -mt-16 pt-16 min-h-screen flex flex-col justify-between bg-gradient-to-b from-slate-900 to-slate-700">
                    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6 flex flex-col gap-6">
                        <h1 className="text-5xl font-light text-fuchsia-400 tracking-wider">
                            Icons
                        </h1>

                        <p className="py-5 text-lg tracking-widest text-justify leading-9">
                            A collection of the TOP brands to integrate into your UIs.
                        </p>

                        <section className="flex flex-col gap-6">
                            <h2 className="text-3xl font-light text-fuchsia-400 tracking-wider">
                                General
                            </h2>

                            <Icons />
                        </section>

                        <section className="flex flex-col gap-6">
                            <h2 className="text-3xl font-light text-fuchsia-400 tracking-wider">
                                Brand
                            </h2>

                            <Brands />
                        </section>
                    </div>

                    <FooterMin />
                </main>
            </div>

            <aside className="fixed bottom-0 left-20 top-16 hidden w-96 overflow-y-auto bg-gradient-to-b from-stone-900 to-stone-700 border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
                <section className="my-2 border-b border-amber-400">
                    <h2 className="text-amber-400/80 font-bold text-xs uppercase tracking-widest">
                        Choose a Device
                    </h2>

                    <div className="flex flex-row justify-between">
                        <button className="font-bold tracking-wider">
                            iPhone
                        </button>

                        <button className="font-bold tracking-wider">
                            Android
                        </button>

                        <button className="font-bold tracking-wider">
                            Tablet
                        </button>

                        <button className="font-bold tracking-wider">
                            Desktop
                        </button>
                    </div>
                </section>

                <section className="py-5">
                    <div className="w-full h-[400px] bg-amber-50 border-4 border-amber-300 rounded-3xl shadow-md" />
                </section>
            </aside>
        </>
    );
}
