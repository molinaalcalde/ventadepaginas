"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const counter = { val: 0 };

    gsap.to(counter, {
      val: value,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.innerText = `${prefix}${Math.round(counter.val)}${suffix}`;
        }
      },
    });
  }, { scope: ref });

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
