import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m5 8 7 5 7-5" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 20a8 8 0 1 0-4.1-1.1L5 20l1.2-2.7A8 8 0 0 0 12 20Z" />
      <path d="M9.8 9.4c.2-.5.4-.5.7-.5h.6c.2 0 .4.1.5.4l.8 1.8c.1.3.1.4 0 .6l-.4.6c-.1.2-.2.3 0 .6.5.8 1.3 1.5 2.1 2 .3.2.5.2.7 0l.5-.6c.2-.2.4-.2.7-.1l1.6.7c.3.1.5.2.5.5v.7c0 .3-.2.6-.5.8-.5.3-1.2.5-1.8.4-1.2-.1-2.5-.8-3.8-2.1-1.6-1.5-2.4-3-2.4-4.4 0-.6.2-1.1.5-1.4Z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8.7 10.2V16" />
      <path d="M8.7 8.3h0" />
      <path d="M12 16v-3.1c0-1.7.9-2.6 2.3-2.6 1.3 0 2 1 2 2.6V16" />
      <path d="M12 10.2v.9" />
    </svg>
  );
}

export function BotIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 3v3" />
      <rect x="5" y="7" width="14" height="10" rx="3" />
      <path d="M9 12h0" />
      <path d="M15 12h0" />
      <path d="M8 17v2" />
      <path d="M16 17v2" />
      <path d="M2 11h3" />
      <path d="M19 11h3" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M12 3 13.8 8.2 19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}
