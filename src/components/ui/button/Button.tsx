import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading,
  icon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-accent-info text-dark-text hover:bg-opacity-90 disabled:bg-opacity-50',
    secondary: 'border border-dark-border text-dark-text hover:bg-dark-element disabled:border-dark-secondary disabled:text-dark-secondary',
    text: 'text-dark-text hover:bg-dark-element/10 disabled:text-dark-secondary',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={cn(
        'relative rounded-lg font-medium transition-all duration-200',
        'active:scale-[0.98] hover:scale-[1.02]',
        variants[variant],
        sizes[size],
        loading && 'text-transparent',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      <span className={cn(
        'flex items-center justify-center gap-2',
        loading && 'invisible'
      )}>
        {icon}
        {children}
      </span>

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-5 h-5 animate-spin text-current" />
        </div>
      )}
    </button>
  );
}