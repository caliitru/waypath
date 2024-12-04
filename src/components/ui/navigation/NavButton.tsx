import React from 'react';
import { cn } from '../../../lib/utils';

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function NavButton({ children, active, className, ...props }: NavButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
        "hover:bg-dark-element/80 focus:outline-none focus:ring-2 focus:ring-accent-success/20",
        active ? "bg-accent-success text-white" : "bg-dark-element/50 text-dark-secondary hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}