import Projects from "@/app/components/molecule/Projects";
import Blogs from "@/app/components/molecule/Blogs";
import Contact from "@/app/components/molecule/Contact";
import Experiments from "@/app/components/molecule/Experiments";

export default function Home() {
  return (
    <main>
      <Projects />
      <Blogs />
      <Experiments />
      <Contact />
    </main>
  );
}
