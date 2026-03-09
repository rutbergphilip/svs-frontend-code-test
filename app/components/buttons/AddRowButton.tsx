'use client';

import { useGameStore } from '../../stores/gameStore';
import { Button } from '../ui/Button';

const MAX_ROWS = 5;

export function AddRowButton() {
  const { rows, addRow } = useGameStore();
  const canAddRow = rows.length < MAX_ROWS;

  return (
    <Button
      disabled={!canAddRow}
      onClick={addRow}
      className='bg-blue-500 text-white hover:bg-blue-600'
    >
      Lägg till rad
    </Button>
  );
}
