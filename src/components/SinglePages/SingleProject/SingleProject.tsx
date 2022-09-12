//react
import { useParams } from "react-router-dom";
import { useGetSingleDoc } from "../../../customHooks/useGetSingleDoc";
import { IProject } from "../../../Interfaces/Firebase-Interfaces/ProjectInterface";
import SingleProjectHeader from "./SingleProjectHeader";

const SingleProject = () => {
  const { projectID } = useParams();

  //*GET PROJECT INFORMATION FROM DATABASE
  const { dbData, loading } = useGetSingleDoc<IProject>(
    "projects",
    projectID || "undefined"
  );

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6">
      <div className="w-11/12 mx-auto mt-24 relative border border-black lg:min-h-[20rem]">
        {dbData && (
          <SingleProjectHeader
            projectName={dbData.projectName}
            projectDescription={dbData.projectDescription}
          />
        )}
      </div>
    </div>
  );
};
export default SingleProject;
