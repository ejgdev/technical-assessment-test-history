import type { JSX } from "react";
import type { Patient } from "../../types";

export type HeaderProps = {
  patientId: string;
  setPatientId: (id: string) => void;
  patientsOptions: JSX.Element[];
  patient: Patient;
};
