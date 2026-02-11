import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Crown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const companyConfig: Record<string, {
  name: string;
  gradient: string;
  inputLabel: string;
  inputPlaceholder: string;
  bgColor: string;
  accentColor: string;
}> = {
  pattrnly: {
    name: "Pattrnly",
    gradient: "from-red-600 to-red-800",
    inputLabel: "Employee ID",
    inputPlaceholder: "Enter your Employee ID",
    bgColor: "hsl(0, 30%, 8%)",
    accentColor: "hsl(0, 72%, 51%)",
  },
  woodeen: {
    name: "Woodeen",
    gradient: "from-amber-700 to-amber-900",
    inputLabel: "Password",
    inputPlaceholder: "Enter your Password",
    bgColor: "hsl(30, 30%, 8%)",
    accentColor: "hsl(30, 80%, 45%)",
  },
  jewelfox: {
    name: "JewelFox",
    gradient: "from-slate-400 to-slate-600",
    inputLabel: "Password",
    inputPlaceholder: "Enter your Password",
    bgColor: "hsl(215, 20%, 10%)",
    accentColor: "hsl(215, 15%, 60%)",
  },
  developer: {
    name: "Developer Team",
    gradient: "from-blue-700 to-blue-950",
    inputLabel: "Developer ID",
    inputPlaceholder: "Enter your Developer ID",
    bgColor: "hsl(220, 50%, 7%)",
    accentColor: "hsl(220, 80%, 60%)",
  },
};

const CompanyLogin = () => {
  const { company } = useParams<{ company: string }>();
  const config = companyConfig[company || ""] || companyConfig.pattrnly;
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: `Welcome to ${config.name}`,
      description: "This is a demo login. No validation applied.",
    });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundColor: config.bgColor }}
    >
      {/* Breadcrumb */}
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-[hsl(215,15%,55%)] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
      </div>

      <div className="w-full max-w-sm">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${config.gradient} mb-4`}
          >
            <Crown className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">{config.name}</h1>
          <p className="text-[hsl(215,15%,50%)] text-sm mt-1">Sign in to continue</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-[hsl(215,15%,55%)] mb-1.5 block font-medium">
              {config.inputLabel}
            </label>
            <Input
              type={config.inputLabel === "Password" ? "password" : "text"}
              placeholder={config.inputPlaceholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="bg-[hsl(215,30%,12%)] border-[hsl(215,25%,20%)] text-white placeholder:text-[hsl(215,15%,35%)] h-11"
            />
          </div>
          <Button
            type="submit"
            className={`w-full h-11 bg-gradient-to-r ${config.gradient} text-white hover:opacity-90 transition-opacity`}
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CompanyLogin;
