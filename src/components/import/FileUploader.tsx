
import { useState } from "react";
import { FileSpreadsheet, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";

interface FileUploaderProps {
  onFileUploaded?: (file: File) => void;
}

const FileUploader = ({ onFileUploaded }: FileUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      validateAndProcessFile(droppedFile);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndProcessFile(e.target.files[0]);
    }
  };

  const validateAndProcessFile = (file: File) => {
    const validExtensions = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];
    
    if (!validExtensions.includes(file.type)) {
      toast({
        title: "Invalid File Type",
        description: "Please upload Excel (.xlsx, .xls) files only.",
        variant: "destructive",
      });
      return;
    }
    
    setFile(file);

    // Simulate upload progress
    simulateUpload(file);
  };

  const simulateUpload = (file: File) => {
    setUploading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 10;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setUploading(false);
          
          toast({
            title: "Upload Complete",
            description: `File "${file.name}" has been uploaded successfully.`,
          });
          
          if (onFileUploaded) {
            onFileUploaded(file);
          }
          
          return 100;
        }
        
        return newProgress;
      });
    }, 300);
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div
          className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-10 transition-colors ${
            dragActive ? "border-primary bg-primary/5" : "border-gray-300"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center gap-4">
            {!file ? (
              <>
                <div className="rounded-full bg-primary/10 p-4">
                  <FileSpreadsheet className="h-10 w-10 text-primary" />
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <h3 className="text-lg font-semibold">
                    Drag and drop your test case file
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Supports Excel (.xlsx, .xls) files
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Or click to browse files
                  </p>
                </div>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".xlsx,.xls"
                  onChange={handleChange}
                />
                <Button
                  size="sm"
                  onClick={() => document.getElementById("file-upload")?.click()}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Browse Files
                </Button>
              </>
            ) : (
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="flex items-center gap-2 text-center">
                  <FileSpreadsheet className="h-8 w-8 text-primary" />
                  <div className="text-left">
                    <h3 className="font-medium">{file.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                
                {uploading && (
                  <div className="w-full space-y-2">
                    <Progress value={progress} className="w-full" />
                    <p className="text-xs text-center text-muted-foreground">
                      Uploading... {progress}%
                    </p>
                  </div>
                )}
                
                {!uploading && (
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={() => {
                        // Reset file selection
                        setFile(null);
                        setProgress(0);
                      }}
                      variant="outline"
                    >
                      Choose Another File
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FileUploader;
