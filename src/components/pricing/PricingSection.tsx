import { Card } from '../ui/Card/Card'
import { Icon } from '../ui/Icon/Icon'
import { CTAButtons } from '../hero/CTAButtons/CTAButtons'
import { MdCheck, MdStar } from 'react-icons/md'

export interface PricingSectionProps {
  price?: string
  onPrimaryCTA?: () => void
  onIOSClick?: () => void
  onAndroidClick?: () => void
  className?: string
}

export const PricingSection = ({
  price = '$4.99',
  onPrimaryCTA,
  onIOSClick,
  onAndroidClick,
  className = '',
}: PricingSectionProps) => {
  const features = [
    'Subscribe to unlimited creators',
    'Access to all premium recipes',
    'Exclusive creator content',
    'Early access to new releases',
    'Offline recipe access',
  ]

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-8">
          One subscription, unlimited creators
        </h2>
        <p className="text-xl text-darkgrey mb-12">
          Subscribe to as many recipe creators as you want. Support the community with one simple plan.
        </p>

        <Card padding="lg" className="lg:p-12 border border-darkgrey/10 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="flex items-center mb-6">
                <Icon icon={MdStar} size={32} className="text-rust mr-3" aria-hidden="true" />
                <span className="text-2xl font-serif font-bold">Dishable Pro</span>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold">{price}</span>
                <span className="text-darkgrey text-lg">/month</span>
              </div>
              <ul className="space-y-3 text-left">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Icon icon={MdCheck} size={20} className="text-rust mr-3" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-3/4 bg-rust/10 rounded-xl flex items-center justify-center">
                  <span className="text-6xl">📊</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <CTAButtons
          onPrimaryClick={onPrimaryCTA}
          onIOSClick={onIOSClick}
          onAndroidClick={onAndroidClick}
          layout="horizontal"
        />
      </div>
    </section>
  )
}
