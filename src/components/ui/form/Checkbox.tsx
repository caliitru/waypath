import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
}

export function Checkbox({ label, error, className, ...props }: CheckboxProps) {
  return (
    <label className="flex items-start gap-2 cursor-pointer">
      <div className="relative flex items-center">
        <input
          type="checkbox"
          className="sr-only"
          {...props}
        />
        <div
          className={cn(
            "w-5 h-5 border rounded transition-colors",
            props.checked
              ? "bg-[#78C5B6] border-[#78C5B6]"
              : "border-gray-300",
            error && "border-red-500",
            "peer"
          )}
        >
          <Check
            className={cn(
              "w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity",
              props.checked ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
      </div>
      <div>
        <span className={cn(
          "text-sm",
          error ? "text-red-500" : "text-gray-700"
        )}>
          {label}
        </span>
        {error && (
          <p className="text-sm text-red-500 mt-1">{error}</p>
        )}
      </div>
    </label>
  );
}