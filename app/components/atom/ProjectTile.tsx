import { Project } from "@/app/lib/definitions";

const ProjectTile = ({ projectDetail }: { projectDetail: Project }) => {
  const { tech, name, description, techStack } = projectDetail;
  return (
    <section className="bg-[#090909] p-6">
      <h6 className="uppercase text-sm tracking-widest">{tech}</h6>
      <p className="mt-3 text-3xl tracking-normal text-slate-200">{name}</p>
      <p className="text-sm tracking-wider mt-2 text-slate-200">
        {description}
      </p>
      <section className="flex flex-row flex-wrap gap-x-6 mt-3">
        {techStack.map((stack) => (
          <p
            className="text-sm tracking-wider mt-1 text-slate-200"
            key={`${name}${stack}`}
          >
            {stack}
          </p>
        ))}
      </section>
    </section>
  );
};

export default ProjectTile;
