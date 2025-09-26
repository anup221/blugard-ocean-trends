import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Waves, BarChart3, Upload, FileText } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Waves },
  { name: "Dashboard", path: "/dashboard", icon: BarChart3 },
  { name: "Upload", path: "/upload", icon: Upload },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-3 text-xl font-bold text-primary hover:text-accent transition-colors duration-300"
          >
            <div className="w-8 h-8 bg-ocean-gradient rounded-lg flex items-center justify-center">
              <Waves className="w-5 h-5 text-primary-foreground" />
            </div>
            <span>Blugard</span>
          </Link>

          <div className="flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                    isActive
                      ? "bg-ocean-gradient text-primary-foreground shadow-ocean"
                      : "text-muted-foreground hover:text-accent hover:bg-secondary/50"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}