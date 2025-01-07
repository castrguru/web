// source for Heroicons, Tabler and Feather
// https://www.tailwindtoolbox.com/icons

export default function General() {
    return (
        <main className="grid grid-cols-6 gap-12 px-5 py-10 bg-slate-50 border-2 border-fuchsia-200 rounded-xl">
            {/* <!-- Yin-yang --> */}
            <span className="flex justify-center items-center">
                <svg className="h-8 w-8 text-zinc-600"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <path d="M12 3a4.5 4.5 0 0 0 0 9a4.5 4.5 0 0 1 0 9" />  <circle cx="12" cy="7.5" r=".5" fill="currentColor" />  <circle cx="12" cy="16.5" r=".5" fill="currentColor" /></svg>
            </span>

            {/* <!-- Wind --> */}
            <span className="flex justify-center items-center">
                <svg className="h-8 w-8 text-zinc-600"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />  <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />  <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" /></svg>
            </span>
        </main>
    )
}
