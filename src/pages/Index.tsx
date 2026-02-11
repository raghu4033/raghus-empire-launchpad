import { Crown, ExternalLink, Lock, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface SubCard {
  title: string;
  action: string;
  link?: string;
}

interface CompanyCard {
  name: string;
  description: string;
  gradient: string;
  hoverGlow: string;
  borderColor: string;
  textColor: string;
  loginPath: string;
  icon: React.ReactNode;
  subCards: SubCard[];
}

const companies: CompanyCard[] = [
  {
    name: "Pattrnly",
    description: "Product & Engineering Tools",
    gradient: "from-red-600 to-red-800",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]",
    borderColor: "border-red-500/30",
    textColor: "text-red-400",
    loginPath: "/login/pattrnly",
    icon: <FolderOpen className="w-5 h-5" />,
    subCards: [
      { title: "Pattrnly Bug Tracker (2026)", action: "Open Pattrnly Bug Tracker (2026)" },
      { title: "Task Tracker (Jira Integrated)", action: "Join Jira Tasks" },
      { title: "UI Reference · Admin & Contributor", action: "Open Admin & Contributor UI" },
      { title: "UI Reference · User / Marketplace", action: "Open User / Marketplace UI" },
      { title: "GitHub · Admin & Contributor UI", action: "Open GitHub Repository" },
      { title: "GitHub · User / Marketplace UI", action: "Open GitHub Repository" },
    ],
  },
  {
    name: "Woodeen",
    description: "E-commerce & Product Operations",
    gradient: "from-amber-700 to-amber-900",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(180,83,9,0.3)]",
    borderColor: "border-amber-600/30",
    textColor: "text-amber-400",
    loginPath: "/login/woodeen",
    icon: <FolderOpen className="w-5 h-5" />,
    subCards: [
      { title: "Shopify Admin Login", action: "Open Shopify Admin" },
      { title: "Product Resources", action: "Open Product Resources" },
      { title: "Inventory & Variants Manager", action: "Open Inventory Manager" },
      { title: "Order & Fulfillment Dashboard", action: "Open Dashboard" },
      { title: "Marketing Assets Library", action: "Open Assets Library" },
    ],
  },
  {
    name: "JewelFox",
    description: "Jewelry Product & Pricing Tools",
    gradient: "from-slate-400 to-slate-600",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(148,163,184,0.3)]",
    borderColor: "border-slate-400/30",
    textColor: "text-slate-300",
    loginPath: "/login/jewelfox",
    icon: <FolderOpen className="w-5 h-5" />,
    subCards: [
      { title: "Product Creator (SKU & Name Manager)", action: "Open Product Creator" },
      { title: "Pricing & Market Research Tool", action: "Open Pricing Tool" },
      { title: "Mockup Creator", action: "Open Mockup Creator" },
      { title: "Catalog Export Tool", action: "Open Catalog Export" },
    ],
  },
  {
    name: "Developer Team",
    description: "Internal Developer & Team Access",
    gradient: "from-blue-700 to-blue-950",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
    loginPath: "/login/developer",
    icon: <Lock className="w-5 h-5" />,
    subCards: [
      { title: "Slack Workspace Access", action: "Open Slack" },
      { title: "Jira Board", action: "Open Jira Board" },
      { title: "Paystubs & Salary Portal", action: "Open Salary Portal" },
      { title: "Internal Docs / Wiki", action: "Open Wiki" },
      { title: "Deployment & Logs Dashboard", action: "Open Logs Dashboard" },
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(215,50%,6%)] text-white">
      {/* Header */}
      <header className="pt-10 pb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Crown className="w-8 h-8 text-[hsl(43,96%,56%)]" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Raghu's Empire</h1>
        </div>
        <p className="text-[hsl(215,20%,55%)] text-sm">Where Ideas Become Empire</p>
      </header>

      {/* Company Cards Grid */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className={`rounded-2xl border ${company.borderColor} bg-[hsl(215,45%,10%)] overflow-hidden transition-all duration-300 ${company.hoverGlow} hover:scale-[1.02] group`}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-br ${company.gradient} px-5 py-5`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-white">{company.name}</h2>
                    <p className="text-white/70 text-xs mt-1">{company.description}</p>
                  </div>
                  <span className="text-white/50">{company.icon}</span>
                </div>
              </div>

              {/* Sub Cards */}
              <div className="p-4 space-y-2">
                {company.subCards.map((sub, i) => (
                  <Link
                    key={i}
                    to={company.loginPath}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-[hsl(215,40%,13%)] hover:bg-[hsl(215,40%,16%)] border border-[hsl(215,30%,18%)] transition-all duration-200 group/sub"
                    title={sub.action}
                  >
                    <span className="text-xs text-[hsl(215,15%,70%)] group-hover/sub:text-white transition-colors truncate pr-2">
                      {sub.title}
                    </span>
                    <ExternalLink className={`w-3.5 h-3.5 ${company.textColor} shrink-0 opacity-50 group-hover/sub:opacity-100 transition-opacity`} />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
