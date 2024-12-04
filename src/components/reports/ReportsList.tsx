import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Trash2 } from 'lucide-react';
import { IconButton } from '../ui/button/IconButton';

const reports = [
  {
    id: '1',
    title: 'Monthly Progress Report',
    type: 'progress',
    date: '2024-03-15',
    size: '2.4 MB',
  },
  {
    id: '2',
    title: 'Credit Analysis Report',
    type: 'analysis',
    date: '2024-03-10',
    size: '1.8 MB',
  },
  {
    id: '3',
    title: 'Dispute Summary',
    type: 'dispute',
    date: '2024-03-05',
    size: '1.2 MB',
  },
];

export function ReportsList() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold text-gray-900">Recent Reports</h2>
      </div>

      <div className="divide-y">
        {reports.map((report, index) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 flex items-center gap-4"
          >
            <div className="p-2 rounded-lg bg-[#78C5B6] bg-opacity-10">
              <FileText className="w-6 h-6 text-[#78C5B6]" />
            </div>

            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{report.title}</h3>
              <p className="text-sm text-gray-500">
                Generated on {new Date(report.date).toLocaleDateString()} • {report.size}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <IconButton
                icon={<Eye />}
                variant="ghost"
                onClick={() => {}}
                aria-label="View report"
              />
              <IconButton
                icon={<Download />}
                variant="ghost"
                onClick={() => {}}
                aria-label="Download report"
              />
              <IconButton
                icon={<Trash2 />}
                variant="ghost"
                onClick={() => {}}
                aria-label="Delete report"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}