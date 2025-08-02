import type { TabNavProps } from "./types";

/**
 * Horizontal tab navigation to show several tabs.
 */
const TabNav = ({ tabs, selectedTab, onTabChange }: TabNavProps) => (
  <div className="inline-flex rounded-md overflow-hidden shadow text-sm font-bold bg-gray-200 leading-none">
    {tabs.map(({ id, label }) => (
      <button
        key={id}
        onClick={() => onTabChange(id)}
        className={`m-1 px-4 py-2 rounded-md active:scale-90 transition-transform cursor-pointer uppercase ${
          id === selectedTab
            ? 'bg-blue-200 text-blue-900'
            : 'bg-gray-200 text-gray-500 hover:text-blue-800 hover:bg-blue-100'
        }`}
      >
        {label}
      </button>
    ))}
  </div>
);

export default TabNav;
