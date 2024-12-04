import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Video, Download, Book } from 'lucide-react';
import { ResourceCard } from './ResourceCard';

const resources = [
  {
    title: 'Credit Score Guide',
    type: 'guide',
    format: 'PDF',
    icon: FileText,
    downloadUrl: '#',
  },
  {
    title: 'Dispute Letter Templates',
    type: 'template',
    format: 'DOCX',
    icon: FileText,
    downloadUrl: '#',
  },
  {
    title: 'Credit Repair Basics',
    type: 'video',
    format: 'MP4',
    icon: Video,
    downloadUrl: '#',
  },
  {
    title: 'Financial Terms Glossary',
    type: 'glossary',
    format: 'PDF',
    icon: Book,
    downloadUrl: '#',
  },
];

export function ResourceLibrary() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-[#003366]">Resource Library</h2>
        <button className="text-[#78C5B6] hover:text-[#5BA697] flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download All
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ResourceCard {...resource} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}