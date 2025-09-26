import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, Fish, Thermometer, Waves, Activity } from "lucide-react";

// Mock data for demonstration
const mockSampleData = {
  "1": {
    id: "1",
    location: "Great Barrier Reef",
    coordinates: "-16.2839, 145.7781",
    species: "Coral",
    date: "2024-01-15",
    time: "10:30 AM",
    biodiversityIndex: 76,
    temperature: 28.5,
    depth: 15,
    salinity: 35.2,
    ph: 8.1,
    oxygen: 6.8,
    description: "Coral reef ecosystem showing signs of recovery after recent conservation efforts. Increased presence of juvenile fish species observed.",
    findings: [
      "45 different coral species identified",
      "Increased fish population by 12% compared to last month",
      "Water quality within normal parameters",
      "Minor bleaching observed in outer reef areas"
    ],
    status: "healthy"
  },
  "2": {
    id: "2",
    location: "Monterey Bay",
    coordinates: "36.6002, -121.9000",
    species: "Fish",
    date: "2024-01-20",
    time: "2:15 PM",
    biodiversityIndex: 89,
    temperature: 15.2,
    depth: 25,
    salinity: 33.8,
    ph: 7.9,
    oxygen: 7.2,
    description: "Rich marine ecosystem with diverse fish populations and healthy kelp forest structure.",
    findings: [
      "78 fish species documented",
      "Healthy kelp forest coverage",
      "Sea otter population stable",
      "No significant pollution indicators"
    ],
    status: "excellent"
  }
};

const SampleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const sample = id ? mockSampleData[id as keyof typeof mockSampleData] : null;

  if (!sample) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold mb-2">Sample Not Found</h2>
            <p className="text-muted-foreground mb-4">The requested sample could not be found.</p>
            <Button asChild>
              <Link to="/dashboard">Return to Dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const statusColor = {
    excellent: "bg-accent text-accent-foreground",
    healthy: "bg-secondary text-secondary-foreground",
    concerning: "bg-destructive text-destructive-foreground"
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/dashboard" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary mb-2">{sample.location}</h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {sample.coordinates}
              </p>
            </div>
            <Badge className={statusColor[sample.status as keyof typeof statusColor]}>
              {sample.status.charAt(0).toUpperCase() + sample.status.slice(1)}
            </Badge>
          </div>
        </div>

        {/* Sample Overview */}
        <Card className="mb-6 shadow-ocean">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-accent" />
              Sample Overview
            </CardTitle>
            <CardDescription>Basic information about this oceanographic sample</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ocean-gradient rounded-lg flex items-center justify-center">
                  <Fish className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Species Focus</p>
                  <p className="font-semibold">{sample.species}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ocean-gradient rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date & Time</p>
                  <p className="font-semibold">{sample.date}</p>
                  <p className="text-sm text-muted-foreground">{sample.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-ocean-gradient rounded-lg flex items-center justify-center">
                  <Waves className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Depth</p>
                  <p className="font-semibold">{sample.depth}m</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-coral-gradient rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Biodiversity Index</p>
                  <p className="font-semibold text-accent">{sample.biodiversityIndex}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Environmental Data */}
        <Card className="mb-6 shadow-ocean">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-accent" />
              Environmental Parameters
            </CardTitle>
            <CardDescription>Water quality and environmental measurements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Temperature</span>
                  <span className="text-lg font-bold text-accent">{sample.temperature}°C</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-ocean-gradient h-2 rounded-full" style={{width: "75%"}}></div>
                </div>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Salinity</span>
                  <span className="text-lg font-bold text-accent">{sample.salinity} ppt</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-ocean-gradient h-2 rounded-full" style={{width: "82%"}}></div>
                </div>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">pH Level</span>
                  <span className="text-lg font-bold text-accent">{sample.ph}</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-ocean-gradient h-2 rounded-full" style={{width: "88%"}}></div>
                </div>
              </div>

              <div className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Dissolved Oxygen</span>
                  <span className="text-lg font-bold text-accent">{sample.oxygen} mg/L</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-ocean-gradient h-2 rounded-full" style={{width: "78%"}}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Description and Findings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-ocean">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{sample.description}</p>
            </CardContent>
          </Card>

          <Card className="shadow-ocean">
            <CardHeader>
              <CardTitle>Key Findings</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {sample.findings.map((finding, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{finding}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SampleDetail;