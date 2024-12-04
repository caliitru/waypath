import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Upload, AlertCircle } from 'lucide-react';
import { Input } from '../ui/form/Input';
import { Select } from '../ui/form/Select';
import { Button } from '../ui/button/Button';

const disputeTypes = [
  { value: 'late_payment', label: 'Late Payment' },
  { value: 'collection', label: 'Collection' },
  { value: 'charge_off', label: 'Charge Off' },
  { value: 'account_ownership', label: 'Account Ownership' },
  { value: 'incorrect_balance', label: 'Incorrect Balance' },
  { value: 'fraud', label: 'Fraud' },
];

const creditBureaus = [
  { value: 'experian', label: 'Experian' },
  { value: 'transunion', label: 'TransUnion' },
  { value: 'equifax', label: 'Equifax' },
];

export function DisputeForm() {
  const [formData, setFormData] = useState({
    creditor: '',
    accountNumber: '',
    amount: '',
    disputeType: '',
    bureau: '',
    reason: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    const value = typeof e === 'string' ? e : e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
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
          <h2 className="text-xl font-semibold text-gray-900">File a New Dispute</h2>
          <p className="text-sm text-gray-500">
            Provide details about the item you wish to dispute
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Creditor Name"
          value={formData.creditor}
          onChange={handleChange('creditor')}
          required
        />

        <Input
          label="Account Number"
          value={formData.accountNumber}
          onChange={handleChange('accountNumber')}
          required
        />

        <Input
          label="Amount"
          type="number"
          value={formData.amount}
          onChange={handleChange('amount')}
          required
          helperText="Enter the disputed amount in dollars"
        />

        <Select
          label="Dispute Type"
          options={disputeTypes}
          value={formData.disputeType}
          onChange={handleChange('disputeType')}
          required
        />

        <Select
          label="Credit Bureau"
          options={creditBureaus}
          value={formData.bureau}
          onChange={handleChange('bureau')}
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Reason for Dispute
          </label>
          <textarea
            value={formData.reason}
            onChange={(e) => handleChange('reason')(e)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#78C5B6]"
            rows={4}
            required
          />
        </div>

        <div className="border border-dashed border-gray-300 rounded-lg p-6">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                Drag and drop evidence documents here, or{' '}
                <button type="button" className="text-[#78C5B6] hover:underline">
                  browse files
                </button>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Supported formats: PDF, JPG, PNG (max 10MB)
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 p-4 bg-blue-50 rounded-lg">
          <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
          <p className="text-sm text-blue-700">
            Make sure all information is accurate before submitting. False disputes may have legal consequences.
          </p>
        </div>

        <div className="flex gap-4">
          <Button type="button" variant="secondary" className="flex-1">
            Save as Draft
          </Button>
          <Button type="submit" className="flex-1">
            Submit Dispute
          </Button>
        </div>
      </form>
    </motion.div>
  );
}