// User and Profile Types
export interface User {
  firstName: string;
  lastName?: string;
  id?: string;
}

// Credit Score Types
export interface ScoreData {
  score: number;
  status: string;
  change: number;
}

export interface MockData {
  month: string;
  score: number;
}

// Stats Types
export interface StatsCardsProps {
  scoreImprovement: number;
  itemsRemoved: number;
  activeDisputes: number;
  nearComplete: number;
}

// AI Insights Types
export interface AIInsight {
  insights: string[];
  successUpdate: {
    message: string;
    impact: number;
  };
}

// Credit Data Types
export interface CreditMetrics {
  paymentHistory: {
    percentage: number;
    status: string;
  };
  creditUsage: {
    percentage: number;
    status: string;
  };
}

// Chart Types
export interface ChartData {
  data: MockData[];
}
