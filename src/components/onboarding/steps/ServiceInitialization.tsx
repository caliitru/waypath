import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Lock, Upload, CheckCircle } from 'lucide-react';
import { Button } from '../../ui/button/Button';
import { useOnboarding } from '../useOnboarding';

interface InitializationStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'error';
}

export function ServiceInitialization() {
  const { nextStep, prevStep } = useOnboarding();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const initializationSteps: InitializationStep[] = [
    {
      id: 'credit-analysis',
      title: 'Credit Report Analysis',
      description: 'Analyzing your credit reports from all three bureaus',
      status: 'completed',
    },
    {
      id: 'dashboard-setup',
      title: 'Dashboard Setup',
      description: 'Configuring your personalized dashboard and tools',
      status: 'in_progress',
    },
    {
      id: 'document-upload',
      title: 'Document Upload',
      description: 'Preparing secure document storage',
      status: 'pending',
    },
    {
      id: 'alerts-setup',
      title: 'Alerts Configuration',
      description: 'Setting up credit monitoring and alerts',
      status: 'pending',
    },
  ];

  const getStatusIcon = (status: InitializationStep['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in_progress':
        return (
          <div className="w-5 h-5 border-2 border-[#78C5B6] border-t-transparent rounded-full animate-spin" />
        );
      case 'error':
        return <Lock className="w-5 h-5 text-red-500" />;
      default:
        return <div className="w-5 h-5 rounded-full border-2 border-gray-300" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-xl p-8 shadow-sm"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-[#78C5B6] bg-opacity-10">
          <FileText className="w-6 h-6 text-[#78C5B6]" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#003366]">Service Initialization</h2>
          <p className="text-gray-600">Setting up your credit repair service</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Progress Steps */}
        <div className="space-y-6">
          {initializationSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="mt-1">{getStatusIcon(step.status)}</div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentStepIndex + 1) / initializationSteps.length) * 100}%` }}
            className="h-full bg-[#78C5B6] rounded-full"
          />
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Upload className="w-5 h-5 text-blue-500 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800">
                We're setting up your account and analyzing your credit profile. This may take a few minutes.
              </p>
              <p className="text-sm text-blue-600 mt-2">
                You'll be notified once the setup is complete.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-4 border-t">
          <Button
            variant="secondary"
            onClick={prevStep}
            className="flex-1"
          >
            Back
          </Button>
          <Button
            onClick={nextStep}
            className="flex-1"
            disabled={currentStepIndex < initializationSteps.length - 1}
          >
            Continue
          </Button>
        </div>
      </div>
    </motion.div>
  );
}