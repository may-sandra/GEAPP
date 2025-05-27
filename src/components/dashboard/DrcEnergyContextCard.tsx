
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Battery, Flame, Lightbulb, LineChart, Users } from 'lucide-react';

const DrcEnergyContextCard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Card className="mb-8">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/50 dark:to-green-950/50">
        <CardTitle>DRC Energy Sector Overview</CardTitle>
        <CardDescription>
          Current status, challenges, and commitments for energy development in the Democratic Republic of Congo
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4">
          <TabsList className="mb-4 grid grid-cols-5 sm:flex">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="pillars" className="flex items-center gap-2">
              <Battery className="h-4 w-4" />
              <span className="hidden sm:inline">Key Pillars</span>
            </TabsTrigger>
            <TabsTrigger value="commitments" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Commitments</span>
            </TabsTrigger>
            <TabsTrigger value="funding" className="flex items-center gap-2">
              <LineChart className="h-4 w-4" />
              <span className="hidden sm:inline">Funding Needs</span>
            </TabsTrigger>
            <TabsTrigger value="targets" className="flex items-center gap-2">
              <Flame className="h-4 w-4" />
              <span className="hidden sm:inline">Targets</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="border rounded-md p-4 bg-white/90 dark:bg-gray-900/90">
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                The Democratic Republic of Congo (DRC) is the third most populous and largest country in sub-Saharan Africa, 
                with an electricity access rate of about 20 percent - one of the highest numbers of people living without electricity in the world.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="border rounded-md p-3 bg-blue-50 dark:bg-blue-950/30">
                  <h4 className="font-medium text-blue-700 dark:text-blue-400">Current Energy Mix</h4>
                  <p className="text-sm mt-1">More than 95% of households and businesses use traditional fuels, putting pressure on forests.</p>
                </div>
                <div className="border rounded-md p-3 bg-blue-50 dark:bg-blue-950/30">
                  <h4 className="font-medium text-blue-700 dark:text-blue-400">Generation Capacity</h4>
                  <p className="text-sm mt-1">Installed capacity stands at ~2,700 MW, with Inga I and II hydropower plants accounting for over 60% (1,775 MW).</p>
                </div>
                <div className="border rounded-md p-3 bg-blue-50 dark:bg-blue-950/30">
                  <h4 className="font-medium text-blue-700 dark:text-blue-400">Energy Sources</h4>
                  <p className="text-sm mt-1">More than 98% of current generation is from hydropower, with vast potential still untapped.</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pillars" className="space-y-4">
            <div className="border rounded-md p-4 bg-white/90 dark:bg-gray-900/90">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-medium text-blue-700 dark:text-blue-400">Pillar I: Rehabilitate/Expand Infrastructure at Competitive Costs</h4>
                  <ul className="list-disc ml-5 text-sm mt-1 space-y-1">
                    <li>Hydropower potential of 100GW yet only 3 percent utilized</li>
                    <li>Very low access to electricity and clean cooking</li>
                    <li>Aging infrastructure resulting in poor quality and reliability of services</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h4 className="font-medium text-green-700 dark:text-green-400">Pillar II: Leverage Benefits of Increased Regional Integration</h4>
                  <ul className="list-disc ml-5 text-sm mt-1 space-y-1">
                    <li>Congo river basin is the largest in Africa and Grand Inga and Ruzizi 3 hydropower have the potential to transform DRC as a major electricity exporter</li>
                    <li>Inadequate transmission infrastructure and mechanisms/regulatory framework for enabling electricity trade</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <h4 className="font-medium text-purple-700 dark:text-purple-400">Pillar III: Embrace DRE and Clean Cooking Solutions</h4>
                  <ul className="list-disc ml-5 text-sm mt-1 space-y-1">
                    <li>Low electricity access rate and dispersed population make distributed renewable energy (DRE) a cost-effective solution</li>
                    <li>Affordability is a major barrier to adoption of DRE and clean cooking solutions</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4 py-2">
                  <h4 className="font-medium text-orange-700 dark:text-orange-400">Pillar IV: Incentivize Private Sector Participation</h4>
                  <ul className="list-disc ml-5 text-sm mt-1 space-y-1">
                    <li>Inadequate provisions in the Electricity Law of 2014 to promote renewable energy projects</li>
                    <li>Overlapping roles between state and local authorities and inadequate PPP framework</li>
                    <li>Ad-hoc taxes and fees and garnishment of company accounts without adequate redress mechanisms</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <h4 className="font-medium text-red-700 dark:text-red-400">Pillar V: Ensure Financially Viable Utilities</h4>
                  <ul className="list-disc ml-5 text-sm mt-1 space-y-1">
                    <li>Inadequate maintenance of aging infrastructure due to lack of funds</li>
                    <li>Tariff not sufficient to cover even operating costs</li>
                    <li>Significant receivables including from government agencies</li>
                    <li>Low collection rate and high technical and commercial losses</li>
                    <li>Debt accumulation nearing $2 billion</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="commitments" className="space-y-4">
            <div className="border rounded-md p-4 bg-white/90 dark:bg-gray-900/90">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-blue-700 dark:text-blue-400 border-b pb-2">Infrastructure & Planning</h4>
                  <ul className="list-disc ml-5 text-sm mt-3 space-y-2">
                    <li>Develop a comprehensive, least-cost integrated resource plan and master plans by 2025</li>
                    <li>Implement transparent and competitive bidding for 3,000 MWp of utility-scale solar projects</li>
                    <li>Development of the Grand Inga hydropower project and associated evacuation corridors</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-green-700 dark:text-green-400 border-b pb-2">Regional Integration</h4>
                  <ul className="list-disc ml-5 text-sm mt-3 space-y-2">
                    <li>Harmonize transmission tariffs with neighboring countries and Power Pools by 2026</li>
                    <li>Facilitate cross-border electricity trade through infrastructure development</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-purple-700 dark:text-purple-400 border-b pb-2">Distributed Energy & Clean Cooking</h4>
                  <ul className="list-disc ml-5 text-sm mt-3 space-y-2">
                    <li>Conduct multi-tier framework survey and develop national electrification strategy</li>
                    <li>Implement duty exemptions and tax relief for distributed renewable energy</li>
                    <li>Develop comprehensive national cooking strategy with action plan</li>
                    <li>Implement zero import duties on clean cooking technology solutions</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-orange-700 dark:text-orange-400 border-b pb-2">Private Sector Enablement</h4>
                  <ul className="list-disc ml-5 text-sm mt-3 space-y-2">
                    <li>Revise Electricity Law of 2014 and rural electrification tariff policy</li>
                    <li>Create streamlined review process for private mini-grids</li>
                    <li>Scale up financial support for off-grid solutions (RBF/Mawinda Fund from $0.5b to $1b)</li>
                    <li>Establish $200m credit line for mini-grid development</li>
                    <li>Implement single-window service for permitting and credit enhancement</li>
                    <li>Revise tax codes and consider tax holidays for energy projects</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-red-700 dark:text-red-400 border-b pb-2">Utility Sustainability</h4>
                  <ul className="list-disc ml-5 text-sm mt-3 space-y-2">
                    <li>Develop action plan for SNEL including organizational restructuring and internal unbundling</li>
                    <li>Implement debt restructuring and operational/commercial performance improvements</li>
                    <li>Sign performance contract with Ministry with target of 100% operational cost recovery</li>
                    <li>Regularly publish audited financial statements</li>
                    <li>Establish second electricity utility to manage new transmission lines with private participation</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="funding" className="space-y-4">
            <div className="border rounded-md p-4 bg-white/90 dark:bg-gray-900/90">
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-4">Funding Requirements (US$ Million)</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Source</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Generation</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Transmission</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Distribution</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last-mile</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Off-grid</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Clean cooking</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Public</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400">8,000</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400">3,000</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400">1,400</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400">1,600</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400">2,000</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400">100</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-medium text-gray-900 dark:text-white">16,100</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Private</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400">12,000</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400">80</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400">3,000</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400">2,400</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400">2,400</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right text-gray-500 dark:text-gray-400">20</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-medium text-gray-900 dark:text-white">19,900</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Total</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-medium text-gray-900 dark:text-white">20,000</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-medium text-gray-900 dark:text-white">3,080</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-medium text-gray-900 dark:text-white">4,400</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-medium text-gray-900 dark:text-white">4,000</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-medium text-gray-900 dark:text-white">4,400</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-medium text-gray-900 dark:text-white">120</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-medium text-gray-900 dark:text-white">36,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">All figures in US$ Million. Totals may not sum due to rounding.</p>
            </div>
          </TabsContent>

          <TabsContent value="targets" className="space-y-4">
            <div className="border rounded-md p-4 bg-white/90 dark:bg-gray-900/90">
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-4">Compact Targets</h4>
              
              <div className="mb-6">
                <h5 className="text-sm font-medium text-blue-700 dark:text-blue-400 mb-2">Access to Electricity Connections</h5>
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-md p-3 text-center">
                    <div className="text-lg font-semibold text-blue-700 dark:text-blue-400">Grid</div>
                    <div className="text-2xl font-bold">0</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-md p-3 text-center">
                    <div className="text-lg font-semibold text-blue-700 dark:text-blue-400">Mini-grid</div>
                    <div className="text-2xl font-bold">0</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-md p-3 text-center">
                    <div className="text-lg font-semibold text-blue-700 dark:text-blue-400">SHS</div>
                    <div className="text-2xl font-bold">0</div>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/40 rounded-md p-3 text-center">
                    <div className="text-lg font-semibold text-blue-700 dark:text-blue-400">Total</div>
                    <div className="text-2xl font-bold">0</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-md p-4">
                  <h5 className="text-sm font-medium text-green-700 dark:text-green-400 mb-2">Access to Clean Cooking</h5>
                  <div className="text-2xl font-bold">6%</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Growth per year</p>
                </div>
                
                <div className="border rounded-md p-4">
                  <h5 className="text-sm font-medium text-purple-700 dark:text-purple-400 mb-2">Share of Renewable Energy</h5>
                  <div className="text-2xl font-bold">95%</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Maintain while increasing generation base</p>
                </div>
                
                <div className="border rounded-md p-4">
                  <h5 className="text-sm font-medium text-orange-700 dark:text-orange-400 mb-2">Private Capital Mobilized</h5>
                  <div className="text-2xl font-bold">$20B</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">US Dollars</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default DrcEnergyContextCard;
