import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../landing/Navbar';
import { Footer } from '../landing/footer/Footer';

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, subtitle, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20">
        <div className="bg-[#003366] text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold mb-4">{title}</h1>
              <p className="text-xl text-gray-200">{subtitle}</p>
              <p className="mt-4 text-sm text-gray-300">Last Updated: {lastUpdated}</p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm p-8 prose prose-lg max-w-none"
          >
            {children}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}