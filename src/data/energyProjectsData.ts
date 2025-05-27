
export interface EnergyProject {
  organisation: string;
  province: string;
  country: string;
  compact: string;
  projectCode: string;
  projectName: string;
  programType: string;
  activityType: string;
  approvalFY: string | number;
  closingFY: string | number;
  totalFinancing: number;
  connections: boolean;
  upstream: boolean;
  generation: boolean;
  transmission: boolean;
  sectorReforms: boolean;
  capacityBuilding: boolean;
  others: string;
  totalConnections: number;
  improvedAccess: number;
  resultsFY24Expected: number;
  resultsFY24Achieved: number;
  resultsFY25Expected: number;
  resultsFY25Achieved: number;
  resultsFY26Expected: number;
  resultsFY26Achieved: number;
  resultsFY27Expected: number;
  resultsFY27Achieved: number;
  resultsFY28Expected: number;
  resultsFY28Achieved: number;
  resultsFY29Expected: number;
  resultsFY29Achieved: number;
  resultsFY30Expected: number;
  resultsFY30Achieved: number;
  financingAccess: number;
}

export const energyProjects: EnergyProject[] = [
  {
    organisation: "AfDB",
    province: "East",
    country: "DRC",
    compact: "Y",
    projectCode: "P-CD-FA0-011",
    projectName: "PROJET D'APPUI A LA GOUVERNANCE ET A L'AMELIORATION DU SYSTEME ELECTRIQUE (PAGASE)",
    programType: "",
    activityType: "",
    approvalFY: 2016,
    closingFY: 2026,
    totalFinancing: 126877400,
    connections: false,
    upstream: false,
    generation: false,
    transmission: false,
    sectorReforms: false,
    capacityBuilding: false,
    others: "",
    totalConnections: 680000,
    improvedAccess: 0,
    resultsFY24Expected: 226666.6667,
    resultsFY24Achieved: 0,
    resultsFY25Expected: 453333.3333,
    resultsFY25Achieved: 0,
    resultsFY26Expected: 680000,
    resultsFY26Achieved: 0,
    resultsFY27Expected: 680000,
    resultsFY27Achieved: 0,
    resultsFY28Expected: 680000,
    resultsFY28Achieved: 0,
    resultsFY29Expected: 680000,
    resultsFY29Achieved: 0,
    resultsFY30Expected: 680000,
    resultsFY30Achieved: 0,
    financingAccess: 126877400
  },
  {
    organisation: "WB",
    province: "East",
    country: "DRC",
    compact: "Y",
    projectCode: "P156208",
    projectName: "DRC Electricity Access & Services Expansion (EASE)",
    programType: "",
    activityType: "",
    approvalFY: 2017,
    closingFY: 2024,
    totalFinancing: 145000000,
    connections: true,
    upstream: true,
    generation: true,
    transmission: true,
    sectorReforms: true,
    capacityBuilding: true,
    others: "",
    totalConnections: 2250000,
    improvedAccess: 0,
    resultsFY24Expected: 3000000,
    resultsFY24Achieved: 0,
    resultsFY25Expected: 3000000,
    resultsFY25Achieved: 0,
    resultsFY26Expected: 3000000,
    resultsFY26Achieved: 0,
    resultsFY27Expected: 3000000,
    resultsFY27Achieved: 0,
    resultsFY28Expected: 3000000,
    resultsFY28Achieved: 0,
    resultsFY29Expected: 3000000,
    resultsFY29Achieved: 0,
    resultsFY30Expected: 3000000,
    resultsFY30Achieved: 0,
    financingAccess: 145000000
  },
  {
    organisation: "AfDB & GCF",
    province: "East",
    country: "DRC",
    compact: "",
    projectCode: "FP096",
    projectName: "DRC Green Mini-Grid Program",
    programType: "",
    activityType: "",
    approvalFY: 2018,
    closingFY: 2027,
    totalFinancing: 87000000,
    connections: true,
    upstream: true,
    generation: true,
    transmission: true,
    sectorReforms: true,
    capacityBuilding: true,
    others: "",
    totalConnections: 0,
    improvedAccess: 0,
    resultsFY24Expected: 0,
    resultsFY24Achieved: 0,
    resultsFY25Expected: 0,
    resultsFY25Achieved: 0,
    resultsFY26Expected: 0,
    resultsFY26Achieved: 0,
    resultsFY27Expected: 0,
    resultsFY27Achieved: 0,
    resultsFY28Expected: 0,
    resultsFY28Achieved: 0,
    resultsFY29Expected: 0,
    resultsFY29Achieved: 0,
    resultsFY30Expected: 0,
    resultsFY30Achieved: 0,
    financingAccess: 87000000
  },
  {
    organisation: "EU",
    province: "East",
    country: "DRC",
    compact: "",
    projectCode: "",
    projectName: "Programme Electrify (Nuru) - Equity and debt",
    programType: "",
    activityType: "",
    approvalFY: 2018,
    closingFY: 0,
    totalFinancing: 1500000,
    connections: true,
    upstream: false,
    generation: true,
    transmission: true,
    sectorReforms: false,
    capacityBuilding: false,
    others: "",
    totalConnections: 0,
    improvedAccess: 0,
    resultsFY24Expected: 0,
    resultsFY24Achieved: 0,
    resultsFY25Expected: 0,
    resultsFY25Achieved: 0,
    resultsFY26Expected: 0,
    resultsFY26Achieved: 0,
    resultsFY27Expected: 0,
    resultsFY27Achieved: 0,
    resultsFY28Expected: 0,
    resultsFY28Achieved: 0,
    resultsFY29Expected: 0,
    resultsFY29Achieved: 0,
    resultsFY30Expected: 0,
    resultsFY30Achieved: 0,
    financingAccess: 1500000
  },
  {
    organisation: "AfDB",
    province: "East",
    country: "DRC",
    compact: "",
    projectCode: "",
    projectName: "Uganda (Nkenda) – D R Congo (Beni-Bunia-Butembo) 220 kV (400kV) Power Interconnection Project",
    programType: "",
    activityType: "",
    approvalFY: 2019,
    closingFY: 2024,
    totalFinancing: 160000000,
    connections: false,
    upstream: false,
    generation: false,
    transmission: false,
    sectorReforms: false,
    capacityBuilding: false,
    others: "",
    totalConnections: 0,
    improvedAccess: 0,
    resultsFY24Expected: 0,
    resultsFY24Achieved: 0,
    resultsFY25Expected: 0,
    resultsFY25Achieved: 0,
    resultsFY26Expected: 0,
    resultsFY26Achieved: 0,
    resultsFY27Expected: 0,
    resultsFY27Achieved: 0,
    resultsFY28Expected: 0,
    resultsFY28Achieved: 0,
    resultsFY29Expected: 0,
    resultsFY29Achieved: 0,
    resultsFY30Expected: 0,
    resultsFY30Achieved: 0,
    financingAccess: 160000000
  },
  {
    organisation: "EU",
    province: "East",
    country: "DRC",
    compact: "",
    projectCode: "",
    projectName: "Progamme Environmental dans le Parc Virunga et Garamba (3 mini centrales hydroélectriques)",
    programType: "",
    activityType: "",
    approvalFY: 2021,
    closingFY: 2027,
    totalFinancing: 21000000,
    connections: true,
    upstream: false,
    generation: true,
    transmission: true,
    sectorReforms: false,
    capacityBuilding: false,
    others: "",
    totalConnections: 0,
    improvedAccess: 0,
    resultsFY24Expected: 0,
    resultsFY24Achieved: 0,
    resultsFY25Expected: 0,
    resultsFY25Achieved: 0,
    resultsFY26Expected: 0,
    resultsFY26Achieved: 0,
    resultsFY27Expected: 0,
    resultsFY27Achieved: 0,
    resultsFY28Expected: 0,
    resultsFY28Achieved: 0,
    resultsFY29Expected: 0,
    resultsFY29Achieved: 0,
    resultsFY30Expected: 0,
    resultsFY30Achieved: 0,
    financingAccess: 21000000
  },
  {
    organisation: "WB",
    province: "East",
    country: "DRC",
    compact: "Y",
    projectCode: "P173506",
    projectName: "Access Governance & Reform for the Electricity and Water Sectors Project",
    programType: "",
    activityType: "",
    approvalFY: 2022,
    closingFY: 2030,
    totalFinancing: 634000000,
    connections: true,
    upstream: true,
    generation: true,
    transmission: true,
    sectorReforms: true,
    capacityBuilding: true,
    others: "",
    totalConnections: 5000000,
    improvedAccess: 0,
    resultsFY24Expected: 0,
    resultsFY24Achieved: 0,
    resultsFY25Expected: 50000,
    resultsFY25Achieved: 0,
    resultsFY26Expected: 300000,
    resultsFY26Achieved: 0,
    resultsFY27Expected: 1500000,
    resultsFY27Achieved: 0,
    resultsFY28Expected: 3200000,
    resultsFY28Achieved: 0,
    resultsFY29Expected: 5000000,
    resultsFY29Achieved: 0,
    resultsFY30Expected: 5000000,
    resultsFY30Achieved: 0,
    financingAccess: 634000000
  },
  {
    organisation: "KFW",
    province: "East",
    country: "DRC",
    compact: "",
    projectCode: "",
    projectName: "Ligne de transmission Kamanyola agglomération Bukavu",
    programType: "",
    activityType: "",
    approvalFY: 2022,
    closingFY: 0,
    totalFinancing: 23000000,
    connections: true,
    upstream: false,
    generation: false,
    transmission: true,
    sectorReforms: false,
    capacityBuilding: false,
    others: "",
    totalConnections: 0,
    improvedAccess: 0,
    resultsFY24Expected: 0,
    resultsFY24Achieved: 0,
    resultsFY25Expected: 0,
    resultsFY25Achieved: 0,
    resultsFY26Expected: 0,
    resultsFY26Achieved: 0,
    resultsFY27Expected: 0,
    resultsFY27Achieved: 0,
    resultsFY28Expected: 0,
    resultsFY28Achieved: 0,
    resultsFY29Expected: 0,
    resultsFY29Achieved: 0,
    resultsFY30Expected: 0,
    resultsFY30Achieved: 0,
    financingAccess: 23000000
  },
  {
    organisation: "Sustainable Energy for All",
    province: "East",
    country: "DRC",
    compact: "",
    projectCode: "",
    projectName: "Universal Energy Facility",
    programType: "",
    activityType: "",
    approvalFY: 2023,
    closingFY: 0,
    totalFinancing: 3800000,
    connections: true,
    upstream: false,
    generation: false,
    transmission: false,
    sectorReforms: false,
    capacityBuilding: false,
    others: "",
    totalConnections: 0,
    improvedAccess: 0,
    resultsFY24Expected: 0,
    resultsFY24Achieved: 0,
    resultsFY25Expected: 0,
    resultsFY25Achieved: 0,
    resultsFY26Expected: 0,
    resultsFY26Achieved: 0,
    resultsFY27Expected: 0,
    resultsFY27Achieved: 0,
    resultsFY28Expected: 0,
    resultsFY28Achieved: 0,
    resultsFY29Expected: 0,
    resultsFY29Achieved: 0,
    resultsFY30Expected: 0,
    resultsFY30Achieved: 0,
    financingAccess: 3800000
  },
  {
    organisation: "WB (MIGA)",
    province: "East",
    country: "DRC",
    compact: "",
    projectCode: "MIGA-14609",
    projectName: "Nuru Solar-Hybrid Mini Grids",
    programType: "",
    activityType: "",
    approvalFY: 2024,
    closingFY: 2029,
    totalFinancing: 32900000,
    connections: true,
    upstream: true,
    generation: true,
    transmission: true,
    sectorReforms: true,
    capacityBuilding: true,
    others: "",
    totalConnections: 0,
    improvedAccess: 0,
    resultsFY24Expected: 0,
    resultsFY24Achieved: 0,
    resultsFY25Expected: 0,
    resultsFY25Achieved: 0,
    resultsFY26Expected: 0,
    resultsFY26Achieved: 0,
    resultsFY27Expected: 0,
    resultsFY27Achieved: 0,
    resultsFY28Expected: 0,
    resultsFY28Achieved: 0,
    resultsFY29Expected: 0,
    resultsFY29Achieved: 0,
    resultsFY30Expected: 0,
    resultsFY30Achieved: 0,
    financingAccess: 32900000
  },
  {
    organisation: "Japan",
    province: "East",
    country: "DRC",
    compact: "",
    projectCode: "",
    projectName: "Projet d'Amélioration del'accès à l'Electricité dans le District du Mont Amba à Kinshasa",
    programType: "",
    activityType: "",
    approvalFY: 2024,
    closingFY: 2026,
    totalFinancing: 18000000,
    connections: false,
    upstream: false,
    generation: false,
    transmission: false,
    sectorReforms: false,
    capacityBuilding: false,
    others: "",
    totalConnections: 0,
    improvedAccess: 0,
    resultsFY24Expected: 0,
    resultsFY24Achieved: 0,
    resultsFY25Expected: 0,
    resultsFY25Achieved: 0,
    resultsFY26Expected: 0,
    resultsFY26Achieved: 0,
    resultsFY27Expected: 0,
    resultsFY27Achieved: 0,
    resultsFY28Expected: 0,
    resultsFY28Achieved: 0,
    resultsFY29Expected: 0,
    resultsFY29Achieved: 0,
    resultsFY30Expected: 0,
    resultsFY30Achieved: 0,
    financingAccess: 18000000
  },
  {
    organisation: "KFW",
    province: "East",
    country: "DRC",
    compact: "",
    projectCode: "",
    projectName: "Programme pour l'amélioration de l'approvionnement durable en electricité",
    programType: "",
    activityType: "",
    approvalFY: 2024,
    closingFY: 0,
    totalFinancing: 9000000,
    connections: false,
    upstream: false,
    generation: false,
    transmission: false,
    sectorReforms: false,
    capacityBuilding: true,
    others: "",
    totalConnections: 0,
    improvedAccess: 0,
    resultsFY24Expected: 0,
    resultsFY24Achieved: 0,
    resultsFY25Expected: 0,
    resultsFY25Achieved: 0,
    resultsFY26Expected: 0,
    resultsFY26Achieved: 0,
    resultsFY27Expected: 0,
    resultsFY27Achieved: 0,
    resultsFY28Expected: 0,
    resultsFY28Achieved: 0,
    resultsFY29Expected: 0,
    resultsFY29Achieved: 0,
    resultsFY30Expected: 0,
    resultsFY30Achieved: 0,
    financingAccess: 9000000
  },
  // I'm adding a few more projects to represent the data in the table
  {
    organisation: "KFW",
    province: "East",
    country: "DRC",
    compact: "",
    projectCode: "",
    projectName: "Ligne de transmission RDC-Rwanda (dans le cadre du NELSAP) - Poste de Goma",
    programType: "",
    activityType: "",
    approvalFY: 2024,
    closingFY: 0,
    totalFinancing: 18000000,
    connections: true,
    upstream: false,
    generation: false,
    transmission: true,
    sectorReforms: false,
    capacityBuilding: false,
    others: "",
    totalConnections: 0,
    improvedAccess: 0,
    resultsFY24Expected: 0,
    resultsFY24Achieved: 0,
    resultsFY25Expected: 0,
    resultsFY25Achieved: 0,
    resultsFY26Expected: 0,
    resultsFY26Achieved: 0,
    resultsFY27Expected: 0,
    resultsFY27Achieved: 0,
    resultsFY28Expected: 0,
    resultsFY28Achieved: 0,
    resultsFY29Expected: 0,
    resultsFY29Achieved: 0,
    resultsFY30Expected: 0,
    resultsFY30Achieved: 0,
    financingAccess: 18000000
  },
  {
    organisation: "UNDP",
    province: "East",
    country: "DRC",
    compact: "",
    projectCode: "GEF ID: 11043",
    projectName: "Africa Mini-Grid Program (AMP) National Project",
    programType: "",
    activityType: "",
    approvalFY: 0,
    closingFY: 0,
    totalFinancing: 908716,
    connections: true,
    upstream: true,
    generation: true,
    transmission: true,
    sectorReforms: false,
    capacityBuilding: true,
    others: "Focus on TA for mini-grids, including improvements to the regulatory framework. The AMP project is providing TA support on minigrids to a broader PDL-145T project implemented by UNDP.",
    totalConnections: 342168,
    improvedAccess: 0,
    resultsFY24Expected: 0,
    resultsFY24Achieved: 0,
    resultsFY25Expected: 0,
    resultsFY25Achieved: 0,
    resultsFY26Expected: 0,
    resultsFY26Achieved: 0,
    resultsFY27Expected: 0,
    resultsFY27Achieved: 0,
    resultsFY28Expected: 342168,
    resultsFY28Achieved: 0,
    resultsFY29Expected: 0,
    resultsFY29Achieved: 0,
    resultsFY30Expected: 0,
    resultsFY30Achieved: 0,
    financingAccess: 908716
  }
];

