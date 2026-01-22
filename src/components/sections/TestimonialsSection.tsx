import { Play, ArrowDown, CheckCircle2, ChevronDown, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import depoimento1 from "@/assets/depoimento-1.jpg";
import depoimento2 from "@/assets/depoimento-2.jpg";
import depoimento3 from "@/assets/depoimento-3.jpg";
import depoimento4 from "@/assets/depoimento-4.jpg";
import depoimento5 from "@/assets/depoimento-5.jpg";

const TESTIMONIALS = [
    { id: 101, name: "Depoimento via WhatsApp", image: depoimento1, color: "bg-white" },
    { id: 102, name: "Depoimento via WhatsApp", image: depoimento2, color: "bg-white" },
    { id: 103, name: "Depoimento via WhatsApp", image: depoimento3, color: "bg-white" },
    { id: 104, name: "Depoimento via WhatsApp", image: depoimento4, color: "bg-white" },
    { id: 105, name: "Depoimento via WhatsApp", image: depoimento5, color: "bg-white" },
];

export const TestimonialsSection = () => {
    return (
        <section className="py-12 md:py-20 bg-gradient-to-b from-white via-orange-50/50 to-white border-b border-border/50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 text-orange-200 opacity-20 hidden md:block animate-pulse duration-[3000ms]">
                <MessageCircle className="w-24 h-24 rotate-[-12deg]" />
            </div>
            <div className="absolute bottom-10 right-10 text-primary/5 opacity-10 hidden md:block">
                <MessageCircle className="w-32 h-32 rotate-[12deg]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10 md:mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-700 font-bold text-xs md:text-sm mb-6 shadow-sm backdrop-blur-sm">
                            <Star className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                            Famílias transformadas
                        </div>
                        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto leading-[1.15]">
                            O que <span className="text-primary relative inline-block">
                                pais e educadores
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span> estão dizendo
                        </h3>
                        <p className="mt-4 text-muted-foreground text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
                            Veja como os Jogos de Luz estão criando momentos inesquecíveis em centenas de lares e ministérios.
                        </p>
                    </div>

                    <div className="relative px-4 md:px-12 mb-10">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4">
                                {TESTIMONIALS.map((t) => (
                                    <CarouselItem key={t.id} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                                        <div className="flex flex-col items-center group cursor-pointer">
                                            {/* Scroll/Next Cue for user */}
                                            <div className={`w-full aspect-[9/16] rounded-2xl ${t.color} relative overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/10`}>
                                                {/* @ts-ignore */}
                                                {t.image ? (
                                                    <>
                                                        {/* @ts-ignore */}
                                                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="absolute inset-0 flex items-center justify-center opacity-80">
                                                            <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                                                <Play className="w-5 h-5 text-primary fill-current ml-0.5" />
                                                            </div>
                                                        </div>

                                                        {/* Overlay Text */}
                                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12 opacity-0 group-hover:opacity-100 transition-opacity">
                                                            <p className="text-white text-xs font-medium text-center">Ver depoimento</p>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                            {/* Name */}

                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="-left-2 md:-left-6 bg-card hover:bg-primary hover:text-white border-border shadow-md" />
                            <CarouselNext className="-right-2 md:-right-6 bg-card hover:bg-primary hover:text-white border-border shadow-md" />
                        </Carousel>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <Button
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8 py-6 h-auto shadow-lg hover:shadow-xl hover:scale-105 transition-all text-lg"
                            onClick={() => document.getElementById('kit-completo')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                        >
                            Ver os kits disponíveis
                        </Button>

                        <div className="flex items-center gap-3 text-[10px] md:text-xs text-muted-foreground uppercase tracking-wide font-medium opacity-70">
                            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Não é assinatura</span>
                            <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Acesso Imediato</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual Continuity Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce opacity-30 hidden md:block">
                <ChevronDown className="w-6 h-6 text-foreground" />
            </div>
        </section>
    );
};
