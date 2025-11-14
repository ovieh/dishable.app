import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card } from './Card.tsx'

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Test Content</Card>)
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('applies medium padding by default', () => {
    render(<Card data-testid="card">Content</Card>)
    const card = screen.getByTestId('card')
    expect(card.className).toContain('p-6')
  })

  it('applies no padding when specified', () => {
    render(
      <Card padding="none" data-testid="card">
        Content
      </Card>
    )
    const card = screen.getByTestId('card')
    expect(card.className).not.toContain('p-')
  })

  it('applies small padding when specified', () => {
    render(
      <Card padding="sm" data-testid="card">
        Content
      </Card>
    )
    const card = screen.getByTestId('card')
    expect(card.className).toContain('p-4')
  })

  it('applies large padding when specified', () => {
    render(
      <Card padding="lg" data-testid="card">
        Content
      </Card>
    )
    const card = screen.getByTestId('card')
    expect(card.className).toContain('p-8')
  })

  it('does not apply shadow by default', () => {
    render(<Card data-testid="card">Content</Card>)
    const card = screen.getByTestId('card')
    expect(card.className).not.toContain('shadow')
  })

  it('applies shadow when specified', () => {
    render(
      <Card shadow data-testid="card">
        Content
      </Card>
    )
    const card = screen.getByTestId('card')
    expect(card.className).toContain('shadow-lg')
  })

  it('does not apply border by default', () => {
    render(<Card data-testid="card">Content</Card>)
    const card = screen.getByTestId('card')
    expect(card.className).not.toContain('border')
  })

  it('applies border when specified', () => {
    render(
      <Card border data-testid="card">
        Content
      </Card>
    )
    const card = screen.getByTestId('card')
    expect(card.className).toContain('border')
    expect(card.className).toContain('border-darkgrey/20')
  })

  it('applies both shadow and border when specified', () => {
    render(
      <Card shadow border data-testid="card">
        Content
      </Card>
    )
    const card = screen.getByTestId('card')
    expect(card.className).toContain('shadow-lg')
    expect(card.className).toContain('border')
  })

  it('merges custom className with default classes', () => {
    render(
      <Card className="custom-class" data-testid="card">
        Content
      </Card>
    )
    const card = screen.getByTestId('card')
    expect(card.className).toContain('custom-class')
    expect(card.className).toContain('rounded-2xl')
    expect(card.className).toContain('bg-white')
  })

  it('spreads additional HTML attributes', () => {
    render(<Card data-custom="value">Content</Card>)
    const card = screen.getByText('Content').closest('div')
    expect(card).toHaveAttribute('data-custom', 'value')
  })

  it('always applies base classes', () => {
    render(<Card data-testid="card">Content</Card>)
    const card = screen.getByTestId('card')
    expect(card.className).toContain('rounded-2xl')
    expect(card.className).toContain('bg-white')
  })
})
