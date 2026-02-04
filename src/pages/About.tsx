import { Crown, Target, Zap, TrendingUp, Award } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-lg">
              <span className="text-5xl font-heading font-bold text-secondary-foreground">R</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            About Raghu
          </h1>
          <p className="text-xl text-muted-foreground">
            Entrepreneur • Innovator • Empire Builder
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Raghu is an entrepreneur driven by a singular mission: to build systems and products 
              that create lasting impact. With a focus on innovation, scalability, and excellence, 
              he has dedicated himself to creating ventures that solve real problems and deliver 
              genuine value.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              From SaaS platforms that transform how institutions operate, to eCommerce brands 
              that bring luxury to everyone's reach, each venture under Raghu's Empire reflects 
              a commitment to quality, innovation, and long-term thinking.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The empire isn't just about building businesses—it's about building systems that 
              scale, products that delight, and a legacy that inspires. Every decision is guided 
              by the question: "Will this matter in 10 years?"
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-16">
            Core Principles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 rounded-2xl bg-card/50 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Vision-Driven</h3>
                <p className="text-muted-foreground text-sm">
                  Every venture begins with a clear vision of the future we're building towards. 
                  Short-term gains never override long-term value creation.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-card/50 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Bias for Action</h3>
                <p className="text-muted-foreground text-sm">
                  Ideas are worthless without execution. We move fast, learn faster, and 
                  iterate relentlessly to turn vision into reality.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-card/50 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Systems Over Hacks</h3>
                <p className="text-muted-foreground text-sm">
                  We build scalable systems, not quick fixes. Every solution is designed 
                  to grow, adapt, and create compounding value over time.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-card/50 border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Excellence Always</h3>
                <p className="text-muted-foreground text-sm">
                  Mediocrity is not an option. Every product, every interaction, every 
                  decision reflects our commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Crown className="w-10 h-10 text-secondary mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-heading font-light text-foreground italic mb-6">
            "Building an empire isn't about chasing trends—it's about creating timeless value 
            that compounds over decades."
          </blockquote>
          <p className="text-muted-foreground">— Raghu</p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
