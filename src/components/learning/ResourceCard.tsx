import React from 'react';
import { motion } from 'framer-motion';
import { Download, LucideIcon } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  type: string;
  format: string;
  icon: LucideIcon;
  downloadUrl: string;
}

export function ResourceCard({ title, type, format, icon: Icon, downloadUrl }: ResourceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 rounded-lg bg-[#78C5B6] bg-opacity-10">
          <Icon className="w-5 h-5 text-[#78C5B6]" />
        </div>
        <span className="text-xs font-medium text-gray-500">{format}</span>
      </div>

      <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 capitalize mb-4">{type}</p>

      <a
        href={downloadUrl}
        className="inline-flex items-center gap-2 text-sm text-[#78C5B6] hover:text-[#5BA697]"
      >
        <Download className="w-4 h-4" />
        Download
      </a>
    </motion.div>
  );
}