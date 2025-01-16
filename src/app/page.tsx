/* Import components. */
import Benefits from '@/components/Benefits'
import Faq from '@/components/support/Faq'
import Footer from '@/components/Footer'
// import Founder from '@/components/dao/Founder'
// import Goals from '@/components/dao/Goals'
import Buidl from '@/components/Buidl'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import Pricing from '@/components/Pricing'

export default function Homepage() {
    return (
        <main className="bg-white">
            <Header />
            <div>
                <Hero />
                <Highlights />
                <Benefits />
                <Pricing />
                <Buidl />
                <Faq />
            </div>
            <Footer />
        </main>
    )
}
