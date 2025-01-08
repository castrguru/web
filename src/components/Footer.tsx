/* Import modules. */
import Image from 'next/image'

const footerNavigation = {
    building: [
        { name: "Downloads", href: "/downloads" },
        { name: "Libraries", href: "/libs" },
        { name: "Frame Kits", href: "/kits" },
        { name: "Frame Studio", href: "/studio" },
        { name: "Castr Manager", href: "/manager" },
    ],
    learning: [
        { name: "ReadTheDocs", href: "https://castrgurudocs.on-fleek.app/" },
        { name: "User Guides", href: "/guides" },
        { name: "Glossary", href: "/glossary" },
    ],
    farcaster: [
        { name: "Homepage", href: "https://www.farcaster.xyz/" },
        { name: "Documentation", href: "https://docs.farcaster.xyz/" },
        { name: "Frames v2", href: "https://framesv2.com/" },
        { name: "GitHub Sources", href: "https://github.com/farcasterxyz/protocol" },
    ],
    dao: [
        { name: "Our Mission", href: "/mission" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Licenses", href: "/licenses" },
    ],
}

interface Prop {
    'aria-hidden': boolean;
    'className': string;
}

const navigation = [
    { name: 'GitHub', href: 'https://github.com/nyusternie/castr-guru', icon: (props: Prop) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
        />
    </svg>
    ), },
    { name: 'X', href: 'https://x.com/0xShomari', icon: (props: Prop) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
            d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"
        />
    </svg>
    ), },
]

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-slate-700 to-slate-900">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-16 lg:px-8 lg:py-24">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div>
                        <Image
                            alt="Castr Guru logo"
                            width={0}
                            height={0}
                            src="/icon.svg" className="size-16 sm:size-24"
                        />

                        <p className="py-5 sm:py-10 text-xs/6 sm:text-sm/7 font-light text-fuchsia-200/80 tracking-widest">
                            Pinnacle Center of Buckhead
                            <br />3455 Peachtree Rd NE, Suite #500
                            <br />Atlanta, GA 30326
                        </p>

                        <div className="flex justify-start gap-x-6">
                            {navigation.map((item) => (
                                <a key="{item.name}" href="{item.href}" className="text-gray-400 hover:text-gray-300">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon aria-hidden={true} className="size-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-xl/6 font-semibold text-white tracking-wider">
                                    For Building
                                </h3>

                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.building.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-lg/6 text-gray-400 hover:text-white tracking-wide">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-10 md:mt-0">
                                <h3 className="text-xl/6 font-semibold text-white tracking-wider">
                                    For Learning
                                </h3>

                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.learning.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-lg/6 text-gray-400 hover:text-white tracking-wide">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-xl/6 font-semibold text-white tracking-wider">
                                    Farcaster
                                </h3>

                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.farcaster.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-lg/6 text-gray-400 hover:text-white tracking-wide">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-10 md:mt-0">
                                <h3 className="text-xl/6 font-semibold text-white tracking-wider">
                                    GÜRŲS DAO
                                </h3>

                                <ul role="list" className="mt-6 space-y-4">
                                    {footerNavigation.dao.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-lg/6 text-gray-400 hover:text-white tracking-wide">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-center font-medium text-sm/6 text-gray-400 tracking-wider">
                    &copy; {new Date().getFullYear()} GÜRŲS DAO. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
