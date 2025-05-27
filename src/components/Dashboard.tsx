
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { energyProjects } from '@/data/energyProjectsData';
import DashboardHeader from './dashboard/DashboardHeader';
import ProjectsTable from './dashboard/ProjectsTable';
import ProjectTypesCard from './dashboard/ProjectTypesCard';
import OrganizationsCard from './dashboard/OrganizationsCard';
import DrcEnergyContextCard from './dashboard/DrcEnergyContextCard';
import FundingRequirementsChart from './charts/FundingRequirementsChart';
import FundingGapChart from './charts/FundingGapChart';

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader />
      
      <DrcEnergyContextCard />
      
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <FundingRequirementsChart />
        <FundingGapChart />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <ProjectTypesCard />
        <OrganizationsCard />
      </div>
      
      <Card className="teal-card shadow-md">
        <CardHeader className="teal-card-header py-4">
          <CardTitle className="teal-accent text-lg">DRC Energy Projects</CardTitle>
          <CardDescription>
            Comprehensive database of energy initiatives in the Democratic Republic of Congo
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <ProjectsTable projects={energyProjects} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
