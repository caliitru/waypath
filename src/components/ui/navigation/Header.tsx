import React from 'react';
import { cn } from '../../../lib/utils';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function Header({ children, className }: HeaderProps) {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16",
        "bg-dark-base/80 backdrop-blur-[10px]",
        "border-b border-dark-border/80",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {children}
        </div>
      </div>
    </header>
  );
}