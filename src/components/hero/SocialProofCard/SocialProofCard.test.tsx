import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SocialProofCard } from './SocialProofCard'

describe('SocialProofCard', () => {
  it('renders default subscriber count', () => {
    render(<SocialProofCard />)
    expect(screen.getByText(/50,000\+/)).toBeInTheDocument()
    expect(screen.getByText(/subscribers/)).toBeInTheDocument()
  })

  it('renders custom subscriber count', () => {
    render(<SocialProofCard subscriberCount="100,000+" />)
    expect(screen.getByText(/100,000\+/)).toBeInTheDocument()
  })

  it('renders star rating', () => {
    render(<SocialProofCard rating={5} />)
    expect(screen.getByLabelText('5 out of 5 stars')).toBeInTheDocument()
  })

  it('renders custom rating', () => {
    render(<SocialProofCard rating={4} />)
    expect(screen.getByLabelText('4 out of 5 stars')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<SocialProofCard className="custom-class" />)
    const card = container.querySelector('.custom-class')
    expect(card).toBeInTheDocument()
  })
})
