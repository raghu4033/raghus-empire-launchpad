import { useState } from "react";
import { Crown, Lock, Sparkles, Instagram, Linkedin, Youtube, ArrowRight, ExternalLink, Globe, ShoppingBag, Layout, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const websites = [
  {
    name: "Harshad Satasiya",
    url: "https://harshadsatasiya.com",
    description: "Personal Portfolio & Professional Hub",
    icon: Globe,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Raghu's Enterprise",
    url: "https://raghusenterprise.com",
    description: "Business Ventures & Corporate Solutions",
    icon: Layout,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "JewelFox Store",
    url: "https://jewelfoxstore.com",
    description: "Premium Jewelry & Luxury Accessories",
    icon: ShoppingBag,
    color: "from-amber-500 to-orange-500"
  },
  {
    name: "Pattrnly",
    url: "https://pattrnly.com",
    description: "Design Patterns & Creative Solutions",
    icon: Code,
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Woodeen",
    url: "https://woodeen.com",
    description: "Sustainable Wood Products & Craftsmanship",
    icon: Sparkles,
    color: "from-yellow-500 to-amber-600"
  }
];

const Index = () => {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Raghu@2025") {
      setIsUnlocked(true);
      toast({
        title: "Welcome to Raghu's Empire! 👑",
        description: "Where Ideas Become Brands",
      });
    } else {
      setIsShaking(true);
      toast({
        title: "Access Denied",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      });
      setTimeout(() => setIsShaking(false), 500);
      setPassword("");
    }
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
        {/* Hacker Theme Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,255,65,0.05)_25%,rgba(0,255,65,0.05)_26%,transparent_27%,transparent_74%,rgba(0,255,65,0.05)_75%,rgba(0,255,65,0.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 w-full max-w-md">
          {/* Logo & Crown */}
          <div className="flex flex-col items-center mb-8 animate-fade-in">
            <div className="relative mb-4">
              <Lock className="w-12 h-12 text-green-500 mb-2 animate-pulse" />
            </div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/50 mb-6 border border-green-400/30">
              <span className="text-4xl font-mono font-bold text-black">R</span>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8 animate-fade-in-delay">
            <h1 className="text-5xl font-mono font-bold text-green-500 mb-3 tracking-tight drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
              {'>'} RAGHU'S_EMPIRE
            </h1>
            <p className="text-green-400/80 text-lg font-mono mb-2">
              $ sudo access_empire --auth required
            </p>
            <div className="inline-flex items-center gap-2 text-green-500/90 text-sm font-mono mt-4">
              <span className="animate-pulse">[</span>
              <span>SYSTEM_INITIALIZING</span>
              <span className="animate-pulse">]</span>
            </div>
          </div>

          {/* Password Form */}
          <Card className={`bg-black/80 border-green-500/30 backdrop-blur-sm ${isShaking ? "animate-[shake_0.5s_ease-in-out]" : ""}`}>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-3">
                <Lock className="w-6 h-6 text-green-500" />
              </div>
              <CardTitle className="text-green-500 text-xl font-mono">{'>'} ACCESS_REQUIRED</CardTitle>
              <CardDescription className="text-green-400/70 font-mono">
                $ enter credentials to proceed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <Input
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/50 border-green-500/50 text-green-400 placeholder:text-green-500/30 focus:border-green-500 focus:ring-green-500/20 font-mono"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-green-500 text-black hover:bg-green-400 font-mono font-bold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50"
                >
                  {'>'} AUTHENTICATE
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8 animate-fade-in-delay">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black/50 border border-green-500/30 flex items-center justify-center text-green-500 hover:bg-green-500/20 hover:border-green-500/60 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black/50 border border-green-500/30 flex items-center justify-center text-green-500 hover:bg-green-500/20 hover:border-green-500/60 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black/50 border border-green-500/30 flex items-center justify-center text-green-500 hover:bg-green-500/20 hover:border-green-500/60 transition-all duration-300 hover:scale-110"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        <style>{`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-primary/90 p-4 md:p-8 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,244,219,0.1)_0%,transparent_50%)]" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-secondary animate-glow" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-secondary">
              Welcome to Raghu's Empire
            </h1>
          </div>
          <p className="text-2xl text-secondary/90 font-body font-light mb-4">
            Where Ideas Become Brands
          </p>
          <p className="text-secondary/70 text-base max-w-2xl mx-auto">
            Choose your destination from our collection of innovative brands and ventures
          </p>
        </div>

        {/* Website Directory Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {websites.map((site, index) => {
            const Icon = site.icon;
            return (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <Card className="glassmorphism border-secondary/30 hover:border-secondary/60 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer h-full">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${site.color} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-secondary text-xl flex items-center gap-2 group-hover:text-secondary/90 transition-colors">
                      {site.name}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                    <CardDescription className="text-secondary/70">
                      {site.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary/50 text-sm font-body">{site.url.replace('https://', '')}</span>
                      <ArrowRight className="w-5 h-5 text-secondary/50 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Social Links Section */}
        <div className="text-center animate-fade-in-delay">
          <p className="text-secondary/70 font-body mb-4">Connect with Raghu's Empire</p>
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glassmorphism border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary/20 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glassmorphism border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glassmorphism border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary/20 transition-all duration-300 hover:scale-110"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>

          {/* Footer */}
          <p className="text-secondary/60 font-body text-sm">
            © 2025 Raghu's Empire. Where ambition meets execution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
