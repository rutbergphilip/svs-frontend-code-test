'use client';

import { useGameStore, getActiveRow } from '../store';
import { Button } from '../../components/ui/Button';
import { MAX_NUMBERS } from '../constants';

export function RandomizeButton() {
  const { randomizeRemaining, graded } = useGameStore();
  const activeRow = useGameStore(getActiveRow);
  const manualCount = activeRow?.numbers.filter((n) => n.isManual).length ?? 0;
  const disabled = manualCount >= MAX_NUMBERS || graded;

  return (
    <Button
      disabled={disabled}
      onClick={randomizeRemaining}
      aria-label={disabled ? 'Slumpa nummer (alla nummer valda manuellt)' : 'Slumpa nummer'}
      className='bg-blue-700 text-white hover:bg-blue-800'
    >
      Slumpa nummer
    </Button>
  );
}
