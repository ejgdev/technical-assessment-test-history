export type Sex = 'M' | 'F';

export type ClinicalHistoryEntry = {
  date: string;
  description: string;
}

export type Medication = {
  name: string;
  schedule: string;
  critical?: boolean;
}

export type LabResult = {
  test: string;
  value: string;
  unit: string;
  abnormal?: boolean;
}

export type Patient = {
  id: string;
  fullName: string;
  sex: Sex;
  dob: string;
  heightCm: number;
  weightKg: number;

  clinicalHistory: ClinicalHistoryEntry[];
  plan: Medication[];
  currentTreatment: Medication[];
  labs: LabResult[];
}