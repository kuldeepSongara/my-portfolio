import { Blog } from "@/app/lib/definitions";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

const BlogTile = ({ blogDetail }: { blogDetail: Blog }) => {
  const { title, topic, date, link, readTime } = blogDetail;

  return (
    <Link
      href={link}
      target="_blank"
      className="bg-[#171717] group-hover/list:bg-[#000] hover:!bg-[#171717] hover:bg-opacity-50 rounded p-6 flex justify-between transition motion-reduce:transition-none"
    >
      <div className="flex items-center">
        <p className="text-3xl tracking-normal text-slate-200">{title}</p>
      </div>
      <div>
        <h6 className="uppercase text-sm tracking-widest">{topic}</h6>
        <p className="text-sm tracking-wider mt-2 text-slate-400">{date}</p>
        <p className="text-sm tracking-wider mt-1 text-slate-400">{readTime}</p>
      </div>
    </Link>
  );
};

export default BlogTile;
