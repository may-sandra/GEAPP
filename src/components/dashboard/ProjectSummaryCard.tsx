
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface ProjectSummaryCardProps {
  title: string;
  value: string;
  description: string;
  compareValue?: string;
  trend?: string;
  trendUp?: boolean;
  progress?: number;
  className?: string;
}

const ProjectSummaryCard = ({ 
  title, 
  value, 
  description, 
  compareValue,
  trend, 
  trendUp, 
  progress,
  className 
}: ProjectSummaryCardProps) => (
  <Card className={cn("overflow-hidden card-hover bg-[#001a1a]/5 dark:bg-[#001a1a]/20", className)}>
    <CardHeader className="pb-2 bg-[#001a1a]/10 dark:bg-[#001a1a]/30">
      <CardTitle className="text-sm font-medium text-[#006060] dark:text-teal-300">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex items-baseline justify-between">
        <div className="text-3xl font-bold text-[#002a2a] dark:text-teal-100">{value}</div>
        {compareValue && (
          <div className="text-sm font-medium text-[#e6671e] dark:text-orange-300">
            {compareValue}
          </div>
        )}
        {trend && (
          <div className={cn(
            "text-sm font-medium",
            trendUp 
              ? "text-[#004a4a] dark:text-teal-300" 
              : "text-[#e6671e] dark:text-orange-300"
          )}>
            {trend}
          </div>
        )}
      </div>
      <p className="text-xs text-[#004a4a]/70 dark:text-teal-200/70 mt-1">{description}</p>
      {typeof progress === 'number' && (
        <Progress value={progress} className="h-1 mt-4 bg-[#002a2a]/20 dark:bg-[#002a2a]/40" indicatorClassName="bg-[#004a4a] dark:bg-teal-500" />
      )}
    </CardContent>
  </Card>
);

export default ProjectSummaryCard;
