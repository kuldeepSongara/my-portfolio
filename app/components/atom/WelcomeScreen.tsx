"use client";
import { ReactNode, useEffect, useState } from "react";
import NavSection from "@/app/components/molecule/NavSection";
import NavLinks from "@/app/components/molecule/NavLinks";
import { Providers } from "@/app/providers";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Welcome({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  const greetingsArray = [
    "नमस्ते", // Hindi
    "Hello", // English
    "Hola", // Spanish
    "Bonjour", // French
    "Hallo", // German
    "Ciao", // Italian
    "Привет", // Russian
    "你好", // Chinese (Mandarin)
    "こんにちは", // Japanese
    "مرحبا", // Arabic
  ];
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex(
        (prevIndex) => (prevIndex + 1) % greetingsArray.length
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <body className="flex justify-center">
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <p className="text-4xl font-bold">
            {greetingsArray[currentGreetingIndex]}
          </p>
        </div>
      ) : (
        <div
          className={`select-none max-w-[1600px] flex flex-col md:flex-row md:justify-between 2xl:justify-around min-h-screen ${inter.className}`}
        >
          <NavSection />
          <section className="md:overflow-y-auto md:flex-1">
            <Providers>{children}</Providers>
          </section>
          <section className="my-10 flex flex-col gap-3 md:hidden tracking-extrawidest text-sm font-light text-center">
            <NavLinks />
          </section>
        </div>
      )}
    </body>
  );
}
