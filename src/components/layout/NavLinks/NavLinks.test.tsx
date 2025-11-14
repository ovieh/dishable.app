import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NavLinks } from './NavLinks'

describe('NavLinks', () => {
  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  it('renders all links', () => {
    render(<NavLinks links={links} />)
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('applies correct href to each link', () => {
    render(<NavLinks links={links} />)
    expect(screen.getByText('Features')).toHaveAttribute('href', '#features')
    expect(screen.getByText('Pricing')).toHaveAttribute('href', '#pricing')
    expect(screen.getByText('FAQ')).toHaveAttribute('href', '#faq')
  })

  it('renders empty when no links provided', () => {
    const { container } = render(<NavLinks links={[]} />)
    const nav = container.querySelector('nav')
    expect(nav?.children.length).toBe(0)
  })

  it('applies custom className', () => {
    const { container } = render(<NavLinks links={links} className="custom-class" />)
    const nav = container.querySelector('nav')
    expect(nav?.className).toContain('custom-class')
  })

  it('applies hover and transition classes to links', () => {
    render(<NavLinks links={[links[0]]} />)
    const link = screen.getByText('Features')
    expect(link.className).toContain('hover:text-newsprint')
    expect(link.className).toContain('transition-colors')
  })
})
