
import AppLayout from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, RefreshCcw, FileCheck, BarChart2 } from "lucide-react";

const AnalysisPage = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Test Analysis & Optimization</h1>
            <p className="text-muted-foreground mt-1">
              Analyze and optimize your test suite for better coverage and efficiency
            </p>
          </div>
          <div className="flex gap-2">
            <Button>
              <Play className="mr-2 h-4 w-4" />
              Run Analysis
            </Button>
            <Button variant="outline">
              <RefreshCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>

        <Tabs defaultValue="optimization" className="space-y-6">
          <TabsList className="grid grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="optimization">Test Optimization</TabsTrigger>
            <TabsTrigger value="dependencies">Dependencies</TabsTrigger>
            <TabsTrigger value="coverage">Coverage Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="optimization">
            <div className="grid gap-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Test Cases</CardTitle>
                    <CardDescription>Total test cases in analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">128</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Redundant Tests</CardTitle>
                    <CardDescription>Duplicated test functionality</CardDescription>
                  </CardHeader>
                  <CardContent className="text-amber-500">
                    <div className="text-3xl font-bold">15 (11.7%)</div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Optimized Suite</CardTitle>
                    <CardDescription>Tests after optimization</CardDescription>
                  </CardHeader>
                  <CardContent className="text-green-500">
                    <div className="text-3xl font-bold">113</div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Optimization Results</CardTitle>
                  <CardDescription>
                    Optimized test suite with redundancies removed and execution sequence optimized
                  </CardDescription>
                </CardHeader>
                <CardContent className="py-6">
                  <div className="flex flex-col items-center justify-center p-8 text-center">
                    <BarChart2 className="h-16 w-16 text-muted mb-4" />
                    <h3 className="text-lg font-medium mb-2">Run Analysis First</h3>
                    <p className="text-sm text-muted-foreground max-w-md mb-6">
                      Start an optimization analysis to identify redundancies and optimize your test suite
                    </p>
                    <Button>
                      <Play className="mr-2 h-4 w-4" />
                      Run Optimization Analysis
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="dependencies">
            <Card>
              <CardHeader>
                <CardTitle>Test Dependencies</CardTitle>
                <CardDescription>
                  Visualize and manage dependencies between test cases
                </CardDescription>
              </CardHeader>
              <CardContent className="py-6">
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <FileCheck className="h-16 w-16 text-muted mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Dependencies Data Available</h3>
                  <p className="text-sm text-muted-foreground max-w-md mb-6">
                    Run an analysis to discover dependencies between your test cases
                  </p>
                  <Button>
                    <Play className="mr-2 h-4 w-4" />
                    Run Dependencies Analysis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="coverage">
            <Card>
              <CardHeader>
                <CardTitle>Coverage Analysis</CardTitle>
                <CardDescription>
                  Review test coverage across features and requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="py-6">
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <BarChart2 className="h-16 w-16 text-muted mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Coverage Data Available</h3>
                  <p className="text-sm text-muted-foreground max-w-md mb-6">
                    Run an analysis to evaluate your test coverage across features
                  </p>
                  <Button>
                    <Play className="mr-2 h-4 w-4" />
                    Run Coverage Analysis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default AnalysisPage;
