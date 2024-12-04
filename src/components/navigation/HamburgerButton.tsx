import React from 'react';
import { motion } from 'framer-motion';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-lg hover:bg-primary-element/50 transition-colors"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <motion.span
          animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
          className="w-full h-0.5 bg-primary-text block origin-left transition-all"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-full h-0.5 bg-primary-text block transition-all"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
          className="w-full h-0.5 bg-primary-text block origin-left transition-all"
        />
      </div>
    </button>
  );
}