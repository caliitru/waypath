import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Shield, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Our intelligent system analyzes your credit profile and provides personalized recommendations for improvement.",
  },
  {
    icon: Shield,
    title: "Secure & Transparent",
    description: "Bank-level security protects your data while maintaining complete transparency in our process.",
  },
  {
    icon: Target,
    title: "Goal-Focused Approach",
    description: "Set and track credit score goals with actionable steps and milestone tracking.",
  },
  {
    icon: Zap,
    title: "Fast Dispute Resolution",
    description: "Streamlined dispute process with automated letter generation and bureau communication.",
  },
];

export function BodySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-pearl to-brand-platinum">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-brand-graphite mb-4">
            Transform Your Credit Journey
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Advanced tools and expert guidance to help you achieve your credit goals
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
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
                  <div className="p-3 rounded-xl bg-brand-orange/10">
                    <Icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-graphite mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-brand-gray">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 text-center shadow-sm"
        >
          <h3 className="text-2xl font-bold text-brand-graphite mb-4">
            Ready to Start Your Credit Journey?
          </h3>
          <p className="text-brand-gray mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have improved their credit scores with our platform.
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 transition-colors group">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="mt-6">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-sage" />
              <span className="text-sm text-brand-gray">No credit card required</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}