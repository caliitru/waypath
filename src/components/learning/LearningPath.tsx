import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, TrendingUp, Shield, DollarSign } from 'lucide-react';
import { LearningModule } from './LearningModule';

const modules = [
  {
    title: 'Credit Basics',
    description: 'Understanding credit scores, reports, and factors',
    icon: BookOpen,
    progress: 80,
    lessons: 5,
  },
  {
    title: 'Dispute Strategies',
    description: 'Learn effective dispute techniques and best practices',
    icon: FileText,
    progress: 60,
    lessons: 4,
  },
  {
    title: 'Score Improvement',
    description: 'Actionable steps to boost your credit score',
    icon: TrendingUp,
    progress: 40,
    lessons: 6,
  },
  {
    title: 'Identity Protection',
    description: 'Safeguard your credit from fraud and theft',
    icon: Shield,
    progress: 20,
    lessons: 3,
  },
  {
    title: 'Debt Management',
    description: 'Strategies for managing and reducing debt',
    icon: DollarSign,
    progress: 0,
    lessons: 4,
  },
];

export function LearningPath() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#003366] mb-6">Learning Path</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((module, index) => (
          <motion.div
            key={module.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <LearningModule {...module} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}