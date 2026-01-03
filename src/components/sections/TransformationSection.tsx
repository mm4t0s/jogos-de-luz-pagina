import { ScrollReveal, TiltCard, FloatingElement } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { ArrowRight, Frown, Smile, Sparkles } from "lucide-react";
import familyMoment from "@/assets/family-moment.jpg";

const beforeItems = [
  "Celulares na mão o tempo todo",
  "Crianças desinteressadas na fé",
  "Falta de conexão em família",
  "Rotina espiritual inconsistente",
];

const afterItems = [
  "Risadas e participação ativa",
  "Crianças aprendendo brincando",
  "Momentos que viram tradição",
  "Fé vivida de forma natural",
];

export const TransformationSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Decorative elements */}
      <FloatingElement delay={0} duration={10} y={20} className="absolute top-20 right-10">
        <div className="w-32 h-32 rounded-full bg-gradient-radial from-gold-400/20 to-transparent blur-2xl" />
      </FloatingElement>
      <FloatingElement delay={2} duration={8} y={25} className="absolute bottom-20 left-10">
        <div className="w-40 h-40 rounded-full bg-gradient-radial from-primary/15 to-transparent blur-2xl" />
      </FloatingElement>

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Transformação Real
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              A transformação que você vai viver
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16">
          {/* Before Card */}
          <ScrollReveal direction="left">
            <TiltCard intensity={5}>
              <div className="relative h-full p-8 rounded-3xl bg-card border border-destructive/20 shadow-elevated overflow-hidden group">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-destructive via-destructive/80 to-destructive/50" />
                
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-radial from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center">
                      <Frown className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">Antes</h3>
                  </div>

                  <ul className="space-y-5">
                    {beforeItems.map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className="flex items-center gap-4"
                      >
                        <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-destructive/60" />
                        <span className="text-lg text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* After Card */}
          <ScrollReveal direction="right">
            <TiltCard intensity={5}>
              <div className="relative h-full p-8 rounded-3xl bg-card border border-primary/20 shadow-elevated overflow-hidden group">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-gold-400 to-accent" />
                
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl gradient-cta flex items-center justify-center shadow-gold">
                      <Smile className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">Depois</h3>
                  </div>

                  <ul className="space-y-5">
                    {afterItems.map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className="flex items-center gap-4"
                      >
                        <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-primary" />
                        <span className="text-lg font-medium text-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>

        {/* Family Image */}
        <ScrollReveal delay={0.3} scale>
          <div className="max-w-4xl mx-auto">
            <TiltCard intensity={3}>
              <div className="relative rounded-3xl overflow-hidden shadow-3d">
                <img
                  src={familyMoment}
                  alt="Família feliz brincando juntos"
                  className="w-full h-auto"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-white text-lg md:text-xl font-medium text-center drop-shadow-lg">
                    Momentos que viram memórias para toda a vida
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};