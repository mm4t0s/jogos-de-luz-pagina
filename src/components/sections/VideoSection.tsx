import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-card" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm md:text-base mb-4"
          >
            Veja em poucos minutos como o Kit Jogos de Luz funciona na prática
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative aspect-video rounded-2xl overflow-hidden bg-secondary/50 border border-border/50 shadow-elevated cursor-pointer group"
            onClick={() => {
              // TODO: Open video modal or embed
              alert("Vídeo em breve!");
            }}
          >
            {/* Placeholder for video thumbnail */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gradient-cta flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground ml-1" />
              </div>
            </div>
            
            {/* Overlay text */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-xs md:text-sm text-muted-foreground bg-card/80 px-3 py-1.5 rounded-full">
                Clique para assistir
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
