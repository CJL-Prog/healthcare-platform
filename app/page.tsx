import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import Services from '@/components/sections/Services'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <Pricing />
      <Testimonials />
      <FAQ />
    </>
  )
}