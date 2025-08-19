import type { ReactNode } from 'react';

export type ListItemProps = {
  icon: ReactNode;
  primary: string;
  secondary?: ReactNode;
  alert?: boolean;
  onSeeAction?: () => void;
};