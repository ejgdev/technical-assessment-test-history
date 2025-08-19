import { useState } from 'react';

import Card from '../../components/Card';
import  ListItem from '../../components/ListItem';
import Modal from '../../components/Modal';

import flask from '../../assets/flask.svg';
import type { LabResult } from '../../types';

const Paraclinicos = ({ labs }: { labs: LabResult[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderList = labs
    ? labs.map((entry: LabResult, index: number) => (
        <ListItem
          key={index}
          icon={<img src={flask} alt="Icon" className="w-10 h-10" />}
          primary={entry.test}
          secondary={<span className="text-blue-800">{`${entry.value} ${entry.unit}`}</span>}
          onSeeAction={() => setIsOpen(true)}
        />
      ))
    : null;

  return (
    <>
      <Card
        title="Paraclinicos"
        textClass="text-white"
        BgClass="bg-amber-500"
        iconColor="text-amber-500"
        showButton
      >
        {renderList}
      </Card>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Paraclinicos;
