import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  HeartPulse,
  Zap,
  Calculator,
  Bell,
  GraduationCap
} from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Interactive Dashboard',
    description: 'Track your credit journey with our intuitive dashboard. Monitor scores, disputes, and improvements in real-time.',
  },
  {
    icon: HeartPulse,
    title: 'Credit Health Analyzer',
    description: 'AI-powered analysis of your credit health with personalized recommendations for improvement.',
  },
  {
    icon: Zap,
    title: 'Dispute Automation',
    description: 'Streamline the dispute process with our automated system. Generate and track disputes effortlessly.',
  },
  {
    icon: Calculator,
    title: 'Credit Simulator',
    description: 'Simulate different scenarios to see how your actions could impact your credit score before making decisions.',
  },
  {
    icon: Bell,
    title: 'Proactive Alerts',
    description: 'Get instant notifications about changes to your credit report, new accounts, or potential fraud.',
  },
  {
    icon: GraduationCap,
    title: 'Education Center',
    description: 'Access our comprehensive library of resources to learn about credit building and financial wellness.',
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary font-heading">
            Powerful Features
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to take control of your credit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}