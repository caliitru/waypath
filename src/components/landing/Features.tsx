import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, UserCog, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Credit Analysis',
    description: 'Our advanced AI technology analyzes your credit profile in real-time, identifying opportunities and providing actionable recommendations.',
    stats: '98% accuracy rate',
  },
  {
    icon: Shield,
    title: 'Transparent Progress Tracking',
    description: 'Monitor every step of your credit repair journey with detailed progress reports and real-time updates.',
    stats: '100% transparency',
  },
  {
    icon: UserCog,
    title: 'Personalized Dispute Management',
    description: 'Customized dispute strategies tailored to your unique credit situation, maximizing your chances of success.',
    stats: '87% success rate',
  },
  {
    icon: Zap,
    title: 'Educational Resources',
    description: 'Access our comprehensive library of credit education materials to make informed financial decisions.',
    stats: '24/7 access',
  },
];

export function Features() {
  return (
    <section className="relative py-24">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F8F9] to-[#E5E7E9]" />
      
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-dots opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#2F3337] text-4xl font-bold mb-4">
            Why Choose Pathway Credit?
          </h2>
          <p className="text-[#4A4F54] text-xl">
            Experience the power of intelligent credit repair with our comprehensive solution
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
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-xl bg-[#FF6B35]/10">
                    <Icon className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="text-[#2F3337] text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#4A4F54] mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#7A9E7E]" />
                      <span className="text-sm font-medium text-[#2F3337]">
                        {feature.stats}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center items-center gap-12"
        >
          {['FCRA Compliant', 'SSL Secured', 'SOC 2 Certified'].map((trust, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
              <span className="text-sm font-medium text-[#2F3337]">
                {trust}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}