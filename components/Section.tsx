import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  gap?: string;
}

export function Section({ children, className = "", title, gap = "gap-8" }: SectionProps) {
  return (
    <section className={`w-full flex flex-col items-center ${gap} ${className}`}>
      <div className={`w-full max-w-[720px] px-2 py-8 flex flex-col ${gap}`}>
        {title && (
          <h3 className="font-mono text-[14px] font-medium tracking-[-0.02em] uppercase leading-[1.6em] text-foreground">
            {title}
          </h3>
        )}
        {children}
      </div>
    </section>
  );
}
