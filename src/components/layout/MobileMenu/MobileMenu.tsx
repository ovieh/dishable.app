import { useState } from 'react'
import { Icon } from '../../ui/Icon/Icon'
import { MdMenu, MdClose } from 'react-icons/md'
import type { NavLink } from '../NavLinks/NavLinks'

export interface MobileMenuProps {
  links: NavLink[]
  className?: string
}

export const MobileMenu = ({ links, className = '' }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className={className}>
      <button
        type="button"
        onClick={toggleMenu}
        className="text-darkgrey hover:text-newsprint transition-colors"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <Icon icon={isOpen ? MdClose : MdMenu} size={32} />
      </button>

      {isOpen && (
        <nav
          className="absolute top-full left-0 right-0 bg-white border-t border-darkgrey/10 shadow-lg"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-6 py-3 text-darkgrey hover:bg-rust/10 hover:text-newsprint transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </div>
  )
}
