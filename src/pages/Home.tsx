import { Crown, ArrowRight, Sparkles, Building2, Lightbulb, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const ventures = [
  {
    name: "Institute Master System",
    category: "SaaS",
    description: "Complete management platform for educational institutes",
  },
  {
    name: "Pattrnly.com",
    category: "Productivity",
    description: "Smart platform for organizing patterns and workflows",
  },
  {
    name: "JewelFox Store",
    category: "eCommerce",
    description: "Luxury handcrafted silver & lab-grown diamond jewelry",
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--secondary)/0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.05)_0%,transparent_50%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6 animate-fade-in">
            <Crown className="w-16 h-16 text-secondary animate-glow" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground mb-6 animate-fade-in">
            Raghu's Empire
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4 animate-fade-in-delay">
            A creative powerhouse of startups and innovations
          </p>
          
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-secondary/30 bg-secondary/5 mb-10 animate-fade-in-delay">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-secondary font-medium">Where Ideas Become Empire</span>
            <Sparkles className="w-4 h-4 text-secondary" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link to="/empire">
                Explore The Empire
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">About Raghu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Building the Future, One Venture at a Time
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Raghu's Empire is more than a company—it's a vision. Founded by an entrepreneur 
            passionate about innovation, scalable systems, and creating lasting impact. Each 
            venture under this empire is designed to solve real problems and build sustainable 
            value for the long term.
          </p>
        </div>
      </section>

      {/* The Empire Preview */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              The Empire
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A portfolio of innovative startups, each building towards a greater vision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {ventures.map((venture, index) => (
              <Card
                key={venture.name}
                className="bg-card/50 border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium mb-4">
                    {venture.category}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {venture.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {venture.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline">
              <Link to="/empire">
                View All Ventures
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Innovation First</h3>
              <p className="text-muted-foreground text-sm">
                Every venture starts with a unique idea that challenges the status quo
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Systems Thinking</h3>
              <p className="text-muted-foreground text-sm">
                Building scalable systems that create long-term sustainable value
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">Bold Execution</h3>
              <p className="text-muted-foreground text-sm">
                Turning visionary ideas into reality with decisive action
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
