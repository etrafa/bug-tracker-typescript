//react
import React, { useState, useEffect } from "react";

//custom hook / firebase
import { useGetDocs } from "../../../customHooks/useGetDocs";
import { addUser } from "../../../firebase/FirebaseUserFunctions/firebaseAddUser";

//interfaces
import { IProject } from "../../../Interfaces/Firebase-Interfaces/ProjectInterface";
import { IFirebaseUser } from "../../../Interfaces/Firebase-Interfaces/UserInterface";

//components
import Modal from "../../../Utilities/Modals/Modal";

interface AssignUserModalProps {
  setIsAssignedUserModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AssignUserModal = (props: AssignUserModalProps) => {
  const { dbData } = useGetDocs("projects"); //get all project list from db
  const { dbData: allUsers } = useGetDocs(
    // get all users assigned to selected project
    "users"
  );

  //STATES
  const [selectedUsers, setSelectedUsers] = useState<IFirebaseUser[]>([]);
  const [selectedProjectID, setSelectedProjectID] = useState(""); //get selected project id
  const [isFormValitated, setIsFormValidated] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  //*FORM VALIDATION

  useEffect(() => {
    selectedUsers.length !== 0 && selectedProjectID.length !== 0
      ? setIsFormValidated(true)
      : setIsFormValidated(false);
  }, [selectedUsers.length, selectedProjectID.length]);

  //? FUNCTIONS ----------------------------------------

  //* add-remove user when creating new project
  const handleSelectedUsers = (
    e: React.ChangeEvent<HTMLInputElement>,
    user: IFirebaseUser
  ) => {
    const { checked } = e.currentTarget;
    if (checked) {
      setSelectedUsers((prev) => [...prev, user]); //add user
    } else {
      setSelectedUsers(selectedUsers.filter((val) => val !== user)); //remove user
    }
  };

  //*when user select a project from dropdown, store project id and projectname
  const dropDownHandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let obj: IProject = JSON.parse(e.target.value);
    if (obj.id) {
      setSelectedProjectID(obj.id); //get project id
    }
  };

  //* add new user after clicking submit button
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    addUser(
      `projects/${selectedProjectID}/users`,
      selectedUsers,
      setShowSuccessMessage,
      props.setIsAssignedUserModal
    );
  };

  //? --------------------------------------------------

  return (
    <Modal
      //*-----SKELETON-----//*
      header="Assign New User" //give modal a header.
      buttonText="Add User(s)" //give button a text.
      isFormValidated={isFormValitated} //check if form is validated.
      clickHandler={() => props.setIsAssignedUserModal(false)} //close the modal.
      handleSubmit={handleSubmit} //assign new users to project when click submit button.
      handleChange={() => console.log("hey")}
      showSuccessMessage={showSuccessMessage} // show success message if state is true
      successMessage="User(s) successfully have been added to selected project." //after submitting successfully show a message.
      //*-----SELECT PROJECT SECTION -----//*
      dropDownLabel="Select Project"
      dropDownName="selectProject"
      dropdownData={dbData}
      dropDownChangeHandler={dropDownHandleChange}
      //*-----ASSIGN USER SECTION -----//*
      checkboxName="assignedUsers"
      checkBoxLabel="Assign User"
      checkBoxData={allUsers}
      checkboxClickHandler={handleSelectedUsers}
    />
  );
};
export default AssignUserModal;
