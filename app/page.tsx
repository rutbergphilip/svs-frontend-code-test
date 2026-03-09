import { GameBoard } from './components/GameBoard';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50'>
      <main className='max-w-xl rounded-2xl bg-white p-10 shadow-lg text-center flex flex-col items-start gap-4'>
        <GameBoard />
      </main>
    </div>
  );
}
