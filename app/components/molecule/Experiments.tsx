import ExperimentTile from "@/app/components/atom/ExperimentTile";

const Experiments = () => {
  return (
    <div
      className="p-10 md:p-12 md:pl-6 lg:p-20 2xl:p-24 flex flex-col gap-2"
      id="experiments"
    >
      <ExperimentTile />
    </div>
  );
};

export default Experiments;
