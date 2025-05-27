
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getConnectionsProjection } from '@/data/programData';

const ConnectionsChart = () => {
  const connectionsProjection = getConnectionsProjection();
  
  // Transform the data for Recharts
  const chartData = Object.entries(connectionsProjection).map(([region, data]) => {
    const { programs, ...yearlyData } = data as any;
    return {
      region,
      ...yearlyData
    };
  });
  
  // Get all years for the chart
  const years = Object.keys(chartData[0]).filter(key => key !== 'region');
  
  // Using teal color palette with increasing intensity
  const colors = {
    '2023': '#e6671e', // Orange accent
    '2024': '#009688',
    '2025': '#00796b',
    '2026': '#00695c',
    '2027': '#004d40'
  };

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="region" tick={{ fill: '#004a4a' }} />
          <YAxis tickFormatter={(value) => `${value / 1000}k`} tick={{ fill: '#004a4a' }} />
          <Tooltip 
            formatter={(value) => [`${value.toLocaleString()} connections`, '']}
            labelFormatter={(label) => `Region: ${label}`}
            contentStyle={{ backgroundColor: 'rgba(0, 42, 42, 0.8)', borderColor: '#004a4a', color: '#fff' }}
          />
          <Legend wrapperStyle={{ color: '#004a4a' }} />
          {years.map((year, index) => (
            <Bar 
              key={year} 
              dataKey={year} 
              name={`${year}`} 
              fill={colors[year as keyof typeof colors] || `#${(index + 3).toString(16)}0a0b0`}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ConnectionsChart;
