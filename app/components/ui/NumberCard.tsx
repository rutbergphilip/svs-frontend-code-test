'use client';

import { memo } from 'react';
import { useGameStore } from '../../stores/gameStore';
import { Button } from './Button';

type NumberCardProps = {
  num: number;
  selected: boolean;
  disabled: boolean;
};

function getCardStyle({
  selected,
  disabled,
}: Pick<NumberCardProps, 'selected' | 'disabled'>): string {
  const base =
    'aspect-square w-full rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-center';

  if (selected && disabled)
    return `${base} disabled:bg-blue-300! disabled:text-white cursor-not-allowed`;
  if (disabled) return `${base} bg-gray-50 text-gray-300 cursor-not-allowed`;
  if (selected) return `${base} bg-blue-700 text-white hover:bg-blue-800`;
  return `${base} bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer`;
}

export const NumberCard = memo(function NumberCard({
  num,
  selected,
  disabled,
}: NumberCardProps) {
  const toggleNumber = useGameStore((s) => s.toggleNumber);

  return (
    <Button
      className={getCardStyle({ selected, disabled })}
      onClick={() => toggleNumber(num)}
      type='button'
      aria-pressed={selected}
      aria-label={`Nummer ${num}${selected ? ', vald' : ''}`}
      disabled={disabled}
    >
      {num}
    </Button>
  );
});
