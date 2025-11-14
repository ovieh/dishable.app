import type { Meta, StoryObj } from '@storybook/react'
import { FeaturesSection } from './FeaturesSection'

const meta: Meta<typeof FeaturesSection> = {
  title: 'Features/FeaturesSection',
  component: FeaturesSection,
}

export default meta

type Story = StoryObj<typeof FeaturesSection>

export const Default: Story = {}

export const CustomTitle: Story = {
  args: {
    title: 'Custom Features Title',
    subtitle: 'This is a custom subtitle for the features section.',
  },
}
