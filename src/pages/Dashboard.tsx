import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Fish, TrendingUp, TrendingDown, Activity } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for demonstration
const mockData = {
  regions: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Southern Ocean"],
  species: ["Coral", "Fish", "Marine Mammals", "Phytoplankton", "Seagrass"],
  trends: [
    { region: "Pacific Ocean", species: "Coral", change: -12.5, status: "declining" },
    { region: "Atlantic Ocean", species: "Fish", change: 8.3, status: "improving" },
    { region: "Indian Ocean", species: "Marine Mammals", change: -5.7, status: "declining" },
    { region: "Arctic Ocean", species: "Phytoplankton", change: 15.2, status: "improving" },
  ],
  samples: [
    { id: "1", location: "Great Barrier Reef", species: "Coral", date: "2024-01-15", biodiversity: 76 },
    { id: "2", location: "Monterey Bay", species: "Fish", date: "2024-01-20", biodiversity: 89 },
    { id: "3", location: "Madagascar Coast", species: "Marine Mammals", date: "2024-01-25", biodiversity: 63 },
  ]
};

const Dashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedSpecies, setSelectedSpecies] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Biodiversity Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor and analyze ocean biodiversity trends across different regions and species
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8 shadow-ocean">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-accent" />
              Data Filters
            </CardTitle>
            <CardDescription>Filter data by date, region, and species</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  Date Range
                </label>
                <Select value={selectedDate} onValueChange={setSelectedDate}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select date range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  Region
                </label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockData.regions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Fish className="w-4 h-4 text-accent" />
                  Species
                </label>
                <Select value={selectedSpecies} onValueChange={setSelectedSpecies}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select species" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockData.species.map((species) => (
                      <SelectItem key={species} value={species}>
                        {species}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trends Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mockData.trends.map((trend, index) => (
            <Card key={index} className="shadow-ocean hover:shadow-depth transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {trend.status === "improving" ? (
                      <TrendingUp className="w-5 h-5 text-accent" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-destructive" />
                    )}
                    <span className="text-sm font-medium text-muted-foreground">
                      {trend.species}
                    </span>
                  </div>
                  <span
                    className={`text-lg font-bold ${
                      trend.status === "improving" ? "text-accent" : "text-destructive"
                    }`}
                  >
                    {trend.change > 0 ? "+" : ""}{trend.change}%
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{trend.region}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Samples */}
        <Card className="shadow-ocean">
          <CardHeader>
            <CardTitle>Recent Samples</CardTitle>
            <CardDescription>Latest oceanographic data samples collected</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.samples.map((sample) => (
                <div
                  key={sample.id}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-ocean-gradient rounded-lg flex items-center justify-center">
                      <Fish className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-primary">{sample.location}</h3>
                      <p className="text-sm text-muted-foreground">{sample.species} • {sample.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Biodiversity Index</p>
                      <p className="text-lg font-bold text-accent">{sample.biodiversity}</p>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/sample/${sample.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;