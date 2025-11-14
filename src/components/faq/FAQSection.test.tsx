import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FAQSection } from './FAQSection'

describe('FAQSection', () => {
  it('renders default title', () => {
    render(<FAQSection />)

    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('renders all default FAQ items', () => {
    render(<FAQSection />)

    expect(screen.getByText(/How does creator subscription work?/i)).toBeInTheDocument()
    expect(screen.getByText(/Do creators get paid?/i)).toBeInTheDocument()
    expect(screen.getByText(/Can I cancel anytime?/i)).toBeInTheDocument()
    expect(screen.getByText(/Do you support recipe imports?/i)).toBeInTheDocument()
    expect(screen.getByText(/Is my data secure?/i)).toBeInTheDocument()
  })

  it('renders custom title', () => {
    render(<FAQSection title="Custom FAQ Title" />)

    expect(screen.getByText('Custom FAQ Title')).toBeInTheDocument()
  })

  it('renders custom FAQ items', () => {
    const customFAQs = [
      { question: 'Custom Question 1', answer: 'Custom Answer 1' },
      { question: 'Custom Question 2', answer: 'Custom Answer 2' },
    ]

    render(<FAQSection faqs={customFAQs} />)

    expect(screen.getByText('Custom Question 1')).toBeInTheDocument()
    expect(screen.getByText('Custom Answer 1')).toBeInTheDocument()
    expect(screen.getByText('Custom Question 2')).toBeInTheDocument()
    expect(screen.getByText('Custom Answer 2')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<FAQSection className="custom-faq" />)

    const section = container.firstChild
    expect(section).toHaveClass('custom-faq')
  })
})
