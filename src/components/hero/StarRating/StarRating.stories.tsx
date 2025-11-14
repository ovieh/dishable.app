import type { Meta, StoryObj } from '@storybook/react-vite'
import { StarRating } from './StarRating'

const meta = {
  component: StarRating,
  title: 'Hero/StarRating',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 1 },
      description: 'Number of filled stars',
    },
    maxRating: {
      control: { type: 'number' },
      description: 'Maximum number of stars',
    },
  },
} satisfies Meta<typeof StarRating>

export default meta
type Story = StoryObj<typeof meta>

export const FiveStars: Story = {
  args: {
    rating: 5,
  },
}

export const FourStars: Story = {
  args: {
    rating: 4,
  },
}

export const ThreeStars: Story = {
  args: {
    rating: 3,
  },
}

export const TwoStars: Story = {
  args: {
    rating: 2,
  },
}

export const OneStar: Story = {
  args: {
    rating: 1,
  },
}

export const ZeroStars: Story = {
  args: {
    rating: 0,
  },
}
