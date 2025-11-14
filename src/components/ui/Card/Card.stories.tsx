import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'

const meta = {
  component: Card,
  title: 'UI/Card',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Card padding size',
    },
    shadow: {
      control: 'boolean',
      description: 'Add shadow to card',
    },
    border: {
      control: 'boolean',
      description: 'Add border to card',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-xl font-bold mb-2">Card Title</h3>
        <p className="text-darkgrey">This is a default card with medium padding.</p>
      </div>
    ),
  },
}

export const WithShadow: Story = {
  args: {
    shadow: true,
    children: (
      <div>
        <h3 className="text-xl font-bold mb-2">Card with Shadow</h3>
        <p className="text-darkgrey">This card has a shadow effect.</p>
      </div>
    ),
  },
}

export const WithBorder: Story = {
  args: {
    border: true,
    children: (
      <div>
        <h3 className="text-xl font-bold mb-2">Card with Border</h3>
        <p className="text-darkgrey">This card has a border.</p>
      </div>
    ),
  },
}

export const WithShadowAndBorder: Story = {
  args: {
    shadow: true,
    border: true,
    children: (
      <div>
        <h3 className="text-xl font-bold mb-2">Card with Shadow and Border</h3>
        <p className="text-darkgrey">This card has both shadow and border.</p>
      </div>
    ),
  },
}

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: (
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">No Padding Card</h3>
        <p className="text-darkgrey">This card has no default padding (custom padding applied).</p>
      </div>
    ),
  },
}

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
    children: (
      <div>
        <h3 className="text-xl font-bold mb-2">Small Padding</h3>
        <p className="text-darkgrey">This card has small padding.</p>
      </div>
    ),
  },
}

export const LargePadding: Story = {
  args: {
    padding: 'lg',
    shadow: true,
    children: (
      <div>
        <h3 className="text-xl font-bold mb-2">Large Padding</h3>
        <p className="text-darkgrey">This card has large padding and shadow.</p>
      </div>
    ),
  },
}

export const FeatureCard: Story = {
  args: {
    padding: 'lg',
    children: (
      <div className="text-center">
        <div className="w-12 h-12 bg-rust/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🚀</span>
        </div>
        <h3 className="text-lg font-bold mb-2">Feature Title</h3>
        <p className="text-darkgrey text-sm">
          A beautiful feature card with icon and description.
        </p>
      </div>
    ),
  },
}
