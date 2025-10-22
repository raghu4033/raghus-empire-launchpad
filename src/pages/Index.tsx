import { useState } from "react";
import { Crown, Lock, Sparkles, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

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
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-primary/90 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,244,219,0.1)_0%,transparent_50%)]" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 w-full max-w-md">
          {/* Logo & Crown */}
          <div className="flex flex-col items-center mb-8 animate-fade-in">
            <div className="relative mb-4 animate-glow">
              <Crown className="w-12 h-12 text-secondary mb-2" />
            </div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-2xl mb-6">
              <span className="text-4xl font-heading font-bold text-primary">R</span>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8 animate-fade-in-delay">
            <h1 className="text-5xl font-heading font-bold text-secondary mb-3 tracking-tight">
              Raghu's Empire
            </h1>
            <p className="text-secondary/80 text-lg font-body mb-2">
              A creative powerhouse of startups and innovations by Raghu.
            </p>
            <div className="inline-flex items-center gap-2 text-secondary/90 text-sm font-medium mt-4 animate-shimmer">
              <Sparkles className="w-4 h-4" />
              <span>Launching Soon</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          {/* Password Form */}
          <Card className={`glassmorphism border-secondary/30 ${isShaking ? "animate-[shake_0.5s_ease-in-out]" : ""}`}>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-3">
                <Lock className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle className="text-secondary text-xl">Enter to Continue</CardTitle>
              <CardDescription className="text-secondary/70">
                This empire is password-protected
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/10 border-secondary/30 text-secondary placeholder:text-secondary/50 focus:border-secondary focus:ring-secondary/20"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-secondary text-primary hover:bg-secondary/90 font-medium transition-all duration-300 hover:shadow-lg"
                >
                  Unlock Empire
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
              className="w-10 h-10 rounded-full glassmorphism border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary/20 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glassmorphism border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glassmorphism border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary/20 transition-all duration-300 hover:scale-110"
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

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-secondary animate-glow" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-secondary">
              Welcome to Raghu's Empire
            </h1>
          </div>
          <p className="text-2xl text-secondary/90 font-body font-light">
            Where Ideas Become Brands
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="glassmorphism border-secondary/30 hover:border-secondary/50 transition-all duration-300 animate-fade-in group hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="text-secondary text-2xl flex items-center gap-2">
                <Sparkles className="w-6 h-6 group-hover:animate-spin" />
                My Startups
              </CardTitle>
              <CardDescription className="text-secondary/70 text-base">
                Innovative ventures changing the game
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-secondary/80 font-body">
                Explore the ecosystem of groundbreaking startups built to solve real-world problems 
                and create lasting impact.
              </p>
            </CardContent>
          </Card>

          <Card className="glassmorphism border-secondary/30 hover:border-secondary/50 transition-all duration-300 animate-fade-in-delay group hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="text-secondary text-2xl flex items-center gap-2">
                <Sparkles className="w-6 h-6 group-hover:animate-spin" />
                My Projects
              </CardTitle>
              <CardDescription className="text-secondary/70 text-base">
                Creative experiments and innovations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-secondary/80 font-body">
                A collection of passion projects, experiments, and creative endeavors pushing 
                the boundaries of what's possible.
              </p>
            </CardContent>
          </Card>

          <Card className="glassmorphism border-secondary/30 hover:border-secondary/50 transition-all duration-300 animate-fade-in group hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="text-secondary text-2xl flex items-center gap-2">
                <Sparkles className="w-6 h-6 group-hover:animate-spin" />
                About Raghu
              </CardTitle>
              <CardDescription className="text-secondary/70 text-base">
                The mind behind the empire
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-secondary/80 font-body">
                An entrepreneur, innovator, and visionary dedicated to building brands that matter 
                and creating value that lasts.
              </p>
            </CardContent>
          </Card>

          <Card className="glassmorphism border-secondary/30 hover:border-secondary/50 transition-all duration-300 animate-fade-in-delay group hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="text-secondary text-2xl flex items-center gap-2">
                <Sparkles className="w-6 h-6 group-hover:animate-spin" />
                Contact
              </CardTitle>
              <CardDescription className="text-secondary/70 text-base">
                Let's build something together
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-secondary/80 font-body mb-4">
                Have an idea? Want to collaborate? Reach out and let's turn visions into reality.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary/30 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary/30 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary/30 transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 animate-fade-in-delay">
          <p className="text-secondary/60 font-body text-sm">
            © 2025 Raghu's Empire. Where ambition meets execution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
