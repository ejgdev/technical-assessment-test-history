import { useState } from 'react';

import Card from '../../components/Card';
import  ListItem from '../../components/ListItem';
import Modal from '../../components/Modal';

import prescription from '../../assets/prescription.svg';
import type { Medication } from '../../types';

const Plan = ({ plan }: { plan: Medication[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderList = plan
    ? plan.map((entry: Medication, index: number) => (
        <ListItem
          key={index}
          icon={<img src={prescription} alt="Icon" className="w-10 h-10" />}
          primary={entry.name}
          secondary={entry.schedule}
          onSeeAction={() => setIsOpen(true)}
        />
      ))
    : null;

  return (
    <>
      <Card
        title="Plan"
        textClass="text-white"
        BgClass="bg-blue-800"
        iconColor="text-blue-800"
        showButton
      >
        {renderList}
      </Card>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Plan;
