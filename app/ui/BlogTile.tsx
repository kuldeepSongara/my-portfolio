import { Blog } from "@/app/lib/definitions";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

const BlogTile = ({ blogDetail }: { blogDetail: Blog }) => {
  const { title, topic, date, link, readTime } = blogDetail;
  const navigateToUrl = () => {
    console.log("navigate to ", link);
  };

  return (
    <section className="bg-[#090909] p-6 h-full">
      <h6 className="uppercase text-xs tracking-widest">{topic}</h6>
      <p className="text-xs tracking-wider mt-4 text-slate-400">{date}</p>
      <p className="text-xs tracking-wider mt-1 text-slate-400">{readTime}</p>
      <p className="mt-20 text-3xl tracking-normal text-slate-300">{title}</p>
      <Link
        href={link}
        className="flex flex-row items-center gap-2 text-slate-300 mt-4"
      >
        Read <LuExternalLink />
      </Link>
    </section>
  );
};

export default BlogTile;
