import { useState } from "react";
import { Link } from "react-router-dom";
import { Crown, Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#hero" },
  { name: "Companies", href: "#companies" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-border/30">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <Crown className="w-5 h-5 text-foreground group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-bold text-sm tracking-tight text-foreground">Raghu's Empire</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.name}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/30 px-6 pb-6 pt-2 space-y-1">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border/20 last:border-0"
            >
              {l.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
