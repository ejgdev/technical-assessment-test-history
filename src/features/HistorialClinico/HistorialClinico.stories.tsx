import type { Meta, StoryObj } from '@storybook/react-vite';

import { PATIENTS } from '../../data/patients';
import HistorialClinico from '.';

const meta = {
  title: 'features/HistorialClinico',
  component: HistorialClinico,
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
} satisfies Meta<typeof HistorialClinico>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    clinicalHistory: PATIENTS[0].clinicalHistory,
  },
};
