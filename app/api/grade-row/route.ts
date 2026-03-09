import { setTimeout } from 'node:timers/promises';
import { shuffle } from '@/app/utils/game';
import { NextResponse } from 'next/server';

export async function GET() {
  await setTimeout(500);

  const numbers = shuffle(Array.from({ length: 50 }, (_, i) => i + 1)).slice(
    0,
    10,
  );

  return NextResponse.json({ numbers });
}
