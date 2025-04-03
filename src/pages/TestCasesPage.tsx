
import AppLayout from "@/components/layout/AppLayout";
import TestCaseTable from "@/components/test-cases/TestCaseTable";
import { Button } from "@/components/ui/button";
import { FileSpreadsheet, FilePlus, Filter } from "lucide-react";

const TestCasesPage = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Test Cases</h1>
          <div className="flex gap-2">
            <Button>
              <FilePlus className="mr-2 h-4 w-4" />
              New Test Case
            </Button>
            <Button variant="outline">
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              Import Test Cases
            </Button>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Advanced Filters
            </Button>
          </div>
        </div>
        <TestCaseTable />
      </div>
    </AppLayout>
  );
};

export default TestCasesPage;
