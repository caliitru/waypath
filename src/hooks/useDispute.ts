import { useState } from 'react';
import { DisputeWorkflowService } from '../services/dispute/disputeWorkflow';
import { DisputeStatusService } from '../services/dispute/disputeStatus';
import { DisputeType, DisputeStatus } from '../types/disputes';

interface DisputeFormData {
  creditor: string;
  accountNumber: string;
  amount: string;
  type: DisputeType;
  bureau: 'experian' | 'transunion' | 'equifax';
  reason: string;
  evidence?: File[];
}

export function useDispute() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const workflowService = new DisputeWorkflowService();
  const statusService = new DisputeStatusService();

  const submitDispute = async (formData: DisputeFormData, userPlan: string) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const disputeData = {
        userId: 'current-user-id', // Would come from auth context
        ...formData,
        amount: parseFloat(formData.amount),
      };

      const dispute = await workflowService.initiateDispute(
        disputeData,
        userPlan as 'DIY' | 'DFY_ESSENTIAL' | 'DFY_PREMIUM'
      );

      return dispute;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit dispute');
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateDisputeStatus = async (
    disputeId: string,
    newStatus: DisputeStatus,
    details?: Record<string, any>
  ) => {
    try {
      return await statusService.updateStatus(disputeId, newStatus, details);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update dispute status');
      throw err;
    }
  };

  return {
    submitDispute,
    updateDisputeStatus,
    isSubmitting,
    error,
  };
}