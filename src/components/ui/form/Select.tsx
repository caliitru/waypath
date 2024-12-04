import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
  searchable?: boolean;
  clearable?: boolean;
}

export function Select({
  label,
  options,
  value,
  onChange,
  error,
  required,
  searchable,
  clearable,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  
  const filteredOptions = searchable
    ? options.filter(option => 
        option.label.toLowerCase().includes(search.toLowerCase())
      )
    : options;

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className="relative">
      <label className={cn(
        "block text-sm font-medium mb-1",
        error ? "text-red-500" : "text-gray-700",
        required && "after:content-['*'] after:ml-0.5 after:text-red-500"
      )}>
        {label}
      </label>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative w-full px-3 py-2 rounded-lg border bg-white cursor-pointer",
          error ? "border-red-500" : "border-gray-300",
          "focus:outline-none focus:border-[#78C5B6]"
        )}
      >
        <div className="flex items-center justify-between">
          <span className={cn(
            "block truncate",
            !selectedOption && "text-gray-500"
          )}>
            {selectedOption?.label || "Select an option"}
          </span>
          <div className="flex items-center">
            {clearable && value && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onChange?.('');
                }}
                className="p-1 hover:bg-gray-100 rounded-full mr-1"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            )}
            <ChevronDown className={cn(
              "w-4 h-4 text-gray-400 transition-transform",
              isOpen && "transform rotate-180"
            )} />
          </div>
        </div>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-1 py-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            {searchable && (
              <div className="px-3 py-2 border-b">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-2 py-1 text-sm border rounded"
                  onClick={(e) => e.stopPropagation()}
                  placeholder="Search..."
                />
              </div>
            )}
            
            <div className="max-h-60 overflow-auto">
              {filteredOptions.map((option) => (
                <div
                  key={option.value}
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange?.(option.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "px-3 py-2 cursor-pointer hover:bg-gray-100",
                    option.value === value && "bg-gray-50 text-[#78C5B6]"
                  )}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}