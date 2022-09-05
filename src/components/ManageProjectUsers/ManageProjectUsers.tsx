import { useGetDocs } from "../../customHooks/useGetDocs";
import AddUserToProject from "./AddUserToProject";
import ManageUsersDropdown from "./ManageUsersDropdown";
import { useState } from "react";
import ShowProjectUsers from "./ShowProjectUsers";

interface ManageProjectUsersProps {
  setIsAssignedUserModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ManageProjectUsers = ({
  setIsAssignedUserModalOpen,
}: ManageProjectUsersProps) => {
  const { dbData, loading } = useGetDocs("projects"); //get all projects from database

  //STATES
  const [selectedProjectID, setSelectedProjectID] = useState(""); // get current project id to show users in the UI
  const [selectedUserID, setSelectedUserID] = useState("");

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6">
      <div className="w-11/12 mx-auto mt-24 relative border border-black min-h-[calc(100vh_-_60vh)]">
        <h1 className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12 h-14 bg-fbFillColor text-center text-white text-2xl font-bold pt-3">
          Manage Users
        </h1>
        <div className="pl-4 pt-12">
          <ManageUsersDropdown
            dbData={dbData}
            setSelectedProjectID={setSelectedProjectID}
          />
          <AddUserToProject
            setIsAssignedUserModalOpen={setIsAssignedUserModalOpen}
          />
          <ShowProjectUsers
            selectedProjectID={selectedProjectID}
            selectedUserID={selectedUserID}
            setSelectedUserID={setSelectedUserID}
          />
        </div>
      </div>
    </div>
  );
};
export default ManageProjectUsers;
