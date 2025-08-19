export type Icd10Row = {
  code: string;
  desc: string;
}

export const ICD10_MOCK: Icd10Row[] = [
  { code: 'I10', desc: 'Hipertensión esencial (primaria)' },
  { code: 'E11.9', desc: 'Diabetes mellitus tipo 2 sin complicaciones' },
  { code: 'E78.5', desc: 'Hiperlipidemia mixta' },
  { code: 'J45.909', desc: 'Asma, no especificada, sin exacerbación' },
  { code: 'J06.9', desc: 'Infección respiratoria aguda de vías superiores, no especificada' },
  { code: 'A09', desc: 'Gastroenteritis y colitis infecciosas, no especificadas' },
  { code: 'M54.5', desc: 'Lumbalgia' },
  { code: 'S93.4', desc: 'Esguince del tobillo y del pie' },
  { code: 'K21.9', desc: 'Enfermedad por reflujo gastroesofágico sin esofagitis' },
  { code: 'R10.9', desc: 'Dolor abdominal, no especificado' },
  { code: 'N39.0', desc: 'Infección del tracto urinario, sitio no especificado' },
  { code: 'O80', desc: 'Parto único espontáneo (parto normal)' },

  { code: 'R05', desc: 'Tos' },
  { code: 'R51', desc: 'Cefalea' },
  { code: 'Z00.0', desc: 'Examen general de la salud' },
];