'use client';

import { useGameStore } from '../store';
import { Button } from '../../components/ui/Button';

const MAX_ROWS = 5;

export function AddRowButton() {
  const { rows, addRow, graded } = useGameStore();
  const disabled = rows.length >= MAX_ROWS || graded;

  return (
    <Button
      disabled={disabled}
      onClick={addRow}
      aria-label={disabled ? `Lägg till rad (max ${MAX_ROWS} rader)` : 'Lägg till rad'}
      className='bg-blue-700 text-white hover:bg-blue-800'
    >
      Lägg till rad
    </Button>
  );
}
