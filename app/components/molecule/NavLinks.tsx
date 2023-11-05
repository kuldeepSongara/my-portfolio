"use client";
import Link from "next/link";
import { NavigationData } from "@/app/lib/data";

const NavLinks = (props: any) => {
  let activeLink = 6;

  return NavigationData.map((nav, index) => (
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
  ));
};

export default NavLinks;
