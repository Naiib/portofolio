import type { ReactNode } from "react";

type IconName =
  | "sparkle"
  | "user"
  | "briefcase"
  | "layers"
  | "mail"
  | "message"
  | "network"
  | "code"
  | "camera"
  | "pin"
  | "palette"
  | "graduation"
  | "arrow"
  | "whatsapp"
  | "gmail"
  | "linkedin"
  | "github"
  | "instagram";

const paths: Record<IconName, ReactNode> = {
  sparkle: (
    <>
      <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
      <path d="m19 14 .9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c.7-3.1 3.2-5 7-5s6.3 1.9 7 5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v2h4v-2" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  message: (
    <>
      <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.4 8.4 0 0 1-3.5-.8L4 20l1.2-3.7A7.2 7.2 0 0 1 4 12c0-4.1 3.6-7.5 8-7.5s8 3.1 8 7Z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="m11 7-5 9m7-9 5 9M7 18h10" />
    </>
  ),
  code: (
    <>
      <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-2-10-4 12" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l1.5-2h7L17 8h3v11H4V8Z" />
      <circle cx="12" cy="13" r="3" />
    </>
  ),
  pin: (
    <>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18h1.2a2.1 2.1 0 0 0 1.5-3.6 1.6 1.6 0 0 1 1.1-2.7H18a3 3 0 0 0 3-3c0-4.8-4-8.7-9-8.7Z" />
      <circle cx="7.5" cy="11" r="1" />
      <circle cx="10" cy="7.5" r="1" />
      <circle cx="15" cy="8" r="1" />
    </>
  ),
  graduation: (
    <>
      <path d="m2 9 10-5 10 5-10 5L2 9Z" />
      <path d="M6 11v5c3.5 2.7 8.5 2.7 12 0v-5m4-2v6" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20l1.1-4.1a8.5 8.5 0 1 1 15.9-4.2Z" />
      <path d="M8.1 7.7c-.3.3-.8 1-.8 1.8 0 1.1.8 2.2 1 2.4.1.2 1.6 2.6 4 3.6 2 .8 2.4.6 2.9.5.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3l-1.8-.9c-.2-.1-.4-.1-.5.2l-.8.9c-.1.1-.3.2-.6.1-.3-.1-1.2-.5-2.2-1.4-.8-.7-1.3-1.6-1.4-1.9-.1-.2 0-.4.1-.5l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5L9.2 8c-.2-.5-.4-.4-.6-.4l-.5.1Z" />
    </>
  ),
  gmail: (
    <>
      <path d="M3 6.2 5.2 5l6.8 5.1L18.8 5 21 6.2V19h-4V10.1l-5 3.7-5-3.7V19H3V6.2Z" fill="#EA4335" stroke="none" />
      <path d="M3 6.2 7 9.2V19H3V6.2Z" fill="#4285F4" stroke="none" />
      <path d="M17 9.2 21 6.2V19h-4V9.2Z" fill="#34A853" stroke="none" />
      <path d="m17 9.2 4-3v4.4l-4 3V9.2Z" fill="#FBBC04" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" fill="currentColor" stroke="none" />
    </>
  ),
  github: (
    <>
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" fill="currentColor" stroke="none" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5.2" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.1" strokeWidth="2" />
      <circle cx="17.6" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
