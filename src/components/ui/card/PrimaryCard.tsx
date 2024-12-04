import React from 'react';
import { cn } from '../../../lib/utils';

interface PrimaryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PrimaryCard({ children, className, ...props }: PrimaryCardProps) {
  return (
    <div
      className={cn(
        "bg-card-gradient border border-dark-border rounded-xl",
        "shadow-card hover:shadow-card-hover transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}