// Utility functions
export const getTotalProjectFinancing = (): number => {
  return energyProjects.reduce((total, project) => total + project.totalFinancing, 0);
};

export const getTotalConnectionsTarget = (): number => {
  return energyProjects.reduce((total, project) => total + (project.totalConnections || 0), 0);
};

export const getOrganizationCount = (): number => {
  const uniqueOrgs = new Set(energyProjects.map(project => project.organisation));
  return uniqueOrgs.size;
};

export const getProjectsByYear = (): Record<string, number> => {
  const years: Record<string, number> = {};
  
  energyProjects.forEach(project => {
    const year = project.approvalFY;
    if (year && year !== 0) {
      const yearStr = year.toString();
      if (!years[yearStr]) years[yearStr] = 0;
      years[yearStr] += 1;
    }
  });
  
  return years;
};

export const getFinancingByOrganization = (): Record<string, number> => {
  const orgs: Record<string, number> = {};
  
  energyProjects.forEach(project => {
    const org = project.organisation;
    if (!orgs[org]) orgs[org] = 0;
    orgs[org] += project.totalFinancing;
  });
  
  return orgs;
};

export const getProjectTypes = (): Record<string, number> => {
  const types = {
    connections: 0,
    upstream: 0,
    generation: 0,
    transmission: 0,
    sectorReforms: 0,
    capacityBuilding: 0
  };
  
  energyProjects.forEach(project => {
    if (project.connections) types.connections += 1;
    if (project.upstream) types.upstream += 1;
    if (project.generation) types.generation += 1;
    if (project.transmission) types.transmission += 1;
    if (project.sectorReforms) types.sectorReforms += 1;
    if (project.capacityBuilding) types.capacityBuilding += 1;
  });
  
  return types;
};
