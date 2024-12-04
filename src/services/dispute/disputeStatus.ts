import { DisputeStatus } from '../../types/disputes';

interface StatusTransition {
  from: DisputeStatus;
  to: DisputeStatus[];
}

const statusFlow: Record<DisputeStatus, DisputeStatus[]> = {
  draft: ['pending_review'],
  pending_review: ['in_progress', 'rejected'],
  in_progress: ['awaiting_bureau', 'resolved', 'rejected'],
  awaiting_bureau: ['resolved', 'requires_more_info', 'rejected'],
  requires_more_info: ['in_progress', 'rejected'],
  resolved: ['closed'],
  rejected: ['closed'],
  closed: [],
};

export class DisputeStatusService {
  async updateStatus(
    disputeId: string,
    newStatus: DisputeStatus,
    details: Record<string, any> = {}
  ) {
    const dispute = await this.getDispute(disputeId);
    
    if (!this.isValidTransition(dispute.status, newStatus)) {
      throw new Error(`Invalid status transition from ${dispute.status} to ${newStatus}`);
    }

    // Update dispute status
    const updatedDispute = {
      ...dispute,
      status: newStatus,
      ...details,
    };

    // Create status update record
    await this.createStatusUpdate(disputeId, {
      oldStatus: dispute.status,
      newStatus,
      details,
      timestamp: new Date().toISOString(),
    });

    // Handle status-specific actions
    await this.handleStatusActions(disputeId, newStatus, details);

    return updatedDispute;
  }

  private isValidTransition(currentStatus: DisputeStatus, newStatus: DisputeStatus): boolean {
    return statusFlow[currentStatus].includes(newStatus);
  }

  private async getDispute(disputeId: string) {
    // Implementation would fetch from database
    return { status: 'draft' as DisputeStatus };
  }

  private async createStatusUpdate(disputeId: string, updateData: any) {
    // Implementation would save to database
  }

  private async handleStatusActions(
    disputeId: string,
    status: DisputeStatus,
    details: Record<string, any>
  ) {
    const actions = {
      resolved: () => this.handleResolution(disputeId),
      requires_more_info: () => this.requestAdditionalInfo(disputeId),
      awaiting_bureau: () => this.setupBureauTracking(disputeId),
    };

    if (status in actions) {
      await actions[status]();
    }
  }

  private async handleResolution(disputeId: string) {
    // Implementation for resolution handling
  }

  private async requestAdditionalInfo(disputeId: string) {
    // Implementation for requesting more information
  }

  private async setupBureauTracking(disputeId: string) {
    // Implementation for bureau response tracking
  }
}