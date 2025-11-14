import type { Meta, StoryObj } from '@storybook/react'
import { FAQSection } from './FAQSection'

const meta: Meta<typeof FAQSection> = {
  title: 'FAQ/FAQSection',
  component: FAQSection,
}

export default meta

type Story = StoryObj<typeof FAQSection>

export const Default: Story = {}

export const CustomTitle: Story = {
  args: {
    title: 'Got Questions?',
  },
}

export const CustomFAQs: Story = {
  args: {
    faqs: [
      {
        question: 'What is this?',
        answer: 'This is a test FAQ item.',
      },
      {
        question: 'How much does it cost?',
        answer: 'It costs $4.99 per month.',
      },
    ],
  },
}
