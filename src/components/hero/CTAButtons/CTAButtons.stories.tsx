import type { Meta, StoryObj } from '@storybook/react-vite'
import { CTAButtons } from './CTAButtons'

const meta = {
  component: CTAButtons,
  title: 'Hero/CTAButtons',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    layout: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
    },
    onPrimaryClick: { action: 'primary clicked' },
    onIOSClick: { action: 'iOS clicked' },
    onAndroidClick: { action: 'Android clicked' },
  },
} satisfies Meta<typeof CTAButtons>

export default meta
type Story = StoryObj<typeof meta>

export const Vertical: Story = {
  args: {
    layout: 'vertical',
  },
}

export const Horizontal: Story = {
  args: {
    layout: 'horizontal',
  },
}

export const CustomPrimaryText: Story = {
  args: {
    primaryText: 'Get Started Now',
  },
}
