import { useState } from 'react';
import type { Meta } from '@storybook/react-vite';

import TabNav from './';

const tabs = [
  { id: 'todos', label: 'Todos' },
  { id: 'diagnosis', label: 'Diagnosis CIE-10' },
  { id: 'finding', label: 'Hallazgos Clinicos' },
  { id: 'd', label: 'Option D' },
];

const meta = {
  title: 'components/TabNav',
  component: TabNav,
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
} satisfies Meta<typeof TabNav>;

export default meta;

export const Default = () => {
  const [activeId, setActiveId] = useState('todos');

  return (
    <TabNav tabs={tabs} selectedTab={activeId} onTabChange={setActiveId} />
  );
}