
import React from 'react';
import { Card } from '@/components/ui/card';
import ProjectSummaryCard from './ProjectSummaryCard';
import { 
  getTotalProjectFinancing, 
  getTotalConnectionsTarget,
  getOrganizationCount,
  energyProjects
} from '@/data/energyProjectsData';

const DashboardHeader = () => {
  // Funding data in millions
  const totalFinancing = 1700; // $1.7B
  const totalFundingNeed = 16000; // $16B
  const fundingGap = totalFundingNeed - totalFinancing;
  const fundingProgress = Math.round((totalFinancing / totalFundingNeed) * 100); 
  
  // Connection data in millions
  const totalConnections = 40.47; // 40.47M target connections
  const connectionsAchieved = 8.3; // 8.3M achieved connections
  const connectionsGap = totalConnections - connectionsAchieved;
  const connectionProgress = Math.round((connectionsAchieved / totalConnections) * 100);
  
  const organizationCount = getOrganizationCount();
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <ProjectSummaryCard 
        title="Current Funding" 
        value={`$1.7B`} 
        description={`of $16B required (${fundingProgress}%)`}
        compareValue="$14.3B gap"
        progress={fundingProgress}
        className="border-t-4 border-t-[#004a4a]"
      />
      <ProjectSummaryCard 
        title="Connections Achieved" 
        value={`8.3M`} 
        description={`of 40.5M target (${connectionProgress}%)`}
        compareValue="32.2M gap"
        progress={connectionProgress}
        className="border-t-4 border-t-[#e6671e]"
      />
      <ProjectSummaryCard 
        title="Active Programs" 
        value={energyProjects.length.toString()} 
        description="Currently in progress"
        className="border-t-4 border-t-[#004a4a]"
      />
      <ProjectSummaryCard 
        title="Organizations" 
        value={organizationCount.toString()} 
        description="Working in DRC energy"
        className="border-t-4 border-t-[#e6671e]"
      />
    </div>
  );
};

export default DashboardHeader;
