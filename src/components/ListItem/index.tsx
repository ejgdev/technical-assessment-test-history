import { EyeIcon } from 'lucide-react';

import type { ListItemProps } from './types';

/**
 * ListItem component with a left icon, main/secondary text, and an eye “view” button.
 */
const ListItem = ({
  icon,
  primary,
  secondary,
  alert,
  onSeeAction,
}: ListItemProps) => {
  return (
    <div className="flex items-center justify-between min-h-14 gap-2 pr-1 pl-4 py-1 rounded-md mb-4 shadow-[0px_0px_4px_3px_rgba(0,_0,_0,_0.2)]">
      <div className="flex items-center gap-2">
        {icon}
        <div className="text-gray-600 text-md font-semibold">
          <p>{primary}</p>
          {secondary && secondary}
        </div>
      </div>
      <div className="flex ml-4">
        {alert && (
          <span className="content-center bg-yellow-100 text-yellow-600 font-bold px-2 py-0.5 rounded w-10 text-center text-xl">
            !!
          </span>
        )}
        {onSeeAction && (
          <button
            aria-label="Ver detalle"
            className="text-blue-700 bg-blue-200 p-2 rounded-sm  hover:bg-blue-100 active:scale-90 transition-transform cursor-pointer"
            onClick={onSeeAction}
          >
            <EyeIcon strokeWidth={3} size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ListItem;
