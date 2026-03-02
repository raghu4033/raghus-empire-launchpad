import { Settings } from "lucide-react";

const SettingsPage = () => (
  <div className="space-y-6 pb-20 lg:pb-0">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
        <Settings className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground">Configure your dashboard</p>
      </div>
    </div>
    <div className="glass-card p-10 text-center">
      <p className="text-muted-foreground text-sm">Settings panel coming soon.</p>
    </div>
  </div>
);

export default SettingsPage;
