"use client";
import { useRef, useMemo, Children, isValidElement } from "react";
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

function flattenChildren(children: React.ReactNode): { text: string; className?: string }[] {
  const segments: { text: string; className?: string }[] = [];

  Children.forEach(children, (child) => {
    if (typeof child === "string") {
      child.split(/(\s+)/).forEach((part) => {
        if (part.trim()) segments.push({ text: part });
      });
    } else if (typeof child === "number") {
      segments.push({ text: String(child) });
    } else if (isValidElement(child)) {
      const el = child as React.ReactElement<{ className?: string; children?: React.ReactNode }>;
      const innerText =
        typeof el.props.children === "string"
          ? el.props.children
          : String(el.props.children ?? "");
      innerText.split(/(\s+)/).forEach((part: string) => {
        if (part.trim()) segments.push({ text: part, className: el.props.className });
      });
    }
  });

  return segments;
}

export function TextReveal({
  children,
  as: Tag = "h2",
  className,
  delay = 0,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  const words = useMemo(() => flattenChildren(children), [children]);

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
            className={`text-reveal-inner ${word.className || ""}`}
            style={{
              display: "inline-block",
              willChange: "opacity, transform",
            }}
          >
            {word.text}
          </span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Tag>
  );
}
