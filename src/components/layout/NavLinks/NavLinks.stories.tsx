import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavLinks } from './NavLinks'

const meta = {
  component: NavLinks,
  title: 'Layout/NavLinks',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavLinks>

export default meta
type Story = StoryObj<typeof meta>

const defaultLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const Default: Story = {
  args: {
    links: defaultLinks,
  },
}

export const SingleLink: Story = {
  args: {
    links: [{ label: 'Home', href: '/' }],
  },
}

export const ManyLinks: Story = {
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
