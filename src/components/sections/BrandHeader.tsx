import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const BrandHeader = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-4 md:px-6">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center md:justify-start gap-2"
        >
          {/* Colorful Logo */}
          <div className="relative flex items-center gap-2 bg-gradient-to-r from-primary via-secondary to-accent px-4 py-2 rounded-full shadow-lg">
            {/* Animated stars */}
            <Star className="w-4 h-4 text-accent fill-accent animate-pulse" />
            
            <span className="text-sm md:text-base font-bold text-primary-foreground tracking-wide">
              FaithGoodsKids
            </span>
            
            <span className="text-lg animate-bounce">✨</span>
          </div>
        </motion.div>
      </div>
    </header>
  );
};
