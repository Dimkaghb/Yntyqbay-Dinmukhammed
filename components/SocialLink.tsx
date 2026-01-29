import React from "react";

interface SocialLinkProps {
  label: string;
  value: string;
  href: string;
}

export function SocialLink({ label, value, href }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between w-full group"
    >
      <span className="text-base text-foreground font-normal">{label}</span>
      <span className="text-base text-secondary group-hover:text-foreground transition-colors">
        {value}
      </span>
    </a>
  );
}
