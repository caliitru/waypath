import React from 'react';
import { motion } from 'framer-motion';
import { Modal } from './Modal';
import { Input } from '../form/Input';
import { Button } from '../button/Button';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ExitIntentModal({ isOpen, onClose }: ExitIntentModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl font-bold text-[#003366] mb-2">
            Wait! Don't Miss Out
          </h2>
          <p className="text-gray-600">
            Get 20% off your first month when you sign up today.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            required
            placeholder="you@example.com"
          />
          <Button type="submit" className="w-full">
            Claim Your Discount
          </Button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 w-full text-sm text-gray-500 hover:text-gray-700"
        >
          No thanks, I'll pay full price
        </button>
      </div>
    </Modal>
  );
}