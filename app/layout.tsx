// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "ChainCacao — Traçabilité blockchain cacao Togo",
  description:
    "Plateforme de traçabilité blockchain pour la filière cacao au Togo, conforme EUDR.",
  keywords: [
    "blockchain",
    "cacao",
    "Togo",
    "EUDR",
    "traçabilité",
    "MIABE 2026",
  ],
  openGraph: {
    title: "ChainCacao",
    description: "Solution blockchain pour la traçabilité du cacao",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-dark text-light`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
