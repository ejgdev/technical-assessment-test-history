import { useState } from 'react';

import Card from '../../components/Card';
import  ListItem from '../../components/ListItem';
import Modal from '../../components/Modal';

import clinicalSign from '../../assets/clinicalSigns.svg';
import prescription from '../../assets/prescription.svg';

import type { Medication } from '../../types';

const renderIcon = (critical: boolean) => {
  return critical ? clinicalSign : prescription;
}

const TratamientoActual = ({ currentTreatment }: { currentTreatment: Medication[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderList = currentTreatment
    ? currentTreatment.map((entry: Medication, index: number) => (
        <ListItem
          key={index}
          icon={<img src={renderIcon(entry.critical || false)} alt="Icon" className="w-10 h-10" />}
          primary={entry.name}
          secondary={entry.schedule}
          onSeeAction={() => setIsOpen(true)}
        />
      ))
    : null;

  return (
    <>
      <Card
        title="Tratamiento actual"
        textClass="text-white"
        BgClass="bg-lime-600"
        iconColor="text-lime-600"
        showButton
      >
        {renderList}
      </Card>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default TratamientoActual;
