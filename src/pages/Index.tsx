import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Crown, Globe, Lightbulb, Rocket, Layers, ShoppingCart, Gem, Code2, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
};

const companies = [
  {
    name: "Pattrnly",
    tagline: "Product & Engineering Intelligence",
    description: "A powerful suite of tools for product development, bug tracking, task management, and UI reference systems built for modern engineering teams.",
    icon: Layers,
    gradient: "from-red-500/20 to-red-900/10",
    borderHover: "hover:border-red-500/30",
    iconColor: "text-red-400",
  },
  {
    name: "Woodeen",
    tagline: "Handcrafted E-commerce",
    description: "End-to-end e-commerce operations powering inventory management, order fulfillment, product resources, and marketing for artisanal wood products.",
    icon: ShoppingCart,
    gradient: "from-orange-500/20 to-orange-900/10",
    borderHover: "hover:border-orange-500/30",
    iconColor: "text-orange-400",
  },
  {
    name: "JewelFox",
    tagline: "Luxury Jewelry Innovation",
    description: "Precision tools for jewelry product creation, market pricing research, high-fidelity mockup generation, and catalog management at scale.",
    icon: Gem,
    gradient: "from-violet-500/20 to-violet-900/10",
    borderHover: "hover:border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    name: "Developer Team",
    tagline: "Engineering Excellence",
    description: "Our core engineering division driving innovation across all ventures — from deployment pipelines to internal knowledge systems and team operations.",
    icon: Code2,
    gradient: "from-blue-500/20 to-blue-900/10",
    borderHover: "hover:border-blue-500/30",
    iconColor: "text-blue-400",
  },
];

const pillars = [
  { icon: Rocket, title: "Innovation First", description: "We build products that push boundaries and redefine industries." },
  { icon: Globe, title: "Global Vision", description: "Operating across verticals with ambitions that span continents." },
  { icon: Lightbulb, title: "Relentless Focus", description: "Every venture is built with precision, purpose, and obsessive attention to craft." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══════ HERO ═══════ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-white/[0.03] to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 border border-border/40 rounded-full px-4 py-1.5 mb-8"
          >
            <Crown className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground tracking-wide">Global Innovation Group</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-foreground"
          >
            Where Ideas
            <br />
            <span className="text-gradient">Become Empire</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            We build, scale, and operate ventures across technology, e-commerce, and luxury — turning bold ideas into market-defining companies.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#companies"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Explore Companies
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border/50 px-6 py-3 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border transition-all"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ═══════ COMPANIES ═══════ */}
      <section id="companies" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Our Portfolio</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">The Empire</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companies.map((company, i) => (
              <motion.div
                key={company.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className={`glass-card p-8 group cursor-pointer transition-all duration-500 ${company.borderHover}`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${company.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <company.icon className={`w-6 h-6 ${company.iconColor}`} />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-1">{company.name}</h3>
                <p className="text-sm text-muted-foreground font-medium mb-4">{company.tagline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{company.description}</p>

                <div className="flex items-center gap-1.5 text-sm font-medium text-foreground opacity-60 group-hover:opacity-100 transition-opacity">
                  <span>Visit Website</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ABOUT ═══════ */}
      <section id="about" className="py-32 px-6 border-t border-border/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">About</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">Built Different</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Raghu's Empire is a holding group founded on the principle that great companies are built by relentless execution, thoughtful design, and unwavering vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="glass-card p-8 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center mx-auto mb-5">
                  <pillar.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CONTACT ═══════ */}
      <section id="contact" className="py-32 px-6 border-t border-border/20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Get in Touch</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">Let's Build Together</h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Whether you're looking to collaborate, invest, or join our team — we'd love to hear from you.
            </p>
            <a
              href="mailto:hello@raghusempire.com"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              hello@raghusempire.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="border-t border-border/20 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-semibold text-foreground">Raghu's Empire</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2025 Raghu's Empire. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
