import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Change this to your deployed URL once live
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
    default: "Muhammad Naqib Muhtadi — Data Analyst Portfolio",
    template: "%s | Naqib Muhtadi",
  },
  description:
    "Data Analyst specializing in exploratory data analysis, data visualization, and customer behavior mapping using Python, SQL, and Power BI.",
  keywords: [
    "Data Analyst",
    "Python",
    "SQL",
    "Power BI",
    "EDA",
    "Muhammad Naqib Muhtadi",
    "Olist",
    "Customer Behavior",
    "Dashboard",
    "Jakarta",
    "Indonesia",
  ],
  authors: [{ name: "Muhammad Naqib Muhtadi", url: "https://github.com/naqibmhtd" }],
  creator: "Muhammad Naqib Muhtadi",
  openGraph: {
    title: "Muhammad Naqib Muhtadi — Data Analyst",
    description: "Transforming Raw Data into Strategic Business Insights",
    url: SITE_URL,
    siteName: "Naqib Muhtadi Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Naqib Muhtadi — Data Analyst",
    description: "Transforming Raw Data into Strategic Business Insights",
    creator: "@naqibmhtd",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
