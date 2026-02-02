import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ModeToggle from "@/components/ModeToggle";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacob Rozansky | Neuro-Performance Coaching San Diego",
  description: "Executive Function coaching through Improv, Chess, and Cubing for ADHD and neurodivergent students in San Diego.",
  keywords: "ADHD coaching San Diego, Executive Function coaching, Improv for ADHD, Chess tutor ADHD, neurodivergent coaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ThemeToggle />
        <ModeToggle />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
