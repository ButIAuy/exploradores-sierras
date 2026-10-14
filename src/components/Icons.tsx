import type { CSSProperties } from 'react';

// Íconos Lucide usados en la UI (24×24, trazo 2).
const base: CSSProperties = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };

export function IconPath({ d, size, stroke = '#1F2A22', width = 2 }: { d: string; size: number; stroke?: string; width?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} style={{ ...base, stroke, strokeWidth: width }} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export const CompassIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" style={base} aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </svg>
);

export const MedalIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" style={base} aria-hidden="true">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11" />
  </svg>
);

export const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" style={base} aria-hidden="true">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const LockIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" style={base} aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

export const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" style={base} aria-hidden="true">
    <rect x="6" y="2" width="12" height="20" rx="2.5" />
    <path d="M12 7v7M9 11l3 3 3-3" />
  </svg>
);
