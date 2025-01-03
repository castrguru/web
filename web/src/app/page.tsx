/* Import components. */
import Benefits from '../components/Benefits'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Pricing from '../components/Pricing'
import Testimonial from '../components/Testimonial'

export default function Homepage() {
    return (
        <main className="bg-white">
            <Header />
            <div>
                <Hero />
                <Benefits />
                <Testimonial />
                <Pricing />
                <Faq />
            </div>
            <Footer />
        </main>
    )
}
