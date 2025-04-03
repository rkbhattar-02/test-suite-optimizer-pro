
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Sample data for the coverage chart
const coverageData = [
  {
    name: "Login Module",
    current: 85,
    optimized: 92,
  },
  {
    name: "User Management",
    current: 70,
    optimized: 88,
  },
  {
    name: "Payment Processing",
    current: 60,
    optimized: 85,
  },
  {
    name: "Reporting",
    current: 75,
    optimized: 82,
  },
  {
    name: "Admin Dashboard",
    current: 65,
    optimized: 78,
  },
  {
    name: "API Integration",
    current: 55,
    optimized: 75,
  },
];

const TestCoverageChart = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Test Coverage Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={coverageData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                label={{ 
                  value: "Coverage (%)", 
                  angle: -90, 
                  position: "insideLeft",
                  style: { textAnchor: "middle" }
                }}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="current" name="Current Coverage" fill="#8B5CF6" />
              <Bar dataKey="optimized" name="Post-Optimization" fill="#6366F1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestCoverageChart;
