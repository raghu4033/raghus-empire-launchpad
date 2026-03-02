import { useEffect, useState } from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  delay?: number;
}

const StatCard = ({ title, value, prefix = "", suffix = "", icon: Icon, trend, trendUp, delay = 0 }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 1200;
      const steps = 40;
      const increment = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return (
    <div className="glass-card p-5 group hover:glow-blue transition-all duration-300 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-start justify-between mb-3">
        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        {trend && (
          <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
            trendUp ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
          }`}>
            {trend}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-foreground font-mono tracking-tight">
        {prefix}{count.toLocaleString()}{suffix}
      </p>
      <p className="text-xs text-muted-foreground mt-1">{title}</p>
    </div>
  );
};

export default StatCard;
