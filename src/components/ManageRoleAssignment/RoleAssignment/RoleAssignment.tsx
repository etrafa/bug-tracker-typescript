//reducer
import {
  ACTION_DEF,
  initialState,
  roleAssignmentReducer,
} from "./roleAssignmentReducer";

//interfaces
import { IFirebaseUser } from "../../../Interfaces/Firebase-Interfaces/UserInterface";
import { useReducer } from "react";

interface RoleAssignmentProps {
  dbData: IFirebaseUser[];
}

const RoleAssignment = ({ dbData }: RoleAssignmentProps) => {
  const [state, dispatch] = useReducer(roleAssignmentReducer, initialState);

  //? FUNCTIONS ----------------------------------------

  //* get current userID and user role
  const handleUserInformation = (user: IFirebaseUser) => {
    if (user.id && user.role) {
      dispatch({ type: ACTION_DEF.SET_SELECTED_USER_ID, payload: user.id }); //current user ID
      dispatch({ type: ACTION_DEF.SET_USER_CURRENT_ROLE, payload: user.role }); //current user role
    }
  };

  //* select new role for user
  const handleSelectNewRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: ACTION_DEF.SET_USER_NEW_ROLE, payload: e.target.value });
  };

  //? --------------------------------------------------

  return (
    <div className="lg:w-4/12">
      <h4 className="text-2xl mt-16 ml-5">Select User</h4>
      <div className="w-11/12 mt-1 mx-auto">
        <select size={5} className="w-full border-2 border-black">
          {dbData &&
            dbData.map((users) => (
              <option
                onClick={() => handleUserInformation(users)}
                key={users?.id}
                className="mt-2 pl-4 text-lg"
              >
                {users?.fullName}
              </option>
            ))}
        </select>
      </div>
      <hr className="mt-4 w-11/12 mx-auto" />
      <div>
        <h4 className="text-2xl mt-8 ml-5">Select the Role to Assign</h4>
        <select
          onChange={handleSelectNewRole}
          className="w-11/12 border border-black mt-2 mx-auto ml-2"
        >
          <option selected>Please Select</option>
          <option>Admin</option>
          <option>Developer</option>
          <option>Project Manager</option>
          <option>User</option>
        </select>
      </div>
      <div className="flex flex-col my-8 ml-2">
        <span>Current Role : {state.userCurrentRole}</span>
        <span>Selected Role : b</span>
      </div>
      <button className="bg-fbFillColor hover:bg-blue-500 w-44 h-10 mb-4 mx-auto block text-white font-bold rounded-md ">
        Submit
      </button>
    </div>
  );
};
export default RoleAssignment;
