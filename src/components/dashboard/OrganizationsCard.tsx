
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getFinancingByOrganization } from '@/data/energyProjectsData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const OrganizationsCard = () => {
  const orgFinancing = getFinancingByOrganization();
  
  // Sort organizations by financing amount (descending)
  const sortedOrgs = Object.entries(orgFinancing)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 7); // Take top 7 organizations
  
  const totalFinancing = Object.values(orgFinancing).reduce((sum, amount) => sum + amount, 0);
  
  // Format currency
  const formatCurrency = (amount: number): string => {
    if (amount >= 1000000000) {
      return `$${(amount / 1000000000).toFixed(1)}B`;
    } else if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(1)}K`;
    } else {
      return `$${amount}`;
    }
  };
  
  // Prepare data for chart with alternating colors
  const chartData = sortedOrgs.map(([org, amount], index) => ({
    name: org,
    amount: amount,
    formattedAmount: formatCurrency(amount),
    color: index % 2 === 0 ? '#004a4a' : '#e6671e'
  }));
  
  return (
    <Card className="card-hover border-t-4 border-t-[#004a4a] bg-[#001a1a]/5 dark:bg-[#001a1a]/20">
      <CardHeader className="bg-[#001a1a]/10 dark:bg-[#001a1a]/30 py-4">
        <CardTitle className="text-[#006060] dark:text-teal-300 text-lg">Top Organizations</CardTitle>
        <CardDescription className="dark:text-teal-100/70">By financing amount</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="h-48 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
            >
              <XAxis type="number" tickFormatter={(value) => formatCurrency(value)} />
              <YAxis type="category" dataKey="name" tick={{ fill: '#004a4a', fontSize: 11 }} width={40} />
              <Tooltip 
                formatter={(value: number) => [formatCurrency(value), 'Funding']} 
                contentStyle={{ backgroundColor: '#f0f9f9', border: '1px solid #004a4a' }}
              />
              <Bar dataKey="amount">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-3">
          {chartData.map((item) => {
            const percentage = (item.amount / totalFinancing) * 100;
            return (
              <OrganizationItem 
                key={item.name}
                name={item.name} 
                amount={item.amount}
                percentage={percentage}
                color={item.color}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

interface OrganizationItemProps {
  name: string;
  amount: number;
  percentage: number;
  color: string;
}

const OrganizationItem = ({ name, amount, percentage, color }: OrganizationItemProps) => {
  // Format currency
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
    notation: 'compact',
    compactDisplay: 'short',
  }).format(amount);
  
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-medium text-[#002a2a] dark:text-teal-100">{name}</span>
        <span className="text-xs font-medium text-[#004a4a] dark:text-teal-200">{formattedAmount}</span>
      </div>
      <div className="w-full bg-[#001a1a]/20 dark:bg-[#001a1a]/40 rounded-full h-2 mb-1">
        <div 
          className="h-2 rounded-full"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
      <div className="text-xs text-right text-[#004a4a]/70 dark:text-teal-300/70">
        {percentage.toFixed(1)}%
      </div>
    </div>
  );
};

export default OrganizationsCard;
