'use client';

import { useGameStore } from '../../stores/gameStore';

const MAX_ROWS = 5;

export function AddRowButton() {
  const { rows, addRow } = useGameStore();
  const canAddRow = rows.length < MAX_ROWS;

  return (
    <button
      type='button'
      disabled={!canAddRow}
      onClick={addRow}
      className='rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors'
    >
      Lägg till rad
    </button>
  );
}
