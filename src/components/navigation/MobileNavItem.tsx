import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface MobileNavItemProps {
  label: string;
  href: string;
  onClick: () => void;
  delay: number;
}

export function MobileNavItem({ label, href, onClick, delay }: MobileNavItemProps) {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      onClick();
      if (location.pathname !== '/') {
        window.location.href = href;
        return;
      }
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <Link
        to={href}
        onClick={handleClick}
        className="flex items-center justify-between px-6 py-3 hover:bg-gray-50"
      >
        <span className="text-gray-900">{label}</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
      </Link>
    </motion.div>
  );
}