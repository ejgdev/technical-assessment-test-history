import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { BriefcaseMedical } from 'lucide-react';

import ListItem from './';

const meta = {
  title: 'components/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="w-96 h-96 pt-12 grid-cols-1">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <BriefcaseMedical strokeWidth={2} size={32} />,
    primary: 'Glicemia en Ayuno',
    secondary: '101 mg/dl',
    alert: true,
    onSeeAction: fn(),
  },
};
