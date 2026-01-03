import { ScrollReveal, TiltCard } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import { Check, Gamepad2, Palette, Book, Heart, FileText, Sparkles, Gift } from "lucide-react";

const includes = [
  { 
    icon: Palette, 
    title: "25 Livros Cristãos para Colorir",
    description: "Uma coleção completa com histórias bíblicas ilustradas de forma simples, leve e cativante.",
    value: "49,90"
  },
  { 
    icon: Gamepad2, 
    title: "5 Jogos Bíblicos Interativos",
    description: "Atividades dinâmicas que transformam o aprendizado em diversão.",
    value: "24,90"
  },
  { 
    icon: Heart, 
    title: "Devocional Infantil Completo",
    description: "Um guia lindo e delicado para ajudar as crianças a criarem o hábito da oração.",
    value: "29,90"
  },
  { 
    icon: Book, 
    title: "Cartões Bíblicos para Memorização",
    description: "Versículos selecionados para fortalecer o ensino da Palavra de forma prática.",
    value: "19,90"
  },
  { 
    icon: Sparkles, 
    title: "Desafio Bíblico de 7 Dias",
    description: "Uma jornada simples e transformadora para incentivar a leitura da Bíblia.",
    value: "19,90"
  },
  { 
    icon: Gift, 
    title: "+100 Adesivos Cristãos",
    description: "Adesivos exclusivos, coloridos e temáticos para usar em atividades e presentes.",
    value: "8,90"
  },
];

export const IncludesSection = () => {
  return (
    <section id="conteudo" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 italic">
              O que está incluído no pacote
            </h2>
            <div className="inline-block">
              <span className="inline-block px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-lg">
                Lista de conteúdos:
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {includes.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <TiltCard intensity={5}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative h-full p-6 rounded-3xl bg-card shadow-soft border border-border/50 hover:shadow-elevated hover:border-primary/20 transition-all duration-300 group"
                >
                  {/* Icon container */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    {/* Value */}
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-muted-foreground italic">(Valor:</span>
                      <span className="text-destructive font-bold line-through italic">R${item.value}</span>
                      <span className="text-muted-foreground italic">)</span>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-tr-3xl rounded-bl-[100px]" />
                </motion.div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <p className="text-center text-muted-foreground mt-12 italic max-w-2xl mx-auto">
            As imagens exibidas representam apenas uma parte do conteúdo completo disponível no kit.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};