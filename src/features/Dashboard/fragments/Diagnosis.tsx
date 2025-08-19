import { useState } from 'react';
import { ICD10_MOCK } from '../../../data/diagnosisData';

const DiagnosisPanel = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="flex flex-col gap-2 mt-3">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar diagnóstico…"
        className="w-full rounded-md border border-blue-200 focus:outline-0 px-3 py-2 text-sm"
      />

      {/* Search results */}
      <ul className="divide-y rounded-md border border-blue-200 overflow-y-auto max-h-[300px] scrollbar-thin-blue">
        {ICD10_MOCK.map((row) => (
          <li
            key={row.code}
            className="flex items-start hover:bg-blue-50 border-blue-200 cursor-pointer p-2"
            onClick={() => {}}
          >
            <div className="grid gap-2 grid-cols-[3rem_1fr]">
              <span className="text-xs">{row.code}</span>
              <span className="text-sm">{row.desc}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiagnosisPanel;
