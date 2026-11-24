"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip Lenis on touch/mobile devices — native scroll is smoother and lighter
    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    let lenis: Lenis | null = null;

    if (!isMobile) {
      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
      });

      // Sync Lenis -> GSAP ScrollTrigger
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis!.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    // Scroll progress bar
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    }

    return () => {
      if (lenis) lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div ref={progressRef} className="scroll-progress" style={{ transform: "scaleX(0)" }} />
      {children}
    </>
  );
}
