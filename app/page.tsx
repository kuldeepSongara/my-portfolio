import { ProjectsData } from "@/app/lib/data";
import ProjectTile from "@/app/ui/ProjectTile";

export default function Home() {
  return (
    <main className="p-20 flex flex-col gap-2">
      {ProjectsData.map((project) => (
        <div key={project.name}>
          <ProjectTile projectDetail={project} />
        </div>
      ))}
    </main>
  );
}
