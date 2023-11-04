import { BlogsData } from "@/app/lib/data";
import BlogTile from "@/app/ui/BlogTile";

const Blogs = () => {
  const halfLength = Math.ceil(BlogsData.length / 2);

  const firstHalfData = BlogsData.filter((data, index) => index < halfLength);
  const secondHalfData = BlogsData.filter((data, index) => index >= halfLength);

  return (
    <>
      <h6 className="block md:hidden px-14 mb-[-32px] uppercase text-xs tracking-widest">
        Blogs
      </h6>
      <div
        className="p-10 md:p-12 lg:p-20 2xl:p-24 flex flex-col gap-2 lg:flex-row"
        id="blogs"
      >
        <div className="flex flex-col gap-2 lg:w-[50%]">
          {firstHalfData.map((blog) => (
            <div key={blog.title}>
              <BlogTile blogDetail={blog} />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 lg:w-[50%]">
          <div className="hidden lg:block h-20 "></div>
          {secondHalfData.map((blog) => (
            <div key={blog.title}>
              <BlogTile blogDetail={blog} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
