
import React, { useState } from 'react';
import Map from '@/components/Map';
import { LocationData } from '@/components/map/types';
import LocationTable from '@/components/LocationTable';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Table2, Map as MapIcon, Download, Info, LineChart } from 'lucide-react';
import FundingRequirementsChart from '@/components/charts/FundingRequirementsChart';
import FundingGapChart from '@/components/charts/FundingGapChart';

const Maps = () => {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [activeTab, setActiveTab] = useState<string>("map");
  const [activeSection, setActiveSection] = useState<string>("geo");

  const handleLocationsUpdate = (newLocations: LocationData[]) => {
    setLocations(newLocations);
  };

  const exportToCSV = () => {
    if (locations.length === 0) return;

    const csvContent = [
      ['Program Name', 'Longitude', 'Latitude', 'Description'].join(','),
      ...locations.map(loc => [
        loc.name.replace(/,/g, ';'),
        loc.coordinates[0],
        loc.coordinates[1],
        (loc.description || '').replace(/,/g, ';')
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'geapp_program_locations.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-teal-900 dark:text-teal-100">Geographic & Data Overview</h1>
        <p className="text-muted-foreground mt-2">
          Explore energy sector data and program locations across the Democratic Republic of Congo
        </p>
      </div>

      <Tabs value={activeSection} onValueChange={setActiveSection} className="space-y-4">
        <TabsList className="mb-4">
          <TabsTrigger value="geo" className="flex items-center gap-2">
            <MapIcon className="h-4 w-4" />
            Geographic View
          </TabsTrigger>
          <TabsTrigger value="data" className="flex items-center gap-2">
            <LineChart className="h-4 w-4" />
            Data Visualization
          </TabsTrigger>
        </TabsList>

        <TabsContent value="geo" className="animate-in fade-in">
          <div className="bg-teal-900 border-l-4 border-orange p-4 mb-6 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-teal-100" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-teal-100">
                  This interactive map shows energy program distribution across DRC provinces. 
                  Click on provinces to view details and explore key energy sector data.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 mb-8">
            <Card className="teal-card">
              <CardHeader className="teal-card-header">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <CardTitle className="text-xl teal-accent">Province Map</CardTitle>
                    <CardDescription className="mt-1">
                      Interactive map showing DRC provinces and energy program focus areas
                    </CardDescription>
                  </div>
                  
                  {locations.length > 0 && (
                    <Button
                      onClick={exportToCSV}
                      size="sm"
                      className="mt-4 sm:mt-0 flex items-center gap-2 bg-orange hover:bg-orange-600"
                    >
                      <Download className="h-4 w-4" />
                      Export Data
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="px-6 py-4 bg-white/90 dark:bg-teal-900/20">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4">
                    <div className="flex justify-between items-center mb-4">
                      <TabsList className="p-1 bg-teal-100 dark:bg-teal-900/50">
                        <TabsTrigger value="map" className="flex items-center gap-2 data-[state=active]:bg-teal-900 data-[state=active]:text-white">
                          <MapIcon className="h-4 w-4" />
                          Map View
                        </TabsTrigger>
                        <TabsTrigger value="table" className="flex items-center gap-2 data-[state=active]:bg-teal-900 data-[state=active]:text-white">
                          <Table2 className="h-4 w-4" />
                          Table View
                        </TabsTrigger>
                      </TabsList>
                    </div>

                    <TabsContent value="map" className="h-[600px] border rounded-md overflow-hidden">
                      <Map onLocationsUpdate={handleLocationsUpdate} />
                    </TabsContent>
                    <TabsContent value="table" className="border rounded-md overflow-hidden">
                      <LocationTable locations={locations} />
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="data" className="animate-in fade-in">
          <div className="bg-orange-50 border-l-4 border-orange p-4 mb-6 rounded-md dark:bg-orange-950/20">
            <div className="flex">
              <div className="flex-shrink-0">
                <Info className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  These visualizations show key funding data and sector analyses for energy programs in the DRC.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 mb-8">
            <FundingRequirementsChart />
            
            <div className="grid grid-cols-1 gap-6">
              <FundingGapChart />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Maps;
