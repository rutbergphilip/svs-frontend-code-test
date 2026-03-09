import { setTimeout } from 'node:timers/promises';
import { shuffle } from '@/app/nummer/utils';
import { NUMBERS, MAX_NUMBERS } from '@/app/nummer/constants';
import { NextResponse } from 'next/server';

export async function GET() {
  await setTimeout(500);

  const numbers = shuffle([...NUMBERS]).slice(0, MAX_NUMBERS);

  return NextResponse.json({ numbers });
}
