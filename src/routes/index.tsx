import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '@/components/hero'
import { FeaturesSection } from '@/components/features'
import { PricingSection } from '@/components/pricing'
import { FAQSection } from '@/components/faq'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="bg-paper min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
