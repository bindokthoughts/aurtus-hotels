import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
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
        className={`${outfit.variable} ${inter.variable} font-sans antialiased selection:bg-black selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
