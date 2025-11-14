import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Icon } from './Icon'
import { MdStar, MdMenu } from 'react-icons/md'

describe('Icon', () => {
  it('renders the icon component', () => {
    render(<Icon icon={MdStar} aria-label="star icon" />)
    const icon = screen.getByLabelText('star icon')
    expect(icon).toBeInTheDocument()
  })

  it('applies default size of 24', () => {
    render(<Icon icon={MdStar} aria-label="star icon" />)
    const icon = screen.getByLabelText('star icon')
    expect(icon).toHaveAttribute('height', '24')
  })

  it('applies custom size when provided', () => {
    render(<Icon icon={MdStar} size={48} aria-label="star icon" />)
    const icon = screen.getByLabelText('star icon')
    expect(icon).toHaveAttribute('height', '48')
  })

  it('applies custom className', () => {
    render(<Icon icon={MdStar} className="text-rust" aria-label="star icon" />)
    const icon = screen.getByLabelText('star icon') as Element
    // For SVG elements className can be an object; use getAttribute for robustness
    expect(icon.getAttribute('class')).toContain('text-rust')
  })

  it('renders different icons correctly', () => {
    const { rerender } = render(<Icon icon={MdStar} aria-label="star icon" />)
    expect(screen.getByLabelText('star icon')).toBeInTheDocument()

    rerender(<Icon icon={MdMenu} aria-label="menu icon" />)
    expect(screen.getByLabelText('menu icon')).toBeInTheDocument()
  })

  it('accepts string size values', () => {
    render(<Icon icon={MdStar} size="2em" aria-label="star icon" />)
    const icon = screen.getByLabelText('star icon')
    expect(icon).toHaveAttribute('height', '2em')
  })
})
