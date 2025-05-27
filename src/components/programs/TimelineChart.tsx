
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip,
  Legend,
  Cell,
  ReferenceLine 
} from 'recharts';
import { Component } from '@/data/programData';

interface TimelineChartProps {
  components: Array<{
    id: string;
    name: string;
    start: Date;
    end: Date;
    status: Component['status'];
  }>;
}

const TimelineChart = ({ components }: TimelineChartProps) => {
  const statusColors = {
    'planned': '#006060',
    'in progress': '#e6671e',
    'completed': '#00a0a0',
    'delayed': '#f59e0b'
  };
  
  // Transform the data for the chart
  const data = components.map(comp => {
    const startTime = comp.start.getTime();
    const endTime = comp.end.getTime();
    const duration = endTime - startTime;
    
    return {
      name: comp.name,
      start: startTime,
      duration: duration,
      end: endTime,
      status: comp.status
    };
  });
  
  // Get the min and max dates for the domain
  const allDates = components.flatMap(comp => [comp.start, comp.end]);
  const minDate = new Date(Math.min(...allDates.map(d => d.getTime())));
  const maxDate = new Date(Math.max(...allDates.map(d => d.getTime())));
  const today = new Date();
  
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
          <p className="text-sm mt-1 capitalize text-[#004a4a]">
            Status: <span className="font-medium">{data.status}</span>
          </p>
        </div>
      );
    }
    
    return null;
  };
  
  const CustomLegend = ({ payload }: any) => {
    return (
      <div className="flex flex-wrap justify-center gap-4 mt-2">
        {payload.map((entry: any, index: number) => (
          <div key={`item-${index}`} className="flex items-center">
            <div 
              className="w-3 h-3 mr-2 rounded-sm" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-xs text-[#004a4a] capitalize">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div className="h-[400px] w-full mt-6 bg-[#001a1a]/5 p-4 rounded-lg border border-[#002a2a]/20">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 150, bottom: 40 }}
          barSize={15}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#004a4a20" />
          <XAxis
            dataKey="start"
            type="number"
            domain={[minDate.getTime(), maxDate.getTime()]}
            tickFormatter={formatTick}
            tickCount={7}
            stroke="#004a4a"
          />
          <YAxis 
            dataKey="name" 
            type="category" 
            width={140} 
            tick={{ fontSize: 12, fill: "#004a4a" }}
            stroke="#004a4a"
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
          <ReferenceLine
            x={today.getTime()}
            stroke="#e6671e"
            strokeWidth={2}
            strokeDasharray="3 3"
            label={{ 
              value: 'Today',
              position: 'top', 
              fill: '#e6671e',
              fontSize: 12
            }}
          />
          <Bar 
            dataKey="duration" 
            name="Timeline"
            background={{ fill: '#002a2a20' }}
            radius={[4, 4, 4, 4]}
            barSize={15}
            minPointSize={2}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={statusColors[entry.status as keyof typeof statusColors]} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimelineChart;
