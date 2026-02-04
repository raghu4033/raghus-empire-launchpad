import { Crown, ExternalLink, GraduationCap, Layout, Gem } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LayoutComponent from "@/components/Layout";

const ventures = [
  {
    name: "Institute Master System",
    category: "SaaS Platform",
    description: "A complete SaaS platform for institutes to manage students, fees, communication, and operations. Designed to streamline every aspect of educational institution management.",
    features: ["Student Management", "Fee Tracking", "Communication Tools", "Operations Dashboard"],
    icon: GraduationCap,
    status: "Active",
  },
  {
    name: "Pattrnly.com",
    category: "Productivity",
    description: "A smart platform designed to organize patterns, workflows, and productivity systems. Built for individuals and teams who want to systematize their success.",
    features: ["Pattern Organization", "Workflow Builder", "Productivity Tracking", "Team Collaboration"],
    icon: Layout,
    status: "In Development",
  },
  {
    name: "JewelFox Store",
    category: "eCommerce",
    description: "A luxury eCommerce brand offering handcrafted silver jewelry and lab-grown diamond jewelry worldwide. Premium quality, ethical sourcing, timeless designs.",
    features: ["Handcrafted Silver", "Lab-Grown Diamonds", "Worldwide Shipping", "Premium Quality"],
    icon: Gem,
    status: "Active",
  },
];

const Empire = () => {
  return (
    <LayoutComponent>
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Crown className="w-12 h-12 text-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            The Empire
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A portfolio of innovative ventures, each building towards a greater vision of 
            creating lasting value and impact.
          </p>
        </div>
      </section>

      {/* Ventures */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {ventures.map((venture, index) => {
            const Icon = venture.icon;
            return (
              <Card
                key={venture.name}
                className="bg-card/50 border-border/50 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 p-8 bg-gradient-to-br from-secondary/10 to-transparent flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-secondary/20 flex items-center justify-center">
                      <Icon className="w-12 h-12 text-secondary" />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                        {venture.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        venture.status === "Active" 
                          ? "bg-green-500/10 text-green-500" 
                          : "bg-yellow-500/10 text-yellow-500"
                      }`}>
                        {venture.status}
                      </span>
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-3">
                      {venture.name}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {venture.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {venture.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1.5 rounded-lg bg-muted/50 text-muted-foreground text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-muted-foreground mb-8">
            We're always looking for partners, investors, and collaborators who share our vision 
            of building impactful ventures.
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <a href="/contact">
              Get in Touch
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default Empire;
