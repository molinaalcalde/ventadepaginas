"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "motion/react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMax?: number;
  glareOpacity?: number;
  scale?: number;
}

export function TiltCard({
  children,
  className = "",
  tiltMax = 12,
  glareOpacity = 0.08,
  scale = 1.02,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      setTilt({
        rotateX: (0.5 - y) * tiltMax,
        rotateY: (x - 0.5) * tiltMax,
        glareX: x * 100,
        glareY: y * 100,
      });
    },
    [tiltMax]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ perspective: 800, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        scale: tilt.rotateX === 0 && tilt.rotateY === 0 ? 1 : scale,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
    >
      {children}
      {/* Glare overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,${glareOpacity}), transparent 60%)`,
          transition: "background 0.1s ease",
        }}
      />
    </motion.div>
  );
}
