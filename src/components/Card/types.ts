import type { ReactNode } from 'react';

export type CardProps = {
  title: string;
  textClass?: string;
  BgClass?: string;
  iconColor?: string;
  showButton?: boolean;
  children: ReactNode;
};
