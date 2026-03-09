'use client';

import { Row } from '../types/game';
import { useGameStore } from '../stores/gameStore';

type RowCardProps = {
  row: Row;
  isActive: boolean;
};

export function RowCard({ row, isActive }: RowCardProps) {
  const { setActiveRow, removeRow, rows, graded, correctNumbers } =
    useGameStore();

  const correctSet = new Set(correctNumbers ?? []);

  return (
    <button
      type='button'
      onClick={() => !graded && setActiveRow(row.id)}
      className={`flex w-full items-center gap-2 rounded-lg px-4 py-3 transition-colors ${
        graded
          ? 'bg-gray-100 cursor-default'
          : isActive
            ? 'bg-blue-100 ring-2 ring-blue-500 cursor-pointer'
            : 'bg-gray-100 hover:bg-gray-200 cursor-pointer'
      }`}
    >
      <span className='flex flex-1 gap-2 flex-wrap text-sm font-medium'>
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
      </span>
      {graded && (
        <span className='text-sm font-medium text-green-600'>
          {row.numbers.filter((n) => correctSet.has(n.num)).length} rätt
        </span>
      )}
      {!graded && rows.length > 1 && (
        <span
          role='button'
          onClick={(e) => {
            e.stopPropagation();
            removeRow(row.id);
          }}
          className='text-sm text-red-500 hover:text-red-600'
        >
          Ta bort
        </span>
      )}
    </button>
  );
}
