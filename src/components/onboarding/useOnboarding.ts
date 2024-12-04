import { useState } from 'react';

export const steps = [
  {
    title: 'Plan Confirmation',
    description: 'Review and confirm your selected plan',
  },
  {
    title: 'Account Setup',
    description: 'Set up your account and preferences',
  },
  {
    title: 'Service Initialization',
    description: 'Initialize your credit repair service',
  },
  {
    title: 'Welcome',
    description: 'Get started with your dashboard',
  },
];

export function useOnboarding() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(curr => curr + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(curr => curr - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 0 && step < steps.length) {
      setCurrentStep(step);
    }
  };

  return {
    currentStep,
    steps,
    nextStep,
    prevStep,
    goToStep,
  };
}