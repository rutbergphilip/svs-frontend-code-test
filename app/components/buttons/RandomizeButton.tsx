'use client';

import { useGameStore, getActiveRow } from '../../stores/gameStore';
import { Button } from '../ui/Button';

const MAX_NUMBERS = 10;

export function RandomizeButton() {
  const { randomizeRemaining } = useGameStore();
  const activeRow = useGameStore(getActiveRow);
  const manualCount = activeRow?.numbers.filter((n) => n.isManual).length ?? 0;
  const disabled = manualCount >= MAX_NUMBERS;

  return (
    <Button
      disabled={disabled}
      onClick={randomizeRemaining}
      className='bg-blue-500 text-white hover:bg-blue-600'
    >
      Slumpa nummer
    </Button>
  );
}
