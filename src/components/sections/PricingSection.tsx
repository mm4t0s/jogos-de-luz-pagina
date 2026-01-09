import { Button } from "@/components/ui/button";
import { Shield, Download, Sparkles, Star, Check } from "lucide-react";
import bannerCheckout from "@/assets/banner-checkout.png";

const benefits = [
  "Kit completo para crianças de 4 a 12 anos",
  "+20 jogos bíblicos prontos para imprimir",
  "+600 atividades cristãs organizadas por tema",
  "+75 desenhos bíblicos para colorir",
  "Bíblia ilustrada e devocional infantil inclusos",
  "Uso vitalício em casa, igreja ou ministério infantil",
];

// Corner decoration component
const CornerDecoration = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => {
  const positions = {
    tl: 'top-0 left-0',
    tr: 'top-0 right-0 rotate-90',
    bl: 'bottom-0 left-0 -rotate-90',
    br: 'bottom-0 right-0 rotate-180',
  };

  return (
    <div className={`absolute ${positions[position]} w-12 h-12 pointer-events-none`}>
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full text-primary">
        <path
          d="M0 0 L48 0 L48 8 L8 8 L8 48 L0 48 Z"
          fill="currentColor"
          opacity="0.15"
        />
        <path
          d="M0 0 L24 0 L24 4 L4 4 L4 24 L0 24 Z"
          fill="currentColor"
          opacity="0.4"
        />
        <circle cx="6" cy="6" r="3" fill="currentColor" opacity="0.6" />
      </svg>
    </div>
  );
};

export const PricingSection = () => {
  return (
    <section 
      id="pricing-section" 
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-secondary" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Premium frame container */}
          <div className="relative p-2 md:p-3">
            {/* Outer decorative border */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30" />
            
            {/* Decorative pattern overlay */}
            <div 
              className="absolute inset-0 rounded-[2rem] opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
                backgroundSize: '16px 16px'
              }}
            />

            {/* Inner card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-card via-card to-secondary/30 shadow-3d">
              {/* Corner decorations */}
              <CornerDecoration position="tl" />
              <CornerDecoration position="tr" />
              <CornerDecoration position="bl" />
              <CornerDecoration position="br" />

              {/* Top ribbon */}
              <div className="relative bg-gradient-to-r from-primary via-accent to-primary py-3 px-4">
                {/* Ribbon shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <p className="relative text-center text-primary-foreground font-bold text-sm md:text-base flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  OFERTA ESPECIAL POR TEMPO LIMITADO
                  <Sparkles className="w-4 h-4" />
                </p>
              </div>

              <div className="p-5 md:p-8">
                {/* Best seller badge */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent rounded-full blur-md opacity-60" />
                    
                    <div className="relative flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-gold border border-white/20">
                      <Star className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
                      <span className="text-primary-foreground font-bold text-sm tracking-wide">
                        MAIS VENDIDO
                      </span>
                      <Star className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Banner Image with premium frame */}
                <div className="relative mb-6">
                  {/* Image frame border */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 rounded-2xl" />
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-2xl" />
                  
                  <div className="relative rounded-xl overflow-hidden shadow-elevated">
                    <img
                      src={bannerCheckout}
                      alt="Kit Premium Jogos de Luz - Ensinar a Bíblia pode ser leve, divertido e inesquecível"
                      className="w-full h-auto"
                      loading="lazy"
                    />
                    {/* Overlay glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mb-6">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Kit Premium Jogos de Luz
                  </h2>
                  <p className="text-muted-foreground mt-2 text-sm md:text-base">
                    Material pronto para ensinar a Palavra de forma leve, organizada e sem telas.
                  </p>
                </div>

                {/* Benefits list */}
                <div className="space-y-2.5 mb-6">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-secondary/80 to-secondary/40 border border-primary/10 hover:border-primary/30 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Check className="w-3.5 h-3.5 text-primary-foreground" />
                      </div>
                      <span className="text-foreground text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Price box with premium styling */}
                <div className="relative text-center p-6 md:p-8 rounded-2xl mb-6 overflow-hidden">
                  {/* Price box background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-secondary via-muted/50 to-secondary/80" />
                  
                  {/* Decorative border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-primary/20" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />

                  <div className="relative">
                    <p className="text-muted-foreground mb-2 text-sm">De <span className="line-through">R$197</span> por apenas</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl md:text-3xl font-bold text-foreground">R$</span>
                      <span className="font-display text-6xl md:text-8xl font-bold text-gradient drop-shadow-sm">
                        47
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-3">
                      Pagamento único • Download imediato • Uso vitalício
                    </p>
                  </div>
                </div>

                {/* CTA Button with pulse effect */}
                <div className="relative">
                  {/* Glow behind button */}
                  <div className="absolute inset-0 gradient-cta rounded-2xl blur-xl opacity-50" />
                  
                  <Button
                    size="lg"
                    asChild
                    className="relative w-full gradient-cta shadow-gold text-primary-foreground font-bold text-base md:text-lg py-7 md:py-8 rounded-2xl hover:scale-[1.02] transition-all duration-300 text-center whitespace-normal leading-tight group overflow-hidden"
                  >
                    <a href="https://pay.cakto.com.br/3bnyiqi_657025" target="_blank" rel="noopener noreferrer">
                      {/* Shine sweep on hover */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="relative flex items-center justify-center gap-2">
                        <Download className="w-5 h-5" />
                        Quero meu Kit Completo agora
                      </span>
                    </a>
                  </Button>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6 text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5 bg-secondary/80 px-3 py-1.5 rounded-full border border-primary/10">
                    <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Garantia de 7 dias</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-secondary/80 px-3 py-1.5 rounded-full border border-primary/10">
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Compra 100% segura</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-secondary/80 px-3 py-1.5 rounded-full border border-primary/10">
                    <Download className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Acesso imediato</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
