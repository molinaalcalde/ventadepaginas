"use client";

import { useState, useEffect } from "react";
import { ListBullets } from "@phosphor-icons/react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface BlogTOCProps {
  headings: Heading[];
}

export default function BlogTOC({ headings }: BlogTOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost intersecting heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset for fixed header (~80px)
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Tabla de contenidos"
      className="bg-surface-soft border border-border-subtle rounded-2xl p-5"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border-subtle">
        <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
          <ListBullets size={15} weight="bold" className="text-primary" />
        </div>
        <span className="text-xs font-bold tracking-wider uppercase text-navy-deep">
          En este artículo
        </span>
      </div>

      {/* Links */}
      <ol className="space-y-1">
        {headings.map(({ id, text, level }) => {
          const isActive = activeId === id;
          return (
            <li key={id} style={{ paddingLeft: level > 2 ? "0.75rem" : "0" }}>
              <button
                onClick={() => handleClick(id)}
                className={`
                  w-full text-left text-sm leading-snug py-1.5 px-2.5 rounded-lg transition-all duration-200
                  ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-slate-text hover:text-navy-deep hover:bg-white"
                  }
                `}
              >
                <span className="flex items-start gap-2">
                  {isActive && (
                    <span className="mt-[0.35rem] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  )}
                  <span className={isActive ? "" : "pl-3.5"}>{text}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
