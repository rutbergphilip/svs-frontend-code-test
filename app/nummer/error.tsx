'use client';

import { useEffect } from 'react';
import { Button } from '../components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex flex-col items-center justify-center gap-4 py-16'>
      <h2 className='text-xl font-semibold'>Något gick fel</h2>
      <p className='text-gray-600'>Ett oväntat fel uppstod.</p>
      <Button
        onClick={reset}
        className='bg-blue-700 text-white hover:bg-blue-800'
      >
        Försök igen
      </Button>
    </div>
  );
}
