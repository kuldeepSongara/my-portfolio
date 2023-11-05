import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavSection from "@/app/components/molecule/NavSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Kuldeep Songara's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`select-none flex flex-col md:flex-row md:justify-between 2xl:justify-around min-h-screen ${inter.className}`}
      >
        <NavSection />
        <section className="md:overflow-y-auto md:flex-1">{children}</section>
      </body>
    </html>
  );
}
