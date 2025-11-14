import { Logo } from '../Logo/Logo'
import { NavLinks, type NavLink } from '../NavLinks/NavLinks'
import { MobileMenu } from '../MobileMenu/MobileMenu'
import { Button } from '../../ui/Button/Button'

export interface HeaderProps {
  links?: NavLink[]
  showCTA?: boolean
  ctaText?: string
  onCTAClick?: () => void
}

const defaultLinks: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const Header = ({
  links = defaultLinks,
  showCTA = true,
  ctaText = 'Start Free Trial',
  onCTAClick,
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/50 backdrop-blur-sm border-b border-darkgrey/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks links={links} />
            {showCTA && (
              <Button variant="primary" size="md" onClick={onCTAClick}>
                {ctaText}
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu links={links} />
          </div>
        </div>
      </div>
    </header>
  )
}
