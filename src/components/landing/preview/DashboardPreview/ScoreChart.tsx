import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const mockData = [
  { month: 'Aug', score: 580 },
  { month: 'Sep', score: 605 },
  { month: 'Oct', score: 628 },
  { month: 'Nov', score: 645 },
  { month: 'Dec', score: 672 }
];

export function ScoreChart() {
  return (
    <div className="h-[200px] mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={mockData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7E9" horizontal={true} vertical={false} />
          <XAxis 
            dataKey="month" 
            stroke="#4A4F54"
            axisLine={false}
            tickLine={false}
            fontSize={12}
          />
          <YAxis 
            stroke="#4A4F54"
            axisLine={false}
            tickLine={false}
            domain={[0, 800]}
            ticks={[0, 200, 400, 600, 800]}
            fontSize={12}
          />
          <Line 
            type="monotone" 
            dataKey="score" 
            stroke="#2ECC71"
            strokeWidth={2}
            dot={{ r: 4, fill: "#2ECC71", strokeWidth: 0 }}
            activeDot={{ r: 6, fill: "#2ECC71", strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}