'use client';

import { useGameStore } from '../../stores/gameStore';
import { Button } from '../ui/Button';

const MAX_ROWS = 5;

export function AddRowButton() {
  const { rows, addRow, graded } = useGameStore();
  const disabled = rows.length >= MAX_ROWS || graded;

  return (
    <Button
      disabled={disabled}
      onClick={addRow}
      className='bg-blue-500 text-white hover:bg-blue-600'
    >
      Lägg till rad
    </Button>
  );
}
