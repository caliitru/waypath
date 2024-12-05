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

// Dashboard Preview Props
export interface DashboardPreviewProps {
 userName: string;
 creditScore: ScoreData;
 stats: StatsCardsProps;
 insights: AIInsight;
 creditMetrics: CreditMetrics;
}

// Component Props
export interface ScoreCircleProps {
 score: number;
 status: string;
 change: number;
}

export interface ScoreChartProps {
 data: MockData[];
}

export interface StatsCardProps {
 scoreImprovement: number;
 itemsRemoved: number;
 activeDisputes: number;
 nearComplete: number;
}

export interface CreditFactorsProps {
 paymentHistory: {
   percentage: number;
   status: string;
 };
 creditUsage: {
   percentage: number;
   status: string;
 };
}

export interface CreditToolsProps {
 tools: Array<{
   id: string;
   name: string;
   description: string;
   status: 'available' | 'locked';
 }>;
}

export interface CreditSimulatorProps {
 currentScore: number;
 scenarios: Array<{
   action: string;
   impact: number;
 }>;
}

export interface DisputesListProps {
 disputes: Array<{
   id: string;
   creditor: string;
   type: string;
   status: 'pending' | 'in_progress' | 'resolved';
   date: string;
 }>;
}

export interface FinancialCalculatorProps {
 type: 'debt' | 'savings' | 'credit';
 initialValues?: {
   amount?: number;
   rate?: number;
   term?: number;
 };
}

export interface TaskListProps {
 tasks: Array<{
   id: string;
   title: string;
   priority: 'high' | 'medium' | 'low';
   completed: boolean;
   dueDate?: string;
 }>;
}

export interface HeaderProps {
 title: string;
 showBackButton?: boolean;
 actions?: Array<{
   label: string;
   onClick: () => void;
 }>;
}
