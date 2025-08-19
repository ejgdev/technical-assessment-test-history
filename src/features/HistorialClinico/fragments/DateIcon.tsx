const DateIcon = ({
  date,
}: {
  date: string;
}) => (
  <span className="text-blue-800 text-lg font-semibold whitespace-pre-line leading-none max-w-12 text-center">
    {new Date(date).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
    })}
  </span>
);

export default DateIcon;
