import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Crown, Lock, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [password, setPassword] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const navigate = useNavigate();

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Raghu@2025") {
      toast({
        title: "Welcome to Raghu's Empire! 👑",
        description: "Where Ideas Become Empire",
      });
      navigate("/home");
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

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--secondary)/0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.03)_0%,transparent_50%)]" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo & Crown */}
        <div className="flex flex-col items-center mb-8 animate-fade-in">
          <Crown className="w-12 h-12 text-secondary mb-4" />
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-lg mb-6">
            <span className="text-4xl font-heading font-bold text-secondary-foreground">R</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-10 animate-fade-in-delay">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight">
            Raghu's Empire
          </h1>
          <p className="text-muted-foreground text-base font-body mb-4">
            A creative powerhouse of startups and innovations by Raghu.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-secondary font-medium text-sm">Launching Soon</span>
            <Sparkles className="w-4 h-4 text-secondary" />
          </div>
        </div>

        {/* Password Form */}
        <Card className={`bg-card border-border shadow-xl ${isShaking ? "animate-[shake_0.5s_ease-in-out]" : ""}`}>
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center">
              <Lock className="w-5 h-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-background border-border h-11"
              />
              <Button 
                type="submit" 
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 h-11"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
            <p className="text-center text-muted-foreground text-xs mt-4 font-body">
              Where Ideas Become Empire
            </p>
          </CardContent>
        </Card>
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
};

export default Index;
