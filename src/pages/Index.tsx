import { Crown, ExternalLink, Lock, FolderOpen, Bug, ListChecks, Layout, ShoppingCart, Github, Wrench, Tag, DollarSign, Layers, MessageSquare, FileText, BookOpen, Rocket, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface SubCard {
  title: string;
  action: string;
  icon: React.ReactNode;
}

interface CompanyCard {
  name: string;
  description: string;
  bgColor: string;
  glowColor: string;
  borderColor: string;
  textColor: string;
  accentColor: string;
  loginPath: string;
  mainIcon: React.ReactNode;
  subCards: SubCard[];
}

const companies: CompanyCard[] = [
  {
    name: "Pattrnly",
    description: "Product & Engineering Tools",
    bgColor: "hsl(0, 72%, 12%)",
    glowColor: "rgba(220,38,38,0.25)",
    borderColor: "hsl(0, 60%, 25%)",
    textColor: "hsl(0, 80%, 65%)",
    accentColor: "hsl(0, 72%, 51%)",
    loginPath: "/login/pattrnly",
    mainIcon: <FolderOpen className="w-5 h-5" />,
    subCards: [
      { title: "Bug Tracker (2026)", action: "Open Bug Tracker", icon: <Bug className="w-4 h-4" /> },
      { title: "Task Tracker (Jira)", action: "Join Jira Tasks", icon: <ListChecks className="w-4 h-4" /> },
      { title: "UI · Admin & Contributor", action: "Open Admin UI", icon: <Layout className="w-4 h-4" /> },
      { title: "UI · User / Marketplace", action: "Open Marketplace UI", icon: <ShoppingCart className="w-4 h-4" /> },
      { title: "GitHub · Admin UI", action: "Open GitHub", icon: <Github className="w-4 h-4" /> },
      { title: "GitHub · Marketplace UI", action: "Open GitHub", icon: <Github className="w-4 h-4" /> },
    ],
  },
  {
    name: "Woodeen",
    description: "E-commerce & Product Operations",
    bgColor: "hsl(14, 82%, 14%)",
    glowColor: "rgba(132,36,12,0.3)",
    borderColor: "hsl(14, 70%, 25%)",
    textColor: "hsl(25, 80%, 60%)",
    accentColor: "hsl(14, 82%, 28%)",
    loginPath: "/login/woodeen",
    mainIcon: <FolderOpen className="w-5 h-5" />,
    subCards: [
      { title: "Shopify Admin Login", action: "Open Shopify Admin", icon: <ShoppingCart className="w-4 h-4" /> },
      { title: "Product Resources", action: "Open Resources", icon: <Tag className="w-4 h-4" /> },
      { title: "Inventory & Variants", action: "Open Inventory", icon: <Wrench className="w-4 h-4" /> },
      { title: "Order & Fulfillment", action: "Open Dashboard", icon: <FileText className="w-4 h-4" /> },
      { title: "Marketing Assets", action: "Open Assets", icon: <Layers className="w-4 h-4" /> },
    ],
  },
  {
    name: "JewelFox",
    description: "Jewelry Product & Pricing Tools",
    bgColor: "hsl(240, 7%, 13%)",
    glowColor: "rgba(32,32,37,0.4)",
    borderColor: "hsl(240, 5%, 22%)",
    textColor: "hsl(240, 5%, 65%)",
    accentColor: "hsl(240, 7%, 35%)",
    loginPath: "/login/jewelfox",
    mainIcon: <Lock className="w-5 h-5" />,
    subCards: [
      { title: "Product Creator (SKU)", action: "Open Product Creator", icon: <Tag className="w-4 h-4" /> },
      { title: "Pricing & Research", action: "Open Pricing Tool", icon: <DollarSign className="w-4 h-4" /> },
      { title: "Mockup Creator", action: "Open Mockups", icon: <Layers className="w-4 h-4" /> },
      { title: "Catalog Export", action: "Open Catalog Export", icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    name: "Developer Team",
    description: "Internal Developer & Team Access",
    bgColor: "hsl(220, 50%, 10%)",
    glowColor: "rgba(59,130,246,0.2)",
    borderColor: "hsl(220, 45%, 22%)",
    textColor: "hsl(220, 80%, 65%)",
    accentColor: "hsl(220, 80%, 50%)",
    loginPath: "/login/developer",
    mainIcon: <Lock className="w-5 h-5" />,
    subCards: [
      { title: "Slack Workspace", action: "Open Slack", icon: <MessageSquare className="w-4 h-4" /> },
      { title: "Jira Board", action: "Open Jira", icon: <ListChecks className="w-4 h-4" /> },
      { title: "Paystubs & Salary", action: "Open Portal", icon: <FileText className="w-4 h-4" /> },
      { title: "Internal Docs / Wiki", action: "Open Wiki", icon: <BookOpen className="w-4 h-4" /> },
      { title: "Deployment & Logs", action: "Open Dashboard", icon: <Rocket className="w-4 h-4" /> },
    ],
  },
];

const Index = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (name: string) => {
    setExpandedCard(expandedCard === name ? null : name);
  };

  return (
    <div className="min-h-screen bg-[hsl(220,55%,5%)] text-white">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(220,80%,40%)] opacity-[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(220,80%,50%)] opacity-[0.02] blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-12 pb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Crown className="w-9 h-9 text-[hsl(43,96%,56%)]" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Raghu's Empire</h1>
        </div>
        <p className="text-[hsl(220,20%,45%)] text-sm tracking-wide">Internal Dashboard</p>
      </header>

      {/* Company Cards Grid */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {companies.map((company) => {
            const isExpanded = expandedCard === company.name;
            return (
              <div
                key={company.name}
                className="rounded-2xl overflow-hidden transition-all duration-500 ease-out group"
                style={{
                  backgroundColor: company.bgColor,
                  border: `1px solid ${company.borderColor}`,
                  boxShadow: isExpanded ? `0 0 40px ${company.glowColor}` : `0 0 0px transparent`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 40px ${company.glowColor}`;
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  if (!isExpanded) {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0px transparent';
                  } else {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${company.glowColor}`;
                  }
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Card Header */}
                <button
                  onClick={() => toggleCard(company.name)}
                  className="w-full px-5 py-5 flex items-center justify-between text-left transition-colors"
                  style={{ borderBottom: `1px solid ${company.borderColor}` }}
                >
                  <div className="flex items-center gap-3">
                    <span style={{ color: company.textColor }}>{company.mainIcon}</span>
                    <div>
                      <h2 className="text-lg font-bold text-white">{company.name}</h2>
                      <p className="text-xs mt-0.5" style={{ color: company.textColor }}>{company.description}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className="w-4 h-4 transition-transform duration-300"
                    style={{
                      color: company.textColor,
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>

                {/* Sub Cards - collapsible */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isExpanded ? `${company.subCards.length * 56}px` : '0px',
                    opacity: isExpanded ? 1 : 0,
                  }}
                >
                  <div className="p-3 space-y-1.5">
                    {company.subCards.map((sub, i) => (
                      <Link
                        key={i}
                        to={company.loginPath}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group/sub"
                        style={{
                          backgroundColor: 'hsla(220, 30%, 15%, 0.5)',
                          border: '1px solid hsla(220, 20%, 20%, 0.5)',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${company.accentColor}22`;
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = company.borderColor;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'hsla(220, 30%, 15%, 0.5)';
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = 'hsla(220, 20%, 20%, 0.5)';
                        }}
                        title={sub.action}
                      >
                        <span style={{ color: company.textColor }} className="shrink-0 opacity-70 group-hover/sub:opacity-100 transition-opacity">
                          {sub.icon}
                        </span>
                        <span className="text-xs text-[hsl(220,15%,65%)] group-hover/sub:text-white transition-colors truncate flex-1">
                          {sub.title}
                        </span>
                        <ExternalLink
                          className="w-3.5 h-3.5 shrink-0 opacity-40 group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5 group-hover/sub:-translate-y-0.5 transition-all duration-200"
                          style={{ color: company.textColor }}
                        />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Always-visible sub-cards on desktop when not using expand */}
                <div className="hidden xl:block">
                  {!isExpanded && (
                    <div className="p-3 space-y-1.5">
                      {company.subCards.map((sub, i) => (
                        <Link
                          key={i}
                          to={company.loginPath}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group/sub"
                          style={{
                            backgroundColor: 'hsla(220, 30%, 15%, 0.5)',
                            border: '1px solid hsla(220, 20%, 20%, 0.5)',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${company.accentColor}22`;
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = company.borderColor;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'hsla(220, 30%, 15%, 0.5)';
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = 'hsla(220, 20%, 20%, 0.5)';
                          }}
                          title={sub.action}
                        >
                          <span style={{ color: company.textColor }} className="shrink-0 opacity-70 group-hover/sub:opacity-100 transition-opacity">
                            {sub.icon}
                          </span>
                          <span className="text-xs text-[hsl(220,15%,65%)] group-hover/sub:text-white transition-colors truncate flex-1">
                            {sub.title}
                          </span>
                          <ExternalLink
                            className="w-3.5 h-3.5 shrink-0 opacity-40 group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5 group-hover/sub:-translate-y-0.5 transition-all duration-200"
                            style={{ color: company.textColor }}
                          />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer tagline */}
        <p className="text-center text-[hsl(220,15%,30%)] text-xs mt-16 tracking-widest uppercase">
          Where Ideas Become Empire
        </p>
      </main>
    </div>
  );
};

export default Index;
