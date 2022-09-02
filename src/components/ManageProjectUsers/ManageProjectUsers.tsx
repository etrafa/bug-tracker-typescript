import { useGetDocs } from "../../customHooks/useGetDocs";
import AddUser from "./AddUser";
import ManageUsersDropdown from "./ManageUsersDropdown";

const ManageProjectUsers = () => {
  const { dbData, loading } = useGetDocs("projects");

  return (
    <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto mb-6">
      <div className="w-11/12 mx-auto mt-24 relative border border-black min-h-[calc(100vh_-_60vh)]">
        <h1 className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-11/12 h-14 bg-fbFillColor text-center text-white text-2xl font-bold pt-3">
          Manage Users
        </h1>
        <div className="pl-4 pt-12">
          <ManageUsersDropdown dbData={dbData} />
          <AddUser />
        </div>
      </div>
    </div>
  );
};
export default ManageProjectUsers;
