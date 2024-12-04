import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analytics',
    description: 'Advanced algorithms analyze your credit profile in real-time, providing personalized recommendations.',
    color: 'mint',
  },
  {
    icon: Shield,
    title: 'Dispute Management',
    description: 'Automated dispute tracking and resolution system with real-time status updates.',
    color: 'orange',
  },
  {
    icon: Target,
    title: 'Progress Tracking',
    description: 'Visual dashboards and detailed metrics to monitor your credit improvement journey.',
    color: 'mint',
  },
  {
    icon: Zap,
    title: 'Smart Alerts',
    description: 'Instant notifications about important changes and opportunities to improve your score.',
    color: 'orange',
  },
];

export function PowerfulFeatures() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#151515] to-[#1C1C1C]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,197,182,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,107,53,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:24px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to take control of your credit
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-[#242424] rounded-xl p-8 border border-[#2F2F2F] backdrop-blur-sm transition-all duration-300 hover:translate-y-[-2px]">
                  {/* Icon */}
                  <div className={`p-3 rounded-xl inline-flex mb-6 ${
                    feature.color === 'mint' 
                      ? 'bg-[#78C5B6]/10 text-[#78C5B6]'
                      : 'bg-[#FF6B35]/10 text-[#FF6B35]'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                    feature.color === 'mint'
                      ? 'bg-[#78C5B6]/5'
                      : 'bg-[#FF6B35]/5'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}