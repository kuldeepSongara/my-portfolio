import clsx from "clsx";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const NavSection = ({ activeLink = 1 }) => {
  return (
    <div className="p-16 lg:p-20 2xl:p-24 md:max-h-screen md:max-w-[55%] flex flex-col justify-between gap-30">
      <section className="flex flex-col gap-10">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold flex-wrap tracking-wider">
          Hello, I'm <br /> Kuldeep Songara
        </h1>
        <article className="md:max-w-md text-slate-300 text-sm font-extralight leading-loose tracking-widest">
          As a Senior Solution Engineer, I currently serve as a Web Developer
          within Intuit's esteemed Purchases Squad. My focus predominantly lies
          in front-end development, where I specialize in React and CSS. I'm
          quite the advocate for test-driven development and the principles of
          React. On the side, I share my insights and knowledge through my
          Medium blog.
          <br />
          <br />
          Also, I'm in the process of mastering Next.js, so there's more to
          come! 🚀😄
        </article>
        <nav className="lg:mt-12 tracking-extrawidest text-xs font-light hidden md:flex flex-col gap-4">
          <p className={activeLink === 1 ? "text-white" : "text-slate-400"}>
            01 PROJECTS
          </p>
          <p className={activeLink === 2 ? "text-white" : "text-slate-400"}>
            02 BLOGS
          </p>
          <p className={activeLink === 3 ? "text-white" : "text-slate-400"}>
            03 CONTACT
          </p>
        </nav>
      </section>
      <section className="flex flex-row gap-14 mt-10 md:mt-0">
        <Link
          href="https://www.linkedin.com/in/kuldeep-songara/"
          target="_blank"
          className="flex flex-row items-center gap-2 text-slate-300"
        >
          <FaLinkedin className="mr-2" />
          LinkedIn
          <LuExternalLink />
        </Link>
      </section>
    </div>
  );
};

export default NavSection;
