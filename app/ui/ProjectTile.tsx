import { Project } from "@/app/lib/definitions";

const ProjectTile = ({ projectDetail }: { projectDetail: Project }) => {
  const { tech, name, description, techStack } = projectDetail;
  return (
    <section className="bg-[#090909] p-6">
      <h6 className="uppercase text-xs tracking-widest">{tech}</h6>
      <p className="mt-5 text-3xl tracking-normal text-slate-300">{name}</p>
      <p className="text-sm tracking-wider mt-4 text-slate-400">
        {description}
      </p>
      <section className="flex flex-row flex-wrap gap-x-6 mt-6">
        {techStack.map((stack) => (
          <p
            className="text-xs tracking-wider mt-3 text-slate-400"
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
