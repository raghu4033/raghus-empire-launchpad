import { useState } from "react";
import { Bot, X, Send, Sparkles } from "lucide-react";

const demoInsights = [
  "📊 Revenue is up 12% this quarter across all businesses.",
  "🛒 Woodeen has 23 pending orders that need fulfillment today.",
  "💎 JewelFox catalog has 8 products with missing pricing data.",
  "🐛 Pattrnly bug tracker shows 5 critical issues unresolved.",
  "👥 Developer team sprint velocity improved by 18% this week.",
];

const AIAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "assistant" | "user"; content: string }[]>([
    { role: "assistant", content: "Hello! I'm your Empire AI assistant. Ask me about business insights, metrics, or quick actions." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    
    // Demo response
    setTimeout(() => {
      const insight = demoInsights[Math.floor(Math.random() * demoInsights.length)];
      setMessages((prev) => [...prev, { role: "assistant", content: insight }]);
    }, 800);
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg animate-pulse-glow hover:scale-110 transition-transform"
        >
          <Sparkles className="w-5 h-5" />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-50 w-[340px] h-[460px] glass-card flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
            <Bot className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-foreground flex-1">Empire AI</span>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-xs leading-relaxed px-3 py-2 rounded-xl max-w-[90%] ${
                  msg.role === "assistant"
                    ? "bg-accent/50 text-foreground"
                    : "bg-primary/20 text-foreground ml-auto"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border/30">
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your businesses..."
                className="flex-1 bg-accent/30 border border-border/30 rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
