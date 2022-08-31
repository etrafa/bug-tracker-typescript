//react
import React, { useEffect, useState } from "react";

//components
import Modal from "../../../Utilities/Modals/Modal";

//firebase
import { useGetDocs } from "../../../customHooks/useGetDocs";
import { createNewProject } from "../../../firebase/FirebaseProjectFunctions/firebaseCreateProject";

//interfaces
import { IFirebaseUser } from "../../../Interfaces/Firebase-Interfaces/UserInterface";

interface NewProjectModalProps {
  setIsProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ICreateProject {
  projectName: string;
  projectDescription: string;
}

const NewProjectModal = (props: NewProjectModalProps) => {
  //get the all user list from the database
  const { dbData } = useGetDocs("users");

  //collect project information from user
  const [createProjectInformation, setCreateProjectInformation] =
    useState<ICreateProject | null>({
      projectName: "",
      projectDescription: "",
    });

  //store selected users
  const [selectedUsers, setSelectedUsers] = useState<IFirebaseUser[]>([]);

  //check if form is validated correctly
  const [isFormValidated, setIsFormValidated] = useState(false);

  //show success message
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (typeof createProjectInformation !== "undefined") {
      createProjectInformation?.projectName.length !== 0 &&
      createProjectInformation?.projectDescription.length !== 0
        ? setIsFormValidated(true)
        : setIsFormValidated(false);
    }
  }, [createProjectInformation]);

  //? FUNCTIONS ----------------------------------------
  //ON INPUT CHANGE SAVE USER'S PROJECT NAME & DESCRIPTION
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newProject = { [event.target.name]: event.target.value };
    if (createProjectInformation) {
      setCreateProjectInformation({
        ...createProjectInformation,
        ...newProject,
      });
    }
  };

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

  //? --------------------------------------------------

  return (
    //create custom new project modal
    <Modal
      clickHandler={() => props.setIsProjectModalOpen(false)}
      header="Create New Project"
      firstLabel="Project Name"
      firstPlaceholder="Landing Page"
      firstLabelName="projectName"
      secondLabel="Project Description"
      secondPlaceholder="A meaningful message that everyone can understand."
      secondLabelName="projectDescription"
      buttonText="Create"
      successMessage="Project has been created successfully."
      showSuccessMessage={showSuccessMessage}
      isFormValidated={isFormValidated}
      handleSubmit={(e) => {
        //create a new project when clicking create button
        e.preventDefault();
        if (
          createProjectInformation?.projectName &&
          createProjectInformation.projectDescription
        ) {
          createNewProject(
            createProjectInformation?.projectName,
            createProjectInformation?.projectDescription,
            selectedUsers,
            props.setIsProjectModalOpen,
            setShowSuccessMessage
          );
        }
      }}
      handleChange={handleChange} // input change
      checkBoxData={dbData} //checkbox data
      checkboxName="assignedUsers" //checkbox name
      checkboxClickHandler={handleSelectedUsers} //checkbox function that adds-removes user when creating a new project
    />
  );
};
export default NewProjectModal;
