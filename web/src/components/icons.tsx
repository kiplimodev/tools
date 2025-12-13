import clsx from "clsx";
import type { PropsWithChildren } from "react";

export interface IconProps {
  className?: string;
}

function SvgIcon({ className, children }: PropsWithChildren<IconProps>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx("h-5 w-5", className)}
    >
      {children}
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <polyline points="6 9 12 15 18 9" />
    </SvgIcon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </SvgIcon>
  );
}

export function RunIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <circle cx="14" cy="5" r="2" />
      <path d="M9 20l2.5-6 3 2.5L18 12" />
      <path d="M6 12l5-2 2 3" />
    </SvgIcon>
  );
}

export function FlameIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12 3c2 3 4 4.5 4 7.5A4 4 0 0112 15a4 4 0 01-4-4.5C8 7.5 10 6 12 3z" />
    </SvgIcon>
  );
}

export function ActivityIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <polyline points="22 12 18 12 15 20 9 4 6 12 2 12" />
    </SvgIcon>
  );
}

export function FootprintsIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M9 4c-1 1.5-1.5 3.5-.5 5s2.5 1 3-1-1-3-2.5-4z" />
      <path d="M15 11c-1 1.5-1.5 3.5-.5 5s2.5 1 3-1-1-3-2.5-4z" />
      <circle cx="9" cy="9.5" r="0.5" />
      <circle cx="15" cy="16.5" r="0.5" />
    </SvgIcon>
  );
}

export function DumbbellIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <rect x="3" y="9" width="2" height="6" />
      <rect x="19" y="9" width="2" height="6" />
      <path d="M5 12h14" />
      <path d="M7 9v6" />
      <path d="M17 9v6" />
    </SvgIcon>
  );
}

export function ArmchairIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M5 13a3 3 0 016 0v4H5z" />
      <path d="M13 13a3 3 0 016 0v4h-6z" />
      <path d="M5 15h14" />
      <path d="M5 17v2" />
      <path d="M19 17v2" />
    </SvgIcon>
  );
}

export function UtensilsIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M6 3v7" />
      <path d="M10 3v7" />
      <path d="M6 10a2 2 0 004 0V3" />
      <path d="M16 3a4 4 0 014 4v3h-4z" />
      <path d="M16 21V10" />
    </SvgIcon>
  );
}

export function NotebookIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <rect x="5" y="3" width="12" height="18" rx="2" />
      <line x1="9" y1="7" x2="15" y2="7" />
      <line x1="9" y1="11" x2="15" y2="11" />
      <line x1="9" y1="15" x2="13" y2="15" />
    </SvgIcon>
  );
}

export function ChartLineIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M4 19h16" />
      <polyline points="4 12 9 7 13 11 17 6 20 9" />
      <circle cx="9" cy="7" r="0.5" />
      <circle cx="13" cy="11" r="0.5" />
      <circle cx="17" cy="6" r="0.5" />
      <circle cx="20" cy="9" r="0.5" />
    </SvgIcon>
  );
}

export function WeightIcon(props: IconProps) {
  return (
    <SvgIcon {...props}>
      <rect x="6" y="6" width="12" height="12" rx="3" />
      <path d="M10 10h4" />
    </SvgIcon>
  );
}
