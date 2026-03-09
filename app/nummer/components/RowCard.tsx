'use client';

import { Row } from '../types';
import { useGameStore } from '../store';
import { MAX_NUMBERS } from '../constants';

type RowCardProps = {
  row: Row;
  index: number;
  isActive: boolean;
};

export function RowCard({ row, index, isActive }: RowCardProps) {
  const { setActiveRow, removeRow, rows, graded, correctNumbers } =
    useGameStore();

  const correctSet = new Set(correctNumbers ?? []);

  return (
    <div
      aria-current={isActive && !graded ? 'true' : undefined}
      className={`flex w-full items-center gap-2 rounded-lg px-4 py-3 transition-colors ${
        graded
          ? 'bg-gray-100'
          : isActive
            ? 'bg-blue-100 ring-2 ring-blue-500'
            : 'bg-gray-100 hover:bg-gray-200'
      }`}
    >
      <button
        type='button'
        onClick={() => !graded && setActiveRow(row.id)}
        disabled={graded}
        className='flex flex-1 gap-2 flex-wrap text-sm font-medium cursor-pointer disabled:cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded'
        aria-label={`Redigera rad ${index}${isActive ? ' (aktiv)' : ''}`}
      >
        {row.numbers.length > 0 ? (
          row.numbers.map((n) => (
            <span
              key={n.num}
              className={
                graded && correctSet.has(n.num)
                  ? 'bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center'
                  : 'text-gray-800'
              }
            >
              {n.num}
            </span>
          ))
        ) : (
          <span className='text-gray-400'>Inga nummer valda</span>
        )}
      </button>
      {graded && row.numbers.length === MAX_NUMBERS && (
        <span
          className='text-sm font-medium text-green-800'
          aria-label={`Rad ${index}: ${row.numbers.filter((n) => correctSet.has(n.num)).length} rätt av ${MAX_NUMBERS}`}
        >
          {row.numbers.filter((n) => correctSet.has(n.num)).length} rätt
        </span>
      )}
      {!graded && rows.length > 1 && (
        <button
          type='button'
          onClick={() => removeRow(row.id)}
          aria-label={`Ta bort rad ${index}`}
          className='text-sm text-red-500 hover:text-red-600 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded'
        >
          Ta bort
        </button>
      )}
    </div>
  );
}
