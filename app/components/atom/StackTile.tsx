const StackTile = ({ stackName }: { stackName: string }) => {
  return (
    <p className="border border-white rounded-3xl px-3 py-1">{stackName}</p>
  );
};

export default StackTile;
