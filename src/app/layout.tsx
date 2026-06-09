import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Muzeul Someș-Guruslău",
  description: "Păstrătorul tradițiilor, portului popular și istoriei din zona Sălajului.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-museum-cream text-museum-dark font-sans antialiased">
        {children}
      </body>
    </html>
  );
}