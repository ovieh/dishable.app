import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('applies primary variant by default', () => {
    render(<Button>Primary</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('bg-rust')
    expect(button.className).toContain('text-white')
  })

  it('applies secondary variant when specified', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('bg-white')
    expect(button.className).toContain('border-darkgrey')
  })

  it('applies outline variant when specified', () => {
    render(<Button variant="outline">Outline</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('border-2')
    expect(button.className).toContain('text-darkgrey')
  })

  it('applies small size correctly', () => {
    render(<Button size="sm">Small</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('px-4')
    expect(button.className).toContain('py-2')
    expect(button.className).toContain('text-sm')
  })

  it('applies medium size by default', () => {
    render(<Button>Medium</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('px-6')
    expect(button.className).toContain('text-base')
  })

  it('applies large size correctly', () => {
    render(<Button size="lg">Large</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('px-8')
    expect(button.className).toContain('py-4')
    expect(button.className).toContain('text-lg')
  })

  it('calls onClick handler when clicked', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    )

    await user.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('merges custom className with default classes', () => {
    render(<Button className="custom-class">Custom</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('custom-class')
    expect(button.className).toContain('bg-rust')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Button ref={ref}>With Ref</Button>)
    expect(ref).toHaveBeenCalled()
  })

  it('spreads additional HTML attributes', () => {
    render(<Button data-testid="custom-button">Test</Button>)
    expect(screen.getByTestId('custom-button')).toBeInTheDocument()
  })
})
