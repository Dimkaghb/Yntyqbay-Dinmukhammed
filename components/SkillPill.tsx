import React from "react";

interface SkillPillProps {
  name: string;
}

export function SkillPill({ name }: SkillPillProps) {
  return (
    <div className="bg-pill-bg border border-pill-border rounded-[4px] px-3 py-1.5 flex items-center justify-center">
      <span className="text-base text-foreground font-normal">{name}</span>
    </div>
  );
}
