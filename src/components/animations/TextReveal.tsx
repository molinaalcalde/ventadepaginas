"use client";
import { useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  splitBy?: "words" | "lines";
}

export function TextReveal({
  children,
  as: Tag = "h2",
  className,
  delay = 0,
  splitBy = "words",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  const words = useMemo(() => {
    const text = typeof children === "string" ? children : String(children);
    return text.split(/\s+/).filter(Boolean);
  }, [children]);

  useGSAP(() => {
    if (!containerRef.current) return;

    const innerSpans = containerRef.current.querySelectorAll(".text-reveal-inner");

    gsap.fromTo(
      innerSpans,
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.05,
        delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <Tag
      ref={containerRef as React.Ref<HTMLHeadingElement>}
      className={`text-reveal-clip ${className || ""}`}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
          }}
        >
          <span
            className="text-reveal-inner"
            style={{
              display: "inline-block",
              transform: "translateY(110%)",
              opacity: 0,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Tag>
  );
}
