import Image from 'next/image'
import Link from 'next/link'

const packages = [
    {
        name: "Castr GÜRŲ for Windows",
        title: "Front-end Developer",
        department: "Optimization",
        email: "lindsay.walton@example.com",
        role: "Member",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Castr GÜRŲ for macOS",
        title: "Front-end Developer",
        department: "Optimization",
        email: "lindsay.walton@example.com",
        role: "Member",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Castr GÜRŲ for Linux",
        title: "Front-end Developer",
        department: "Optimization",
        email: "lindsay.walton@example.com",
        role: "Member",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Castr Elements",
        title: "Front-end Developer",
        department: "Optimization",
        email: "lindsay.walton@example.com",
        role: "Member",
        image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
];

export default function Downloads() {
    return (
        <div className="py-16 bg-gradient-to-b from-slate-50 to-slate-200 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-3xl font-semibold text-slate-600 tracking-wider">
                        Downloads
                    </h1>

                    <p className="mt-2 text-sm text-gray-700 tracking-wider">
                        A collection of ALL the software GÜRŲS DAO offers for download.
                    </p>
                </div>

                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    {/* <button
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add user
                    </button> */}
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-gradient-to-r from-slate-200 to-slate-50 border border-slate-300 rounded-2xl shadow">
                        <table className="min-w-full divide-y divide-fuchsia-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Package Name
                                    </th>

                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Platform
                                    </th>

                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Status
                                    </th>

                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Role
                                    </th>

                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-fuchsia-200">
                                {packages.map((_package) => (
                                    <tr key={_package.email}>
                                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                            <div className="flex items-center">
                                                <div className="size-11 shrink-0">
                                                    <Image
                                                        alt=""
                                                        width={0}
                                                        height={0}
                                                        src={_package.image}
                                                        className="size-11 rounded-full"
                                                    />
                                                </div>

                                                <div className="ml-4">
                                                    <div className="text-lg font-semibold text-slate-700 tracking-widest">
                                                        {_package.name}
                                                    </div>

                                                    <div className="mt-1 text-gray-500">
                                                        {_package.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                            <div className="text-gray-900">
                                                {_package.title}
                                            </div>

                                            <div className="mt-1 text-gray-500">
                                                {_package.department}
                                            </div>
                                        </td>

                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
                                        </td>

                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                            {_package.role}
                                        </td>

                                        <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit<span className="sr-only">, {_package.name}</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
