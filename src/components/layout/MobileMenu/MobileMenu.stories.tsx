import type { Meta, StoryObj } from '@storybook/react-vite'
import { MobileMenu } from './MobileMenu'

const meta = {
  component: MobileMenu,
  title: 'Layout/MobileMenu',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div className="relative" style={{ minHeight: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MobileMenu>

export default meta
type Story = StoryObj<typeof meta>

const defaultLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const Closed: Story = {
  args: {
    links: defaultLinks,
  },
}

export const WithManyLinks: Story = {
  args: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
}
