import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Sony WH-1000XM6 | Silence, perfected",
  description: "Experience the hyper-premium Sony WH-1000XM6 wireless noise cancelling headphones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-primary text-white selection:bg-sony-blue/30`}
      >
        {children}
      </body>
    </html>
  );
}
