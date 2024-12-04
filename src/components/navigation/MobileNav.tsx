import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileNavPanel } from './MobileNavPanel';
import { HamburgerButton } from './HamburgerButton';
import { useMobileNav } from './useMobileNav';

export function MobileNav() {
  const { isOpen, toggleMenu, closeMenu } = useMobileNav();

  return (
    <>
      <div className="md:hidden">
        <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={closeMenu}
            />
            <MobileNavPanel isOpen={isOpen} onClose={closeMenu} />
          </>
        )}
      </AnimatePresence>
    </>
  );
}