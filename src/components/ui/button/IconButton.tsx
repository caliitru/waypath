import React from 'react';
import { cn } from '../../../lib/utils';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function IconButton({
  icon,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: IconButtonProps) {
  const variants = {
    primary: 'bg-[#78C5B6] text-white hover:bg-[#5BA697]',
    secondary: 'border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white',
    ghost: 'text-gray-600 hover:bg-gray-100',
  };

  const sizes = {
    sm: 'p-1',
    md: 'p-2',
    lg: 'p-3',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <button
      className={cn(
        'rounded-full transition-all duration-200',
        'active:scale-[0.98] hover:scale-[1.02]',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <div className={iconSizes[size]}>{icon}</div>
    </button>
  );
}