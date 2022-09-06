//reducer
import {
  ACTION_DEF,
  initialState,
  roleAssignmentReducer,
} from "./roleAssignmentReducer";

//interfaces
import { IFirebaseUser } from "../../../Interfaces/Firebase-Interfaces/UserInterface";

//react
import { useReducer, useState, useEffect } from "react";
import { updateUserRole } from "../../../firebase/FirebaseUserFunctions/firebaseUpdateUserRole";

interface RoleAssignmentProps {
  dbData: IFirebaseUser[];
}

const RoleAssignment = ({ dbData }: RoleAssignmentProps) => {
  const [state, dispatch] = useReducer(roleAssignmentReducer, initialState);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false); //if true show success message
  const [isSubmitError, setIsSubmitError] = useState(false); //if true show error message

  //check if the form is validated properly
  useEffect(() => {
    state.selectedUserID.length > 5 && state.userNewRole !== ""
      ? dispatch({ type: ACTION_DEF.SET_IS_FORM_VALIDATED, payload: true })
      : dispatch({ type: ACTION_DEF.SET_IS_FORM_VALIDATED, payload: false });
  }, [state.selectedUserID.length, state.userNewRole]);

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

  //* update user role
  const handleUpdateUserRole = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    updateUserRole(
      state.selectedUserID,
      state.userNewRole,
      //set either success or error TRUE to show a information message.
      setIsSubmitSuccess,
      setIsSubmitError
    );
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
          <option selected disabled>
            Please Select
          </option>
          <option>Admin</option>
          <option>Developer</option>
          <option>Project Manager</option>
          <option>User</option>
        </select>
      </div>
      <div className="flex flex-col my-8 ml-2">
        <span>Current Role : {state.userCurrentRole}</span>
        <span>Selected Role : {state.userNewRole}</span>
      </div>
      {/* //SHOW SUCCESS MESSAGE */}
      {isSubmitSuccess && (
        <p className="text-green-400 font-bold my-4 text-center">
          The user's role has been changed successfully.
        </p>
      )}
      {/* //SHOW ERROR MESSAGE */}
      {isSubmitError && (
        <p className="text-red-600 font-bold my-4 text-center">
          An error happened. Please try again.
        </p>
      )}
      <button
        onClick={handleUpdateUserRole}
        className={
          state.isFormValidated
            ? "bg-fbFillColor hover:bg-blue-500 w-44 h-10 mb-4 mx-auto block text-white font-bold rounded-md"
            : "bg-gray-700 pointer-events-none w-44 h-10 mb-4 mx-auto block text-white font-bold rounded-md"
        }
      >
        Submit
      </button>
    </div>
  );
};
export default RoleAssignment;
