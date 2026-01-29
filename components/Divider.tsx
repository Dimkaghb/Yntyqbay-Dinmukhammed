import React from "react";

interface DividerProps {
  className?: string;
}

export function Divider({ className = "" }: DividerProps) {
  return (
    <div className={`w-full border-t border-dashed border-border-dashed ${className}`} />
  );
}
