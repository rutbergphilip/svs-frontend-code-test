'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='flex flex-col items-center justify-center gap-4 py-16'>
      <h2 className='text-xl font-semibold'>Något gick fel</h2>
      <p className='text-gray-600'>Ett oväntat fel uppstod.</p>
      <button
        onClick={reset}
        className='rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800'
      >
        Försök igen
      </button>
    </div>
  );
}
