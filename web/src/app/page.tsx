/* Import components. */
import Benefits from '../components/Benefits'
import Faq from '../components/Faq'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Founder from '../components/Founder'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Pricing from '../components/Pricing'

export default function Homepage() {
    return (
        <main className="bg-white">
            <Header />
            <div>
                <Hero />
                <Features />
                <Benefits />
                <Pricing />
                <Founder />
                <Faq />
            </div>
            <Footer />
        </main>
    )
}
