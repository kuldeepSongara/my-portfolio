"use client";
import Link from "next/link";
import { NavigationData } from "@/app/lib/data";

const NavLinks = (props: any) => {
  let activeLink = 6;

  return (
    <nav className="xl:mt-4 tracking-extrawidest text-sm font-light hidden md:flex flex-col gap-3">
      {NavigationData.map((nav, index) => (
        <Link
          href={nav.href}
          className={
            activeLink === index
              ? "text-white"
              : "text-slate-400 hover:text-white hover:pl-3 border-white hover:border-l transition-all duration-300 ease-in-out"
          }
          key={nav.linkName}
        >
          {`${index < 10 ? "0" : ""}${index + 1} ${nav.linkName.toUpperCase()}`}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
