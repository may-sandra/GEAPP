
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine,
  Cell
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { energyProjects } from '@/data/energyProjectsData';

const ProjectGanttChart = () => {
  const currentYear = new Date().getFullYear();
  
  // Filter projects with valid approval and closing FY
  const validProjects = energyProjects
    .filter(project => 
      project.approvalFY && 
      project.closingFY && 
      typeof project.approvalFY === 'number' && 
      typeof project.closingFY === 'number'
    )
    .sort((a, b) => {
      const aStart = typeof a.approvalFY === 'number' ? a.approvalFY : parseInt(a.approvalFY);
      const bStart = typeof b.approvalFY === 'number' ? b.approvalFY : parseInt(b.approvalFY);
      return aStart - bStart;
    })
    .slice(0, 15); // Limit to 15 projects to avoid overcrowding
  
  // Transform the data for the chart
  const data = validProjects.map(project => {
    const startYear = typeof project.approvalFY === 'number' ? project.approvalFY : parseInt(project.approvalFY);
    const endYear = typeof project.closingFY === 'number' ? project.closingFY : parseInt(project.closingFY);
    
    return {
      name: project.projectName.length > 25 ? project.projectName.substring(0, 25) + '...' : project.projectName,
      organisation: project.organisation,
      start: startYear,
      duration: endYear - startYear,
      end: endYear,
      color: project.organisation === 'WB' ? '#004a4a' : 
             project.organisation === 'AfDB' ? '#e6671e' : 
             project.organisation === 'EU' ? '#00a0a0' : 
             project.organisation === 'KFW' ? '#f59e0b' : '#00c0c0'
    };
  });
  
  // Find min and max years for domain
  const allYears = validProjects.flatMap(project => [
    typeof project.approvalFY === 'number' ? project.approvalFY : parseInt(project.approvalFY), 
    typeof project.closingFY === 'number' ? project.closingFY : parseInt(project.closingFY)
  ]);
  const minYear = Math.min(...allYears);
  const maxYear = Math.max(...allYears);
  
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      
      return (
        <div className="bg-white dark:bg-[#001a1a] p-3 border border-[#004a4a] rounded-md shadow-md">
          <p className="font-medium mb-1 text-[#006060]">{data.name}</p>
          <p className="text-sm text-[#004a4a]/70 mb-1">
            {data.organisation}
          </p>
          <p className="text-sm text-[#004a4a]">
            {data.start} - {data.end} ({data.duration} years)
          </p>
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <Card className="teal-card shadow-md">
      <CardHeader className="teal-card-header py-4">
        <CardTitle className="teal-accent text-lg">Project Timelines</CardTitle>
        <CardDescription>
          Implementation period by approval and closing fiscal years
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={data}
              margin={{ top: 20, right: 30, left: 180, bottom: 20 }}
              barSize={15}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#004a4a20" />
              <XAxis
                dataKey="start"
                type="number"
                domain={[minYear - 1, maxYear + 1]}
                allowDecimals={false}
                stroke="#004a4a"
              />
              <YAxis 
                dataKey="name" 
                type="category" 
                width={170} 
                tick={{ fontSize: 11, fill: "#004a4a" }}
                stroke="#004a4a"
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine
                x={currentYear}
                stroke="#e6671e"
                strokeWidth={2}
                strokeDasharray="5 5"
                label={{ 
                  value: 'Current Year',
                  position: 'top', 
                  fill: '#e6671e',
                  fontSize: 12
                }}
              />
              <Bar 
                dataKey="duration" 
                name="Project Duration"
                background={{ fill: '#002a2a20' }}
                radius={[4, 4, 4, 4]}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectGanttChart;
