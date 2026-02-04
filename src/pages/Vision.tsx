import { Crown, Mountain, Compass, Clock, Layers } from "lucide-react";
import Layout from "@/components/Layout";

const Vision = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Building Empires, Not Just Products
          </h1>
          <p className="text-xl text-muted-foreground">
            A philosophy of long-term thinking and sustainable value creation
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              In a world obsessed with quick wins and overnight success, we choose a different 
              path. Raghu's Empire is built on the principle that true value comes from patience, 
              persistence, and an unwavering commitment to excellence.
            </p>
            <p>
              We don't build products—we build systems. Systems that scale, adapt, and create 
              compounding value over time. Every decision is made with a 10-year horizon in mind, 
              not the next quarter.
            </p>
            <p>
              This isn't about playing it safe. It's about playing it smart. Taking calculated 
              risks on ventures that have the potential to create lasting impact, rather than 
              chasing every trend that comes along.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-16">
            The Four Pillars
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card/50 border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Long-Term Thinking
              </h3>
              <p className="text-muted-foreground">
                Every venture is evaluated on its potential to create value over decades, not months. 
                We resist the temptation of short-term gains that compromise long-term success.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card/50 border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Layers className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Systems Over Shortcuts
              </h3>
              <p className="text-muted-foreground">
                We build robust systems that work without constant intervention. The goal is creating 
                machines that generate value autonomously and scale infinitely.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card/50 border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Mountain className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Impactful Ventures
              </h3>
              <p className="text-muted-foreground">
                We only pursue ventures that have the potential to make a meaningful difference. 
                Profit is important, but purpose is paramount.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card/50 border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                Principled Growth
              </h3>
              <p className="text-muted-foreground">
                Growth at any cost is not growth—it's destruction in disguise. We grow sustainably, 
                ethically, and in alignment with our core values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Crown className="w-10 h-10 text-secondary mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-heading font-light text-foreground italic mb-6">
            "The empire we're building isn't measured in quarters—it's measured in generations."
          </blockquote>
          <p className="text-muted-foreground">— The Raghu's Empire Philosophy</p>
        </div>
      </section>
    </Layout>
  );
};

export default Vision;
