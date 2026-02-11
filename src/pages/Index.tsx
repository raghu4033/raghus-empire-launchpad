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
  accentColor: string;
  accentBorder: string;
  accentText: string;
  accentBg: string;
  loginPath: string;
  mainIcon: React.ReactNode;
  subCards: SubCard[];
}

const companies: CompanyCard[] = [
  {
    name: "Pattrnly",
    description: "Product & Engineering Tools",
    accentColor: "hsl(0, 72%, 51%)",
    accentBorder: "hsl(0, 60%, 85%)",
    accentText: "hsl(0, 65%, 45%)",
    accentBg: "hsl(0, 70%, 97%)",
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
    accentColor: "hsl(14, 82%, 28%)",
    accentBorder: "hsl(14, 50%, 88%)",
    accentText: "hsl(14, 70%, 32%)",
    accentBg: "hsl(14, 50%, 97%)",
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
    accentColor: "hsl(240, 7%, 14%)",
    accentBorder: "hsl(240, 5%, 88%)",
    accentText: "hsl(240, 7%, 25%)",
    accentBg: "hsl(240, 5%, 97%)",
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
    accentColor: "hsl(220, 80%, 50%)",
    accentBorder: "hsl(220, 60%, 90%)",
    accentText: "hsl(220, 70%, 40%)",
    accentBg: "hsl(220, 60%, 97%)",
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

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #F8FAFF 0%, #F4F7FF 50%, #EEF2FF 100%)' }}>
      {/* Header */}
      <header className="pt-14 pb-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Crown className="w-8 h-8" style={{ color: 'hsl(215, 50%, 30%)' }} />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: 'hsl(215, 50%, 12%)' }}>
            Raghu's Empire
          </h1>
        </div>
        <p className="text-sm tracking-wide" style={{ color: 'hsl(215, 20%, 55%)' }}>
          Internal Dashboard
        </p>
      </header>

      {/* Company Cards */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {companies.map((company) => {
            const isExpanded = expandedCard === company.name;
            return (
              <div
                key={company.name}
                className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: '1px solid hsl(215, 20%, 90%)',
                  boxShadow: '0 1px 3px hsla(215, 30%, 50%, 0.06), 0 4px 12px hsla(215, 30%, 50%, 0.04)',
                  borderTop: `3px solid ${company.accentColor}`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 30px hsla(215, 30%, 50%, 0.1), 0 0 0 1px ${company.accentBorder}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 3px hsla(215, 30%, 50%, 0.06), 0 4px 12px hsla(215, 30%, 50%, 0.04)';
                }}
              >
                {/* Card Header */}
                <button
                  onClick={() => setExpandedCard(isExpanded ? null : company.name)}
                  className="w-full px-5 py-5 flex items-center justify-between text-left xl:hidden"
                >
                  <div className="flex items-center gap-3">
                    <span style={{ color: company.accentText }}>{company.mainIcon}</span>
                    <div>
                      <h2 className="text-base font-semibold" style={{ color: 'hsl(215, 50%, 12%)' }}>{company.name}</h2>
                      <p className="text-xs mt-0.5" style={{ color: 'hsl(215, 15%, 55%)' }}>{company.description}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className="w-4 h-4 transition-transform duration-300"
                    style={{
                      color: 'hsl(215, 15%, 60%)',
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>

                {/* Desktop header (no toggle) */}
                <div className="hidden xl:flex px-5 py-5 items-center gap-3">
                  <span style={{ color: company.accentText }}>{company.mainIcon}</span>
                  <div>
                    <h2 className="text-base font-semibold" style={{ color: 'hsl(215, 50%, 12%)' }}>{company.name}</h2>
                    <p className="text-xs mt-0.5" style={{ color: 'hsl(215, 15%, 55%)' }}>{company.description}</p>
                  </div>
                </div>

                {/* Sub Cards - mobile collapsible */}
                <div
                  className="xl:hidden overflow-hidden transition-all duration-400 ease-in-out"
                  style={{
                    maxHeight: isExpanded ? `${company.subCards.length * 52 + 24}px` : '0px',
                    opacity: isExpanded ? 1 : 0,
                  }}
                >
                  <SubCardList company={company} />
                </div>

                {/* Sub Cards - desktop always visible */}
                <div className="hidden xl:block">
                  <SubCardList company={company} />
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs mt-16 tracking-widest uppercase" style={{ color: 'hsl(215, 15%, 70%)' }}>
          Where Ideas Become Empire
        </p>
      </main>
    </div>
  );
};

const SubCardList = ({ company }: { company: CompanyCard }) => (
  <div className="px-4 pb-4 space-y-1">
    {company.subCards.map((sub, i) => (
      <Link
        key={i}
        to={company.loginPath}
        className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group/sub"
        style={{
          backgroundColor: 'hsl(215, 30%, 98%)',
          border: '1px solid hsl(215, 20%, 93%)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = company.accentBg;
          (e.currentTarget as HTMLAnchorElement).style.borderColor = company.accentBorder;
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 8px hsla(215,30%,50%,0.06)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'hsl(215, 30%, 98%)';
          (e.currentTarget as HTMLAnchorElement).style.borderColor = 'hsl(215, 20%, 93%)';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
        }}
        title={sub.action}
      >
        <span style={{ color: company.accentText }} className="shrink-0 opacity-60 group-hover/sub:opacity-100 transition-opacity">
          {sub.icon}
        </span>
        <span className="text-xs truncate flex-1 transition-colors" style={{ color: 'hsl(215, 15%, 40%)' }}>
          {sub.title}
        </span>
        <ExternalLink
          className="w-3.5 h-3.5 shrink-0 opacity-30 group-hover/sub:opacity-70 group-hover/sub:translate-x-0.5 group-hover/sub:-translate-y-0.5 transition-all duration-200"
          style={{ color: company.accentText }}
        />
      </Link>
    ))}
  </div>
);

export default Index;
