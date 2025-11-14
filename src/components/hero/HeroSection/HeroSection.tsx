import { CTAButtons } from '../CTAButtons/CTAButtons'
import { SocialProofCard } from '../SocialProofCard/SocialProofCard'

export interface HeroSectionProps {
  onPrimaryCTA?: () => void
  onIOSClick?: () => void
  onAndroidClick?: () => void
}

export const HeroSection = ({ onPrimaryCTA, onIOSClick, onAndroidClick }: HeroSectionProps) => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl lg:text-7xl font-bold font-serif leading-tight mb-6">
              Subscribe to your favorite recipe creators
            </h1>
            <p className="text-xl lg:text-2xl text-darkgrey leading-relaxed mb-8">
              Discover talented recipe writers, subscribe to their collections, and build your
              personal culinary library from the best home chefs.
            </p>
            <CTAButtons
              onPrimaryClick={onPrimaryCTA}
              onIOSClick={onIOSClick}
              onAndroidClick={onAndroidClick}
            />
            <div className="mt-8">
              <SocialProofCard />
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-rust/10 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-3/4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <span className="text-6xl">📱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
