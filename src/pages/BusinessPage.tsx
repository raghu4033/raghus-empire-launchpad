import { useParams, Link } from "react-router-dom";
import {
  Bug, ListChecks, Layout, ShoppingCart, Github, Tag, Wrench,
  FileText, Layers, MessageSquare, BookOpen, Rocket, DollarSign,
  ArrowUpRight, ExternalLink, FolderKanban, Gem, Code2,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Tool {
  title: string;
  description: string;
  icon: LucideIcon;
  action: string;
}

interface BusinessConfig {
  name: string;
  description: string;
  icon: LucideIcon;
  bgClass: string;
  textClass: string;
  borderColor: string;
  tools: Tool[];
}

const businessConfigs: Record<string, BusinessConfig> = {
  pattrnly: {
    name: "Pattrnly",
    description: "Product & Engineering Tools",
    icon: FolderKanban,
    bgClass: "bg-red-500/10",
    textClass: "text-red-400",
    borderColor: "border-red-500/20",
    tools: [
      { title: "Bug Tracker (2026)", description: "Track and resolve product bugs", icon: Bug, action: "Open Bug Tracker" },
      { title: "Task Tracker (Jira)", description: "Sprint planning and task management", icon: ListChecks, action: "Open Jira" },
      { title: "Admin & Contributor UI", description: "Admin panel reference design", icon: Layout, action: "Open Admin UI" },
      { title: "Marketplace UI", description: "User-facing marketplace interface", icon: ShoppingCart, action: "Open Marketplace" },
      { title: "GitHub · Admin UI", description: "Source code repository", icon: Github, action: "Open GitHub" },
      { title: "GitHub · Marketplace UI", description: "Marketplace source code", icon: Github, action: "Open GitHub" },
    ],
  },
  woodeen: {
    name: "Woodeen",
    description: "E-commerce & Product Operations",
    icon: ShoppingCart,
    bgClass: "bg-orange-500/10",
    textClass: "text-orange-400",
    borderColor: "border-orange-500/20",
    tools: [
      { title: "Shopify Admin", description: "Store management dashboard", icon: ShoppingCart, action: "Open Shopify" },
      { title: "Product Resources", description: "Product images and data", icon: Tag, action: "Open Resources" },
      { title: "Inventory & Variants", description: "Stock and variant manager", icon: Wrench, action: "Open Inventory" },
      { title: "Order & Fulfillment", description: "Order processing dashboard", icon: FileText, action: "Open Orders" },
      { title: "Marketing Assets", description: "Campaign materials library", icon: Layers, action: "Open Assets" },
    ],
  },
  jewelfox: {
    name: "JewelFox",
    description: "Jewelry Product & Pricing Tools",
    icon: Gem,
    bgClass: "bg-violet-500/10",
    textClass: "text-violet-400",
    borderColor: "border-violet-500/20",
    tools: [
      { title: "Product Creator (SKU)", description: "Create and manage product SKUs", icon: Tag, action: "Open Creator" },
      { title: "Pricing & Research", description: "Market pricing analysis", icon: DollarSign, action: "Open Pricing" },
      { title: "Mockup Creator", description: "Generate product mockups", icon: Layers, action: "Open Mockups" },
      { title: "Catalog Export", description: "Export product catalogs", icon: FileText, action: "Open Export" },
    ],
  },
  developer: {
    name: "Developer Team",
    description: "Internal Developer & Team Access",
    icon: Code2,
    bgClass: "bg-blue-500/10",
    textClass: "text-blue-400",
    borderColor: "border-blue-500/20",
    tools: [
      { title: "Slack Workspace", description: "Team communication", icon: MessageSquare, action: "Open Slack" },
      { title: "Jira Board", description: "Sprint & project tracking", icon: ListChecks, action: "Open Jira" },
      { title: "Paystubs & Salary", description: "Payroll and compensation", icon: FileText, action: "Open Portal" },
      { title: "Internal Docs / Wiki", description: "Knowledge base", icon: BookOpen, action: "Open Wiki" },
      { title: "Deployment & Logs", description: "CI/CD and monitoring", icon: Rocket, action: "Open Dashboard" },
    ],
  },
};

const BusinessPage = () => {
  const { business } = useParams<{ business: string }>();
  const config = businessConfigs[business || ""] || businessConfigs.pattrnly;

  return (
    <div className="space-y-6 pb-20 lg:pb-0">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-2xl ${config.bgClass} flex items-center justify-center`}>
          <config.icon className={`w-6 h-6 ${config.textClass}`} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">{config.name}</h1>
          <p className="text-sm text-muted-foreground">{config.description}</p>
        </div>
      </div>

      {/* Tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {config.tools.map((tool, i) => (
          <Link
            key={tool.title}
            to={`/login/${business}`}
            className={`glass-card p-5 group hover:${config.borderColor} transition-all duration-300 hover:glow-blue animate-fade-in`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-9 h-9 rounded-xl ${config.bgClass} flex items-center justify-center`}>
                <tool.icon className={`w-4 h-4 ${config.textClass}`} />
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{tool.title}</h3>
            <p className="text-xs text-muted-foreground">{tool.description}</p>
            <div className="mt-3 flex items-center gap-1 text-[11px] text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="w-3 h-3" />
              {tool.action}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BusinessPage;
