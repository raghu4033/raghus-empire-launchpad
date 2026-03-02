import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Crown,
  LayoutDashboard,
  Layers,
  ShoppingCart,
  Gem,
  Code2,
  BarChart3,
  Settings,
  Menu,
  X,
  ChevronLeft,
} from "lucide-react";
import AIAssistant from "./AIAssistant";

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Pattrnly", path: "/pattrnly", icon: Layers },
  { name: "Woodeen", path: "/woodeen", icon: ShoppingCart },
  { name: "JewelFox", path: "/jewelfox", icon: Gem },
  { name: "Dev Team", path: "/developer", icon: Code2 },
  { name: "Analytics", path: "/analytics", icon: BarChart3 },
  { name: "Settings", path: "/settings", icon: Settings },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full glass-sidebar flex flex-col transition-all duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static
          ${collapsed ? "w-[68px]" : "w-60"}
        `}
      >
        {/* Logo */}
        <div className={`flex items-center gap-3 px-4 h-16 border-b border-border/30 shrink-0 ${collapsed ? "justify-center" : ""}`}>
          <Crown className="w-6 h-6 text-primary shrink-0" />
          {!collapsed && (
            <span className="font-semibold text-foreground text-sm tracking-tight truncate">
              Raghu's Empire
            </span>
          )}
          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto lg:hidden text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                  ${collapsed ? "justify-center" : ""}
                  ${active
                    ? "bg-primary/10 text-primary glow-blue"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }
                `}
                title={collapsed ? item.name : undefined}
              >
                <item.icon className="w-[18px] h-[18px] shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Collapse toggle - desktop only */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center h-12 border-t border-border/30 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className={`w-4 h-4 transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 flex items-center gap-4 px-4 lg:px-6 border-b border-border/30 bg-background/80 backdrop-blur-xl sticky top-0 z-30 shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-muted-foreground hover:text-foreground"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
              R
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {children}
        </main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-card/80 backdrop-blur-xl border-t border-border/30">
        <div className="flex items-center justify-around h-14">
          {navItems.slice(0, 5).map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-0.5 px-2 py-1 text-[10px] transition-colors
                  ${active ? "text-primary" : "text-muted-foreground"}
                `}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default DashboardLayout;
