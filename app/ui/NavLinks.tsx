"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = (props: any) => {
  let activeLink = 2;
  const pathname = usePathname();
  console.log(pathname);
  console.log(props);

  return (
    <nav className="xl:mt-12 tracking-extrawidest text-xs font-light hidden md:flex flex-col gap-4">
      <Link
        href="#projects"
        className={
          pathname === "/" || "/#projects"
            ? "text-white"
            : "text-slate-400 hover:text-white"
        }
      >
        01 PROJECTS
      </Link>
      <Link
        href="#blogs"
        className={
          pathname === "/#blogs"
            ? "text-white"
            : "text-slate-400 hover:text-white"
        }
      >
        02 BLOGS
      </Link>
      <Link
        href="#contact"
        className={
          pathname === "/#contact"
            ? "text-white"
            : "text-slate-400 hover:text-white"
        }
      >
        03 CONTACT
      </Link>
    </nav>
  );
};

export default NavLinks;
