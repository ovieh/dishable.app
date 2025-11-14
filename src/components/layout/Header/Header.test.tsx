import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders logo', () => {
    render(<Header />)
    expect(screen.getByText('Dishable')).toBeInTheDocument()
  })

  it('renders default navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('renders CTA button by default', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /start free trial/i })).toBeInTheDocument()
  })

  it('hides CTA button when showCTA is false', () => {
    render(<Header showCTA={false} />)
    expect(screen.queryByRole('button', { name: /start free trial/i })).not.toBeInTheDocument()
  })

  it('renders custom CTA text', () => {
    render(<Header ctaText="Get Started" />)
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument()
  })

  it('calls onCTAClick when CTA button is clicked', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<Header onCTAClick={handleClick} />)

    await user.click(screen.getByRole('button', { name: /start free trial/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders custom links', () => {
    const links = [
      { label: 'Home', href: '/' },
      { label: 'About', href: '#about' },
    ]
    render(<Header links={links} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.queryByText('Features')).not.toBeInTheDocument()
  })

  it('has sticky positioning', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header')
    expect(header?.className).toContain('sticky')
    expect(header?.className).toContain('top-0')
  })

  it('has backdrop blur effect', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header')
    expect(header?.className).toContain('backdrop-blur')
  })

  it('renders mobile menu toggle', () => {
    render(<Header />)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})
