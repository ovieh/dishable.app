import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureCard } from './FeatureCard'
import { MdPeople } from 'react-icons/md'

describe('FeatureCard', () => {
  it('renders title and description', () => {
    render(
      <FeatureCard icon={MdPeople} title="Test Feature" description="Test description" />
    )

    expect(screen.getByText('Test Feature')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  it('renders icon', () => {
    const { container } = render(
      <FeatureCard icon={MdPeople} title="Test Feature" description="Test description" />
    )

    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <FeatureCard
        icon={MdPeople}
        title="Test Feature"
        description="Test description"
        className="custom-class"
      />
    )

    const card = container.firstChild
    expect(card).toHaveClass('custom-class')
  })

  it('has proper icon container styling', () => {
    const { container } = render(
      <FeatureCard icon={MdPeople} title="Test Feature" description="Test description" />
    )

    const iconContainer = container.querySelector('.bg-rust\\/10')
    expect(iconContainer).toBeInTheDocument()
    expect(iconContainer?.className).toContain('rounded-lg')
  })

  it('applies font-serif to title', () => {
    render(
      <FeatureCard icon={MdPeople} title="Test Feature" description="Test description" />
    )

    const title = screen.getByText('Test Feature')
    expect(title.className).toContain('font-serif')
    expect(title.className).toContain('font-bold')
  })
})
