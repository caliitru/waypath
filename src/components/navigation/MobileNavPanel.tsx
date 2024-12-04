import React from 'react';
import { motion } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface MobileNavPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'About Us', href: '/about' },
];

const variants = {
  open: { x: 0 },
  closed: { x: '100%' },
};

export function MobileNavPanel({ isOpen, onClose }: MobileNavPanelProps) {
  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className="fixed top-0 right-0 w-[280px] h-full z-50"
    >
      <div className="h-full bg-primary-card border-l border-primary-border backdrop-blur-md">
        <div className="flex justify-between items-center p-4">
          <span className="text-lg font-semibold text-primary-text">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-primary-element/50 transition-colors"
          >
            <X className="w-6 h-6 text-primary-text" />
          </button>
        </div>

        <div className="px-2 py-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center justify-between w-full px-4 py-3 rounded-lg",
                "text-primary-text/80 hover:text-primary-text",
                "hover:bg-primary-element/50 transition-colors"
              )}
            >
              <span>{item.name}</span>
              <ChevronRight className="w-4 h-4 text-primary-text/50" />
            </Link>
          ))}

          <div className="h-px bg-primary-border/50 my-4" />

          <Link
            to="/login"
            onClick={onClose}
            className={cn(
              "flex items-center justify-between w-full px-4 py-3 rounded-lg",
              "text-primary-text/80 hover:text-primary-text",
              "hover:bg-primary-element/50 transition-colors"
            )}
          >
            <span>Login</span>
            <ChevronRight className="w-4 h-4 text-primary-text/50" />
          </Link>

          <button className={cn(
            "w-full mt-4 px-4 py-3 rounded-lg",
            "bg-info text-primary-text",
            "hover:bg-info/90 transition-colors",
            "shadow-lg shadow-info/20"
          )}>
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  );
}