export type DisputeStatus = 'pending' | 'in_review' | 'resolved';
export type DisputeType = 'late_payment' | 'collection' | 'charge_off' | 'account_ownership' | 'incorrect_balance' | 'fraud';
export type DisputeOutcome = 'successful' | 'unsuccessful' | null;

export interface Dispute {
  id: string;
  creditor: string;
  amount: number;
  status: DisputeStatus;
  type: DisputeType;
  dateSubmitted: string;
  dateResolved?: string;
  outcome?: DisputeOutcome;
  bureau: 'Experian' | 'TransUnion' | 'Equifax';
  currentStep: number;
  totalSteps: number;
}