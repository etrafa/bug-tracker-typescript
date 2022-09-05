//firebase
import { useGetDocs } from "../../customHooks/useGetDocs";

//components
import LoadSpinner from "../../Utilities/LoadSpinner";
import RoleAssignment from "./RoleAssignment/RoleAssignment";

const ManageRoleAssignment = () => {
  const { dbData, loading } = useGetDocs("users"); // get all the users from database

  return (
    <div>
      <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto">
        <h1 className="text-center text-4xl my-4 text-fbFillColor font-black">
          Manage User Roles
        </h1>
      </div>
      {loading && <LoadSpinner />}
      <div className="w-full lg:w-[calc(100%_-_16rem)] ml-auto lg:flex lg:gap-12">
        {dbData && <RoleAssignment dbData={dbData} />}
        {/*{dbData && <YourPersonel dbData={dbData} />} */}
      </div>
    </div>
  );
};
export default ManageRoleAssignment;
