import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOnboarding } from './useOnboarding';
import { PlanConfirmation } from './steps/PlanConfirmation';
import { AccountSetup } from './steps/AccountSetup';
import { ServiceInitialization } from './steps/ServiceInitialization';
import { WelcomeExperience } from './steps/WelcomeExperience';
import { StepIndicator } from './StepIndicator';

export function OnboardingSequence() {
  const { currentStep, steps, goToStep } = useOnboarding();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <StepIndicator
          steps={steps}
          currentStep={currentStep}
          onStepClick={goToStep}
        />

        <div className="mt-8">
          <AnimatePresence mode="wait">
            {currentStep === 0 && <PlanConfirmation />}
            {currentStep === 1 && <AccountSetup />}
            {currentStep === 2 && <ServiceInitialization />}
            {currentStep === 3 && <WelcomeExperience />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}