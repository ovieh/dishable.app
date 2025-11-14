import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSection } from './HeroSection'

describe('HeroSection', () => {
  it('renders heading, description, CTA buttons and social proof', async () => {
    const user = userEvent.setup()
    const onPrimary = vi.fn()
    const onIOS = vi.fn()
    const onAndroid = vi.fn()

    render(
      <HeroSection onPrimaryCTA={onPrimary} onIOSClick={onIOS} onAndroidClick={onAndroid} />
    )

    expect(
      screen.getByRole('heading', { name: /Subscribe to your favorite recipe creators/i })
    ).toBeInTheDocument()

    // CTA Buttons (match actual labels from CTAButtons)
    const primary = screen.getByRole('button', { name: /Start 7-Day Free Trial/i })
    const ios = screen.getByRole('button', { name: /iOS/i })
    const android = screen.getByRole('button', { name: /Android/i })

    await user.click(primary)
    await user.click(ios)
    await user.click(android)

    expect(onPrimary).toHaveBeenCalled()
    expect(onIOS).toHaveBeenCalled()
    expect(onAndroid).toHaveBeenCalled()

    // Social proof card exists
    expect(screen.getByText(/subscribers/i)).toBeInTheDocument()
  })
})
