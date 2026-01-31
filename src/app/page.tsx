import DemoBanner from '@/components/DemoBanner'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Demo from '@/components/Demo'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <DemoBanner />
      <Header />
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
