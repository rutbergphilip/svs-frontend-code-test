import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const BASE_STYLES =
  'rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed';

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      type='button'
      className={`${BASE_STYLES} ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
