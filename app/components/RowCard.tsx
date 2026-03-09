'use client';

import { Row } from '../types/game';
import { useGameStore } from '../stores/gameStore';

type RowCardProps = {
  row: Row;
  isActive: boolean;
};

export function RowCard({ row, isActive }: RowCardProps) {
  const { setActiveRow, removeRow, rows } = useGameStore();

  return (
    <button
      type='button'
      onClick={() => setActiveRow(row.id)}
      className={`flex w-full items-center gap-2 rounded-lg px-4 py-3 cursor-pointer ${
        isActive ? 'bg-blue-100 ring-2 ring-blue-500' : 'bg-gray-100 hover:bg-gray-200'
      } transition-colors`}
    >
      <span className='flex flex-1 gap-2 flex-wrap text-sm font-medium text-gray-800'>
        {row.numbers.length > 0
          ? row.numbers.map((n) => <span key={n.num}>{n.num}</span>)
          : <span className='text-gray-400'>Inga nummer valda</span>
        }
      </span>
      {rows.length > 1 && (
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
