//react
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

//firebase
import { useGetSingleDoc } from "../../../customHooks/useGetSingleDoc";

//components
import DeleteProject from "./DeleteProject";
import SingleProjectHeader from "./SingleProjectHeader";
import AssignedUsersForSingleProject from "./AssignedUsersForSingleProject";
import TicketForSingleProject from "./TicketForSingleProject";
import LoadSpinner from "../../../Utilities/LoadSpinner";

//interfaces
import { IProject } from "../../../Interfaces/Firebase-Interfaces/ProjectInterface";

interface SingleProjectProps {
  setCurrentProjectID: React.Dispatch<React.SetStateAction<string>>;
  setIsDeleteProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SingleProject = ({
  setIsDeleteProjectModalOpen,
  setCurrentProjectID,
}: SingleProjectProps) => {
  const { projectID } = useParams();

  //*GET PROJECT INFORMATION FROM DATABASE
  const { dbData, loading } = useGetSingleDoc<IProject>(
    "projects",
    projectID || "undefined"
  );

  //* on every load, store currentProjectID to state.
  useEffect(() => {
    if (projectID) setCurrentProjectID(projectID);
  }, [projectID, setCurrentProjectID]);

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6">
      <div className="w-11/12 mx-auto mt-24 relative border border-black lg:min-h-[20rem]">
        {loading && <LoadSpinner />}
        {dbData && (
          <SingleProjectHeader
            projectName={dbData.projectName}
            projectDescription={dbData.projectDescription}
          />
        )}

        <div className="w-full mt-36 flex flex-col lg:flex-row lg:justify-between">
          {projectID && <AssignedUsersForSingleProject projectID={projectID} />}
          <div className="hidden lg:block border border-black"></div>
          {projectID && <TicketForSingleProject projectID={projectID} />}
        </div>
        <DeleteProject
          setIsDeleteProjectModalOpen={setIsDeleteProjectModalOpen}
        />
      </div>
    </div>
  );
};
export default SingleProject;
