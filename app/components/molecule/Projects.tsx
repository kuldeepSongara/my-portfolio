import { ProjectsData } from "@/app/lib/data";
import ProjectTile from "@/app/components/atom/ProjectTile";

const Projects = () => {
  return (
    <>
      <h6 className="block md:hidden pl-12 mb-[-32px] uppercase text-sm tracking-widest">
        Projects
      </h6>
      <div
        className="p-10 md:p-12 md:pl-6 lg:p-20 2xl:p-24 flex flex-col gap-6"
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
