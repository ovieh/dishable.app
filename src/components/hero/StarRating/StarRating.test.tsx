import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StarRating } from './StarRating'

describe('StarRating', () => {
  it('renders correct number of stars', () => {
    const { container } = render(<StarRating rating={5} />)
    const stars = container.querySelectorAll('svg')
    expect(stars.length).toBe(5)
  })

  it('renders correct aria-label', () => {
    render(<StarRating rating={4} maxRating={5} />)
    expect(screen.getByLabelText('4 out of 5 stars')).toBeInTheDocument()
  })

  it('highlights correct number of stars', () => {
    const { container } = render(<StarRating rating={3} maxRating={5} />)
    const stars = container.querySelectorAll('svg')
    
    // First 3 should be yellow
    expect(stars[0].getAttribute('class')).toContain('text-yellow-400')
    expect(stars[1].getAttribute('class')).toContain('text-yellow-400')
    expect(stars[2].getAttribute('class')).toContain('text-yellow-400')
    
    // Last 2 should be gray
    expect(stars[3].getAttribute('class')).toContain('text-gray-400')
    expect(stars[4].getAttribute('class')).toContain('text-gray-400')
  })

  it('handles zero rating', () => {
    const { container } = render(<StarRating rating={0} maxRating={5} />)
    const stars = container.querySelectorAll('svg')
    stars.forEach((star) => {
      expect(star.getAttribute('class')).toContain('text-gray-400')
    })
  })

  it('handles full rating', () => {
    const { container } = render(<StarRating rating={5} maxRating={5} />)
    const stars = container.querySelectorAll('svg')
    stars.forEach((star) => {
      expect(star.getAttribute('class')).toContain('text-yellow-400')
    })
  })

  it('applies custom className', () => {
    const { container } = render(<StarRating rating={5} className="custom-class" />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.className).toContain('custom-class')
  })

  it('uses custom maxRating', () => {
    const { container } = render(<StarRating rating={7} maxRating={10} />)
    const stars = container.querySelectorAll('svg')
    expect(stars.length).toBe(10)
  })
})
