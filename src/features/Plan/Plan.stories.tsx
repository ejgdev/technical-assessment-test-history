import type { Meta, StoryObj } from '@storybook/react-vite';

import { PATIENTS } from '../../data/patients';
import Plan from '.';

const meta = {
  title: 'features/Plan',
  component: Plan,
  tags: ['autodocs'],
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="w-96 h-96 pt-12 mx-5 grid-cols-1">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Plan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    plan: PATIENTS[0].plan || [],
  },
};
