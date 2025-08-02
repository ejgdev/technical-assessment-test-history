
import { getAge, formatYearMonth } from "./utils";
import type { HeaderProps } from "./types";

const Header = ({
  patientId,
  setPatientId,
  patientsOptions,
  patient
}: HeaderProps) => {
  return (
    <div className="flex items-end mb-8 p-4 rounded-lg bg-blue-100">
      <div className="max-w-3xs">
        <label htmlFor="Paciente">
          <span className="text-sm font-medium text-gray-700 h-5">
            Paciente{' '}
          </span>
          <select
            name="Paciente"
            id="Paciente"
            className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 hover:border-blue-800"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          >
            {patientsOptions}
          </select>
        </label>
      </div>
      <div className="ml-4 flex-1 text-center">
        <label className="text-2xl font-medium text-gray-700">
          {patient.fullName} ({formatYearMonth(patient.dob)})
        </label>
        <div className="text-md text-gray-500">
          {patient.heightCm} cm - {patient.weightKg} kg - {getAge(patient.dob)}{' '}
          años
        </div>
      </div>
    </div>
  );
}

export default Header;
