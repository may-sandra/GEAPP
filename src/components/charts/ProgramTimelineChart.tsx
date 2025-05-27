
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  ReferenceLine,
  Cell
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getProgramTimelines } from '@/data/programData';

const ProgramTimelineChart = () => {
  const programTimelines = getProgramTimelines();
  const today = new Date();
  
  const data = programTimelines.map(program => {
    const startTime = program.start.getTime();
    const endTime = program.end.getTime();
    const duration = endTime - startTime;
    
    return {
      name: program.name,
      start: startTime,
      duration: duration,
      end: endTime,
    };
  });
  
  const allDates = programTimelines.flatMap(program => [program.start, program.end]);
  const minDate = new Date(Math.min(...allDates.map(d => d.getTime())));
  const maxDate = new Date(Math.max(...allDates.map(d => d.getTime())));
  
  const formatTick = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'short'
    });
  };
  
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const startDate = new Date(data.start);
      const endDate = new Date(data.start + data.duration);
      
      return (
        <div className="bg-white dark:bg-[#001a1a] p-3 border border-[#004a4a] rounded-md shadow-md">
          <p className="font-medium mb-1 text-[#006060]">{data.name}</p>
          <p className="text-sm text-[#004a4a]/70">
            {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
          </p>
          <p className="text-sm mt-1 text-[#004a4a]">
            Duration: {Math.round(data.duration / (1000 * 60 * 60 * 24 * 30))} months
          </p>
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <Card className="teal-card shadow-md">
      <CardHeader className="teal-card-header py-4">
        <CardTitle className="teal-accent text-lg">Program Timelines</CardTitle>
        <CardDescription>
          Implementation period of major energy programs
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={data}
              margin={{ top: 20, right: 30, left: 130, bottom: 20 }}
              barSize={15}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#004a4a20" />
              <XAxis
                dataKey="start"
                type="number"
                domain={[minDate.getTime(), maxDate.getTime()]}
                tickFormatter={formatTick}
                tickCount={4}
                stroke="#004a4a"
                fontSize={11}
              />
              <YAxis 
                dataKey="name" 
                type="category" 
                width={120} 
                tick={{ fontSize: 11, fill: "#004a4a" }}
                stroke="#004a4a"
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine
                x={today.getTime()}
                stroke="#e6671e"
                strokeWidth={2}
                strokeDasharray="5 5"
                label={{ 
                  value: 'Today',
                  position: 'top', 
                  fill: '#e6671e',
                  fontSize: 11
                }}
              />
              <Bar 
                dataKey="duration" 
                name="Program Duration"
                background={{ fill: '#002a2a20' }}
                radius={[4, 4, 4, 4]}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#004a4a' : '#e6671e'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgramTimelineChart;
