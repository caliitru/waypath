import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, TrendingUp, BarChart } from 'lucide-react';
import { TimelineStep } from './TimelineStep';

const steps = [
  {
    icon: Search,
    title: 'Analyze',
    description: 'Our AI analyzes your credit report to identify potential errors and opportunities for improvement.',
  },
  {
    icon: FileText,
    title: 'Dispute',
    description: 'We help you file strategic disputes with all three credit bureaus using our automated system.',
  },
  {
    icon: TrendingUp,
    title: 'Optimize',
    description: 'Get personalized recommendations and strategies to improve your credit score effectively.',
  },
  {
    icon: BarChart,
    title: 'Track',
    description: 'Monitor your progress with real-time updates and detailed analytics on your dashboard.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#003366] font-heading">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Your journey to better credit in four simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <TimelineStep
              key={index}
              icon={step.icon}
              number={index + 1}
              title={step.title}
              description={step.description}
              delay={index * 0.2}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}