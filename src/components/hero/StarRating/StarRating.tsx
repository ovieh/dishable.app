// biome-ignore-all lint/suspicious/noArrayIndexKey: has to be this way

import { Icon } from '../../ui/Icon/Icon'
import { MdStar } from 'react-icons/md'

export interface StarRatingProps {
  rating: number
  maxRating?: number
  className?: string
}

export const StarRating = ({ rating, maxRating = 5, className = '' }: StarRatingProps) => {
  return (
    <div className={`flex space-x-1 ${className}`} role="img" aria-label={`${rating} out of ${maxRating} stars`}>
      {Array.from({ length: maxRating }).map((_, index) => (
        <Icon
          key={`star-${index}`}
          icon={MdStar}
          size={20}
          className={index < rating ? 'text-yellow-400' : 'text-gray-400'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
/* biome-disable */
