import type { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  const innerClasses = ['rounded-2xl bg-[#18181b] p-6 relative z-10', className ?? '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className="group relative rounded-2xl p-[1px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/50 to-blue-500/50 opacity-0 transition-opacity duration-500 group-hover:opacity-50"
      />
      <div className={innerClasses}>{children}</div>
    </div>
  );
}

export type { GlowCardProps };
