import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurtus Hotels - Unveiling Soon",
  description: "Experience the pinnacle of luxury hospitality. Aurtus Hotels is coming soon to redefine your expectations of refined living and world-class service.",
  keywords: ["luxury hotel", "boutique hotel", "premium accommodation", "coming soon", "Aurtus Hotels"],
  openGraph: {
    title: "Aurtus Hotels - Unveiling Soon",
    description: "Experience the pinnacle of luxury hospitality. Coming soon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
