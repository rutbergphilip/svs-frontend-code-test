import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const BASE_STYLES =
  'rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed';

export function Button({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${BASE_STYLES} ${className ?? ''}`}
      type='button'
      {...props}
    >
      {children}
    </button>
  );
}
