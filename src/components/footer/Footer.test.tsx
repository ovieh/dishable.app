import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Dishable logo and description', () => {
    render(<Footer />)

    expect(screen.getByText('Dishable')).toBeInTheDocument()
    expect(
      screen.getByText(/Subscribe to independent recipe creators/i)
    ).toBeInTheDocument()
  })

  it('renders all default sections', () => {
    render(<Footer />)

    expect(screen.getByText('Product')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByText('Legal')).toBeInTheDocument()
  })

  it('renders default links', () => {
    render(<Footer />)

    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('Help Center')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()
    expect(screen.getByText(`© ${currentYear} Dishable. All rights reserved.`)).toBeInTheDocument()
  })

  it('renders custom sections', () => {
    const customSections = [
      {
        title: 'Custom Section',
        links: [{ label: 'Custom Link', href: '#custom' }],
      },
    ]

    render(<Footer sections={customSections} />)

    expect(screen.getByText('Custom Section')).toBeInTheDocument()
    expect(screen.getByText('Custom Link')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Footer className="custom-footer" />)

    const footer = container.firstChild
    expect(footer).toHaveClass('custom-footer')
  })
})
