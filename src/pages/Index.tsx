import { Link } from "react-router-dom";
import {
  DollarSign,
  ShoppingCart,
  FolderKanban,
  Users,
  Server,
  ArrowUpRight,
  Bug,
  ListChecks,
  Layout,
  Github,
  Tag,
  Wrench,
  FileText,
  Layers,
  MessageSquare,
  BookOpen,
  Rocket,
  Gem,
  Code2,
} from "lucide-react";
import StatCard from "@/components/StatCard";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4200, orders: 120 },
  { month: "Feb", revenue: 5100, orders: 145 },
  { month: "Mar", revenue: 4800, orders: 132 },
  { month: "Apr", revenue: 6200, orders: 178 },
  { month: "May", revenue: 7100, orders: 201 },
  { month: "Jun", revenue: 6800, orders: 189 },
  { month: "Jul", revenue: 8200, orders: 234 },
];

const businesses = [
  {
    name: "Pattrnly",
    description: "Product & Engineering Tools",
    icon: FolderKanban,
    color: "hsl(0, 72%, 51%)",
    bgClass: "bg-red-500/10",
    textClass: "text-red-400",
    path: "/pattrnly",
    tools: [
      { title: "Bug Tracker", icon: Bug },
      { title: "Task Tracker (Jira)", icon: ListChecks },
      { title: "Admin UI", icon: Layout },
      { title: "Marketplace UI", icon: ShoppingCart },
      { title: "GitHub Repos", icon: Github },
    ],
    status: "5 active issues",
    statusType: "warn" as const,
  },
  {
    name: "Woodeen",
    description: "E-commerce & Product Ops",
    icon: ShoppingCart,
    color: "hsl(14, 82%, 28%)",
    bgClass: "bg-orange-500/10",
    textClass: "text-orange-400",
    path: "/woodeen",
    tools: [
      { title: "Shopify Admin", icon: ShoppingCart },
      { title: "Product Resources", icon: Tag },
      { title: "Inventory", icon: Wrench },
      { title: "Orders", icon: FileText },
      { title: "Marketing", icon: Layers },
    ],
    status: "23 pending orders",
    statusType: "info" as const,
  },
  {
    name: "JewelFox",
    description: "Jewelry Product & Pricing",
    icon: Gem,
    color: "hsl(240, 7%, 14%)",
    bgClass: "bg-violet-500/10",
    textClass: "text-violet-400",
    path: "/jewelfox",
    tools: [
      { title: "Product Creator", icon: Tag },
      { title: "Pricing Tool", icon: DollarSign },
      { title: "Mockup Creator", icon: Layers },
      { title: "Catalog Export", icon: FileText },
    ],
    status: "All systems go",
    statusType: "ok" as const,
  },
  {
    name: "Developer Team",
    description: "Internal Dev & Team Access",
    icon: Code2,
    color: "hsl(220, 80%, 50%)",
    bgClass: "bg-blue-500/10",
    textClass: "text-blue-400",
    path: "/developer",
    tools: [
      { title: "Slack", icon: MessageSquare },
      { title: "Jira Board", icon: ListChecks },
      { title: "Paystubs", icon: FileText },
      { title: "Wiki", icon: BookOpen },
      { title: "Deployments", icon: Rocket },
    ],
    status: "Sprint active",
    statusType: "ok" as const,
  },
];

const statusColors = {
  ok: "bg-emerald-500/10 text-emerald-400",
  warn: "bg-amber-500/10 text-amber-400",
  info: "bg-blue-500/10 text-blue-400",
};

const Index = () => {
  return (
    <div className="space-y-6 pb-20 lg:pb-0">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Overview of your empire</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        <StatCard title="Total Revenue" value={82400} prefix="$" icon={DollarSign} trend="+12%" trendUp delay={0} />
        <StatCard title="Orders" value={1089} icon={ShoppingCart} trend="+8%" trendUp delay={100} />
        <StatCard title="Active Projects" value={14} icon={FolderKanban} delay={200} />
        <StatCard title="Team Members" value={8} icon={Users} delay={300} />
        <StatCard title="Server Uptime" value={99} suffix="%" icon={Server} trend="Healthy" trendUp delay={400} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="glass-card p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(224, 15%, 16%)" />
              <XAxis dataKey="month" tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 11 }} axisLine={false} />
              <YAxis tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 11 }} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: "hsl(224, 25%, 10%)",
                  border: "1px solid hsl(224, 15%, 16%)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Line type="monotone" dataKey="revenue" stroke="hsl(220, 70%, 55%)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Orders by Month</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(224, 15%, 16%)" />
              <XAxis dataKey="month" tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 11 }} axisLine={false} />
              <YAxis tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 11 }} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: "hsl(224, 25%, 10%)",
                  border: "1px solid hsl(224, 15%, 16%)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="orders" fill="hsl(220, 70%, 55%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Access - Business Cards */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {businesses.map((biz, idx) => (
            <Link
              key={biz.name}
              to={biz.path}
              className="glass-card p-5 group hover:glow-blue transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${biz.bgClass} flex items-center justify-center`}>
                    <biz.icon className={`w-5 h-5 ${biz.textClass}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{biz.name}</h3>
                    <p className="text-xs text-muted-foreground">{biz.description}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              {/* Status badge */}
              <div className="mb-3">
                <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusColors[biz.statusType]}`}>
                  {biz.status}
                </span>
              </div>

              {/* Tools preview */}
              <div className="flex flex-wrap gap-1.5">
                {biz.tools.map((tool) => (
                  <span
                    key={tool.title}
                    className="inline-flex items-center gap-1 text-[10px] text-muted-foreground bg-accent/30 px-2 py-1 rounded-md"
                  >
                    <tool.icon className="w-3 h-3" />
                    {tool.title}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
