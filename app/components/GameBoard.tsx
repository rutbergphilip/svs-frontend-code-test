'use client';

import { useGameStore } from '../stores/gameStore';
import { NumberCard } from './numbers/NumberCard';
import { RowCard } from './RowCard';
import { AddRowButton } from './buttons/AddRowButton';
import { GradeButton } from './buttons/GradeButton';

const NUMBERS = Array.from({ length: 50 }, (_, i) => i + 1);

export function GameBoard() {
  const { rows, activeRowId, toggleNumber } = useGameStore();
  const activeRow = rows.find((r) => r.id === activeRowId);
  const selectedNums = activeRow?.numbers.map((n) => n.num) ?? [];

  return (
    <>
      <h1 className='text-2xl font-semibold'>Välj 10 nummer</h1>
      <div
        role='group'
        aria-label='Välj nummer 1 - 50'
        className='grid grid-cols-10 gap-2'
      >
        {NUMBERS.map((n) => (
          <NumberCard
            key={n}
            selected={selectedNums.includes(n)}
            disabled={
              !selectedNums.includes(n) && activeRow?.numbers.length === 10
            }
            onClick={() => toggleNumber(n)}
          >
            {n}
          </NumberCard>
        ))}
      </div>
      <div className='flex justify-between items-center w-full'>
        <div className='flex items-center gap-1'>
          <h2 className='text-xl text-left'>Mina rader</h2>
          <p className='py-1 px-2 bg-gray-200 rounded-full'>{rows.length}</p>
        </div>
        <AddRowButton />
      </div>
      <div
        role='list'
        aria-label='Sparade rader'
        className='flex w-full flex-col gap-2'
      >
        {rows.map((row) => (
          <RowCard key={row.id} row={row} isActive={row.id === activeRowId} />
        ))}
      </div>
      <div className='w-full flex justify-end'>
        <GradeButton />
      </div>
    </>
  );
}
