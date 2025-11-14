export interface NavLink {
  label: string
  href: string
}

export interface NavLinksProps {
  links: NavLink[]
  className?: string
}

export const NavLinks = ({ links, className = '' }: NavLinksProps) => {
  return (
    <nav className={`space-x-8 ${className}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-darkgrey hover:text-newsprint transition-colors font-medium"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}
