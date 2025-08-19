import { useState } from "react";

import Header from "./features/Header";
import Dashboard from "./features/Dashboard";
import HistorialClinico from "./features/HistorialClinico";
import TratamientoActual from "./features/TratamientoActual";
import Paraclinicos from "./features/Paraclinicos";
import Plan from "./features/Plan";

import { PATIENTS } from './data/patients';

const App = () => {
  const [patientId, setPatientId] = useState('p001');
  const patient = PATIENTS.find((p) => p.id === patientId)!;

  const renderPatientSelectOptions = PATIENTS.map((p) => (
    <option key={p.id} value={p.id}>
      {p.fullName}
    </option>
  ));

  return (
    <div className="mx-auto max-w-screen px-4 py-8 sm:px-6 lg:px-8">
      <Header
        patientId={patientId}
        setPatientId={setPatientId}
        patientsOptions={renderPatientSelectOptions}
        patient={patient}
      />
      <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
        <Dashboard />
        <div className="grid gap-4 md:grid-cols-2 auto-rows-max">
          <HistorialClinico clinicalHistory={patient.clinicalHistory} />
          <Plan plan={patient.plan} />
          <TratamientoActual currentTreatment={patient.currentTreatment} />
          <Paraclinicos labs={patient.labs} />
        </div>
      </div>
    </div>
  );
}

export default App
