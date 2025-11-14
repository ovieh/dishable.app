import { FeatureCard } from '../FeatureCard/FeatureCard'
import type { IconType } from 'react-icons'
import { MdPeople, MdNotifications, MdBookmark, MdChat } from 'react-icons/md'

export interface Feature {
  icon: IconType
  title: string
  description: string
}

export interface FeaturesSectionProps {
  title?: string
  subtitle?: string
  features?: Feature[]
  className?: string
}

const defaultFeatures: Feature[] = [
  {
    icon: MdPeople,
    title: 'Subscribe to Creators',
    description: 'Follow your favorite recipe writers and get instant access to their full library.',
  },
  {
    icon: MdNotifications,
    title: 'New Recipe Alerts',
    description: 'Get notified when your subscribed creators publish new recipes and collections.',
  },
  {
    icon: MdBookmark,
    title: 'Personal Library',
    description: 'Save and organize recipes from all your subscriptions in one beautiful place.',
  },
  {
    icon: MdChat,
    title: 'Creator Community',
    description: 'Connect with creators, ask questions, and share your cooking experiences.',
  },
]

export const FeaturesSection = ({
  title = 'Support creators, discover amazing recipes',
  subtitle = 'Dishable connects you with passionate recipe writers. Subscribe to their channels and get exclusive access to their best creations.',
  features = defaultFeatures,
  className = '',
}: FeaturesSectionProps) => {
  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">{title}</h2>
          <p className="text-xl text-darkgrey max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
