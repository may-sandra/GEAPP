
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { EnergyProject } from '@/data/energyProjectsData';
import { Search, Download, ChevronDown, Check, X } from 'lucide-react';

interface ProjectsTableProps {
  projects: EnergyProject[];
}

const ProjectsTable = ({ projects }: ProjectsTableProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter projects based on search query
  const filteredProjects = projects.filter(
    project => 
      project.projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.organisation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.projectCode.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Paginate projects
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Generate pagination buttons
  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <Button
        key={i}
        variant={currentPage === i ? "default" : "outline"}
        size="sm"
        onClick={() => setCurrentPage(i)}
        className="w-8 h-8 p-0"
      >
        {i}
      </Button>
    );
  }

  // Format currency
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Format number with commas
  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  // Export data as CSV
  const exportToCSV = () => {
    if (filteredProjects.length === 0) return;

    // Create CSV content
    const headers = Object.keys(filteredProjects[0]);
    const csvContent = [
      // Header row
      headers.join(','),
      // Data rows
      ...filteredProjects.map(project => 
        headers.map(header => {
          const value = project[header as keyof EnergyProject];
          // Handle string values with commas by wrapping in quotes
          return typeof value === 'string' && value.includes(',') 
            ? `"${value}"` 
            : value;
        }).join(',')
      )
    ].join('\n');

    // Create blob and download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'drc_energy_projects.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const BooleanIcon = ({ value }: { value: boolean }) => (
    value ? <Check className="h-4 w-4 text-green-500" /> : <X className="h-4 w-4 text-red-500" />
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search projects..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button
          onClick={exportToCSV}
          className="ml-2 flex items-center gap-2 bg-green-600 hover:bg-green-700"
        >
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="rounded-md border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap font-medium">Organization</TableHead>
                <TableHead className="whitespace-nowrap font-medium">Project Name</TableHead>
                <TableHead className="whitespace-nowrap font-medium">Project Code</TableHead>
                <TableHead className="whitespace-nowrap font-medium">Approval FY</TableHead>
                <TableHead className="whitespace-nowrap font-medium">Closing FY</TableHead>
                <TableHead className="whitespace-nowrap font-medium">Total Financing</TableHead>
                <TableHead className="whitespace-nowrap font-medium">Connections</TableHead>
                <TableHead className="whitespace-nowrap font-medium">Generation</TableHead>
                <TableHead className="whitespace-nowrap font-medium">Transmission</TableHead>
                <TableHead className="whitespace-nowrap font-medium">Capacity Building</TableHead>
                <TableHead className="whitespace-nowrap font-medium">Total Target</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentProjects.length > 0 ? (
                currentProjects.map((project, index) => (
                  <TableRow key={index}>
                    <TableCell className="whitespace-nowrap font-medium">{project.organisation}</TableCell>
                    <TableCell className="max-w-[300px] truncate" title={project.projectName}>{project.projectName}</TableCell>
                    <TableCell>{project.projectCode || "-"}</TableCell>
                    <TableCell>{project.approvalFY || "-"}</TableCell>
                    <TableCell>{project.closingFY || "-"}</TableCell>
                    <TableCell>{formatCurrency(project.totalFinancing)}</TableCell>
                    <TableCell className="text-center"><BooleanIcon value={project.connections} /></TableCell>
                    <TableCell className="text-center"><BooleanIcon value={project.generation} /></TableCell>
                    <TableCell className="text-center"><BooleanIcon value={project.transmission} /></TableCell>
                    <TableCell className="text-center"><BooleanIcon value={project.capacityBuilding} /></TableCell>
                    <TableCell>
                      {project.totalConnections ? formatNumber(project.totalConnections) : "-"}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={11} className="h-24 text-center">
                    No projects found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          
          <div className="flex items-center space-x-1">
            {paginationButtons}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProjectsTable;
