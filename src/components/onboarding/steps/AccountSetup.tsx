import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Shield } from 'lucide-react';
import { Input } from '../../ui/form/Input';
import { Select } from '../../ui/form/Select';
import { Checkbox } from '../../ui/form/Checkbox';
import { Button } from '../../ui/button/Button';
import { useOnboarding } from '../useOnboarding';

const contactPreferences = [
  { value: 'email', label: 'Email' },
  { value: 'sms', label: 'SMS' },
  { value: 'both', label: 'Both Email & SMS' },
];

export function AccountSetup() {
  const { nextStep, prevStep } = useOnboarding();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    contactPreference: '',
    agreeToTerms: false,
    allowNotifications: false,
  });

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    const value = typeof e === 'string' ? e : e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-xl p-8 shadow-sm"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-[#78C5B6] bg-opacity-10">
          <User className="w-6 h-6 text-[#78C5B6]" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#003366]">Account Setup</h2>
          <p className="text-gray-600">Tell us a bit about yourself</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            label="First Name"
            value={formData.firstName}
            onChange={handleChange('firstName')}
            required
            icon={User}
          />
          <Input
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange('lastName')}
            required
            icon={User}
          />
        </div>

        <Input
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          required
          icon={Mail}
          helperText="We'll send important updates here"
        />

        <Input
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={handleChange('phone')}
          required
          icon={Phone}
          helperText="For account security and notifications"
        />

        <Select
          label="Contact Preference"
          options={contactPreferences}
          value={formData.contactPreference}
          onChange={handleChange('contactPreference')}
          required
        />

        <div className="space-y-4 pt-4 border-t">
          <Checkbox
            label="I agree to the Terms of Service and Privacy Policy"
            checked={formData.agreeToTerms}
            onChange={(e) => handleChange('agreeToTerms')(e)}
            required
          />
          <Checkbox
            label="I want to receive important updates and notifications"
            checked={formData.allowNotifications}
            onChange={(e) => handleChange('allowNotifications')(e)}
          />
        </div>

        <div className="pt-6 border-t">
          <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
            <Shield className="w-4 h-4 text-[#78C5B6]" />
            <span>Your information is secure and will never be shared</span>
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              variant="secondary"
              onClick={prevStep}
              className="flex-1"
            >
              Back
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={!formData.agreeToTerms}
            >
              Continue
            </Button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}