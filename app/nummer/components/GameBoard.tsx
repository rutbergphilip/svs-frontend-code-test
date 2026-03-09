'use client';

import { useGameStore } from '../store';
import { NumberCard } from './NumberCard';
import { RowCard } from './RowCard';
import { AddRowButton } from './AddRowButton';
import { GradeButton } from './GradeButton';
import { RandomizeButton } from './RandomizeButton';
import { CorrectRow } from './CorrectRow';
import { PlayAgainButton } from './PlayAgainButton';
import { NUMBERS, MAX_NUMBERS } from '../constants';

export function GameBoard() {
  const { rows, activeRowId, graded } = useGameStore();
  const activeRow = rows.find((r) => r.id === activeRowId);
  const selectedNums = activeRow?.numbers.map((n) => n.num) ?? [];

  return (
    <section className='flex w-full flex-col items-start gap-4'>
      {!graded && (
        <>
          <div className='flex justify-between items-center w-full'>
            <h2 className='text-xl font-semibold'>Välj 10 nummer</h2>
            <RandomizeButton />
          </div>
          <div
            role='group'
            aria-label='Välj nummer 1 - 50'
            className='grid w-full grid-cols-10 gap-1 sm:gap-2'
          >
            {NUMBERS.map((n) => (
              <NumberCard
                key={n}
                num={n}
                selected={selectedNums.includes(n)}
                disabled={
                  !selectedNums.includes(n) && activeRow?.numbers.length === MAX_NUMBERS
                }
              />
            ))}
          </div>
        </>
      )}
      <div className='flex justify-between items-center w-full'>
        <div className='flex items-center gap-1'>
          <h2 className='text-xl text-left'>Mina rader</h2>
          <span
            role='status'
            className='bg-gray-200 rounded-full w-6 h-6'
            aria-label={`${rows.length} rader`}
          >
            {rows.length}
          </span>
        </div>
        {!graded && <AddRowButton />}
      </div>
      <ul
        aria-label='Sparade rader'
        className='flex w-full flex-col gap-2 list-none m-0 p-0'
      >
        {rows.map((row, index) => (
          <li key={row.id}>
            <RowCard
              row={row}
              index={index + 1}
              isActive={row.id === activeRowId}
            />
          </li>
        ))}
      </ul>
      <div aria-live='polite' aria-atomic='true'>
        {graded && <CorrectRow />}
      </div>
      <div className='w-full flex justify-end'>
        {graded ? <PlayAgainButton /> : <GradeButton />}
      </div>
    </section>
  );
}
