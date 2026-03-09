'use client';

import { useGameStore } from '../../stores/gameStore';

const REQUIRED_NUMBERS = 10;

export function GradeButton() {
  const { rows, gradeRows } = useGameStore();
  const canGrade = rows.every((row) => row.numbers.length === REQUIRED_NUMBERS);

  return (
    <button
      type='button'
      disabled={!canGrade}
      onClick={gradeRows}
      className='rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors'
    >
      Rätta spel
    </button>
  );
}
