import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const BrandHeader = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-4 md:px-6">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1.5"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground/80 tracking-wide">
            FaithGoodsKids
          </span>
        </motion.div>
      </div>
    </header>
  );
};
