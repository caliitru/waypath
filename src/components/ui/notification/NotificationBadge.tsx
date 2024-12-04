import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';

interface NotificationBadgeProps {
  count: number;
  className?: string;
}

export function NotificationBadge({ count, className }: NotificationBadgeProps) {
  if (count === 0) return null;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={cn(
        'absolute -top-1 -right-1 min-w-[1.25rem] h-5 flex items-center justify-center',
        'rounded-full bg-red-500 text-white text-xs font-medium px-1',
        className
      )}
    >
      {count > 99 ? '99+' : count}
    </motion.div>
  );
}