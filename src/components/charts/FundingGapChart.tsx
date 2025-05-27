
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const FundingGapChart = () => {
  // Set the total funding need to 16 billion USD
  const totalFundingNeed = 16; // in billions
  // Set the total available financing to 1.7 billion USD
  const totalAvailableFinancing = 1.7; // in billions
  // Set the total funding gap (need - available)
  const fundingGap = totalFundingNeed - totalAvailableFinancing;
  
  // Data for connections
  const connectionsAchieved = 8.3; // in millions
  const connectionsTarget = 40.5; // in millions
  const connectionsGap = connectionsTarget - connectionsAchieved;
  
  // Transform the data for the chart - using billions for clarity
  const data = [
    {
      name: "Energy Generation",
      available: 0.55,
      gap: 5.45,
      required: 6.0, // in billions
      description: "Hydropower, solar, and other renewable energy generation projects"
    },
    {
      name: "Transmission",
      available: 0.45,
      gap: 3.55,
      required: 4.0, // in billions
      description: "National grid and inter-provincial transmission networks"
    },
    {
      name: "Distribution",
      available: 0.4,
      gap: 3.6,
      required: 4.0, // in billions
      description: "Last-mile connections and distribution networks"
    },
    {
      name: "Technical Assistance",
      available: 0.3,
      gap: 1.7,
      required: 2.0, // in billions
      description: "Capacity building and regulatory reforms"
    }
  ];
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const availableData = payload.find(p => p.dataKey === 'available');
      const gapData = payload.find(p => p.dataKey === 'gap');
      const description = payload[0].payload.description;
      
      return (
        <div className="bg-white dark:bg-[#001a1a] p-3 border border-[#004a4a] rounded-md shadow-md">
          <p className="font-medium mb-1 text-[#006060]">{label}</p>
          <p className="text-sm text-[#004a4a]/70 mb-2">{description}</p>
          <div className="space-y-1">
            <p className="text-sm flex justify-between">
              <span className="flex items-center">
                <span className="inline-block w-2 h-2 mr-2 bg-[#004a4a]"></span>
                Available:
              </span>
              <span className="font-medium">${availableData.value}B</span>
            </p>
            <p className="text-sm flex justify-between">
              <span className="flex items-center">
                <span className="inline-block w-2 h-2 mr-2 bg-[#e6671e]"></span>
                Gap:
              </span>
              <span className="font-medium">${gapData.value}B</span>
            </p>
            <p className="text-sm flex justify-between font-medium mt-1 pt-1 border-t">
              <span>Required:</span>
              <span>${availableData.value + gapData.value}B</span>
            </p>
          </div>
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <Card className="teal-card shadow-md">
      <CardHeader className="teal-card-header">
        <CardTitle className="teal-accent">Funding Gaps by Sector</CardTitle>
        <CardDescription>
          Available vs. Required Funding (US$ Billion) - Total Need: ${totalFundingNeed}B
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 30,
              }}
              barGap={4}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#004a4a20" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#004a4a' }}
                stroke="#004a4a"
              />
              <YAxis 
                tick={{ fill: '#004a4a' }}
                stroke="#004a4a"
                tickFormatter={(value) => `$${value}B`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar 
                dataKey="available" 
                name="Available Funding" 
                fill="#004a4a" 
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="gap" 
                name="Funding Gap" 
                fill="#e6671e" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default FundingGapChart;
