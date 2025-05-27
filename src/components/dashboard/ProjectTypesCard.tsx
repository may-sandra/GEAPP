
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getProjectTypes } from '@/data/energyProjectsData';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const ProjectTypesCard = () => {
  const projectTypes = getProjectTypes();
  const total = Object.values(projectTypes).reduce((sum, count) => sum + count, 0);
  
  const calculatePercentage = (count: number) => {
    return Math.round((count / total) * 100);
  };
  
  // Prepare data for pie chart with balanced colors
  const chartData = [
    { name: 'Connections', value: projectTypes.connections, color: '#004a4a' },
    { name: 'Generation', value: projectTypes.generation, color: '#e6671e' },
    { name: 'Transmission', value: projectTypes.transmission, color: '#008080' },
    { name: 'Sector Reforms', value: projectTypes.sectorReforms, color: '#f59e0b' },
    { name: 'Capacity Building', value: projectTypes.capacityBuilding, color: '#00c0c0' },
    { name: 'Upstream', value: projectTypes.upstream, color: '#d15218' },
  ];
  
  // Balanced colors alternating between teal and orange shades
  const COLORS = ['#004a4a', '#e6671e', '#00a0a0', '#f59e0b', '#00c0c0', '#d15218'];
  
  return (
    <Card className="card-hover border-t-4 border-t-[#004a4a] bg-[#001a1a]/5 dark:bg-[#001a1a]/20">
      <CardHeader className="bg-[#001a1a]/10 dark:bg-[#001a1a]/30 py-4">
        <CardTitle className="text-[#006060] dark:text-teal-300 text-lg">Project Focus Areas</CardTitle>
        <CardDescription className="dark:text-teal-100/70">Distribution by project type</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="h-48 mb-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => [`${value} projects`, '']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-3 mt-2">
          {chartData.map((item, index) => (
            <TypeItem 
              key={item.name}
              name={item.name} 
              count={item.value}
              percentage={calculatePercentage(item.value)}
              color={item.color}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface TypeItemProps {
  name: string;
  count: number;
  percentage: number;
  color: string;
}

const TypeItem = ({ name, count, percentage, color }: TypeItemProps) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="text-xs font-medium text-[#002a2a] dark:text-teal-100">{name}</span>
      <span className="text-xs font-medium text-[#004a4a] dark:text-teal-200">{count} projects</span>
    </div>
    <div className="w-full bg-[#001a1a]/20 dark:bg-[#001a1a]/40 rounded-full h-2 mb-1">
      <div 
        className="h-2 rounded-full" 
        style={{ width: `${percentage}%`, backgroundColor: color }}
      ></div>
    </div>
    <div className="text-xs text-right text-[#004a4a]/70 dark:text-teal-300/70">
      {percentage}%
    </div>
  </div>
);

export default ProjectTypesCard;
