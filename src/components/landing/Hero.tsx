import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { DashboardPreview } from './preview/DashboardPreview';

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-dark-base">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-hero-gradient opacity-70" />
      <div className="absolute inset-0 bg-noise opacity-[0.2] mix-blend-soft-light" />
      <div className="absolute inset-0 bg-dots opacity-[0.07]" />
      
      {/* Content */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-6xl md:text-7xl font-bold text-dark-text leading-tight tracking-tight"
              >
                Better Credit.<br />
                <span className="text-gradient bg-gradient-to-r from-accent-success via-accent-success/90 to-accent-success/80">
                  Bigger Goals.
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 text-xl text-dark-secondary max-w-2xl"
              >
                Your personalized dashboard makes credit repair simple. Track your progress, 
                see real-time updates, and get actionable recommendations—all in one place.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 lg:justify-start justify-center"
              >
                <button className="button-primary inline-flex items-center justify-center group px-8 py-4">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="button-secondary px-8 py-4">
                  Explore Features
                </button>
              </motion.div>
            </motion.div>

            {/* Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <DashboardPreview />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-success rounded-full opacity-10 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-dark-element rounded-full opacity-10 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}