import { Blog } from "@/app/lib/definitions";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

const BlogTile = ({ blogDetail }: { blogDetail: Blog }) => {
  const { title, topic, date, link, readTime } = blogDetail;

  return (
    <section className="bg-[#090909] p-6 h-full border-white hover:border-r transition-all duration-300 ease-in-out">
      <h6 className="uppercase text-sm tracking-widest">{topic}</h6>
      <p className="text-sm tracking-wider mt-2 text-slate-400">{date}</p>
      <p className="text-sm tracking-wider mt-1 text-slate-400">{readTime}</p>
      <p className="mt-10 2xl:mt-20 text-3xl tracking-normal text-slate-200">
        {title}
      </p>
      <Link
        href={link}
        className="flex flex-row items-center gap-2 text-slate-200 mt-4"
        target="_blank"
      >
        Read <LuExternalLink />
      </Link>
    </section>
  );
};

export default BlogTile;
