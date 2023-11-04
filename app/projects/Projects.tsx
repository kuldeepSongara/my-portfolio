import { ProjectsData } from "@/app/lib/data";
import ProjectTile from "@/app/ui/ProjectTile";

const Projects = () => {
  return (
    <>
      <h6 className="block md:hidden px-14 mb-[-32px] uppercase text-xs tracking-widest">
        Projects
      </h6>
      <div
        className="p-10 pl-5 md:p-12 md:pl-6 lg:p-20 2xl:p-24 flex flex-col gap-2"
        id="projects"
      >
        {ProjectsData.map((project) => (
          <div key={project.name}>
            <ProjectTile projectDetail={project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
