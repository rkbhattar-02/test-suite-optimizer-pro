
import { BarChart2, FileCheck2, Files, History } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import StatCard from "@/components/dashboard/StatCard";
import RecentTestCases from "@/components/dashboard/RecentTestCases";
import TestCoverageChart from "@/components/dashboard/TestCoverageChart";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex gap-2">
            <Button>
              <Files className="mr-2 h-4 w-4" />
              New Test Case
            </Button>
            <Button variant="outline">
              <FileCheck2 className="mr-2 h-4 w-4" />
              Run Optimization
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Test Cases"
            value="1,234"
            icon={Files}
            trend={5}
          />
          <StatCard
            title="Average Execution Time"
            value="3m 45s"
            description="Per test case"
            icon={History}
            trend={-8}
          />
          <StatCard
            title="Coverage"
            value="78%"
            description="Across all features"
            icon={FileCheck2}
            trend={12}
          />
          <StatCard
            title="Redundancy Detected"
            value="12%"
            description="Duplicated test cases"
            icon={BarChart2}
            trend={-3}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <TestCoverageChart />
          <RecentTestCases />
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
