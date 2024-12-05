// src/components/shared/types/Dispute.ts

export interface Dispute {
  id: string;
  creditor: string;
  type: string;
  status: 'pending' | 'in_progress' | 'resolved';
  date: string;
}
