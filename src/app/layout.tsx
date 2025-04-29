import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pushable - Push Notifications for Developers",
  description: "The simplest way to add push notifications to your application. Integrate in minutes, scale to millions.",
  openGraph: {
    title: "Pushable - Push Notifications for Developers",
    description: "The simplest way to add push notifications to your application. Integrate in minutes, scale to millions.",
    url: "https://pushable.dev",
    siteName: "Pushable",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pushable - Push Notifications for Developers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pushable - Push Notifications for Developers",
    description: "The simplest way to add push notifications to your application. Integrate in minutes, scale to millions.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
