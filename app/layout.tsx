import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Welcome from "@/app/components/atom/WelcomeScreen";

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
    <html lang="en" className="dark">
      <Welcome children={children} />
    </html>
  );
}
