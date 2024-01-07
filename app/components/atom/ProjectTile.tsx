import { Project } from "@/app/lib/definitions";
import StackTile from "./StackTile";

const ProjectTile = ({ projectDetail }: { projectDetail: Project }) => {
  const { tech, name, description, techStack } = projectDetail;
  return (
    // <section className="hover:bg-[#171717] hover:bg-opacity-50 rounded p-6 transition motion-reduce:transition-none">
    <section className="p-6 bg-[#171717] rounded">
      <h6 className="uppercase text-sm tracking-widest">{tech}</h6>
      <p className="mt-3 text-3xl tracking-normal text-slate-200">{name}</p>
      <p className="text-sm tracking-wider mt-2 text-slate-200">
        {description}
      </p>
      <section className="flex flex-row flex-wrap gap-x-5 gap-y-2 mt-3">
        {techStack.map((stack) => (
          <div
            className="text-sm tracking-wider mt-1 text-slate-200"
            key={`${name}${stack}`}
          >
            <StackTile stackName={stack} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default ProjectTile;
