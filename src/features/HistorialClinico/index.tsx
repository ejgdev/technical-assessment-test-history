import { useState } from 'react';

import Card from '../../components/Card';
import  ListItem from '../../components/ListItem';
import Modal from '../../components/Modal';
import DateIcon from './fragments/DateIcon';
import type { ClinicalHistoryEntry } from '../../types';

const HistorialClinico = ({ clinicalHistory }: { clinicalHistory: ClinicalHistoryEntry[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderList = clinicalHistory
    ? clinicalHistory.map((entry: ClinicalHistoryEntry, index: number) => (
        <ListItem
          key={index}
          icon={<DateIcon date={entry.date} />}
          primary={entry.description}
          onSeeAction={() => setIsOpen(true)}
        />
      ))
    : null;

  return (
    <>
      <Card
        title="Historial clínico"
        textClass="text-white"
        BgClass="bg-blue-950"
        iconColor="text-blue-950"
        showButton
      >
        {renderList}
      </Card>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default HistorialClinico;
