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
  title: "Facebook Video Downloader - Download FB Videos in HD for Free",
  description: "Download Facebook videos, reels, and stories in high quality HD, 1080p, and 4K. Fast, free, and secure online Facebook video downloader.",
  keywords: ["facebook video downloader", "download fb videos", "facebook reels downloader", "save facebook videos", "fbdown", "online video downloader"],
  openGraph: {
    title: "Facebook Video Downloader - Download FB Videos in HD",
    description: "The fastest way to download Facebook videos online for free.",
    type: "website",
    url: "https://fbdownloader.com",
    siteName: "FBDownloader",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Video Downloader",
    description: "Download Facebook videos in HD for free.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
