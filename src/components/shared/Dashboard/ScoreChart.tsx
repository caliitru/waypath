import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartData } from './types';

const ScoreChart: React.FC<ChartData> = ({ data }) => (
 <div className="h-40 relative">
   <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent opacity-50"></div>
   <ResponsiveContainer width="100%" height="100%">
     <LineChart data={data}>
       <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
       <XAxis dataKey="month" stroke="rgba(0,0,0,0.5)" />
       <YAxis stroke="rgba(0,0,0,0.5)" />
       <Line 
         type="monotone" 
         dataKey="score" 
         stroke="#78C5B6"
         strokeWidth={2.5}
         dot={{ r: 4, strokeWidth: 2 }}
         activeDot={{ r: 6, strokeWidth: 0 }}
       />
     </LineChart>
   </ResponsiveContainer>
 </div>
);

export default ScoreChart;
