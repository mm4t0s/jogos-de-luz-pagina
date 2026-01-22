import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Star, Volume2, VolumeX, ShieldCheck, Zap } from "lucide-react";
import vslPoster from "@/assets/poster-vsl.jpg";

// Placeholder for testimonials since we don't have video files yet
// In a real scenario, these would be video URLs
const TESTIMONIALS = [
    { id: 1, name: "Ana, mãe do Davi (5 anos)", color: "bg-red-100" },
    { id: 2, name: "Profa. Cláudia, Ministério Infantil", color: "bg-blue-100" },
    { id: 3, name: "Marcos, pai de 2 filhos", color: "bg-green-100" },
];

export const VSLAndTestimonialsSection = () => {
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
        <section className="py-12 md:py-16 bg-gradient-to-b from-card to-background overflow-hidden">
            <div className="container px-4 md:px-6">

                {/* 1. VSL Block */}
                <div className="flex flex-col items-center mb-12 animate-fade-up">
                    <div className="relative w-full max-w-[340px] md:max-w-[360px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 bg-black">

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
                                className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer transition-opacity hover:bg-black/20"
                                onClick={togglePlay}
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/90 text-primary-foreground rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform">
                                    <Play className="w-6 h-6 md:w-8 md:h-8 fill-current ml-1" />
                                </div>
                            </div>
                        )}

                        {/* Controls Overlay */}
                        <div className="absolute bottom-4 right-4 z-10">
                            <button
                                onClick={toggleMute}
                                className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                                aria-label={isMuted ? "Unmute" : "Mute"}
                            >
                                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* 2. CTAs Block */}
                <div className="max-w-md mx-auto space-y-4 mb-16 animate-fade-up" style={{ animationDelay: "0.2s" }}>

                    {/* Main CTA - Kit Completo */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                        <Button
                            size="lg"
                            className="relative w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-auto py-4 rounded-xl shadow-lg"
                            asChild
                        >
                            <a href="https://pay.kiwify.com.br/s34DGSJ" target="_blank" rel="noopener noreferrer">
                                <div className="flex flex-col items-center">
                                    <span className="flex items-center gap-2">
                                        <Star className="w-5 h-5 fill-current" />
                                        Quero o Kit Completo Jogos de Luz
                                    </span>
                                    <span className="text-xs font-medium opacity-90 mt-1">R$47 · tudo incluso</span>
                                </div>
                            </a>
                        </Button>
                    </div>

                    {/* Secondary CTA - Kit Básico */}
                    <Button
                        variant="outline"
                        size="lg"
                        className="w-full border-primary/20 hover:bg-primary/5 text-foreground h-auto py-3 rounded-xl"
                        asChild
                    >
                        <a href="https://pay.kiwify.com.br/y6V2i9j" target="_blank" rel="noopener noreferrer">
                            <div className="flex flex-col items-center">
                                <span className="font-semibold text-base">👉 Quero apenas os Desenhos Bíblicos</span>
                                <span className="text-xs text-muted-foreground mt-0.5">R$14,90 · acesso imediato</span>
                            </div>
                        </a>
                    </Button>

                    {/* Reassurance */}
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
                        <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Seguro</span>
                        <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Imediato</span>
                    </div>
                </div>

                {/* 3. Testimonials Section */}
                <div className="max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
                    <div className="text-center mb-8">
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                            O que pais e educadores estão dizendo
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {TESTIMONIALS.map((t) => (
                            <div key={t.id} className="flex flex-col items-center">
                                {/* Video Card Placeholder */}
                                <div className={`w-full aspect-[9/16] rounded-2xl ${t.color} relative overflow-hidden shadow-md group cursor-pointer hover:shadow-lg transition-all`}>
                                    {/* Placeholder content since we have no videos */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-80">
                                        <Play className="w-10 h-10 text-primary/80 fill-current opacity-80 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="absolute bottom-2 left-2 right-2 bg-black/40 backdrop-blur-sm rounded-lg p-2">
                                        <div className="h-1 bg-white/50 rounded-full w-full overflow-hidden">
                                            <div className="h-full bg-primary w-1/3"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Name */}
                                <p className="mt-3 text-sm font-medium text-center text-muted-foreground px-1 leading-tight">
                                    {t.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
