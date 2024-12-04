import React from 'react';
import { DisputeType } from '../../types/disputes';
import { Clock, Ban, FileX, UserX, AlertCircle, ShieldAlert } from 'lucide-react';

interface DisputeIconProps {
  type: DisputeType;
  className?: string;
}

export function DisputeIcon({ type, className }: DisputeIconProps) {
  const icons = {
    late_payment: Clock,
    collection: Ban,
    charge_off: FileX,
    account_ownership: UserX,
    incorrect_balance: AlertCircle,
    fraud: ShieldAlert,
  };

  const Icon = icons[type];
  return <Icon className={className} />;
}