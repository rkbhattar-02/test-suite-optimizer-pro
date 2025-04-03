
import { useState } from "react";
import { ArrowRight, Check, FileCheck, FileSpreadsheet, HelpCircle } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import FileUploader from "@/components/import/FileUploader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const SAMPLE_TEMPLATE_URL = "#"; // This would be a real download link in a production app

const ImportPage = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  
  const handleFileUploaded = (file: File) => {
    setUploadedFile(file);
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Import Test Cases</h1>
            <p className="text-muted-foreground mt-1">
              Upload your existing test cases from Excel files or external systems
            </p>
          </div>
          <div>
            <Button variant="outline" asChild>
              <a href={SAMPLE_TEMPLATE_URL} download>
                <FileSpreadsheet className="mr-2 h-4 w-4" />
                Download Template
              </a>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="file-upload" className="space-y-6">
          <TabsList>
            <TabsTrigger value="file-upload">File Upload</TabsTrigger>
            <TabsTrigger value="api-integration">
              API Integration
              <Badge variant="outline" className="ml-2">Pro</Badge>
            </TabsTrigger>
            <TabsTrigger value="bulk-create">Bulk Create</TabsTrigger>
          </TabsList>

          <TabsContent value="file-upload">
            <div className="grid gap-6">
              <FileUploader onFileUploaded={handleFileUploaded} />
              
              {uploadedFile && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-primary" />
                      Field Mapping
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Map the columns from your file to the system fields
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </CardTitle>
                    <CardDescription>
                      Review and adjust how your source data will be imported
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between px-4 py-2 rounded-md bg-muted">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">Source</Badge>
                          <span>Test ID</span>
                        </div>
                        <ArrowRight className="h-4 w-4" />
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">Target</Badge>
                          <span>Test Case ID</span>
                        </div>
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                      
                      <div className="flex items-center justify-between px-4 py-2 rounded-md bg-muted">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">Source</Badge>
                          <span>Test Description</span>
                        </div>
                        <ArrowRight className="h-4 w-4" />
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">Target</Badge>
                          <span>Test Case Name</span>
                        </div>
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                      
                      <div className="flex items-center justify-between px-4 py-2 rounded-md bg-muted">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">Source</Badge>
                          <span>Test Priority</span>
                        </div>
                        <ArrowRight className="h-4 w-4" />
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">Target</Badge>
                          <span>Priority</span>
                        </div>
                        <Check className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Customize Mapping</Button>
                    <Button>
                      <Check className="mr-2 h-4 w-4" />
                      Import Test Cases
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="api-integration">
            <Card>
              <CardHeader>
                <CardTitle>API Integration</CardTitle>
                <CardDescription>
                  Connect to external ALM systems via API to import test cases
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center py-10">
                <div className="text-center space-y-2">
                  <Badge variant="secondary" className="mb-4">Pro Feature</Badge>
                  <h3 className="text-lg font-medium">Unlock API Integration</h3>
                  <p className="text-muted-foreground max-w-md">
                    Connect to JIRA, TestRail, Azure DevOps and more to seamlessly import and sync your test cases
                  </p>
                  <Button className="mt-4">
                    Upgrade to Pro
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="bulk-create">
            <Card>
              <CardHeader>
                <CardTitle>Bulk Create Test Cases</CardTitle>
                <CardDescription>
                  Create multiple test cases at once using a structured editor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    This feature is coming soon. Check back later!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default ImportPage;
