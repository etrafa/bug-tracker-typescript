//react
import React, { useEffect, useReducer, useState } from "react";

//components
import Modal from "../../../Utilities/Modals/Modal";

//firebase
import { useGetDocs } from "../../../customHooks/useGetDocs";
import { createTicket } from "../../../firebase/FirebaseTicketFunctions/firebaseCreateTicket";

//interfaces
import { IProject } from "../../../Interfaces/Firebase-Interfaces/ProjectInterface";
import { IFirebaseUser } from "../../../Interfaces/Firebase-Interfaces/UserInterface";

//reducer and labels
import {
  ticketModalReducer,
  initialState,
  ACTION_DEF,
} from "./ticketModalReducer";

import {
  ticketPriorityLabels,
  ticketStatusLabels,
  ticketTypesLabels,
  SERVER_TIME,
} from "./ticketModalLabels";
import { useAuth } from "../../../firebase/firebaseConfig";

interface NewTicketModalProps {
  setIsTicketModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewTicketModal = (props: NewTicketModalProps) => {
  const [state, dispatch] = useReducer(ticketModalReducer, initialState);
  const [isFormValidated, setIsFormValidated] = useState(false); //form validation state
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const currentUser = useAuth(); //current user information
  const { dbData } = useGetDocs("projects"); //get all project list from db
  const { dbData: allUsers } = useGetDocs(
    // get all users assigned to selected project
    `projects/${state.selectedProjectID}/users`
  );

  //*FORM VALIDATION
  useEffect(() => {
    state.selectedProjectID !== "" &&
    state.ticketDescription !== "" &&
    state.selectedUsers.length !== 0
      ? setIsFormValidated(true)
      : setIsFormValidated(false);
  }, [
    isFormValidated,
    state.selectedProjectID,
    state.selectedUsers.length,
    state.ticketDescription,
  ]);

  //? FUNCTIONS ----------------------------------------
  //*when user select a project from dropdown, store project id and projectname
  const dropDownHandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let obj: IProject = JSON.parse(e.target.value);

    if (obj.id && obj.projectName) {
      dispatch({ type: ACTION_DEF.SET_PROJECT_ID, payload: obj.id });
      dispatch({ type: ACTION_DEF.SET_PROJECT_NAME, payload: obj.projectName });
    }
  };

  //*ticket description
  const handleTicketDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ACTION_DEF.SET_TICKET_DESCRIPTION,
      payload: e.target.value,
    });
  };

  //* add-remove user when creating new project
  const handleSelectedUsers = (
    e: React.ChangeEvent<HTMLInputElement>,
    user: IFirebaseUser
  ) => {
    const { checked } = e.currentTarget;
    if (checked) {
      //when checked add user
      if (user.id) {
        dispatch({ type: ACTION_DEF.ADD_SELECTED_USERS, payload: user });
        dispatch({ type: ACTION_DEF.SET_USERS_ID, payload: user.id });
      }
    } else {
      //when not checked remove user
      if (user.id) {
        dispatch({ type: ACTION_DEF.REMOVE_SELECTED_USERS, payload: user });
        dispatch({ type: ACTION_DEF.REMOVE_USER_ID, payload: user.id });
      }
    }
  };

  //* create ticket

  const createNewTicket = (e: React.MouseEvent) => {
    e.preventDefault();
    createTicket(
      state.selectedProjectID,
      {
        projectName: state.projectName,
        assignedUsers: state.selectedUsers,
        ticketDescription: state.ticketDescription,
        ticketOwner: currentUser?.displayName,
        ticketPriority: state.ticketPriority,
        ticketStatus: state.ticketStatus,
        ticketType: state.ticketType,
        submitTime: SERVER_TIME,
        userEmails: state.selectedUsers.map((user) => user.email),
      },
      setShowSuccessMessage,
      props.setIsTicketModalOpen
    );
  };

  //? --------------------------------------------------

  return (
    <Modal
      //*-----SKELETON -----//*
      header="Create New Ticket" //give modal a header.
      buttonText="Create" //give button a text.
      isFormValidated={isFormValidated} //check if form is validated.
      clickHandler={() => props.setIsTicketModalOpen(false)} //close the modal.
      handleSubmit={createNewTicket} //create a new ticket when click submit button.
      handleChange={handleTicketDescription} //it traces ticket description.
      successMessage="Ticket has been created successfully." //after submitting successfully show a message.
      showSuccessMessage={showSuccessMessage} // show success message if state is true
      showTicketOptions={true} //enable ticket options section.
      //*-----SELECT PROJECT SECTION -----//*
      dropDownLabel="Select Project"
      dropDownName="selectProject"
      dropdownData={dbData} //dropdown data
      dropDownChangeHandler={dropDownHandleChange}
      //*-----TICKET DESCRIPTION SECTION -----//*
      firstLabel="Ticket Description"
      firstLabelName="ticketDescription"
      firstPlaceholder="A meaningful message that everyone can understand."
      //*-----TICKET DETAILS SECTION -----//*
      //*ticket priority
      firstTicketOptionsLabel="Priority"
      firstTicketOptionsData={ticketPriorityLabels}
      firstTicketOptionChangeHandler={(
        e: React.ChangeEvent<HTMLSelectElement>
      ) =>
        dispatch({
          type: ACTION_DEF.SET_TICKET_PRIORITY,
          payload: e.target.value,
        })
      }
      //*ticket status
      secondTicketOptionsLabel="Status"
      secondTicketOptionsData={ticketStatusLabels}
      secondTicketOptionChangeHandler={(
        e: React.ChangeEvent<HTMLSelectElement>
      ) =>
        dispatch({
          type: ACTION_DEF.SET_TICKET_STATUS,
          payload: e.target.value,
        })
      }
      //* ticket type
      thirdTicketOptionsLabel="Type"
      thirdTicketOptionsData={ticketTypesLabels}
      thirdTicketOptionChangeHandler={(
        e: React.ChangeEvent<HTMLSelectElement>
      ) =>
        dispatch({ type: ACTION_DEF.SET_TICKET_TYPE, payload: e.target.value })
      }
      //*-----ASSIGN USER SECTION -----//*
      checkboxName="assignedUsers"
      checkBoxLabel="Assign User"
      checkBoxData={allUsers}
      checkboxClickHandler={handleSelectedUsers}
    />
  );
};
export default NewTicketModal;
