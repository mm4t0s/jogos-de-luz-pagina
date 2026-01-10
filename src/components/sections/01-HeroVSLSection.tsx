import {
  ShieldCheck, Zap, Clock, ArrowDown, Sparkles, Key, Play,
  Rainbow, Flame, PartyPopper, Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import vslPoster from "@/assets/poster-vsl.jpg";
import { useEffect, useRef, useState } from "react";

const CHECKOUT_URL = "https://pay.cakto.com.br/3bnyiqi_657025";

export const HeroVSLSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const VIDEO_SRC = "https://vsljogosdeluz.matheusmedeirosdireito.workers.dev/vsl";

  const [isPlaying, setIsPlaying] = useState(false); // começa true pq tem autoplay
  const [canPlay, setCanPlay] = useState(false);

  const toggle = async () => {
    const v = videoRef.current;
    if (!v) return;

    try {
      if (v.paused) {
        await v.play();
        setIsPlaying(true);
      } else {
        v.pause();
        setIsPlaying(false);
      }
    } catch {
      // Se o browser bloquear play, o clique já costuma liberar.
    }
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onCanPlay = () => setCanPlay(true);

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("canplay", onCanPlay);

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-4 pb-0 md:pt-6">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 via-orange-50/40 to-background" />

      <div className="flex items-center justify-center">
        <img
          src={logo}
          alt="FaithGoods Jogos de Luz"
          className="z-10 h-20 md:h-20 w-auto object-contain"
        />
      </div>

      <div className="container relative z-10 py-6 md:py-8 px-4 md:px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <div className="mb-10 bg-gradient-to-br from-amber-50/90 via-orange-50/70 to-amber-100/60 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-primary/20 shadow-lg">
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-4 leading-snug">
                <Key className="inline-block mr-2 w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />
                O segredo para ensinar a Bíblia às crianças
              </h1>
              <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gradient mt-3 leading-snug">
                sem briga, sem tela e com interesse real!
                <Sparkles className="inline-block ml-2 w-6 h-6 text-amber-600" />
              </p>

              <div className="mt-4 pt-4 border-t border-primary/15">
                <p className="text-foreground font-semibold text-sm sm:text-base flex items-center justify-center gap-2">
                  Assista ao vídeo e descubra o método
                </p>
              </div>
            </div>
          </div>

          {/* Top urgency banner */}
          <div className="mb-10 flex justify-center">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm sm:text-base font-bold shadow-lg inline-flex items-center gap-2">
              <Play className="h-4 animate-pulse" />
              <span>ASSISTA AGORA</span>
            </div>
          </div>

          {/* Video - ONLY PLAY */}
          <div className="relative mx-auto max-w-sm mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-md opacity-75" />

            <div
              className="relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer select-none"
              onClick={toggle}
              role="button"
              aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            >
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                poster={vslPoster}
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
                // extras úteis:
                // @ts-ignore
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture
              />

              {/* Play overlay (só quando pausado) */}
              {!isPlaying && (
                <div className="absolute inset-0 grid place-items-center bg-black/20">
                  <div className="h-16 w-16 rounded-full bg-white/90 grid place-items-center shadow-lg">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                </div>
              )}

              {/* Loader opcional (enquanto não carrega) */}
              {!canPlay && (
                <div className="absolute inset-0 grid place-items-center">
                  <div className="h-10 w-10 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
                </div>
              )}
            </div>
          </div>

          {/* Product info below video */}
          <div className="text-center mb-5">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2">
              <Rainbow className="inline-block mr-2 w-8 h-8 text-orange-400" />
              Kit Jogos de Luz
              <Sparkles className="inline-block ml-2 w-6 h-6 text-amber-600" />
            </h2>
            <p className="text-base md:text-lg text-foreground font-medium">
              Ensine valores cristãos às crianças de forma simples e sem telas
            </p>
            <p className="text-base md:text-lg font-medium text-foreground">
              Para <strong className="text-primary">pais cristãos</strong> que desejam ensinar valores bíblicos em casa
            </p>
            <p className="text-xs md:text-sm font-medium text-muted-foreground">
              (também ideal para igrejas, EBD e ministério infantil)
            </p>
          </div>

          {/* Premium CTA Block */}
          <div className="relative bg-gradient-to-br from-amber-50 via-card to-orange-50/50 rounded-3xl p-6 sm:p-8 border-2 border-primary/25 text-center shadow-elevated overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/15 rounded-full blur-3xl" />

            <div className="relative z-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-lg">
              <Flame className="w-4 h-4" />
              <span>OFERTA ESPECIAL - 76% OFF</span>
            </div>

            <div className="relative z-10 mb-4">
              <p className="text-muted-foreground line-through text-base sm:text-lg mb-1">
                De R$ 197,00
              </p>
              <div className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-gradient mb-2">
                R$ 47
              </div>
              <div className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm sm:text-base bg-primary/10 px-3 py-1 rounded-full">
                <PartyPopper className="w-4 h-4" />
                <span>Economize R$ 150,00</span>
              </div>
            </div>

            <Button
              size="lg"
              asChild
              className="relative z-10 bg-primary hover:bg-primary/90 shadow-gold text-primary-foreground font-bold text-base sm:text-lg px-8 py-6 rounded-2xl hover:scale-105 transition-all duration-3000 w-full mb-5"
            >
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                Quero meu Kit Jogos de Luz agora
                <Rocket className="inline-block ml-1 w-5 h-5 text-primary-foreground" />
              </a>
            </Button>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5 bg-card/80 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Seguro
              </span>
              <span className="flex items-center gap-1.5 bg-card/80 px-3 py-1.5 rounded-full">
                <Zap className="w-4 h-4 text-primary" />
                Imediato
              </span>
              <span className="flex items-center gap-1.5 bg-card/80 px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4 text-primary" />
                Garantia 7 dias
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center mt-6 text-muted-foreground">
            <span className="text-xs mb-1">Veja o que está incluso</span>
            <ArrowDown className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
