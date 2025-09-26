import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Waves, TrendingUp, Database, Upload, Users, Shield, BarChart3 } from "lucide-react";

const stats = [
  { label: "Ocean Regions Monitored", value: "5", icon: Waves },
  { label: "Species Tracked", value: "2,847", icon: Database },
  { label: "Active Researchers", value: "156", icon: Users },
  { label: "Data Samples", value: "12,459", icon: BarChart3 },
];

const features = [
  {
    title: "Real-time Monitoring",
    description: "Track biodiversity changes across ocean regions with live data updates and trend analysis.",
    icon: TrendingUp,
  },
  {
    title: "Species Database",
    description: "Comprehensive database of marine species with population trends and conservation status.",
    icon: Database,
  },
  {
    title: "Data Contribution",
    description: "Upload and share your oceanographic research data to support global conservation efforts.",
    icon: Upload,
  },
  {
    title: "Conservation Insights",
    description: "Advanced analytics to identify at-risk ecosystems and guide protection strategies.",
    icon: Shield,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-depth-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center text-primary-foreground">
            <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              🌊 Ocean Conservation Technology
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Protecting Ocean
              <br />
              <span className="text-accent">Biodiversity</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Advanced oceanographic data analysis platform monitoring marine biodiversity trends 
              across global ocean ecosystems to support conservation efforts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/dashboard">Explore Dashboard</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/upload">Contribute Data</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-ocean-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-ocean">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Advanced Ocean Monitoring
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leverage cutting-edge technology to understand and protect marine ecosystems 
              through comprehensive data analysis and real-time monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="shadow-ocean hover:shadow-depth transition-all duration-500 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-ocean-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-ocean-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Blugard combines advanced oceanographic research with modern technology to create 
              a comprehensive platform for monitoring, analyzing, and protecting marine biodiversity. 
              Our goal is to provide researchers, conservationists, and policymakers with the data 
              and insights needed to make informed decisions about ocean conservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/dashboard">View Latest Data</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/upload">Join Our Research</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to Dive In?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Explore our interactive dashboard to discover biodiversity trends, 
            or contribute your own research data to support global ocean conservation efforts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/dashboard">
                <BarChart3 className="w-5 h-5 mr-2" />
                Explore Dashboard
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/upload">
                <Upload className="w-5 h-5 mr-2" />
                Upload Data
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;