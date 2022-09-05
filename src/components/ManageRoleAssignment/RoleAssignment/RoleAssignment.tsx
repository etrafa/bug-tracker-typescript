import { IFirebaseUser } from "../../../Interfaces/Firebase-Interfaces/UserInterface";

interface RoleAssignmentProps {
  dbData: IFirebaseUser[];
}

const RoleAssignment = ({ dbData }: RoleAssignmentProps) => {
  return (
    <div className="lg:w-4/12">
      <h4 className="text-2xl mt-16 ml-5">Select User</h4>
      <div className="w-11/12 mt-1 mx-auto">
        <select size={5} className="w-full border-2 border-black">
          {dbData &&
            dbData.map((users) => (
              <option key={users?.id} className="mt-2 pl-4 text-lg">
                {users?.fullName}
              </option>
            ))}
        </select>
      </div>
      <hr className="mt-4 w-11/12 mx-auto" />
      <div>
        <h4 className="text-2xl mt-8 ml-5">Select the Role to Assign</h4>
        <select className="w-11/12 border border-black mt-2 mx-auto ml-2">
          <option selected>Please Select</option>
          <option>Admin</option>
          <option>Developer</option>
          <option>Project Manager</option>
          <option>User</option>
        </select>
      </div>
      <div className="flex flex-col my-8 ml-2">
        <span>Current Role : a </span>
        <span>Selected Role : b</span>
      </div>
      <button className="bg-fbFillColor hover:bg-blue-500 w-44 h-10 mb-4 mx-auto block text-white font-bold rounded-md ">
        Submit
      </button>
    </div>
  );
};
export default RoleAssignment;
