import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { MobileMenu } from './MobileMenu'

describe('MobileMenu', () => {
  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  it('renders menu toggle button', () => {
    render(<MobileMenu links={links} />)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('menu is closed by default', () => {
    render(<MobileMenu links={links} />)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('opens menu when toggle button is clicked', async () => {
    const user = userEvent.setup()
    render(<MobileMenu links={links} />)

    await user.click(screen.getByLabelText('Open menu'))
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
  })

  it('shows all links when menu is open', async () => {
    const user = userEvent.setup()
    render(<MobileMenu links={links} />)

    await user.click(screen.getByLabelText('Open menu'))
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
  })

  it('closes menu when toggle button is clicked again', async () => {
    const user = userEvent.setup()
    render(<MobileMenu links={links} />)

    await user.click(screen.getByLabelText('Open menu'))
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<MobileMenu links={links} />)

    await user.click(screen.getByLabelText('Open menu'))
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    await user.click(screen.getByText('Features'))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('updates aria-expanded attribute', async () => {
    const user = userEvent.setup()
    render(<MobileMenu links={links} />)

    const button = screen.getByLabelText('Open menu')
    expect(button).toHaveAttribute('aria-expanded', 'false')

    await user.click(button)
    expect(screen.getByLabelText('Close menu')).toHaveAttribute('aria-expanded', 'true')
  })

  it('changes icon when menu opens', async () => {
    const user = userEvent.setup()
    render(<MobileMenu links={links} />)

    const openButton = screen.getByLabelText('Open menu')
    await user.click(openButton)

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    expect(screen.queryByLabelText('Open menu')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<MobileMenu links={links} className="custom-class" />)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('custom-class')
  })
})
