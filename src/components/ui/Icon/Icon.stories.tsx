import type { Meta, StoryObj } from '@storybook/react-vite'
import { Icon } from './Icon'
import {
    MdMenu,
    MdClose,
    MdStar,
    MdCheck,
    MdExpandMore,
    MdAndroid,
    MdPersonAdd,
    MdNotifications,
    MdBookmark,
    MdChatBubble,
} from 'react-icons/md'
import { FaApple } from 'react-icons/fa'

const meta = {
  component: Icon,
  title: 'UI/Icon',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      description: 'React Icons icon component',
    },
    size: {
      control: 'number',
      description: 'Icon size in pixels',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Menu: Story = {
  args: {
    icon: MdMenu,
    size: 24,
  },
}

export const Close: Story = {
  args: {
    icon: MdClose,
    size: 24,
  },
}

export const Star: Story = {
  args: {
    icon: MdStar,
    size: 24,
    className: 'text-yellow-400',
  },
}

export const Check: Story = {
  args: {
    icon: MdCheck,
    size: 24,
    className: 'text-rust',
  },
}

export const ExpandMore: Story = {
  args: {
    icon: MdExpandMore,
    size: 24,
  },
}

export const Apple: Story = {
  args: {
    icon: FaApple,
    size: 24,
  },
}

export const Android: Story = {
  args: {
    icon: MdAndroid,
    size: 24,
  },
}

export const PersonAdd: Story = {
  args: {
    icon: MdPersonAdd,
    size: 32,
    className: 'text-rust',
  },
}

export const Notifications: Story = {
  args: {
    icon: MdNotifications,
    size: 32,
    className: 'text-rust',
  },
}

export const Bookmark: Story = {
  args: {
    icon: MdBookmark,
    size: 32,
    className: 'text-rust',
  },
}

export const ChatBubble: Story = {
  args: {
    icon: MdChatBubble,
    size: 32,
    className: 'text-rust',
  },
}

export const Large: Story = {
  args: {
    icon: MdStar,
    size: 48,
    className: 'text-rust',
  },
}

export const Small: Story = {
  args: {
    icon: MdStar,
    size: 16,
  },
}
