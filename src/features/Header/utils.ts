export const formatYearMonth = (ym: string) => {
  const [y, m] = ym.replace('.', '-').split('-').map(Number);
  return new Intl.DateTimeFormat('es-ES', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(y, m - 1));
};

export const getAge = (dob: string | Date): number => {
  const birth = typeof dob === 'string' ? new Date(dob) : dob;
  const today = new Date();

  let years = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  // if the birthday hasn't occurred yet this year, subtract 1
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    years--;
  }
  return years;
};