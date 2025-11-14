import type { Meta, StoryObj } from '@storybook/react'
import { FeatureCard } from './FeatureCard'
import { MdPeople, MdNotifications, MdBookmark, MdChat } from 'react-icons/md'

const meta: Meta<typeof FeatureCard> = {
  title: 'Features/FeatureCard',
  component: FeatureCard,
}

export default meta

type Story = StoryObj<typeof FeatureCard>

export const Default: Story = {
  args: {
    icon: MdPeople,
    title: 'Subscribe to Creators',
    description: 'Follow your favorite recipe writers and get instant access to their full library.',
  },
}

export const WithNotificationIcon: Story = {
  args: {
    icon: MdNotifications,
    title: 'New Recipe Alerts',
    description: 'Get notified when your subscribed creators publish new recipes and collections.',
  },
}

export const WithBookmarkIcon: Story = {
  args: {
    icon: MdBookmark,
    title: 'Personal Library',
    description: 'Save and organize recipes from all your subscriptions in one beautiful place.',
  },
}

export const WithChatIcon: Story = {
  args: {
    icon: MdChat,
    title: 'Creator Community',
    description: 'Connect with creators, ask questions, and share your cooking experiences.',
  },
}
