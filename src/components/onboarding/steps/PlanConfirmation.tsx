import React from 'react';
import { motion } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';
import { Button } from '../../ui/button/Button';
import { useOnboarding } from '../useOnboarding';

export function PlanConfirmation() {
  const { nextStep } = useOnboarding();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-xl p-8 shadow-sm"
    >
      <h2 className="text-2xl font-bold text-[#003366] mb-6">Confirm Your Plan</h2>

      <div className="space-y-6">
        {/* Selected Plan */}
        <div className="bg-[#78C5B6] bg-opacity-10 rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[#003366]">DIY Plan</h3>
              <p className="text-sm text-gray-600 mt-1">
                Perfect for self-starters who want to learn and take control
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">First Month</p>
              <p className="text-2xl font-bold text-[#003366]">$149</p>
              <p className="text-sm text-gray-500">Then $19/month</p>
            </div>
          </div>
        </div>

        {/* Selected Bundles */}
        <div>
          <h4 className="text-lg font-semibold text-[#003366] mb-4">Selected Add-ons</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#78C5B6]" />
                <div>
                  <p className="font-medium text-gray-900">Credit Pro Toolkit</p>
                  <p className="text-sm text-gray-500">Advanced tools and features</p>
                </div>
              </div>
              <p className="font-medium text-gray-900">$30/month</p>
            </div>
          </div>
        </div>

        {/* Total Cost */}
        <div className="border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-900">Total Monthly Cost</span>
            <span className="text-2xl font-bold text-[#003366]">$49/month</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <AlertCircle className="w-4 h-4" />
            <p>First month includes one-time setup fee of $149</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <Button variant="secondary" className="flex-1">
            Modify Plan
          </Button>
          <Button onClick={nextStep} className="flex-1">
            Confirm & Continue
          </Button>
        </div>
      </div>
    </motion.div>
  );
}