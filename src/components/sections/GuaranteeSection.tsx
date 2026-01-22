import { Handshake, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const GuaranteeSection = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 gradient-dark" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
                Garantia incondicional de{" "}
                <span className="text-orange-400">30 dias!</span>
              </h2>

              <div className="space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base mb-6">
                <p>
                  Se não atender às suas expectativas, devolvemos{" "}
                  <strong className="text-white">100% do seu investimento</strong>.
                </p>
                <p className="flex items-center md:items-start justify-center md:justify-start gap-2">
                  <Handshake className="inline-block w-5 h-6 text-orange-400" />
                  Sem perguntas. Sua confiança em primeiro lugar.
                </p>
              </div>

              {/* CTA */}
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById('kit-completo')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="gradient-cta shadow-lg shadow-orange-500/20 text-white font-bold text-base px-8 py-6 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                Quero meu Kit Jogos de Luz →
              </Button>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 p-1 sm:p-1.5 shadow-xl shadow-orange-900/40">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex flex-col items-center justify-center border-4 border-orange-300/30 p-3 sm:p-4 shadow-inner">
                    <div className="flex gap-0.5 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-200 fill-orange-200" />
                      ))}
                    </div>
                    <span className="text-white/90 font-bold text-[10px] sm:text-xs uppercase tracking-wider">Garantia</span>
                    <span className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white drop-shadow-md">30</span>
                    <span className="text-white/90 font-bold text-lg sm:text-xl uppercase">DIAS</span>
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
