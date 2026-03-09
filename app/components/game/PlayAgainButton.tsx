'use client';

import { useGameStore } from '../../stores/gameStore';
import { Button } from '../ui/Button';

export function PlayAgainButton() {
  const { reset } = useGameStore();

  return (
    <div className='flex flex-col items-end gap-2'>
      <Button
        onClick={reset}
        className='bg-green-700 text-white hover:bg-green-800'
      >
        {'Spela igen'}
      </Button>
    </div>
  );
}
