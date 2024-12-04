import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart, FileText, Bell, Zap } from 'lucide-react';
import { Button } from '../../ui/button/Button';
import { useOnboarding } from '../useOnboarding';

const features = [
  {
    icon: BarChart,
    title: 'Dashboard Overview',
    description: 'Track your credit score progress and dispute status',
  },
  {
    icon: FileText,
    title: 'Dispute Center',
    description: 'Manage and monitor your active disputes',
  },
  {
    icon: Bell,
    title: 'Alert Settings',
    description: 'Configure your notification preferences',
  },
  {
    icon: Zap,
    title: 'Quick Actions',
    description: 'Access commonly used features and tools',
  },
];

export function WelcomeExperience() {
  const { nextStep } = useOnboarding();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-xl p-8 shadow-sm"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="w-16 h-16 rounded-full bg-[#78C5B6] bg-opacity-10 flex items-center justify-center mx-auto mb-4"
        >
          <BarChart className="w-8 h-8 text-[#78C5B6]" />
        </motion.div>
        <h2 className="text-2xl font-bold text-[#003366] mb-2">
          Welcome to Pathway Credit!
        </h2>
        <p className="text-gray-600">
          Your account is ready. Let's explore the key features of your dashboard.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:border-[#78C5B6] transition-colors"
            >
              <div className="p-2 rounded-lg bg-[#78C5B6] bg-opacity-10">
                <Icon className="w-5 h-5 text-[#78C5B6]" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-[#003366] bg-opacity-5 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-[#003366] mb-2">Next Steps:</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <ArrowRight className="w-4 h-4 text-[#78C5B6]" />
            Complete your credit profile
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <ArrowRight className="w-4 h-4 text-[#78C5B6]" />
            Review your initial credit analysis
          </li>
          <li className="flex items-center gap-2 text-sm text-gray-600">
            <ArrowRight className="w-4 h-4 text-[#78C5B6]" />
            Set up your first dispute
          </li>
        </ul>
      </div>

      <div className="flex justify-center">
        <Button
          onClick={nextStep}
          size="lg"
          className="min-w-[200px]"
          icon={<ArrowRight className="w-4 h-4" />}
        >
          Go to Dashboard
        </Button>
      </div>
    </motion.div>
  );
}