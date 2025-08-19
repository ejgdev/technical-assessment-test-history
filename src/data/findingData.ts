export type ClinicalFinding = {
  id: string;
  label: string;
}

export const COMMON_FINDINGS: ClinicalFinding[] = [
  { id: 'fever', label: 'Fiebre' },
  { id: 'fatigue', label: 'Fatiga' },
  { id: 'weight_loss', label: 'Pérdida de peso' },
  { id: 'cough', label: 'Tos' },
  { id: 'dyspnea', label: 'Disnea' },
  { id: 'sore_throat', label: 'Dolor de garganta' },
  { id: 'abd_pain', label: 'Dolor abdominal' },
  { id: 'nausea', label: 'Náuseas' },
  { id: 'vomiting', label: 'Vómitos' },
  { id: 'headache', label: 'Cefalea' },
  { id: 'dizziness', label: 'Mareos' },
  { id: 'back_pain', label: 'Dolor lumbar' },
  { id: 'palpitations', label: 'Palpitaciones' },
  { id: 'ankle_edema', label: 'Edema en tobillo' },
  { id: 'hypertension', label: 'HTA registrada' },
];