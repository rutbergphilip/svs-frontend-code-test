'use client';

import { useGameStore } from '../../stores/gameStore';
import { Button } from '../ui/Button';

const REQUIRED_NUMBERS = 10;

export function GradeButton() {
  const { rows, gradeRows } = useGameStore();
  const canGrade = rows.every((row) => row.numbers.length === REQUIRED_NUMBERS);

  return (
    <Button
      disabled={!canGrade}
      onClick={gradeRows}
      className='bg-green-500 text-white hover:bg-green-600'
    >
      Rätta spel
    </Button>
  );
}
