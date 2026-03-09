'use client';

import { useGameStore } from '../../stores/gameStore';
import { Button } from '../ui/Button';

export function PlayAgainButton() {
  const { reset } = useGameStore();

  return (
    <div className='flex flex-col items-end gap-2'>
      <Button
        onClick={reset}
        className='bg-green-500 text-white hover:bg-green-600'
      >
        {'Spela igen'}
      </Button>
    </div>
  );
}
