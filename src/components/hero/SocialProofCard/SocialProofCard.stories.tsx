import type { Meta, StoryObj } from '@storybook/react-vite'
import { SocialProofCard } from './SocialProofCard'

const meta = {
  component: SocialProofCard,
  title: 'Hero/SocialProofCard',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SocialProofCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomCount: Story = {
  args: {
    subscriberCount: '100,000+',
  },
}

export const FourStars: Story = {
  args: {
    rating: 4,
    subscriberCount: '25,000+',
  },
}
