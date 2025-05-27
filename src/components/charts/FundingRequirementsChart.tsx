
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
  Cell 
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Sample data for funding requirements - converted to billions for clarity
const fundingData = [
  { name: 'Generation', public: 8, private: 12, total: 20 },
  { name: 'Transmission', public: 3, private: 0.08, total: 3.08 },
  { name: 'Distribution', public: 1.4, private: 3, total: 4.4 },
  { name: 'Last-Mile', public: 1.6, private: 2.4, total: 4 },
  { name: 'Off-Grid', public: 2, private: 2.4, total: 4.4 },
  { name: 'Clean Cooking', public: 0.1, private: 0.02, total: 0.12 },
];

interface ChartConfig {
  [key: string]: {
    color: string;
    label: string;
  };
}

const FundingRequirementsChart = () => {
  const config: ChartConfig = {
    public: { color: '#004a4a', label: 'Public Funding' },
    private: { color: '#e6671e', label: 'Private Investment' },
  };

  return (
    <Card className="teal-card shadow-md">
      <CardHeader className="teal-card-header">
        <CardTitle className="teal-accent">Funding Requirements</CardTitle>
        <CardDescription>
          Public and private funding needs by sector (US$ Billion)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ChartContainer
            config={config}
            className="h-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={fundingData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 60,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#004a4a20" />
                <XAxis 
                  dataKey="name" 
                  angle={-45} 
                  textAnchor="end" 
                  height={60} 
                  tick={{ fill: '#004a4a' }}
                  stroke="#004a4a"
                />
                <YAxis 
                  tick={{ fill: '#004a4a' }}
                  stroke="#004a4a"
                  tickFormatter={(value) => `$${value}B`}
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-md">
                          <div className="font-medium">{label}</div>
                          {payload.map((entry, index) => (
                            <div
                              key={`item-${index}`}
                              className="flex items-center justify-between gap-2 text-sm"
                            >
                              <div className="flex items-center gap-1">
                                <div
                                  className="h-2 w-2 rounded"
                                  style={{ backgroundColor: entry.color }}
                                />
                                <span>{entry.name}</span>
                              </div>
                              <span className="font-medium tabular-nums">
                                ${entry.value.toLocaleString()}B
                              </span>
                            </div>
                          ))}
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="public" 
                  name="Public Funding"
                  fill="#004a4a" 
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="private" 
                  name="Private Investment"
                  fill="#e6671e" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default FundingRequirementsChart;
