import { GameBoard } from './components/game/GameBoard';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50'>
      <main className='w-full max-w-2xl rounded-2xl bg-white p-4 sm:p-10 shadow-lg text-center flex flex-col items-start gap-4'>
        <h1 className='text-2xl font-semibold'>Nummerspel</h1>
        <GameBoard />
      </main>
    </div>
  );
}
