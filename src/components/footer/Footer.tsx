import { Logo } from '../layout/Logo/Logo'

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface FooterProps {
  sections?: FooterSection[]
  className?: string
}

const defaultSections: FooterSection[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Download', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Bug Reports', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
]

export const Footer = ({ sections = defaultSections, className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`bg-newsprint text-white py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Logo className="mb-4 text-white" />
            <p className="text-gray-400">
              Subscribe to independent recipe creators and build your culinary library.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Dishable. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
