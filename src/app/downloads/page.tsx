import Image from 'next/image'
// import Link from 'next/link'

const packages = [
    {
        name: 'STUDIO for Windows',
        title: 'Windows',
        department: '10 or 11',
        email: 'First release.',
        filesize: '4.38 MB',
        image: 'https://i.ibb.co/4gTLYJk/image.png',
        url: 'https://github.com/castrguru/studio/releases/download/v25.1.13-alpha/castrguru-studio_25.1.13_x64_en-US.msi',
    },
    {
        name: 'STUDIO for macOS',
        title: 'OSX',
        department: 'Monterey or higher',
        email: 'First release.',
        filesize: '5.11 MB',
        image: 'https://i.ibb.co/bKgKP5w/image.png',
        url: 'https://github.com/castrguru/studio/releases/download/v25.1.13-alpha/castrguru-studio_25.1.13_aarch64.dmg',
    },
    {
        name: 'STUDIO for macOS (Intel)',
        title: 'OSX',
        department: 'Monterey or higher',
        email: 'First release.',
        filesize: '4.94 MB',
        image: 'https://i.ibb.co/wh7CkDB/image.png',
        url: 'https://github.com/castrguru/studio/releases/download/v25.1.13-alpha/castrguru-studio_25.1.13_x64.dmg',
    },
    {
        name: 'STUDIO for Linux (AppImage)',
        title: 'Linux',
        department: 'Debian 10+',
        email: 'First release.',
        filesize: '85.2 MB',
        image: 'https://i.ibb.co/WPRjhFm/image.png',
        url: 'https://github.com/castrguru/studio/releases/download/v25.1.13-alpha/castrguru-studio_25.1.13_amd64.AppImage',
    },
    {
        name: 'STUDIO for Linux (deb)',
        title: 'Linux',
        department: 'Debian 10+',
        email: 'First release.',
        filesize: '5.66 MB',
        image: 'https://i.ibb.co/k0CbppJ/image.png',
        url: 'https://github.com/castrguru/studio/releases/download/v25.1.13-alpha/castrguru-studio_25.1.13_amd64.deb',
    },
    {
        name: 'STUDIO for Linux (rpm)',
        title: 'Linux',
        department: 'Debian 10+',
        email: 'First release.',
        filesize: '5.66 MB',
        image: 'https://i.ibb.co/WPRjhFm/image.png',
        url: 'https://github.com/castrguru/studio/releases/download/v25.1.13-alpha/castrguru-studio-25.1.13-1.x86_64.rpm',
    },
]

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
                        className="block rounded-md bg-fuchsia-600 px-3 py-2 text-center text-lg font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600"
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
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-slate-700 tracking-wider sm:pl-0">
                                        Package Name
                                    </th>

                                    <th scope="col" className="px-3 py-3.5 text-left text-lg font-semibold text-slate-700 tracking-wider">
                                        Platform
                                    </th>

                                    <th scope="col" className="px-3 py-3.5 text-left text-lg font-semibold text-slate-700 tracking-wider">
                                        Status
                                    </th>

                                    <th scope="col" className="px-3 py-3.5 text-left text-lg font-semibold text-slate-700 tracking-wider">
                                        File Size
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
                                                        className="size-11 rounded-full object-cover"
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
                                            <div className="text-slate-700">
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
                                            {_package.filesize}
                                        </td>

                                        <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-lg font-medium sm:pr-0">
                                            <a href={_package.url} className="px-3 py-2 text-fuchsia-600 font-bold hover:text-fuchsia-900 bg-fuchsia-200 rounded-2xl hover:bg-fuchsia-300">
                                                Download<span className="sr-only">, {_package.name}</span>
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
