import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Footer/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {}

export const CustomSections: Story = {
  args: {
    sections: [
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#about' },
          { label: 'Blog', href: '#blog' },
        ],
      },
      {
        title: 'Help',
        links: [{ label: 'FAQ', href: '#faq' }],
      },
    ],
  },
}
