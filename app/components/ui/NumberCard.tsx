'use client';

import { Button } from './Button';

type NumberCardProps = {
  onClick: () => void;
  children: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
};

function getCardStyle({
  selected,
  disabled,
}: Omit<NumberCardProps, 'children' | 'onClick'>): string {
  const base =
    'aspect-square w-full rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-center';

  if (selected && disabled)
    return `${base} disabled:bg-blue-300! disabled:text-white cursor-not-allowed`;
  if (disabled) return `${base} bg-gray-50 text-gray-300 cursor-not-allowed`;
  if (selected) return `${base} bg-blue-700 text-white hover:bg-blue-800`;
  return `${base} bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer`;
}

export function NumberCard({
  selected,
  disabled,
  children,
  onClick,
}: NumberCardProps) {
  return (
    <Button
      className={getCardStyle({ selected, disabled })}
      onClick={onClick}
      type='button'
      aria-pressed={selected}
      aria-label={`Nummer ${children}${selected ? ', vald' : ''}`}
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
