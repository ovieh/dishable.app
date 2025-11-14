import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturesSection } from './FeaturesSection'

describe('FeaturesSection', () => {
  it('renders default title and subtitle', () => {
    render(<FeaturesSection />)

    expect(screen.getByText(/Support creators, discover amazing recipes/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Dishable connects you with passionate recipe writers/i)
    ).toBeInTheDocument()
  })

  it('renders all four default features', () => {
    render(<FeaturesSection />)

    expect(screen.getByText('Subscribe to Creators')).toBeInTheDocument()
    expect(screen.getByText('New Recipe Alerts')).toBeInTheDocument()
    expect(screen.getByText('Personal Library')).toBeInTheDocument()
    expect(screen.getByText('Creator Community')).toBeInTheDocument()
  })

  it('renders custom title and subtitle', () => {
    render(<FeaturesSection title="Custom Title" subtitle="Custom Subtitle" />)

    expect(screen.getByText('Custom Title')).toBeInTheDocument()
    expect(screen.getByText('Custom Subtitle')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<FeaturesSection className="custom-section" />)

    const section = container.firstChild
    expect(section).toHaveClass('custom-section')
  })

  it('renders in a grid layout', () => {
    const { container } = render(<FeaturesSection />)

    const grid = container.querySelector('.grid')
    expect(grid).toBeInTheDocument()
    expect(grid?.className).toContain('md:grid-cols-2')
    expect(grid?.className).toContain('lg:grid-cols-4')
  })
})
