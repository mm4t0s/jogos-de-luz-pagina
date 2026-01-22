import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";

interface ProductImage {
  src: string;
  alt: string;
}

interface StackedImages {
  type: "stacked";
  images: ProductImage[];
}

interface SingleImage {
  type: "single";
  src: string;
  alt: string;
}

type CarouselImage = ProductImage | StackedImages | SingleImage;

interface ProductCarouselSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  accentColor?: "primary" | "gold" | "accent";
  images?: CarouselImage[];
  layout?: "vertical" | "horizontal" | "stacked";
  placeholderCount?: number;
  placeholderLabels?: string[];
}

export const ProductCarouselSection = ({
  id,
  title,
  subtitle,
  accentColor = "primary",
  images,
  placeholderCount = 5,
  placeholderLabels,
}: ProductCarouselSectionProps) => {
  const colorClasses = {
    primary: "from-primary/20 to-primary/5 border-primary/30",
    gold: "from-gold-400/20 to-gold-400/5 border-gold-400/30",
    accent: "from-accent/20 to-accent/5 border-accent/30",
  };

  const hasImages = images && images.length > 0;

  return (
    <section id={id} className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container relative z-10">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 italic">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-sm md:text-base px-4">{subtitle}</p>
          )}
        </div>

        <div className="relative px-4 sm:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {hasImages ? (
                images.map((item, index) => {
                  const isStacked = "type" in item && item.type === "stacked";
                  const isSingle = "type" in item && item.type === "single";
                  const isSimple = !("type" in item);

                  return (
                    <CarouselItem
                      key={index}
                      className="pl-2 sm:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                    >
                      <div className="h-full hover:scale-[1.02] transition-transform duration-200">
                        {isStacked ? (
                          <div className="relative aspect-[4/6] rounded-xl sm:rounded-2xl overflow-hidden shadow-elevated group cursor-pointer transition-all duration-3000 hover:shadow-3d bg-card">
                            <div className="h-full w-auto flex flex-col">
                              {item.images.slice(0, 2).map((img, imgIndex) => (
                                <div key={imgIndex} className="relative flex-1">
                                  <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    className="w-full h-full -translate-y-1.5 scale-[1.07] object-cover object-center"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="relative aspect-[4/6] rounded-xl sm:rounded-2xl overflow-hidden shadow-elevated group cursor-pointer transition-all duration-3000 hover:shadow-3d bg-card">
                            <img
                              src={(isSingle || isSimple) ? (item as ProductImage | SingleImage).src : ""}
                              alt={(isSingle || isSimple) ? (item as ProductImage | SingleImage).alt : ""}
                              loading="lazy"
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                        )}
                      </div>
                    </CarouselItem>
                  );
                })
              ) : (
                Array.from({ length: placeholderCount }).map((_, index) => (
                  <CarouselItem key={index} className="pl-2 sm:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                    <div className="h-full hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-200">
                      <div
                        className={`relative aspect-[3/4] rounded-xl sm:rounded-2xl bg-gradient-to-b ${colorClasses[accentColor]} border-2 border-dashed flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden group cursor-pointer transition-all duration-3000 hover:shadow-elevated`}
                      >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-muted/50 flex items-center justify-center mb-3 sm:mb-4">
                          <ImageIcon className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground text-center text-xs sm:text-sm font-medium">
                          {placeholderLabels?.[index] || `Produto ${index + 1}`}
                        </p>
                        <p className="text-muted-foreground/60 text-[10px] sm:text-xs mt-2 text-center">
                          Arraste uma imagem aqui
                        </p>

                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-3000 flex items-end justify-center pb-4 sm:pb-6">
                          <span className="text-primary-foreground font-semibold text-xs sm:text-sm px-4 text-center">
                            {placeholderLabels?.[index] || `Produto ${index + 1}`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <CarouselPrevious className="-left-2 sm:left-0 bg-card shadow-elevated border-border hover:bg-primary hover:text-primary-foreground h-8 w-8 sm:h-10 sm:w-10" />
            <CarouselNext className="-right-2 sm:right-0 bg-card shadow-elevated border-border hover:bg-primary hover:text-primary-foreground h-8 w-8 sm:h-10 sm:w-10" />
          </Carousel>
        </div>

        {/* CTA after carousel */}
        <div className="flex justify-center mt-8">
          <Button
            size="lg"
            onClick={() => {
              document.getElementById('kit-completo')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="gradient-cta shadow-gold text-primary-foreground font-bold text-base px-8 py-6 rounded-2xl hover:scale-105 transition-all duration-3000"
          >
            Quero meu Kit Jogos de Luz →
          </Button>
        </div>
      </div>
    </section>
  );
};
