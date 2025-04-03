
import { useState } from "react";
import { Archive, Edit, Search, Trash } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for test cases
const testCases = [
  {
    id: "TC-1001",
    name: "Verify user login with valid credentials",
    module: "Authentication",
    priority: "High",
    status: "Active",
    executionTime: "2m 30s",
    lastModified: "2025-04-01",
  },
  {
    id: "TC-1002",
    name: "Verify user login with invalid credentials",
    module: "Authentication",
    priority: "High",
    status: "Active",
    executionTime: "1m 45s",
    lastModified: "2025-04-01",
  },
  {
    id: "TC-1003",
    name: "Verify password reset functionality",
    module: "Authentication",
    priority: "Medium",
    status: "Active",
    executionTime: "3m 15s",
    lastModified: "2025-03-30",
  },
  {
    id: "TC-2001",
    name: "Verify user registration with valid data",
    module: "User Management",
    priority: "High",
    status: "Active",
    executionTime: "4m 10s",
    lastModified: "2025-03-29",
  },
  {
    id: "TC-2002",
    name: "Verify user profile update",
    module: "User Management",
    priority: "Medium",
    status: "Inactive",
    executionTime: "2m 50s",
    lastModified: "2025-03-28",
  },
  {
    id: "TC-3001",
    name: "Verify payment processing with valid card",
    module: "Payment",
    priority: "Critical",
    status: "Active",
    executionTime: "5m 20s",
    lastModified: "2025-03-25",
  },
  {
    id: "TC-3002",
    name: "Verify payment failure handling",
    module: "Payment",
    priority: "Critical",
    status: "Active",
    executionTime: "3m 45s",
    lastModified: "2025-03-25",
  },
];

// Helper function to determine badge variant based on priority
const getPriorityVariant = (priority: string) => {
  switch (priority) {
    case "Critical":
      return "destructive";
    case "High":
      return "default";
    case "Medium":
      return "secondary";
    case "Low":
      return "outline";
    default:
      return "secondary";
  }
};

// Helper function to determine badge variant based on status
const getStatusVariant = (status: string) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "outline";
    default:
      return "secondary";
  }
};

const TestCaseTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedModule, setSelectedModule] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  // Filter test cases based on search query and filters
  const filteredTestCases = testCases.filter((testCase) => {
    const matchesSearch =
      searchQuery === "" ||
      testCase.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testCase.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesModule =
      selectedModule === "" || testCase.module === selectedModule;

    const matchesPriority =
      selectedPriority === "" || testCase.priority === selectedPriority;

    const matchesStatus =
      selectedStatus === "" || testCase.status === selectedStatus;

    return matchesSearch && matchesModule && matchesPriority && matchesStatus;
  });

  const toggleSelectRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === filteredTestCases.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredTestCases.map((tc) => tc.id));
    }
  };

  // Get unique values for filter dropdowns
  const modules = Array.from(new Set(testCases.map((tc) => tc.module)));
  const priorities = Array.from(new Set(testCases.map((tc) => tc.priority)));
  const statuses = Array.from(new Set(testCases.map((tc) => tc.status)));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Test Cases</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search test cases..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <Select
              value={selectedModule}
              onValueChange={setSelectedModule}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="All Modules" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Modules</SelectItem>
                {modules.map((module) => (
                  <SelectItem key={module} value={module}>
                    {module}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={selectedPriority}
              onValueChange={setSelectedPriority}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="All Priorities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Priorities</SelectItem>
                {priorities.map((priority) => (
                  <SelectItem key={priority} value={priority}>
                    {priority}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={selectedStatus}
              onValueChange={setSelectedStatus}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Statuses</SelectItem>
                {statuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={
                      filteredTestCases.length > 0 &&
                      selectedRows.length === filteredTestCases.length
                    }
                    onCheckedChange={toggleSelectAll}
                    aria-label="Select all"
                  />
                </TableHead>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Module</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Execution Time</TableHead>
                <TableHead>Last Modified</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTestCases.length > 0 ? (
                filteredTestCases.map((testCase) => (
                  <TableRow key={testCase.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedRows.includes(testCase.id)}
                        onCheckedChange={() => toggleSelectRow(testCase.id)}
                        aria-label={`Select ${testCase.id}`}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{testCase.id}</TableCell>
                    <TableCell>{testCase.name}</TableCell>
                    <TableCell>{testCase.module}</TableCell>
                    <TableCell>
                      <Badge
                        variant={getPriorityVariant(testCase.priority) as any}
                      >
                        {testCase.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={getStatusVariant(testCase.status) as any}
                      >
                        {testCase.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{testCase.executionTime}</TableCell>
                    <TableCell>{testCase.lastModified}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Archive className="mr-2 h-4 w-4" />
                            Archive
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={9} className="text-center py-8">
                    No test cases found matching your search.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestCaseTable;
