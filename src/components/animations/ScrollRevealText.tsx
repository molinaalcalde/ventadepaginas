"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClassName?: string;
}

export function ScrollRevealText({
  text,
  className = "",
  highlightWords = [],
  highlightClassName = "text-coral",
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const words = text.split(/\s+/);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const wordEls = containerRef.current.querySelectorAll(".scroll-word");

      gsap.fromTo(
        wordEls,
        { opacity: 0.12, y: 8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 0.8,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, i) => {
        const isHighlighted = highlightWords.some(
          (hw) => word.toLowerCase().replace(/[.,!?]/g, "") === hw.toLowerCase()
        );
        return (
          <span
            key={i}
            className={`scroll-word inline-block ${isHighlighted ? highlightClassName : ""}`}
            style={{ opacity: 0.12 }}
          >
            {word}
            {i < words.length - 1 && "\u00A0"}
          </span>
        );
      })}
    </div>
  );
}
