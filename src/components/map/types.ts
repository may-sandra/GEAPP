
export interface LocationData {
  name: string;
  coordinates: [number, number];
  description?: string;
}

export interface MapProps {
  onLocationsUpdate?: (locations: LocationData[]) => void;
}
