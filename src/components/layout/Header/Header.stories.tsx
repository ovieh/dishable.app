import type { Meta, StoryObj } from '@storybook/react-vite'
import { Header } from './Header'

const meta = {
  component: Header,
  title: 'Layout/Header',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutCTA: Story = {
  args: {
    showCTA: false,
  },
}

export const CustomCTA: Story = {
  args: {
    ctaText: 'Get Started',
  },
}

export const CustomLinks: Story = {
  args: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
  },
}

export const WithContent: Story = {
  decorators: [
    (Story) => (
      <div>
        <Story />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">Page Content</h1>
          <p className="mb-4">
            The header is sticky and will remain at the top when scrolling.
          </p>
          {Array.from(Array(20).keys()).map((i) => (
            <p key={`lorem-${i}`} className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </div>
    ),
  ],
}
