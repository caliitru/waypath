import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Modal } from './Modal';
import { Button } from '../button/Button';

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  features: Feature[];
}

export function FeatureModal({ isOpen, onClose, features }: FeatureModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < features.length - 1) {
      setCurrentStep(curr => curr + 1);
    } else {
      onClose();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(curr => curr - 1);
    }
  };

  const feature = features[currentStep];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8">
        <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-[#003366] mb-2">
            {feature.title}
          </h2>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>

        <div className="flex items-center justify-between">
          <Button
            variant="secondary"
            onClick={prevStep}
            disabled={currentStep === 0}
            icon={<ChevronLeft className="w-4 h-4" />}
          >
            Previous
          </Button>

          <div className="flex gap-1">
            {features.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentStep ? 'bg-[#78C5B6]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextStep}
            icon={<ChevronRight className="w-4 h-4" />}
          >
            {currentStep === features.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </Modal>
  );
}