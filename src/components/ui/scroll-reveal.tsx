import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  scale?: boolean;
}

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
  scale = false,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const getInitialPosition = () => {
    const base: Record<string, number> = { opacity: 0 };
    if (scale) base.scale = 0.9;
    
    switch (direction) {
      case "up":
        return { ...base, y: 60 };
      case "down":
        return { ...base, y: -60 };
      case "left":
        return { ...base, x: 60 };
      case "right":
        return { ...base, x: -60 };
      case "none":
        return base;
      default:
        return { ...base, y: 60 };
    }
  };

  const getFinalPosition = () => {
    const base: Record<string, number> = { opacity: 1 };
    if (scale) base.scale = 1;
    
    switch (direction) {
      case "up":
      case "down":
        return { ...base, y: 0 };
      case "left":
      case "right":
        return { ...base, x: 0 };
      case "none":
        return base;
      default:
        return { ...base, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getFinalPosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "up" | "down";
}

export const Parallax = ({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const multiplier = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed * multiplier, -100 * speed * multiplier]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export const TiltCard = ({
  children,
  className = "",
  intensity = 10,
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;
    
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-3000 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export const FloatingElement = ({
  children,
  className = "",
  delay = 0,
  duration = 4,
  y = 15,
}: FloatingElementProps) => {
  return (
    <motion.div
      animate={{
        y: [-y, y, -y],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
}

export const GlowingBorder = ({
  children,
  className = "",
}: GlowingBorderProps) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-500" />
      <div className="relative">{children}</div>
    </div>
  );
};