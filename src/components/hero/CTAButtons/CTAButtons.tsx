import { Button } from '../../ui/Button/Button'
import { Icon } from '../../ui/Icon/Icon'
import { MdAndroid } from 'react-icons/md'
import { FaApple } from 'react-icons/fa'


export interface CTAButtonsProps {
  onPrimaryClick?: () => void
  onIOSClick?: () => void
  onAndroidClick?: () => void
  primaryText?: string
  layout?: 'vertical' | 'horizontal'
  className?: string
}

export const CTAButtons = ({
  onPrimaryClick,
  onIOSClick,
  onAndroidClick,
  primaryText = 'Start 7-Day Free Trial',
  layout = 'vertical',
  className = '',
}: CTAButtonsProps) => {
  const containerClasses =
    layout === 'vertical'
      ? 'flex flex-col sm:flex-row gap-4'
      : 'flex flex-wrap gap-4'

  return (
    <div className={`${containerClasses} ${className}`}>
      <Button variant="primary" size="lg" onClick={onPrimaryClick}>
        {primaryText}
      </Button>
      <Button variant="secondary" size="lg" onClick={onIOSClick}>
        <Icon icon={FaApple} size={20} className="mr-2" aria-hidden="true" />
        iOS
      </Button>
      <Button variant="secondary" size="lg" onClick={onAndroidClick}>
        <Icon icon={MdAndroid} size={20} className="mr-2" aria-hidden="true" />
        Android
      </Button>
    </div>
  )
}
