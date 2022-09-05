import { IFirebaseUser } from "../../Interfaces/Firebase-Interfaces/UserInterface";

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
    </div>
  );
};
export default RoleAssignment;
