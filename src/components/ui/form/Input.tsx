import React, { useState } from 'react';
import { cn } from '../../../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export function Input({ label, error, helperText, className, required, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <label
        className={cn(
          "absolute left-3 transition-all duration-200",
          (isFocused || hasValue) ? "-top-2 text-xs bg-primary px-1" : "top-3 text-primary-muted",
          error ? "text-error" : "text-white",
          required && "after:content-['*'] after:ml-0.5 after:text-error"
        )}
      >
        {label}
      </label>
      
      <input
        {...props}
        required={required}
        className={cn(
          "w-full px-3 py-3 rounded-lg border bg-primary-element transition-colors focus:outline-none",
          error
            ? "border-error focus:border-error"
            : "border-primary-border focus:border-info",
          "text-white placeholder-primary-muted",
          className
        )}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value.length > 0);
          props.onBlur?.(e);
        }}
      />

      {(error || helperText) && (
        <p className={cn(
          "mt-1 text-sm",
          error ? "text-error" : "text-primary-muted"
        )}>
          {error || helperText}
        </p>
      )}
    </div>
  );
}