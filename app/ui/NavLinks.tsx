"use client";
import Link from "next/link";
import { NavigationData } from "@/app/lib/data";

const NavLinks = (props: any) => {
  let activeLink = 2;

  return (
    <nav className="xl:mt-12 tracking-extrawidest text-xs font-light hidden md:flex flex-col gap-4">
      {NavigationData.map((nav, index) => (
        <Link
          href="#projects"
          className={
            activeLink === index
              ? "text-white"
              : "text-slate-400 hover:text-white"
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
