import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Logo } from './Logo'

describe('Logo', () => {
  it('renders Dishable text', () => {
    render(<Logo />)
    expect(screen.getByText('Dishable')).toBeInTheDocument()
  })

  it('renders logo icon with correct aria-label', () => {
    render(<Logo />)
    expect(screen.getByLabelText('Dishable logo')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Logo className="custom-class" />)
    const logo = screen.getByText('Dishable').parentElement
    expect(logo?.className).toContain('custom-class')
  })

  it('has correct typography classes', () => {
    render(<Logo />)
    const text = screen.getByText('Dishable')
    expect(text.className).toContain('font-serif')
    expect(text.className).toContain('text-2xl')
    expect(text.className).toContain('font-bold')
  })
})
