import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketing via Ads di Meta dan Google",
  description: "Panduan lengkap untuk marketing via Ads di Meta dan Google. Pelajari strategi, tips, dan cara sukses dengan iklan online.",
  keywords: "marketing, Ads Meta, Google Ads, panduan marketing, strategi iklan, Nick Service Official",
  openGraph: {
    title: "Marketing via Ads di Meta dan Google",
    description: "Panduan lengkap untuk marketing via Ads di Meta dan Google. Pelajari strategi, tips, dan cara sukses dengan iklan online.",
    type: "website",
    locale: "en_KH",
    url: "https://master-ads.vercel.app",
    siteName: "Master Meta dan Google"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      
      <link rel="canonical" href="https://master-ads.vercel.app" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}