import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Plus, Minus, RefreshCw } from 'lucide-react';
import CountUp from 'react-countup';

interface ScenarioAction {
  type: string;
  impact: number;
  description: string;
}

const possibleActions: ScenarioAction[] = [
  { type: 'payment_history', impact: 30, description: 'Make all payments on time for 6 months' },
  { type: 'credit_utilization', impact: 25, description: 'Reduce credit utilization to below 30%' },
  { type: 'credit_mix', impact: 15, description: 'Add a new type of credit account' },
  { type: 'account_age', impact: 10, description: 'Keep all accounts open and active' },
  { type: 'hard_inquiries', impact: -5, description: 'New credit application (hard inquiry)' },
  { type: 'late_payment', impact: -35, description: 'Late payment on credit account' },
  { type: 'collection', impact: -45, description: 'Account sent to collections' },
  { type: 'bankruptcy', impact: -100, description: 'File for bankruptcy' },
];

export function CreditSimulator() {
  const [baseScore] = useState(680);
  const [selectedActions, setSelectedActions] = useState<ScenarioAction[]>([]);

  const simulatedScore = selectedActions.reduce(
    (score, action) => score + action.impact,
    baseScore
  );

  const addAction = (action: ScenarioAction) => {
    setSelectedActions([...selectedActions, action]);
  };

  const removeAction = (index: number) => {
    setSelectedActions(selectedActions.filter((_, i) => i !== index));
  };

  const resetSimulation = () => {
    setSelectedActions([]);
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-[#78C5B6] bg-opacity-10">
          <TrendingUp className="w-6 h-6 text-[#78C5B6]" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Credit Score Simulator</h2>
          <p className="text-sm text-gray-500">See how different actions affect your score</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500">Current Score</p>
                <p className="text-3xl font-bold text-gray-900">{baseScore}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Simulated Score</p>
                <div className="flex items-baseline gap-2">
                  <CountUp
                    end={simulatedScore}
                    className="text-3xl font-bold"
                    style={{ color: simulatedScore > baseScore ? '#10B981' : '#EF4444' }}
                  />
                  {selectedActions.length > 0 && (
                    <span className={simulatedScore > baseScore ? 'text-green-500' : 'text-red-500'}>
                      ({simulatedScore > baseScore ? '+' : ''}
                      {simulatedScore - baseScore})
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="h-2 bg-gray-200 rounded-full">
              <motion.div
                initial={{ width: `${(baseScore / 850) * 100}%` }}
                animate={{ width: `${(simulatedScore / 850) * 100}%` }}
                className={`h-full rounded-full transition-all duration-500 ${
                  simulatedScore > baseScore ? 'bg-green-500' : 'bg-red-500'
                }`}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Selected Actions</h3>
            {selectedActions.length === 0 ? (
              <p className="text-sm text-gray-500">
                Select actions from the right to simulate their impact
              </p>
            ) : (
              <>
                {selectedActions.map((action, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200"
                  >
                    <div>
                      <p className="font-medium text-gray-900">{action.description}</p>
                      <p className={`text-sm ${
                        action.impact > 0 ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {action.impact > 0 ? '+' : ''}{action.impact} points
                      </p>
                    </div>
                    <button
                      onClick={() => removeAction(index)}
                      className="p-1 hover:bg-gray-100 rounded-lg"
                    >
                      <Minus className="w-4 h-4 text-gray-400" />
                    </button>
                  </motion.div>
                ))}
                <button
                  onClick={resetSimulation}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reset Simulation
                </button>
              </>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Available Actions</h3>
          <div className="space-y-4">
            {possibleActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-[#78C5B6] transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">{action.description}</p>
                  <p className={`text-sm ${
                    action.impact > 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {action.impact > 0 ? '+' : ''}{action.impact} points
                  </p>
                </div>
                <button
                  onClick={() => addAction(action)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <Plus className="w-4 h-4 text-gray-400" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
