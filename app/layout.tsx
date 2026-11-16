import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://naqibmhtd.vercel.app";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Muhammad Naqib Muhtadi — UI/UX & Graphic Design Portfolio",
    template: "%s | Naqib Muhtadi",
  },
  description: "UI/UX and graphic design portfolio of Muhammad Naqib Muhtadi, featuring website redesign and mobile app design projects.",
  keywords: [
    "UI/UX Designer", "Graphic Designer", "Visual Design", "Graphic Design",
    "Website Redesign", "Mobile App Design", "HelloCation Korea",
    "GDGoC UIN Jakarta", "Muhammad Naqib Muhtadi", "Jakarta", "Indonesia",
  ],
  authors: [{ name: "Muhammad Naqib Muhtadi", url: "https://github.com/naqibmhtd" }],
  creator: "Muhammad Naqib Muhtadi",
  openGraph: {
    title: "Muhammad Naqib Muhtadi — UI/UX & Graphic Design",
    description: "Selected UI/UX and graphic design work by Muhammad Naqib Muhtadi.",
    url: SITE_URL, siteName: "Naqib Muhtadi Portfolio", type: "website", locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Naqib Muhtadi — UI/UX & Graphic Design",
    description: "UI/UX and graphic design work by Muhammad Naqib Muhtadi.",
    creator: "@naqibmhtd",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch{}`,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
