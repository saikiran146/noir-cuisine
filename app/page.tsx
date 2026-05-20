import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import SignatureDishes from '@/components/SignatureDishes'
import Menu from '@/components/Menu'
import ChefStory from '@/components/ChefStory'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Reservations from '@/components/Reservations'
import Events from '@/components/Events'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <SignatureDishes />
        <Menu />
        <ChefStory />
        <Gallery />
        <Testimonials />
        <Events />
        <Reservations />
      </main>
      <Footer />
    </>
  )
}
