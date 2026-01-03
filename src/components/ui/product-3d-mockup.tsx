import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TiltCard, FloatingElement } from "./scroll-reveal";

interface Product3DMockupProps {
  image: string;
  alt: string;
  className?: string;
}

export const Product3DMockup = ({ image, alt, className = "" }: Product3DMockupProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <div ref={ref} className={`perspective-deep ${className}`}>
      <motion.div
        style={{ rotateY, scale }}
        className="preserve-3d relative"
      >
        {/* Glow effect behind */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-accent/10 to-transparent blur-3xl scale-110" />
        
        {/* Floating decorative elements */}
        <FloatingElement delay={0} y={10} className="absolute -top-8 -right-8 z-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-300 to-gold-500 shadow-gold opacity-80" />
        </FloatingElement>
        
        <FloatingElement delay={0.5} y={15} className="absolute -bottom-6 -left-6 z-10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow opacity-80" />
        </FloatingElement>

        <FloatingElement delay={1} y={12} className="absolute top-1/4 -left-10 z-10">
          <div className="w-8 h-8 rounded-lg bg-gold-400/60 shadow-soft" />
        </FloatingElement>

        {/* Main image with 3D effect */}
        <TiltCard intensity={8}>
          <div className="relative rounded-3xl overflow-hidden shadow-3d">
            <img
              src={image}
              alt={alt}
              className="w-full h-auto relative z-[1]"
            />
            {/* Shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none z-[2]" />
          </div>
        </TiltCard>
      </motion.div>
    </div>
  );
};