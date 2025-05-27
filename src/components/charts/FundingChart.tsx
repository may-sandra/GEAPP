
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface FundingChartProps {
  capex: number;
  ta: number;
  opex: number;
  other: number;
}

const FundingChart = ({ capex, ta, opex, other }: FundingChartProps) => {
  const data = [
    { name: 'Capital Expenditure', value: capex },
    { name: 'Technical Assistance', value: ta },
    { name: 'Operating Expense', value: opex },
    { name: 'Other', value: other }
  ];
  
  // Using teal and orange color palette
  const COLORS = ['#002a2a', '#004a4a', '#e6671e', '#ff8a3d'];
  
  return (
    <div className="w-full h-[240px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            innerRadius={40}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: number) => [`$${(value / 1000000).toFixed(1)}M`, '']}
            contentStyle={{ backgroundColor: 'rgba(0, 42, 42, 0.8)', borderColor: '#004a4a', color: '#fff' }}
          />
          <Legend 
            formatter={(value: string) => <span className="text-xs text-teal-900 dark:text-teal-100">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FundingChart;
