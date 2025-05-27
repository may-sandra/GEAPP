
import React, { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import { mapStyles } from './MapStyleSelector';

interface MapStyleChangerProps {
  selectedStyle: string;
  onChange: (style: string) => void;
}

const MapStyleChanger: React.FC<MapStyleChangerProps> = ({ selectedStyle, onChange }) => {
  const map = useMap();
  // Use a ref to track current tile layer to prevent unnecessary re-renders
  const currentTileLayerRef = useRef<L.TileLayer | null>(null);
  
  useEffect(() => {
    // Find the selected style
    const style = mapStyles.find(s => s.name === selectedStyle);
    if (!style) return;
    
    // If we have a current tile layer, remove it first
    if (currentTileLayerRef.current) {
      map.removeLayer(currentTileLayerRef.current);
      currentTileLayerRef.current = null;
    }
    
    // Add the new tile layer with proper error handling
    try {
      // Create new tile layer with proper configuration
      const tileLayer = L.tileLayer(style.url, {
        attribution: style.attribution,
        className: style.className,
        maxZoom: 19,
        // Only add subdomains if the URL template includes {s}
        ...(style.url.includes('{s}') && { subdomains: ['a', 'b', 'c'] })
      });
      
      // Add to map and store reference
      tileLayer.addTo(map);
      currentTileLayerRef.current = tileLayer;
    } catch (error) {
      console.error("Error loading map style:", error);
      // Fallback to default style if there's an error
      if (selectedStyle !== "Default") {
        onChange("Default");
      }
    }
    
    // Do not include 'onChange' in dependencies to prevent infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStyle, map]);
  
  return null;
};

export default MapStyleChanger;
