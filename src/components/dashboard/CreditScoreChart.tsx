import React from 'react';
import { LineChart, TrendingUp } from 'lucide-react';
import { useCreditStore } from '../../store/creditStore';
import { motion } from 'framer-motion';

export function CreditScoreChart() {
  const { creditScores } = useCreditStore();
  const latestScore = creditScores[creditScores.length - 1]?.score;
  const previousScore = creditScores[creditScores.length - 2]?.score;
  const scoreDifference = latestScore - previousScore;
  const isPositive = scoreDifference > 0;

  // Calculate the maximum score for the progress bar
  const maxScore = 850;
  const progressPercentage = (latestScore / maxScore) * 100;

  // Calculate min and max values for the graph
  const minScore = Math.min(...creditScores.map(s => s.score));
  const maxScoreInData = Math.max(...creditScores.map(s => s.score));
  const range = maxScoreInData - minScore;
  const padding = range * 0.1; // Add 10% padding
  const yMin = Math.max(300, minScore - padding);
  const yMax = Math.min(850, maxScoreInData + padding);

  // Function to calculate Y position for the graph
  const calculateY = (score: number) => {
    return 100 - ((score - yMin) / (yMax - yMin)) * 100;
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Credit Score</h2>
          <p className="text-sm text-gray-500">6 Month History</p>
        </div>
        <LineChart className="h-6 w-6 text-gray-400" />
      </div>
      
      <div className="mt-4">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold">{latestScore}</span>
          {scoreDifference !== 0 && (
            <span className={`ml-4 flex items-center text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              <TrendingUp className={`h-4 w-4 ${isPositive ? '' : 'transform rotate-180'} mr-1`} />
              {Math.abs(scoreDifference)} points
            </span>
          )}
        </div>
      </div>

      <div className="mt-6">
        <div className="h-2 w-full bg-gray-100 rounded-full">
          <motion.div 
            className="h-2 rounded-full bg-blue-600"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="mt-2 flex justify-between text-sm text-gray-500">
          <span>300</span>
          <span>850</span>
        </div>
      </div>

      {/* Credit Score History Graph */}
      <div className="mt-8">
        <h3 className="text-sm font-medium text-gray-700 mb-4">Score History</h3>
        <div className="relative h-48">
          <svg className="w-full h-full">
            {/* Y-axis labels */}
            <text x="0" y="20%" className="text-xs fill-gray-500">{Math.round(yMax)}</text>
            <text x="0" y="80%" className="text-xs fill-gray-500">{Math.round(yMin)}</text>

            {/* Grid lines */}
            <line x1="30" y1="20%" x2="100%" y2="20%" className="stroke-gray-200" strokeWidth="1" />
            <line x1="30" y1="80%" x2="100%" y2="80%" className="stroke-gray-200" strokeWidth="1" />

            {/* Score Lines */}
            <path
              d={creditScores.map((score, index) => {
                const x = (index / (creditScores.length - 1)) * 100;
                const y = calculateY(score.score);
                return `${index === 0 ? 'M' : 'L'} ${x}% ${y}%`;
              }).join(' ')}
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
            />

            {/* Score Points */}
            {creditScores.map((score, index) => {
              const x = (index / (creditScores.length - 1)) * 100;
              const y = calculateY(score.score);
              
              return (
                <g key={score.date}>
                  <circle
                    cx={`${x}%`}
                    cy={`${y}%`}
                    r="4"
                    fill="#3B82F6"
                  />
                  <text
                    x={`${x}%`}
                    y={`${y - 3}%`}
                    textAnchor="middle"
                    className="text-xs fill-gray-500"
                  >
                    {score.score}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-500">
          {creditScores.map(score => (
            <div key={score.date}>
              {new Date(score.date).toLocaleDateString(undefined, { month: 'short' })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}