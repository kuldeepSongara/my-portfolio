import Projects from "@/app/projects/Projects";
import Blogs from "@/app/blogs/Blogs";
import Contact from "@/app/contact/Contact";

export default function Home() {
  return (
    <main>
      <Projects />
      <Blogs />
      <Contact />
    </main>
  );
}
