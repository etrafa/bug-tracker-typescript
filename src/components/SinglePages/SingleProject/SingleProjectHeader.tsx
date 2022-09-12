interface SingleProjectHeaderProps {
  projectName: string;
  projectDescription: string;
}

const SingleProjectHeader = ({
  projectName,
  projectDescription,
}: SingleProjectHeaderProps) => {
  return (
    <header className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12  bg-fbFillColor text-center text-white text-2xl font-bold pt-3">
      <h1>Project Details</h1>
      <div className="flex justify-evenly lg:mx-32 gap-x-12">
        <div className="flex flex-col">
          <span className="text-sm underline text-center py-4 cursor-pointer hover:text-gray-300">
            Project Name
          </span>
          <span className="text-base">{projectName.toUpperCase()}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm underline text-center py-4 cursor-pointer hover:text-gray-300">
            Project Description
          </span>
          <span className="text-base">{projectDescription.toUpperCase()}</span>
        </div>
      </div>
    </header>
  );
};
export default SingleProjectHeader;
