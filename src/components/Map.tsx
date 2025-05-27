
import React, { useState, useEffect } from 'react';
import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapData from '@/data/drc_provinces.json';

// Import our extracted components
import MapStyleSelector from './map/MapStyleSelector';
import MapStyleChanger from './map/MapStyleChanger';
import RegionInfoCard from './map/RegionInfoCard';
import ProvinceLayer from './map/ProvinceLayer';
import { setupLeafletIcons, calculateCentroid, DRC_CENTER, DEFAULT_ZOOM } from './map/leafletSetup';
import { LocationData, MapProps } from './map/types';

// Initialize Leaflet icons
setupLeafletIcons();

// Add custom CSS for tooltips
import './map/map.css';

const Map: React.FC<MapProps> = ({ onLocationsUpdate }) => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [mapStyle, setMapStyle] = useState<string>("Default");

  // Only send fixed data once instead of continuously updating
  useEffect(() => {
    if (onLocationsUpdate) {
      // Create a fixed dataset from provinces centroids
      const fixedLocations: LocationData[] = mapData.features.map(feature => ({
        name: feature.properties.ADM1_EN,
        coordinates: calculateCentroid(feature.geometry.coordinates[0]),
        description: `${feature.properties.ADM1_EN} Province`
      }));
      
      onLocationsUpdate(fixedLocations);
    }
  }, [onLocationsUpdate]);

  const handleRegionClick = (regionName: string) => {
    setActiveRegion(activeRegion === regionName ? null : regionName);
  };

  const handleRegionHover = (regionName: string | null) => {
    setHoveredRegion(regionName);
  };

  const handleMapStyleChange = (value: string) => {
    setMapStyle(value);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-2/3">
        <MapStyleSelector 
          selectedStyle={mapStyle} 
          onStyleChange={handleMapStyleChange} 
        />
        
        <MapContainer 
          center={DRC_CENTER}
          zoom={DEFAULT_ZOOM} 
          style={{ height: "600px", width: "100%" }}
          className="rounded-md shadow-md"
        >
          {/* Remove the TileLayer declaration here as it's now handled by MapStyleChanger */}
          <MapStyleChanger 
            selectedStyle={mapStyle} 
            onChange={handleMapStyleChange} 
          />
          
          <ProvinceLayer 
            mapData={mapData}
            activeRegion={activeRegion}
            onRegionClick={handleRegionClick}
            onRegionHover={handleRegionHover}
          />
        </MapContainer>
      </div>

      <div className="w-full md:w-1/3 p-4">
        <RegionInfoCard 
          activeRegion={activeRegion} 
          hoveredRegion={hoveredRegion} 
        />
      </div>
    </div>
  );
};

export default Map;
