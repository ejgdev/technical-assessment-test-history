import { useState } from 'react';
import clsx from 'clsx';
import { Maximize2, Minimize2 } from 'lucide-react';

import type { CardProps } from './types';

/**
 * Card component with a colored heading strip and rounded white body.
 */
const Card = ({
  title,
  textClass = 'bg-blue-800',
  BgClass = 'text-white',
  iconColor = 'text-blue-800',
  showButton = false,
  children,
}: CardProps) => {
  const [full, setFull] = useState(false);

  const containerCls = [
    '',
    full &&
      'fixed inset-0 z-40 m-4 flex flex-col max-h-[calc(100vh-1rem)]',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerCls}>
      <div
        className={clsx(
          'flex items-center justify-between pr-1 pl-4 py-1 rounded-t-sm min-h-12',
          full ? '' : ' ml-1 w-11/12',
          BgClass,
          textClass
        )}
      >
        <h2 className="font-semibold text-md">{title}</h2>
        {showButton && (
          <button
            type="button"
            aria-label={full ? 'Restaurar' : 'Expandir'}
            className={clsx(
              'inline-block rounded-xs bg-white px-4 py-2 text-sm font-medium focus:ring-1 focus:outline-hidden hover:bg-gray-100 active:scale-90 transition-transform cursor-pointer',
              iconColor
            )}
            onClick={() => setFull((v) => !v)}
          >
            {full ? (
              <Minimize2 strokeWidth={3} size={20} />
            ) : (
              <Maximize2 strokeWidth={3} size={20} />
            )}
          </button>
        )}
      </div>

      <div
        className={clsx(
          'bg-white rounded-sm p-3 shadow-[0px_0px_4px_3px_rgba(0,_0,_0,_0.2)]',
          full
            ? 'overflow-y-auto min-h-10/12 scrollbar-thin-blue'
            : 'overflow-hidden min-h-36',
          showButton ? 'max-h-56' : ''
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
