"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface BrowserMockupProps {
  className?: string;
}

export function BrowserMockup({ className = "" }: BrowserMockupProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll the inner "website" content as the user scrolls the page
  const innerY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div ref={containerRef} className={className}>
      <div className="bg-white rounded-xl border border-border-subtle shadow-float overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-surface-soft border-b border-border-subtle">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 mx-2">
            <div className="bg-white rounded-md px-3 py-1 text-xs text-slate-light border border-border-subtle flex items-center gap-2 max-w-xs mx-auto">
              <svg className="w-3 h-3 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
              tunegocio.com
            </div>
          </div>
        </div>

        {/* Website viewport — clipped to show scroll effect */}
        <div className="relative h-56 sm:h-72 overflow-hidden bg-white">
          <motion.div
            className="absolute inset-x-0 top-0 w-full"
            style={{ y: innerY }}
          >
            {/* Simulated website content */}
            <div className="p-5 space-y-4">
              {/* Hero section */}
              <div className="space-y-3">
                <div className="w-24 h-2 rounded bg-primary/20" />
                <div className="w-4/5 h-5 rounded bg-navy-deep/15" />
                <div className="w-3/5 h-5 rounded bg-navy-deep/10" />
                <div className="w-2/3 h-3 rounded bg-slate-light/20 mt-3" />
                <div className="w-1/2 h-3 rounded bg-slate-light/15" />
              </div>
              {/* CTA */}
              <div className="flex gap-3 mt-4">
                <div className="w-28 h-9 rounded-lg bg-coral/80" />
                <div className="w-28 h-9 rounded-lg border-2 border-primary/30" />
              </div>
              {/* Image placeholder */}
              <div className="w-full h-32 rounded-xl bg-gradient-to-br from-primary/10 via-coral/5 to-primary-light mt-4" />
              {/* Features grid */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="rounded-xl bg-surface-soft p-3 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/15" />
                    <div className="w-full h-2 rounded bg-navy-deep/10" />
                    <div className="w-3/4 h-2 rounded bg-slate-light/15" />
                  </div>
                ))}
              </div>
              {/* More content to scroll through */}
              <div className="space-y-3 mt-4">
                <div className="w-2/3 h-4 rounded bg-navy-deep/10" />
                <div className="w-full h-2 rounded bg-slate-light/15" />
                <div className="w-5/6 h-2 rounded bg-slate-light/15" />
                <div className="w-4/5 h-2 rounded bg-slate-light/10" />
              </div>
              {/* Testimonial-like card */}
              <div className="rounded-xl border border-border-subtle p-4 mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-coral/20" />
                  <div className="space-y-1">
                    <div className="w-20 h-2 rounded bg-navy-deep/15" />
                    <div className="w-16 h-1.5 rounded bg-slate-light/15" />
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-sm bg-amber-400/60" />
                  ))}
                </div>
                <div className="w-full h-2 rounded bg-slate-light/15" />
                <div className="w-4/5 h-2 rounded bg-slate-light/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
