"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function StaggerChildren({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const items = ref.current.children;

    gsap.set(items, { opacity: 0, y: 40 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger,
      delay,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: ref });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
