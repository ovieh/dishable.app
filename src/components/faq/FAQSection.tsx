import { Card } from '../ui/Card/Card'

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQSectionProps {
  title?: string
  faqs?: FAQItem[]
  className?: string
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'How does creator subscription work?',
    answer:
      'With one Dishable Pro subscription, you can follow and access content from unlimited recipe creators on the platform.',
  },
  {
    question: 'Do creators get paid?',
    answer:
      'Yes! Your subscription directly supports the creators you follow. Dishable shares revenue with writers based on engagement.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Absolutely. Cancel your subscription at any time through your account settings or by contacting our support team.',
  },
  {
    question: 'Do you support recipe imports?',
    answer:
      'Yes! Import recipes from popular websites, PDFs, or manually add your family favorites with our easy-to-use editor.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Your recipes and personal data are encrypted and stored securely. We never share your information with third parties.',
  },
]

export const FAQSection = ({
  title = 'Frequently Asked Questions',
  faqs = defaultFAQs,
  className = '',
}: FAQSectionProps) => {
  return (
    <section className={`py-20 bg-paper ${className}`}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">{title}</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <Card key={faq.question} padding="md" className="bg-white border border-darkgrey/10">
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-darkgrey">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
