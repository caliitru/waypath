import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar } from 'lucide-react';
import { Select } from '../ui/form/Select';
import { Button } from '../ui/button/Button';

const reportTypes = [
  { value: 'progress', label: 'Progress Report' },
  { value: 'analysis', label: 'Credit Analysis' },
  { value: 'dispute', label: 'Dispute Summary' },
  { value: 'custom', label: 'Custom Report' },
];

const dateRanges = [
  { value: '30', label: 'Last 30 Days' },
  { value: '90', label: 'Last 90 Days' },
  { value: '180', label: 'Last 180 Days' },
  { value: '365', label: 'Last Year' },
  { value: 'custom', label: 'Custom Range' },
];

export function ReportGenerator() {
  const [reportType, setReportType] = useState('');
  const [dateRange, setDateRange] = useState('');

  const handleGenerate = () => {
    // Handle report generation
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-sm"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-[#78C5B6] bg-opacity-10">
          <FileText className="w-6 h-6 text-[#78C5B6]" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Generate Report</h2>
          <p className="text-sm text-gray-500">Create custom reports based on your needs</p>
        </div>
      </div>

      <div className="space-y-6">
        <Select
          label="Report Type"
          options={reportTypes}
          value={reportType}
          onChange={setReportType}
          required
        />

        <Select
          label="Date Range"
          options={dateRanges}
          value={dateRange}
          onChange={setDateRange}
          required
          icon={Calendar}
        />

        <div className="flex gap-4">
          <Button
            onClick={handleGenerate}
            className="flex-1"
            icon={<Download className="w-4 h-4" />}
            disabled={!reportType || !dateRange}
          >
            Generate Report
          </Button>
        </div>
      </div>
    </motion.div>
  );
}