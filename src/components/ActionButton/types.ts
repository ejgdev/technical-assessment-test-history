import type { PropsWithChildren, ReactNode } from 'react';

export type ActionButtonProps = PropsWithChildren<{
  icon: ReactNode;
  onClick?: () => void;
}>;
