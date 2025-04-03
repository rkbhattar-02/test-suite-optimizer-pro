
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock data for recent test cases
const recentTestCases = [
  {
    id: "TC-1001",
    name: "Login Authentication Test",
    status: "Passed",
    priority: "High",
    lastRun: "2025-04-01",
  },
  {
    id: "TC-1002",
    name: "User Registration Form",
    status: "Failed",
    priority: "Medium",
    lastRun: "2025-04-02",
  },
  {
    id: "TC-1003",
    name: "Payment Processing",
    status: "In Progress",
    priority: "Critical",
    lastRun: "2025-04-01",
  },
  {
    id: "TC-1004",
    name: "Search Functionality",
    status: "Passed",
    priority: "Low",
    lastRun: "2025-04-02",
  },
  {
    id: "TC-1005",
    name: "Data Export Feature",
    status: "Not Started",
    priority: "Medium",
    lastRun: "2025-03-30",
  },
];

// Helper function to determine badge variant based on status
const getStatusVariant = (status: string) => {
  switch (status) {
    case "Passed":
      return "success";
    case "Failed":
      return "destructive";
    case "In Progress":
      return "warning";
    case "Not Started":
      return "outline";
    default:
      return "secondary";
  }
};

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

const RecentTestCases = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Test Cases</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Last Run</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentTestCases.map((testCase) => (
              <TableRow key={testCase.id}>
                <TableCell className="font-medium">{testCase.id}</TableCell>
                <TableCell>{testCase.name}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(testCase.status) as any}>
                    {testCase.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={getPriorityVariant(testCase.priority) as any}>
                    {testCase.priority}
                  </Badge>
                </TableCell>
                <TableCell>{testCase.lastRun}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentTestCases;
