import type { Meta } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Heart } from 'lucide-react';


import ActionButton from './';

const meta = {
  title: 'components/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="w-64 h-32 pt-12 grid-cols-1">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ActionButton>;

export default meta;

export const Default = () => {
  return (
    <div className="grid w-90 grid-cols-2 gap-2">
      <ActionButton
        icon={<Heart strokeWidth={2} size={18} color="red" fill="red" />}
      >
        Signos vitales
      </ActionButton>
      <ActionButton
        icon={<Heart strokeWidth={2} size={18} color="red" fill="red" />}
      >
        Talla y/o peso
      </ActionButton>
      <ActionButton
        icon={<Heart strokeWidth={2} size={18} color="red" fill="red" />}
      >
        Dato de laboratorio
      </ActionButton>
      <ActionButton
        icon={<Heart strokeWidth={2} size={18} color="red" fill="red" />}
      >
        Cirugía
      </ActionButton>
      <ActionButton
        icon={<Heart strokeWidth={2} size={18} color="red" fill="red" />}
      >
        Escala / Clasificación
      </ActionButton>
      <ActionButton
        icon={<Heart strokeWidth={2} size={18} color="red" fill="red" />}
      >
        Calculadora clínica
      </ActionButton>
    </div>
  );
};
