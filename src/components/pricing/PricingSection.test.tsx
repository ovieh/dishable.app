import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PricingSection } from './PricingSection'

describe('PricingSection', () => {
  it('renders heading and price', () => {
    render(<PricingSection />)

    expect(screen.getByText(/One subscription, unlimited creators/i)).toBeInTheDocument()
    expect(screen.getByText('$4.99')).toBeInTheDocument()
  })

  it('renders all feature items', () => {
    render(<PricingSection />)

    expect(screen.getByText(/Subscribe to unlimited creators/i)).toBeInTheDocument()
    expect(screen.getByText(/Access to all premium recipes/i)).toBeInTheDocument()
    expect(screen.getByText(/Exclusive creator content/i)).toBeInTheDocument()
    expect(screen.getByText(/Early access to new releases/i)).toBeInTheDocument()
    expect(screen.getByText(/Offline recipe access/i)).toBeInTheDocument()
  })

  it('renders custom price', () => {
    render(<PricingSection price="$9.99" />)

    expect(screen.getByText('$9.99')).toBeInTheDocument()
  })

  it('calls CTA callbacks when buttons are clicked', async () => {
    const user = userEvent.setup()
    const onPrimary = vi.fn()
    const onIOS = vi.fn()
    const onAndroid = vi.fn()

    render(
      <PricingSection onPrimaryCTA={onPrimary} onIOSClick={onIOS} onAndroidClick={onAndroid} />
    )

    const primary = screen.getByRole('button', { name: /Start 7-Day Free Trial/i })
    const ios = screen.getByRole('button', { name: /iOS/i })
    const android = screen.getByRole('button', { name: /Android/i })

    await user.click(primary)
    await user.click(ios)
    await user.click(android)

    expect(onPrimary).toHaveBeenCalled()
    expect(onIOS).toHaveBeenCalled()
    expect(onAndroid).toHaveBeenCalled()
  })

  it('renders Dishable Pro badge', () => {
    render(<PricingSection />)

    expect(screen.getByText('Dishable Pro')).toBeInTheDocument()
  })
})
