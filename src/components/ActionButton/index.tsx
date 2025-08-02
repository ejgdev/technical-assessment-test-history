import type { ActionButtonProps } from "./types";

/**
 * Large square button with icon & label used for actions.
 */
const ActionButton = ({ icon, children, onClick }: ActionButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className="relative flex flex-row justify-center items-center gap-1 rounded-md bg-gray-100 hover:bg-blue-50 active:scale-90 transition-transform cursor-pointer py-4 px-1"
  >
    <span className="text-lg font-semibold text-blue-800 text-center whitespace-pre-line leading-none mx-8">
      {children}
    </span>
    <div className="absolute p-1 bg-white rounded-md top-1 right-1">{icon}</div>
  </button>
);

export default ActionButton;
