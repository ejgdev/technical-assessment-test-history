import { useState } from 'react';
import { Heart, Calculator, BookCopy } from 'lucide-react';

import ActionButton from '../../../components/ActionButton';
import Modal from '../../../components/Modal';

import heartUrl from '../../../assets/weightMass.svg';
import flask from '../../../assets/flask.svg';
import scalpel from '../../../assets/scalpel.svg';

const  TodosPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <ActionButton
          icon={<Heart strokeWidth={2} size={22} color="red" fill="red" />}
          onClick={() => setIsOpen(true)}
        >
          Signos vitales
        </ActionButton>
        <ActionButton
          icon={<img src={heartUrl} alt="heart" className="w-6 h-6" />}
          onClick={() => setIsOpen(true)}
        >
          Talla y/o peso
        </ActionButton>
        <ActionButton
          icon={<img src={flask} alt="flask" className="w-6 h-6" />}
          onClick={() => setIsOpen(true)}
        >
          Dato de laboratorio
        </ActionButton>
        <ActionButton
          icon={<img src={scalpel} alt="scalpel" className="w-6 h-6" />}
          onClick={() => setIsOpen(true)}
        >
          Cirugía
        </ActionButton>
        <ActionButton
          icon={<BookCopy strokeWidth={2} size={22} color="orange" />}
          onClick={() => setIsOpen(true)}
        >
          Escala / Clasificación
        </ActionButton>
        <ActionButton
          icon={<Calculator strokeWidth={2} size={22} />}
          onClick={() => setIsOpen(true)}
        >
          Calculadora clínica
        </ActionButton>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default  TodosPanel;
