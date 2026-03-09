'use client';

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
  const base = 'w-10 h-10 rounded-lg font-medium transition-colors';

  if (disabled) return `${base} bg-gray-50 text-gray-300 cursor-not-allowed`;
  if (selected) return `${base} bg-blue-500 text-white hover:bg-blue-600`;
  return `${base} bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer`;
}

export function NumberCard({
  selected,
  disabled,
  children,
  onClick,
}: NumberCardProps) {
  return (
    <button
      className={getCardStyle({ selected, disabled })}
      onClick={onClick}
      type='button'
      aria-pressed={selected}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
