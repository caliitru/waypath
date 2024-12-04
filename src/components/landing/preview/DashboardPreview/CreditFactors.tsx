import React from 'react';

interface CreditFactorsProps {
  type: 'payment' | 'usage';
}

export function CreditFactors({ type }: CreditFactorsProps) {
  const config = {
    payment: {
      title: 'Payment History',
      value: '98% on-time',
      color: '#2ECC71',
      bgColor: 'bg-[#F6FEF9]',
      dotColor: 'bg-[#2ECC71]',
      textColor: 'text-[#2ECC71]',
    },
    usage: {
      title: 'Credit Usage',
      value: '28% utilization',
      color: '#FF5733',
      bgColor: 'bg-[#FFF8F6]',
      dotColor: 'bg-[#FF5733]',
      textColor: 'text-[#FF5733]',
    },
  };

  const { title, value, bgColor, dotColor, textColor } = config[type];

  return (
    <div className={`${bgColor} rounded-xl p-4`}>
      <div className={`flex items-center gap-2 ${textColor}`}>
        <div className={`w-2 h-2 rounded-full ${dotColor}`} />
        <span className="font-medium">{title}</span>
      </div>
      <div className="text-gray-900 mt-2 font-medium text-lg">
        {value}
      </div>
    </div>
  );
}