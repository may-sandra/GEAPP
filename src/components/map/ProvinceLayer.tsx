
import React, { useMemo } from 'react';
import { GeoJSON, CircleMarker, Tooltip, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useTheme } from 'next-themes';
import { calculateCentroid } from './leafletSetup';

interface ProvinceLayerProps {
  mapData: any;
  activeRegion: string | null;
  onRegionClick: (regionName: string) => void;
  onRegionHover: (regionName: string | null) => void;
}

// Color palette for provinces
const provinceColors = [
  '#006D77', // Teal
  '#83C5BE', // Light teal
  '#EDF6F9', // Off-white
  '#FFDDD2', // Light peach
  '#E29578', // Salmon
  '#006466', // Dark cyan
  '#1B4965', // Navy blue
  '#62B6CB', // Sky blue
  '#5FA8D3', // Medium blue
  '#CAE9FF', // Very light blue
  '#06D6A0', // Mint
  '#118AB2', // Cerulean
  '#073B4C', // Dark blue-green
  '#FFD166', // Yellow
  '#EF476F', // Pink
  '#9B5DE5', // Purple
  '#F15BB5', // Hot pink
  '#00BBF9', // Bright blue
  '#00F5D4', // Aqua
  '#3D5A80', // Navy
  '#98C1D9', // Light blue
  '#E0FBFC', // Pale cyan
  '#EE6C4D', // Orange
  '#293241', // Dark slate
];

const ProvinceLayer: React.FC<ProvinceLayerProps> = ({
  mapData,
  activeRegion,
  onRegionClick,
  onRegionHover
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Create a mapping of province names to colors from our palette
  const provinceColorMap = useMemo(() => {
    const colorMap: Record<string, string> = {};
    if (!mapData || !mapData.features) return colorMap;
    
    mapData.features.forEach((feature: any, index: number) => {
      const provinceName = feature.properties.ADM1_EN;
      const colorIndex = index % provinceColors.length;
      colorMap[provinceName] = provinceColors[colorIndex];
    });
    
    return colorMap;
  }, [mapData]);

  return (
    <>
      {mapData.features.map((feature: any) => {
        const provinceName = feature.properties.ADM1_EN;
        const isActive = activeRegion === provinceName;
        const provinceColor = provinceColorMap[provinceName] || '#006D77';
        
        // Calculate centroid for the province to place our marker
        const centroid = calculateCentroid(feature.geometry.coordinates[0]);
        
        return (
          <CircleMarker
            key={provinceName}
            center={[centroid[1], centroid[0]]}
            pathOptions={{
              fillColor: isActive ? '#e6671e' : provinceColor,
              color: isDark ? 'white' : 'black',
              fillOpacity: isActive ? 0.9 : 0.7,
              weight: isActive ? 2 : 1,
              className: isActive ? 'active-region' : ''
            }}
            radius={isActive ? 18 : 14}
            eventHandlers={{
              mouseover: () => {
                onRegionHover(provinceName);
              },
              mouseout: () => {
                onRegionHover(null);
              },
              click: () => onRegionClick(provinceName)
            }}
          >
            <Tooltip className="province-tooltip">
              {provinceName}
            </Tooltip>
            <Popup>
              <div className="text-center">
                <h3 className="font-bold">{provinceName}</h3>
                <p className="text-sm">Province of DRC</p>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </>
  );
};

export default ProvinceLayer;
