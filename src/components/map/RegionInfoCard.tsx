
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface RegionInfoCardProps {
  activeRegion: string | null;
  hoveredRegion: string | null;
}

const RegionInfoCard: React.FC<RegionInfoCardProps> = ({ 
  activeRegion, 
  hoveredRegion 
}) => {
  if (hoveredRegion && !activeRegion) {
    return (
      <Card className="mb-4 bg-teal-900 text-white border-teal-700">
        <CardContent className="pt-4">
          <h3 className="text-lg font-semibold mb-2">{hoveredRegion}</h3>
          <p className="text-sm">{hoveredRegion} Province</p>
        </CardContent>
      </Card>
    );
  }

  if (activeRegion) {
    return (
      <Card className="bg-orange dark:bg-orange-800 text-white border-orange-400">
        <CardContent className="pt-4">
          <h3 className="text-lg font-semibold mb-2">{activeRegion}</h3>
          <p className="text-sm">{activeRegion} Province</p>
          <p className="text-sm mt-2 text-orange-100">
            Click again to deactivate.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="text-center mt-6">
      <p className="text-sm text-teal-600 dark:text-teal-400">Hover or click a province to see details.</p>
    </div>
  );
};

export default RegionInfoCard;
