import type { Meta, StoryObj } from '@storybook/react-vite';

import Card from './';

const meta = {
  title: 'components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    BgClass: {
      control: 'select',
      options: ['bg-blue-300', 'bg-blue-800', 'bg-green-800', 'bg-orange-800', 'bg-slate-800'],
    },
    textClass: {
      control: 'select',
      options: ['text-blue-800', 'text-white'],
    },
  },
  decorators: [
    (Story) => (
      <div className="w-96 h-96 pt-12 grid-cols-1">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Agregar dato de salud',
    textClass: 'text-blue-800',
    BgClass: 'bg-blue-300',
    showButton: true,
    children: (
      <div className="p-4">
        <ul className="flex flex-col gap-2">
          <li className="flex items-center justify-between">
            <span className="text-sm font-medium leading-4">Peso</span>
            <span className="text-sm text-gray-500 leading-3">70 kg</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-sm font-medium leading-4">Altura</span>
            <span className="text-sm text-gray-500 leading-3">180 cm</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-sm font-medium leading-4">
              Tipo de Sangre
            </span>
            <span className="text-sm text-gray-500 leading-3">A+</span>
          </li>
        </ul>
      </div>
    ),
  },
};

