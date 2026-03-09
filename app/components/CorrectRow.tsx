'use client';

import { useGameStore } from '../stores/gameStore';

export function CorrectRow() {
  const { correctNumbers } = useGameStore();
  if (!correctNumbers) return null;

  return (
    <div className='flex w-full items-center gap-2 rounded-lg bg-green-100 px-4 py-3'>
      <span className='text-sm font-medium text-green-800 mr-2'>Rätt rad:</span>
      <span className='flex flex-1 gap-2 flex-wrap text-sm font-medium text-green-800'>
        {correctNumbers.map((n) => (
          <span key={n}>{n}</span>
        ))}
      </span>
    </div>
  );
}
