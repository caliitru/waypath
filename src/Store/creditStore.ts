import { create } from 'zustand';
import { Dispute, DisputeType } from '../types/disputes';

interface CreditScore {
  score: number;
  date: string;
  bureau: 'Experian' | 'TransUnion' | 'Equifax';
}

interface Task {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

interface DisputeStats {
  totalFiled: number;
  byType: Record<DisputeType, number>;
  totalResolved: number;
  successfulResolutions: number;
}

interface CreditStore {
  creditScores: CreditScore[];
  disputes: Dispute[];
  tasks: Task[];
  toggleTaskCompletion: (taskId: string) => void;
  getDisputeStats: () => DisputeStats;
}

export const useCreditStore = create<CreditStore>((set, get) => ({
  creditScores: [
    { score: 580, date: '2023-10-01', bureau: 'Experian' },
    { score: 590, date: '2023-11-01', bureau: 'Experian' },
    { score: 610, date: '2023-12-01', bureau: 'Experian' },
    { score: 625, date: '2024-01-01', bureau: 'Experian' },
    { score: 645, date: '2024-02-01', bureau: 'Experian' },
    { score: 680, date: '2024-03-01', bureau: 'Experian' },
  ],
  disputes: [
    {
      id: '1',
      creditor: 'Capital One',
      amount: 1500,
      status: 'in_review',
      type: 'late_payment',
      dateSubmitted: '2024-02-15',
      bureau: 'Experian',
      currentStep: 2,
      totalSteps: 3,
    },
    {
      id: '2',
      creditor: 'Chase',
      amount: 2300,
      status: 'pending',
      type: 'account_ownership',
      dateSubmitted: '2024-03-01',
      bureau: 'TransUnion',
      currentStep: 1,
      totalSteps: 3,
    }
  ],
  tasks: [
    {
      id: '1',
      title: 'Upload latest bank statements',
      dueDate: '2024-03-20',
      completed: false,
      priority: 'high'
    },
    {
      id: '2',
      title: 'Review dispute letter',
      dueDate: '2024-03-22',
      completed: false,
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Set up automatic payments',
      dueDate: '2024-03-25',
      completed: false,
      priority: 'high'
    },
    {
      id: '4',
      title: 'Check credit report for errors',
      dueDate: '2024-03-28',
      completed: false,
      priority: 'medium'
    }
  ],
  toggleTaskCompletion: (taskId: string) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    })),
  getDisputeStats: () => {
    const disputes = get().disputes;
    return {
      totalFiled: disputes.length,
      byType: disputes.reduce((acc, dispute) => ({
        ...acc,
        [dispute.type]: (acc[dispute.type] || 0) + 1,
      }), {} as Record<DisputeType, number>),
      totalResolved: disputes.filter(d => d.status === 'resolved').length,
      successfulResolutions: disputes.filter(d => d.outcome === 'successful').length,
    };
  },
}));
