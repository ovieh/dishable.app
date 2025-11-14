import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { CTAButtons } from './CTAButtons'

describe('CTAButtons', () => {
  it('renders all three buttons', () => {
    render(<CTAButtons />)
    expect(screen.getByRole('button', { name: /start 7-day free trial/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /ios/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /android/i })).toBeInTheDocument()
  })

  it('renders custom primary text', () => {
    render(<CTAButtons primaryText="Get Started Now" />)
    expect(screen.getByRole('button', { name: /get started now/i })).toBeInTheDocument()
  })

  it('calls onPrimaryClick when primary button is clicked', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<CTAButtons onPrimaryClick={handleClick} />)

    await user.click(screen.getByRole('button', { name: /start 7-day free trial/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('calls onIOSClick when iOS button is clicked', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<CTAButtons onIOSClick={handleClick} />)

    await user.click(screen.getByRole('button', { name: /ios/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('calls onAndroidClick when Android button is clicked', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<CTAButtons onAndroidClick={handleClick} />)

    await user.click(screen.getByRole('button', { name: /android/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies vertical layout by default', () => {
    const { container } = render(<CTAButtons />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.className).toContain('flex-col')
  })

  it('applies horizontal layout when specified', () => {
    const { container } = render(<CTAButtons layout="horizontal" />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.className).not.toContain('flex-col')
  })

  it('applies custom className', () => {
    const { container } = render(<CTAButtons className="custom-class" />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.className).toContain('custom-class')
  })
})
