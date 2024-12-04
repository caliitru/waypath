import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Modal } from './Modal';
import { Input } from '../form/Input';
import { Button } from '../button/Button';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
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
            Welcome to Pathway Credit
          </h2>
          <p className="text-gray-600">
            Start your journey to better credit today. Get personalized tips and updates.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            required
            placeholder="you@example.com"
          />
          <Button type="submit" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
            Get Started
          </Button>
        </form>

        <p className="mt-4 text-sm text-gray-500 text-center">
          By signing up, you agree to our{' '}
          <a href="/terms" className="text-[#003366] hover:underline">Terms</a>
          {' '}and{' '}
          <a href="/privacy" className="text-[#003366] hover:underline">Privacy Policy</a>
        </p>
      </div>
    </Modal>
  );
}