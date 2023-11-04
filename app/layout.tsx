import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavSection from "@/app/ui/NavSection";

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
        className={`flex flex-col gap-2 md:flex-row md:justify-between 2xl:justify-around min-h-screen ${inter.className}`}
      >
        <NavSection />
        <section>{children}</section>
      </body>
    </html>
  );
}
