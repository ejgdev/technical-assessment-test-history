import type { Patient } from '../types';

export const PATIENTS: Patient[] = [
  {
    id: 'p001',
    fullName: 'María Fernanda Ruiz',
    sex: 'F',
    dob: '1985-06-22',
    heightCm: 165,
    weightKg: 68,
    clinicalHistory: [
      { date: '2014-03', description: 'Hipertensión arterial primaria' },
      { date: '2020-12', description: 'Obstrucción intestinal' },
      { date: '2021-01', description: 'Trauma en tobillo izquierdo' },
      { date: '2022-02', description: 'Infección respiratoria aguda' },
      { date: '2023-03', description: 'Control de diabetes tipo 2' },
      { date: '2024-04', description: 'Consulta de seguimiento por hipertensión' },
      { date: '2024-05', description: 'Consulta de control de peso' },
      { date: '2025-06', description: 'Consulta de seguimiento por infección respiratoria' },
      { date: '2025-07', description: 'Consulta de control de hipertensión' },
    ],
    plan: [
      { name: 'Ciprofloxacino 500 mg VO', schedule: 'cada 12 h × 7 d' },
      { name: 'Acetaminofén 500 mg VO', schedule: 'cada 8 h × 5 d' },
    ],
    currentTreatment: [
      { name: 'Ciprofloxacino 500 mg VO', schedule: 'cada 12 h × 7 d', critical: true },
      { name: 'Acetaminofén 500 mg VO', schedule: 'cada 8 h × 5 d', critical: false },
    ],
    labs: [
      { test: 'Glicemia en ayuno', value: '101', unit: 'mg/dl', abnormal: false },
    ],
  },

  {
    id: 'p002',
    fullName: 'Carlos Andrés Gómez',
    sex: 'M',
    dob: '1990-11-03',
    heightCm: 178,
    weightKg: 82,
    clinicalHistory: [
      { date: '2019-05', description: 'Asma persistente moderada' },
      { date: '2023-07', description: 'Esguince de tobillo derecho' },
      { date: '2024-04', description: 'Consulta de seguimiento por hipertensión' },
      { date: '2024-05', description: 'Consulta de control de peso' },
      { date: '2025-06', description: 'Consulta de seguimiento por infección respiratoria' },
      { date: '2025-07', description: 'Consulta de control de hipertensión' },
    ],
    plan: [
      { name: 'Salbutamol inhalador 100 μg', schedule: '2 puff prn' },
      { name: 'Ciprofloxacino 500 mg VO', schedule: 'cada 12 h × 7 d' },
      { name: 'Acetaminofén 500 mg VO', schedule: 'cada 8 h × 5 d' },
    ],
    currentTreatment: [
      { name: 'Budesonida inhalador 200 μg', schedule: '2 puff cada 12 h' },
      { name: 'Ciprofloxacino 500 mg VO', schedule: 'cada 12 h × 7 d', critical: true },
      { name: 'Acetaminofén 500 mg VO', schedule: 'cada 8 h × 5 d', critical: false },
    ],
    labs: [
      { test: 'Hemoglobina', value: '15.2', unit: 'g/dl' },
    ],
  },

  {
    id: 'p003',
    fullName: 'Luisa Fernanda Salazar',
    sex: 'F',
    dob: '1975-02-14',
    heightCm: 160,
    weightKg: 74,
    clinicalHistory: [
      { date: '2016-09', description: 'Diabetes mellitus tipo 2' },
      { date: '2024-04', description: 'Consulta de seguimiento por hipertensión' },
      { date: '2024-05', description: 'Consulta de control de peso' },
      { date: '2025-06', description: 'Consulta de seguimiento por infección respiratoria' },
      { date: '2025-07', description: 'Consulta de control de hipertensión' },
    ],
    plan: [
      { name: 'Metformina 850 mg VO', schedule: 'cada 12 h' },
      { name: 'Dieta hipocalórica', schedule: '—' },
      { name: 'Ciprofloxacino 500 mg VO', schedule: 'cada 12 h × 7 d' },
      { name: 'Acetaminofén 500 mg VO', schedule: 'cada 8 h × 5 d' },
    ],
    currentTreatment: [
      { name: 'Insulina NPH', schedule: '20 U SC noche', critical: true },
      { name: 'Ciprofloxacino 500 mg VO', schedule: 'cada 12 h × 7 d', critical: true },
      { name: 'Acetaminofén 500 mg VO', schedule: 'cada 8 h × 5 d', critical: false },
    ],
    labs: [
      { test: 'HbA1c', value: '8.4', unit: '%', abnormal: true },
      { test: 'Creatinina', value: '1.0', unit: 'mg/dl' },
    ],
  },
];