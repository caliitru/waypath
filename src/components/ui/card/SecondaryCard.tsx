import React from 'react';
import { cn } from '../../../lib/utils';

interface SecondaryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SecondaryCard({ children, className, ...props }: SecondaryCardProps) {
  return (
    <div
      className={cn(
        "bg-dark-card border border-dark-border rounded-lg",
        "shadow-sm hover:shadow transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}