import { useState } from 'react';

import {COMMON_FINDINGS } from '../../../data/findingData';

export const FindingsPanel = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [note, setNote] = useState('');

  const TOGGLE = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );

  return (
    <div className="flex flex-col gap-3 mt-3">
      <div className="flex flex-wrap gap-2">
        {COMMON_FINDINGS.map((f) => (
          <button
            key={f.id}
            className={`rounded-full px-3 py-1 text-xs border border-blue-200 ${
              selected.includes(f.id) ? 'bg-blue-200' : 'bg-gray-100'
            }`}
            onClick={() => TOGGLE(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <textarea
        rows={3}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Otra observación clínica…"
        className="w-full rounded-md border border-blue-200 px-3 py-2 text-sm focus:outline-0"
      />
      <button
        onClick={() => {}}
        className="self-start rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white"
      >
        Guardar hallazgos
      </button>
    </div>
  );
};
