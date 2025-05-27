import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Map style options
export interface MapStyle {
  name: string;
  url: string;
  attribution: string;
  className?: string;
  displayName?: string;
}

export const mapStyles: MapStyle[] = [
  {
    name: 'Default',
    displayName: 'OpenStreetMap',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
  {
    name: 'Light',
    displayName: 'Light',
    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    className: 'light-map',
  },
  {
    name: 'Dark',
    displayName: 'Dark',
    url: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    className: 'dark-map',
  },
  {
    name: 'Satellite',
    displayName: 'Satellite',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
  },
  {
    name: 'Topo',
    displayName: 'Detailed',
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
  }
];

interface MapStyleSelectorProps {
  selectedStyle: string;
  onStyleChange: (styleName: string) => void;
}

const MapStyleSelector: React.FC<MapStyleSelectorProps> = ({ 
  selectedStyle, 
  onStyleChange 
}) => {
  return (
    <div className="mb-4 p-3 bg-teal-900/5 rounded-md">
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-sm font-medium text-teal-900 dark:text-teal-100">Map Style</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {mapStyles.map((style) => (
          <Button
            key={style.name}
            onClick={() => onStyleChange(style.name)}
            variant={selectedStyle === style.name ? "default" : "outline"}
            className={cn(
              "px-4 py-1 h-8 text-sm",
              selectedStyle === style.name 
                ? "bg-blue-600 hover:bg-blue-700 text-white" 
                : "bg-white hover:bg-gray-100 text-gray-800"
            )}
          >
            {style.displayName || style.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MapStyleSelector;
