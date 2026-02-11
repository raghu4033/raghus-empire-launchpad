import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Crown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const errorMessages: Record<string, string[]> = {
  pattrnly: ["Employee ID not found", "Invalid credentials"],
  woodeen: ["Incorrect password", "Access denied"],
  jewelfox: ["Incorrect password", "Invalid credentials"],
  developer: ["Developer ID not recognized", "Access denied"],
};

const companyConfig: Record<string, {
  name: string;
  gradient: string;
  inputLabel: string;
  inputPlaceholder: string;
  bgColor: string;
  accentColor: string;
  accentRing: string;
}> = {
  pattrnly: {
    name: "Pattrnly",
    gradient: "from-red-600 to-red-800",
    inputLabel: "Employee ID",
    inputPlaceholder: "Enter your Employee ID",
    bgColor: "hsl(0, 30%, 6%)",
    accentColor: "hsl(0, 72%, 51%)",
    accentRing: "hsl(0, 72%, 51%)",
  },
  woodeen: {
    name: "Woodeen",
    gradient: "from-[hsl(14,82%,22%)] to-[hsl(14,82%,14%)]",
    inputLabel: "Password",
    inputPlaceholder: "Enter your Password",
    bgColor: "hsl(14, 40%, 6%)",
    accentColor: "hsl(14, 82%, 28%)",
    accentRing: "hsl(25, 80%, 50%)",
  },
  jewelfox: {
    name: "JewelFox",
    gradient: "from-[hsl(240,7%,25%)] to-[hsl(240,7%,13%)]",
    inputLabel: "Password",
    inputPlaceholder: "Enter your Password",
    bgColor: "hsl(240, 7%, 7%)",
    accentColor: "hsl(240, 5%, 30%)",
    accentRing: "hsl(240, 5%, 50%)",
  },
  developer: {
    name: "Developer Team",
    gradient: "from-blue-700 to-blue-950",
    inputLabel: "Developer ID",
    inputPlaceholder: "Enter your Developer ID",
    bgColor: "hsl(220, 50%, 5%)",
    accentColor: "hsl(220, 80%, 50%)",
    accentRing: "hsl(220, 80%, 60%)",
  },
};

const CompanyLogin = () => {
  const { company } = useParams<{ company: string }>();
  const config = companyConfig[company || ""] || companyConfig.pattrnly;
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msgs = errorMessages[company || "pattrnly"] || errorMessages.pattrnly;
    const randomError = msgs[Math.floor(Math.random() * msgs.length)];
    setError(randomError);
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundColor: config.bgColor }}
    >
      {/* Back link */}
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-[hsl(220,15%,45%)] hover:text-white transition-colors"
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
          <p className="text-[hsl(220,15%,40%)] text-sm mt-1">Sign in to continue</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-[hsl(220,15%,50%)] mb-1.5 block font-medium">
              {config.inputLabel}
            </label>
            <Input
              type={config.inputLabel === "Password" ? "password" : "text"}
              placeholder={config.inputPlaceholder}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError("");
              }}
              className={`bg-[hsl(220,30%,10%)] text-white placeholder:text-[hsl(220,15%,30%)] h-11 transition-all duration-300 ${
                shake ? 'animate-[shake_0.4s_ease-in-out]' : ''
              } ${
                error
                  ? 'border-red-500/70 focus-visible:ring-red-500/50'
                  : 'border-[hsl(220,25%,18%)]'
              }`}
              style={!error ? { ['--tw-ring-color' as string]: config.accentRing } : undefined}
            />
            {error && (
              <p className="text-red-400 text-xs mt-2 animate-fade-in">{error}</p>
            )}
          </div>
          <Button
            type="submit"
            className={`w-full h-11 bg-gradient-to-r ${config.gradient} text-white hover:opacity-90 transition-opacity`}
          >
            Continue
          </Button>
        </form>

        <p className="text-center text-[hsl(220,15%,25%)] text-xs mt-8 tracking-widest uppercase">
          Where Ideas Become Empire
        </p>
      </div>
    </div>
  );
};

export default CompanyLogin;
