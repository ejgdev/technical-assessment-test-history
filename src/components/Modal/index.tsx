import { useEffect } from 'react';
import { X } from 'lucide-react';

import type { ModalProps } from './types';

const defaultChildren = (onClose: () => void) => (
  <div>
    <div className="mt-4">
      <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200">
        <li className="relative -ms-1.5 flex items-start gap-4">
          <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

          <div className="-mt-2">
            <time className="text-xs/none font-medium text-gray-700">
              12/02/2025
            </time>

            <h3 className="text-lg font-bold text-gray-900">Registro del historial médico</h3>

            <p className="mt-0.5 text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              officiis tempora ipsum adipisci tenetur sunt quae exercitationem
              sed pariatur porro!
            </p>
          </div>
        </li>

        <li className="relative -ms-1.5 flex items-start gap-4">
          <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

          <div className="-mt-2">
            <time className="text-xs/none font-medium text-gray-700">
              15/03/2025
            </time>

            <h3 className="text-lg font-bold text-gray-900">Inicio de tratamiento</h3>

            <p className="mt-0.5 text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              officiis tempora ipsum adipisci tenetur sunt quae exercitationem
              sed pariatur porro!
            </p>
          </div>
        </li>

        <li className="relative -ms-1.5 flex items-start gap-4">
          <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

          <div className="-mt-2">
            <time className="text-xs/none font-medium text-gray-700">
              24/04/2025
            </time>

            <h3 className="text-lg font-bold text-gray-900">Seguimiento de Control</h3>

            <p className="mt-0.5 text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              officiis tempora ipsum adipisci tenetur sunt quae exercitationem
              sed pariatur porro!
            </p>
          </div>
        </li>
      </ol>
    </div>

    <footer className="mt-6 flex justify-end gap-2">
      <button
        type="button"
        className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        onClick={onClose}
      >
        Entendido
      </button>
    </footer>
  </div>
);

/**
 * Basic accessible modal – uses a fixed overlay. Close with ESC or backdrop click.
 */
const Modal = ({
  isOpen,
  onClose,
  title = 'Este es un contenido de demostración para una acción',
  children = defaultChildren(onClose),
}: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-2xl rounded-lg bg-white shadow-lg p-5">
        <button
          aria-label="Cerrar"
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
        {title && (
          <h3 className="mb-3 text-lg text-center font-semibold text-gray-800">
            {title}
          </h3>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
