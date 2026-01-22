import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import vslPoster from "@/assets/poster-vsl.jpg";
import { Play, Volume2, VolumeX, Star, ShieldCheck, Zap } from "lucide-react";

export const HeroVSLSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const VIDEO_SRC = "https://vsljogosdeluz.matheusmedeirosdireito.workers.dev/vsl";

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToPricing = (e: React.MouseEvent, targetId: string = 'pricing-section') => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // If targeting a specific card, center it. Otherwise (section), align to top or center as appropriate.
      // 'center' is usually good for attention.
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-12 md:pb-16 flex flex-col justify-center bg-background min-h-[90vh]">
      {/* Background with Orange Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 via-orange-50/40 to-background" />

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">

        {/* 1. Logo */}
        <div className="mb-6 md:mb-10 animate-fade-in w-full max-w-[280px] md:max-w-md mx-auto">
          <img
            src={logo}
            alt="FaithGoods Jogos de Luz"
            className="w-full h-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Container */}
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 mb-8 px-2">

          {/* 2. Headline (Optimized Layout) */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Veja tudo o que você
            <span className="block text-primary mt-1">vai receber</span>
          </h1>

          {/* 3. Subheadline */}
          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Para ensinar a Bíblia às crianças de forma leve, sem telas e com interesse real.
          </p>
        </div>

        {/* 4. VSL Block with Desktop/Mobile Phone Mockup */}
        <div className="flex flex-col items-center mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {/* Phone Frame Container */}
          <div className="relative w-[320px] md:w-[340px] aspect-[9/16] bg-gray-900 rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border-[8px] border-gray-900 ring-1 ring-gray-900/50">
            {/* Notch (Visual only) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[24px] w-[120px] bg-black rounded-b-2xl z-20 pointer-events-none"></div>

            {/* Screen Content */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-black ring-1 ring-white/10">
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                poster={vslPoster}
                className="w-full h-full object-cover"
                playsInline
                onClick={togglePlay}
              />

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer transition-opacity hover:bg-black/10 z-10"
                  onClick={togglePlay}
                >
                  <div className="w-16 h-16 bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              )}

              {/* Controls Overlay */}
              <div className="absolute bottom-6 right-6 z-10">
                <button
                  onClick={toggleMute}
                  className="p-2.5 bg-black/50 backdrop-blur-sm text-white rounded-full hover:bg-black/70 transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 5. CTAs Block (Scrolls to Pricing) */}
        <div className="w-full max-w-sm mx-auto space-y-3 animate-fade-up" style={{ animationDelay: "0.4s" }}>

          {/* Main CTA - Kit Completo */}
          <div className="relative group w-full max-w-xs mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <Button
              size="lg"
              className="relative w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white border-b-[3px] border-orange-700 hover:border-orange-800 h-auto py-2.5 rounded-2xl shadow-lg transform group-active:translate-y-0.5 group-active:border-b-0 transition-all duration-150"
              onClick={(e) => scrollToPricing(e, 'kit-completo')}
            >
              <div className="flex flex-col items-center gap-0.5">
                <span className="flex items-center gap-1.5 text-base sm:text-lg font-extrabold tracking-tight drop-shadow-sm">
                  <Star className="w-4 h-4 fill-yellow-300 text-yellow-300 animate-pulse" />
                  Quero o Kit Completo
                </span>
                <div className="bg-white/20 rounded-full px-3 py-0.5 backdrop-blur-sm">
                  <span className="text-white/90 text-xs font-medium mr-1.5">Por apenas</span>
                  <span className="text-xl sm:text-2xl font-black text-white drop-shadow-md">R$ 47,00</span>
                </div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold opacity-90">
                  Tudo incluso • Acesso imediato
                </span>
              </div>
            </Button>
          </div>

          {/* Secondary CTA - Kit Básico */}
          <div className="w-full max-w-xs mx-auto">
            <Button
              className="w-full bg-orange-100 hover:bg-orange-200 text-orange-900 border-2 border-orange-200 hover:border-orange-300 h-auto py-2.5 rounded-2xl shadow-md hover:shadow-lg transition-all group relative overflow-hidden"
              onClick={scrollToPricing}
            >
              <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-colors duration-300"></div>
              <div className="relative flex flex-col items-center z-10">
                <span className="font-bold text-sm sm:text-base flex items-center gap-2 text-orange-950">
                  🎨 Quero apenas os Desenhos
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-xs text-orange-800/80 font-medium">Por apenas</span>
                  <span className="text-lg font-extrabold text-orange-700">R$ 14,90</span>
                </div>
              </div>
            </Button>
          </div>

          {/* Reassurance */}
          <div className="flex items-center justify-center gap-3 text-[10px] md:text-xs text-muted-foreground pt-1 opacity-80">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Compra Segura</span>
            <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Receba Agora</span>
          </div>
        </div>
      </div>
    </section>
  );
};
