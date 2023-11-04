import { Blog } from "@/app/lib/definitions";

const BlogTile = ({
  site = "Medium",
  place = "Jodhpur, Rajasthan",
  date,
  topic,
  link,
}: Blog) => {
  const navigateToUrl = () => {
    console.log("navigate to ", link);
  };

  return (
    <section className="bg-gray-800 p-6" onClick={navigateToUrl}>
      <h6>{site}</h6>
      <p>{place}</p>
      <p>{date}</p>
      <section>{topic}</section>
    </section>
  );
};

export default BlogTile;
