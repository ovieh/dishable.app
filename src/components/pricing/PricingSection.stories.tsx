import type { Meta, StoryObj } from '@storybook/react'
import { PricingSection } from './PricingSection'

const meta: Meta<typeof PricingSection> = {
  title: 'Pricing/PricingSection',
  component: PricingSection,
}

export default meta

type Story = StoryObj<typeof PricingSection>

export const Default: Story = {}

export const CustomPrice: Story = {
  args: {
    price: '$9.99',
  },
}
