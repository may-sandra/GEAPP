
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  getCapacityGaps, 
  getFundingGaps, 
  getPrivateSectorPartners, 
  getTargetRegions 
} from '@/data/programData';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const MetricsOverview = () => {
  const regions = getTargetRegions();
  const privateSectorPartners = getPrivateSectorPartners();
  const fundingGaps = getFundingGaps();
  const capacityGaps = getCapacityGaps();

  // Prepare data for pie chart
  const regionData = Object.entries(regions).map(([region, amount], index) => ({
    name: region,
    value: amount,
    fill: `#00${3 + index}a${4 + index}a` // Generate shades of #002a2a
  }));

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="card-hover border-t-4 border-t-[#004a4a] bg-[#001a1a]/5 dark:bg-[#001a1a]/20">
        <CardHeader className="bg-[#001a1a]/10 dark:bg-[#001a1a]/30">
          <CardTitle className="text-[#006060] dark:text-teal-300">Regional Focus</CardTitle>
          <CardDescription className="dark:text-teal-100/70">Funding allocation by region</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-48 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [`$${(value / 1000000).toFixed(1)}M`, '']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="space-y-4">
            {Object.entries(regions).map(([region, amount]) => (
              <RegionItem 
                key={region}
                name={region}
                amount={amount}
                totalAmount={Object.values(regions).reduce((a, b) => a + b, 0)}
              />
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="card-hover border-t-4 border-t-[#004a4a] bg-[#001a1a]/5 dark:bg-[#001a1a]/20">
        <CardHeader className="bg-[#001a1a]/10 dark:bg-[#001a1a]/30">
          <CardTitle className="text-[#006060] dark:text-teal-300">Private Sector Engagement</CardTitle>
          <CardDescription className="dark:text-teal-100/70">Companies developing energy projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {privateSectorPartners.map(partner => (
              <div 
                key={partner}
                className="px-3 py-1.5 bg-[#003a3a]/20 dark:bg-[#003a3a]/50 text-[#00a0a0] dark:text-teal-200 rounded-full text-sm"
              >
                {partner}
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <h4 className="text-sm font-medium mb-2 text-[#004a4a] dark:text-teal-300">Sector Involvement</h4>
            <div className="grid grid-cols-2 gap-4">
              <SectorItem name="Off-Grid Solar" companies={3} />
              <SectorItem name="Mini-Grids" companies={4} />
              <SectorItem name="Grid Infrastructure" companies={1} />
              <SectorItem name="Utility Services" companies={2} />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="md:col-span-2 card-hover border-t-4 border-t-[#004a4a] bg-[#001a1a]/5 dark:bg-[#001a1a]/20">
        <CardHeader className="bg-[#001a1a]/10 dark:bg-[#001a1a]/30">
          <CardTitle className="text-[#006060] dark:text-teal-300">Technical Assistance Gaps</CardTitle>
          <CardDescription className="dark:text-teal-100/70">Government capacity and implementation gaps</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(capacityGaps).map(([area, details]) => (
              <CapacityGapCard
                key={area}
                title={area}
                description={details.description}
                taFunded={details.taFunded}
                gap={details.gap}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

interface RegionItemProps {
  name: string;
  amount: number;
  totalAmount: number;
}

const RegionItem = ({ name, amount, totalAmount }: RegionItemProps) => {
  const percentage = (amount / totalAmount) * 100;
  
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-[#002a2a] dark:text-teal-100">{name}</span>
        <span className="text-sm text-[#004a4a] dark:text-teal-200">${(amount / 1000000).toFixed(1)}M</span>
      </div>
      <div className="w-full bg-[#001a1a]/20 dark:bg-[#001a1a]/40 rounded-full h-2">
        <div 
          className="h-2 rounded-full bg-[#004a4a] dark:bg-teal-500" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-xs text-right text-[#004a4a]/70 dark:text-teal-300/70 mt-1">
        {percentage.toFixed(1)}% of total funding
      </div>
    </div>
  );
};

interface SectorItemProps {
  name: string;
  companies: number;
}

const SectorItem = ({ name, companies }: SectorItemProps) => (
  <div className="flex justify-between items-center p-2 bg-[#002a2a]/10 dark:bg-[#002a2a]/30 rounded-lg">
    <span className="text-sm text-[#004a4a] dark:text-teal-200">{name}</span>
    <span className="text-sm font-medium text-[#006060] dark:text-teal-300">{companies}</span>
  </div>
);

interface CapacityGapCardProps {
  title: string;
  description: string;
  taFunded: string;
  gap: string;
}

const CapacityGapCard = ({ title, description, taFunded, gap }: CapacityGapCardProps) => (
  <div className="bg-[#002a2a]/10 dark:bg-[#002a2a]/30 p-4 rounded-lg">
    <h4 className="text-sm font-medium mb-2 text-[#006060] dark:text-teal-300">{title}</h4>
    <p className="text-xs text-[#004a4a]/70 dark:text-teal-200/70 mb-3">{description}</p>
    <div className="space-y-2">
      <div>
        <span className="text-xs font-medium block mb-1 text-[#004a4a] dark:text-teal-200">TA Funded Status:</span>
        <span className={`text-xs ${taFunded.startsWith('Yes') ? 'text-emerald-500' : taFunded.startsWith('Partial') ? 'text-amber-500 dark:text-amber-400' : 'text-red-500 dark:text-red-400'}`}>
          {taFunded}
        </span>
      </div>
      <div>
        <span className="text-xs font-medium block mb-1 text-[#004a4a] dark:text-teal-200">Gap:</span>
        <span className="text-xs text-red-500 dark:text-red-400">{gap}</span>
      </div>
    </div>
  </div>
);

export default MetricsOverview;
