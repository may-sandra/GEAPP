
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix Leaflet icon issues
export const setupLeafletIcons = (): void => {
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  });
  
  L.Marker.prototype.options.icon = DefaultIcon;
};

// Helper function to calculate the centroid of a polygon
export const calculateCentroid = (coordinates: number[][]): [number, number] => {
  if (!coordinates || coordinates.length === 0) return [0, 0];
  
  let sumX = 0;
  let sumY = 0;
  
  for (const point of coordinates) {
    sumX += point[0];
    sumY += point[1];
  }
  
  return [sumX / coordinates.length, sumY / coordinates.length];
};

// Map constants
export const DRC_CENTER: [number, number] = [0, 23.5];
export const DEFAULT_ZOOM = 5;
