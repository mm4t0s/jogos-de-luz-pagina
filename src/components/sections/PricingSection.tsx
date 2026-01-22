import { Button } from "@/components/ui/button";
import { Shield, Download, Sparkles, Star, Check, Copy, CheckCircle2 } from "lucide-react";
import bannerCheckout from "@/assets/banner-checkout-v2.jpg";
import desenhosCover from "@/assets/kit-basico-cover.jpg";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const PricingSection = () => {
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText("QUERO20");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-2 animate-fade-in">
            <Star className="w-6 h-6 text-primary fill-primary animate-pulse-soft" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Escolha o <span className="text-primary">kit ideal</span> para<br className="hidden md:block" /> sua família
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Comece hoje mesmo a ensinar a Bíblia às crianças de forma <span className="text-primary font-medium">leve, divertida e sem telas</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">

          {/* --- 2. BASIC KIT CARD (LEFT) --- */}
          <div className="relative rounded-3xl bg-card border border-border shadow-lg overflow-hidden group hover:border-primary/30 transition-all duration-300">
            <div className="p-6 md:p-8">

              {/* Added Image for Basic Kit */}
              <div className="relative rounded-xl overflow-hidden shadow-sm mb-6 border border-border/50">
                <img
                  src={desenhosCover}
                  alt="Kit Básico - Desenhos Bíblicos"
                  className="w-full h-auto object-cover mx-auto" // Controlled height for balance
                  loading="lazy"
                />
              </div>

              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Kit Básico
                  <span className="block text-lg font-normal text-muted-foreground mt-1">Desenhos Bíblicos</span>
                </h3>
              </div>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-xl font-bold text-muted-foreground">R$</span>
                <span className="text-4xl font-bold text-foreground">14,90</span>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "75 desenhos bíblicos para colorir",
                  "Cada desenho com versículo bíblico",
                  "Certificado Faith Goods ao final",
                  "Acesso imediato"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold py-6 rounded-xl transition-all"
                onClick={() => setIsUpgradeModalOpen(true)}
              >
                👉 Quero apenas os Desenhos
              </Button>
            </div>
          </div>

          {/* --- 3. COMPLETE KIT CARD (RIGHT - PREMIUM) --- */}
          <div id="kit-completo" className="relative transform lg:-translate-y-4">
            {/* Premium Halo */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-b from-primary via-accent to-primary blur-sm opacity-50" />

            <div className="relative rounded-[2rem] bg-card border-2 border-primary overflow-hidden shadow-2xl">
              {/* Ribbon */}
              <div className="bg-primary text-primary-foreground text-center py-2 font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2">
                <Star className="w-4 h-4 fill-current" />
                MAIS VENDIDO
                <Star className="w-4 h-4 fill-current" />
              </div>

              <div className="p-6 md:p-8">
                {/* Banner Image */}
                <div className="relative rounded-xl overflow-hidden shadow-md mb-6 border border-border/50">
                  <img
                    src={bannerCheckout}
                    alt="Kit Completo Jogos de Luz"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="mb-6 text-center">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 text-gradient">
                    Kit Completo Jogos de Luz
                  </h3>
                </div>

                {/* Pricing Highlight */}
                <div className="text-center mb-6 relative">
                  <div className="absolute inset-0 bg-primary/5 blur-xl rounded-full transform scale-75" />
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <p className="text-muted-foreground text-sm line-through mb-1">De R$ 197,00</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-foreground">R$</span>
                      <span className="text-5xl md:text-6xl font-bold text-primary">47</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 font-medium">
                      Pagamento único • Download imediato
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    "✔ Tudo o que está incluso no Kit Básico",
                    "Mais de 600 atividades bíblicas prontas",
                    "Mais de 20 jogos bíblicos interativos",
                    "Bônus exclusivos",
                    "Acesso imediato e uso vitalício"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-2 rounded-lg bg-secondary/50">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {item.replace("✔ ", "")}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="w-full cursor-pointer bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold text-lg py-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all group animate-pulse-soft"
                  asChild
                >
                  <a href="https://pay.kiwify.com.br/s34DGSJ" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center justify-center gap-2">
                      👉 Quero o Kit Completo Jogos de Luz
                      <Sparkles className="w-5 h-5 group-hover:animate-spin" />
                    </span>
                  </a>
                </Button>

                <div className="flex items-center justify-center gap-4 mt-6 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Garantia 30 dias</span>
                  <span className="flex items-center gap-1"><Download className="w-3 h-3" /> Digital</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Footnote */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            Compra 100% segura e processada pela Kiwify
          </p>
        </div>
      </div>

      {/* --- UPGRADE POP-UP MODAL --- */}
      <Dialog open={isUpgradeModalOpen} onOpenChange={setIsUpgradeModalOpen}>
        <DialogContent className="sm:max-w-md md:max-w-lg bg-white border-0 shadow-2xl rounded-3xl p-0 overflow-hidden gap-0 max-h-[95vh] overflow-y-auto scrollbar-hide">
          {/* 1. Vibrant Header */}
          <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 p-6 pt-8 text-center relative overflow-hidden shrink-0">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-amber-400/20 rounded-full blur-xl translate-x-1/3 translate-y-1/3"></div>

            <div className="relative z-10">
              <div className="mx-auto w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg mb-3 animate-bounce-subtle ring-4 ring-white/20">
                <Sparkles className="w-7 h-7 text-orange-600 fill-orange-600" />
              </div>
              <DialogTitle className="font-display text-xl md:text-2xl font-extrabold text-white text-center leading-tight drop-shadow-sm">
                Espere! Uma oferta especial<br />para você
              </DialogTitle>
            </div>
          </div>

          <div className="p-5 md:p-6 space-y-4">
            <DialogDescription className="text-center text-sm md:text-base text-muted-foreground">
              Que tal levar o <span className="font-bold text-orange-600">Kit Completo</span> e transformar ainda mais o aprendizado da sua criança?
            </DialogDescription>

            {/* Feature Highlights */}
            <div className="bg-orange-50/80 rounded-xl p-3 border border-orange-100 text-center relative">
              <p className="text-sm text-foreground leading-relaxed">
                Além dos desenhos, você recebe mais de <span className="text-orange-600 font-bold">600 atividades</span> e <span className="text-orange-600 font-bold">20 jogos interativos</span>.
                <br />
                <span className="text-[10px] sm:text-xs text-muted-foreground mt-1 block">(Material para casa, igreja e escola)</span>
              </p>
            </div>

            {/* Exclusive Offer Pricing */}
            <div className="flex flex-col items-center justify-center gap-1 bg-gradient-to-r from-orange-100/50 to-amber-100/50 rounded-xl p-3 border border-orange-100">
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground line-through text-base">R$ 47</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-orange-600">POR R$</span>
                  <span className="text-4xl font-black text-orange-600 tracking-tighter">37</span>
                </div>
              </div>
              <div className="bg-orange-500 text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm animate-pulse-soft">
                OFERTA ÚNICA DE AGORA
              </div>
            </div>

            {/* --- COUPON BOX MODAL --- */}
            <div className="bg-orange-50 border border-orange-200 border-dashed rounded-xl p-3 text-center shadow-sm">
              <p className="text-orange-800 text-xs font-bold mb-2 flex items-center justify-center gap-1">
                🎉 +20% OFF EXTRA NO CUPOM
              </p>
              <div className="flex items-center justify-between bg-white rounded-lg p-1.5 pl-3 border border-orange-200 shadow-inner gap-2 max-w-[200px] mx-auto">
                <code className="text-orange-600 font-black text-base">QUERO20</code>
                <Button size="icon" variant="ghost" className="h-7 w-7 hover:bg-orange-50 text-orange-600" onClick={copyToClipboard} title="Copiar cupom">
                  {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-1">
              <Button
                type="button"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-base py-4 h-auto rounded-xl shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
                onClick={() => window.open("https://pay.kiwify.com.br/i8ir2xt", "_blank")}
              >
                <span>Sim! Quero levar o Kit Completo</span>
                <Star className="w-4 h-4 fill-white/20 group-hover:fill-white text-white transition-colors" />
              </Button>

              <Button
                type="button"
                variant="secondary"
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold text-xs sm:text-sm py-3 h-auto rounded-xl transition-colors border border-transparent hover:border-gray-300"
                onClick={() => window.open("https://pay.kiwify.com.br/vOlp6MG", "_blank")}
              >
                Não obrigado, quero apenas os desenhos por R$ 14,90
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
