import { Card } from '../../ui/Card/Card'
import { StarRating } from '../StarRating/StarRating'

export interface SocialProofCardProps {
  rating?: number
  subscriberCount?: string
  className?: string
}

export const SocialProofCard = ({
  rating = 5,
  subscriberCount = '50,000+',
  className = '',
}: SocialProofCardProps) => {
  return (
    <Card padding="sm" shadow className={`inline-block ${className}`}>
      <div className="flex flex-col space-y-2">
        <StarRating rating={rating} />
        <p className="text-sm text-darkgrey">
          <span className="font-semibold">{subscriberCount}</span> subscribers
        </p>
      </div>
    </Card>
  )
}
