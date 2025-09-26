import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload as UploadIcon, MapPin, Calendar, Fish, FileText, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      toast({
        title: "Sample uploaded successfully!",
        description: "Your oceanographic data has been processed and added to the database.",
      });
    }, 2000);
  };

  if (uploadSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md shadow-depth">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-ocean-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">Upload Successful!</h2>
            <p className="text-muted-foreground mb-6">
              Your oceanographic sample has been successfully uploaded and processed.
            </p>
            <div className="space-y-2">
              <Button onClick={() => setUploadSuccess(false)} className="w-full">
                Upload Another Sample
              </Button>
              <Button variant="outline" asChild className="w-full">
                <a href="/dashboard">View Dashboard</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Upload Sample Data</h1>
          <p className="text-muted-foreground">
            Submit new oceanographic data to contribute to our biodiversity monitoring efforts
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card className="shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent" />
                Basic Information
              </CardTitle>
              <CardDescription>General details about your sample</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sample-name">Sample Name</Label>
                  <Input 
                    id="sample-name" 
                    placeholder="e.g., Great Barrier Reef Sample A1"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="collection-date">Collection Date</Label>
                  <Input 
                    id="collection-date" 
                    type="date"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description"
                  placeholder="Describe the sample collection conditions, objectives, and any notable observations..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Location Information */}
          <Card className="shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                Location Details
              </CardTitle>
              <CardDescription>Geographic information about the sample location</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="region">Ocean Region</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select ocean region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pacific">Pacific Ocean</SelectItem>
                      <SelectItem value="atlantic">Atlantic Ocean</SelectItem>
                      <SelectItem value="indian">Indian Ocean</SelectItem>
                      <SelectItem value="arctic">Arctic Ocean</SelectItem>
                      <SelectItem value="southern">Southern Ocean</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="depth">Depth (meters)</Label>
                  <Input 
                    id="depth" 
                    type="number"
                    placeholder="e.g., 25"
                    min="0"
                    max="11000"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="latitude">Latitude</Label>
                  <Input 
                    id="latitude" 
                    type="number"
                    step="0.000001"
                    placeholder="e.g., -16.2839"
                    min="-90"
                    max="90"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="longitude">Longitude</Label>
                  <Input 
                    id="longitude" 
                    type="number"
                    step="0.000001"
                    placeholder="e.g., 145.7781"
                    min="-180"
                    max="180"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Biological Data */}
          <Card className="shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fish className="w-5 h-5 text-accent" />
                Biological Data
              </CardTitle>
              <CardDescription>Species and biodiversity information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="primary-species">Primary Species Focus</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select primary species type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="coral">Coral</SelectItem>
                      <SelectItem value="fish">Fish</SelectItem>
                      <SelectItem value="marine-mammals">Marine Mammals</SelectItem>
                      <SelectItem value="phytoplankton">Phytoplankton</SelectItem>
                      <SelectItem value="seagrass">Seagrass</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="biodiversity-index">Biodiversity Index (0-100)</Label>
                  <Input 
                    id="biodiversity-index" 
                    type="number"
                    placeholder="e.g., 76"
                    min="0"
                    max="100"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="species-list">Species Observed</Label>
                <Textarea 
                  id="species-list"
                  placeholder="List the species observed during sampling (one per line or comma-separated)..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Environmental Parameters */}
          <Card className="shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                Environmental Parameters
              </CardTitle>
              <CardDescription>Water quality and environmental measurements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="temperature">Temperature (°C)</Label>
                  <Input 
                    id="temperature" 
                    type="number"
                    step="0.1"
                    placeholder="e.g., 28.5"
                    min="-2"
                    max="40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salinity">Salinity (ppt)</Label>
                  <Input 
                    id="salinity" 
                    type="number"
                    step="0.1"
                    placeholder="e.g., 35.2"
                    min="0"
                    max="50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ph">pH Level</Label>
                  <Input 
                    id="ph" 
                    type="number"
                    step="0.1"
                    placeholder="e.g., 8.1"
                    min="6"
                    max="9"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="oxygen">Dissolved Oxygen (mg/L)</Label>
                  <Input 
                    id="oxygen" 
                    type="number"
                    step="0.1"
                    placeholder="e.g., 6.8"
                    min="0"
                    max="15"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="turbidity">Turbidity (NTU)</Label>
                  <Input 
                    id="turbidity" 
                    type="number"
                    step="0.1"
                    placeholder="e.g., 2.1"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="visibility">Visibility (meters)</Label>
                  <Input 
                    id="visibility" 
                    type="number"
                    step="0.1"
                    placeholder="e.g., 15.0"
                    min="0"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* File Upload */}
          <Card className="shadow-ocean">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UploadIcon className="w-5 h-5 text-accent" />
                Supporting Files
              </CardTitle>
              <CardDescription>Upload images, data files, or additional documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent transition-colors duration-300">
                <UploadIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drag and drop files here, or click to select
                </p>
                <p className="text-xs text-muted-foreground">
                  Supported formats: Images (JPG, PNG), Data files (CSV, JSON), Documents (PDF)
                </p>
                <Input type="file" multiple className="hidden" />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button 
              type="submit" 
              size="lg" 
              disabled={isUploading}
              className="min-w-32"
            >
              {isUploading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                  Uploading...
                </>
              ) : (
                <>
                  <UploadIcon className="w-4 h-4 mr-2" />
                  Upload Sample
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;