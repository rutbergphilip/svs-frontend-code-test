'use client';

import { useState } from 'react';
import { useGameStore } from '../store';
import { Button } from '../../components/ui/Button';
import { MAX_NUMBERS } from '../constants';

export function GradeButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { rows, gradeRows, graded } = useGameStore();
  const canGrade = rows.some((row) => row.numbers.length === MAX_NUMBERS);

  const grade = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await gradeRows();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Något gick fel');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-end gap-2'>
      <Button
        disabled={!canGrade || graded || isLoading}
        onClick={grade}
        aria-busy={isLoading}
        className='bg-green-700 text-white hover:bg-green-800'
      >
        {isLoading ? 'Rättar...' : 'Rätta mina rader'}
      </Button>
      {error && (
        <p role='alert' className='text-sm text-red-500'>
          {error}
        </p>
      )}
    </div>
  );
}
