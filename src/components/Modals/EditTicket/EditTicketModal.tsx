//react
import { useEffect, useReducer, useState } from "react";

//reducer
import {
  initialState,
  ticketModalReducer,
  ACTION_DEF,
} from "../NewTicket/ticketModalReducer";
import {
  ticketPriorityLabels,
  ticketStatusLabels,
  ticketTypesLabels,
} from "../NewTicket/ticketModalLabels";

//firebase
import { useGetDocs } from "../../../customHooks/useGetDocs";
import { useGetDocsWithQuery } from "../../../customHooks/useGetDocsWithQuery";
import { firebaseUpdateTicket } from "../../../firebase/FirebaseTicketFunctions/firebaseUpdateTicket";

//components
import Modal from "../../../Utilities/Modals/Modal";

//interfaces
import { IFirebaseUser } from "../../../Interfaces/Firebase-Interfaces/UserInterface";
import { ITicketsRoot } from "../../../Interfaces/Firebase-Interfaces/TicketsInterface";

interface EditTicketModalProps {
  currentTicketID: string;
  setIsEditTicketModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTicketModal = ({
  setIsEditTicketModalOpen,
  currentTicketID,
}: EditTicketModalProps) => {
  //*DATABASE//*
  const { dbData: allUsers } = useGetDocs<IFirebaseUser>("users"); //get all the users from db.
  const { singleData: singleTicket } = useGetDocsWithQuery<ITicketsRoot>( //get the selected ticket.
    "tickets",
    "id",
    currentTicketID || "undefined"
  );
  //*--------------- */

  //*STATES//*
  const [state, dispatch] = useReducer(ticketModalReducer, initialState); //usereducer

  const [showSuccessMessage, setShowSuccessMessage] = useState(false); //if true show success message

  //after filtering isChecked props for every user, store them in this state.
  const [filteredCheckBoxData, setFilteredCheckBoxData] = useState<
    IFirebaseUser[] | null
  >(null);

  //*--------------- */

  useEffect(() => {
    if (singleTicket) {
      //*STORE PREVIOUS TICKET DETAILS UNLESS USER OVERWRITES ANY OF THE VALUE.

      //*default ticket description
      dispatch({
        type: ACTION_DEF.SET_TICKET_DESCRIPTION,
        payload: singleTicket.ticketDescription,
      });

      //*default assigned users
      dispatch({
        type: ACTION_DEF.SHOW_INITIAL_USERS,
        payload: singleTicket.assignedUsers.map((user) => user),
      });

      //* default ticket priority
      dispatch({
        type: ACTION_DEF.SET_TICKET_PRIORITY,
        payload: singleTicket.ticketPriority,
      });

      //* default ticket status
      dispatch({
        type: ACTION_DEF.SET_TICKET_STATUS,
        payload: singleTicket.ticketStatus,
      });

      //* default ticket type
      dispatch({
        type: ACTION_DEF.SET_TICKET_TYPE,
        payload: singleTicket.ticketType,
      });
    }

    const allUsersData = allUsers; //get every user in the database.
    const assignedUsersData = singleTicket?.assignedUsers.map((user) => user); //get selected users for selected ticket.
    let STORE_UNCHECKED_USERS: IFirebaseUser[] = [];
    let STORE_CHECKED_USERS: IFirebaseUser[] = [];

    //* if there is any assigned users filter them into new array.
    if (assignedUsersData) {
      assignedUsersData.forEach((item) => {
        //*FIND UNCHECKED USERS
        let findUncheckedUsers = allUsers?.filter(
          (user) => user.email !== item.email
        );
        //*AFTER FINDING UNCHECKED USERS, SET THEIR ISCHECKED PROPS TO --FALSE--
        findUncheckedUsers?.map((user) =>
          STORE_UNCHECKED_USERS.push({ ...user, isChecked: false })
        );

        //* find CHECKED users
        let findCheckedUsers = allUsersData?.filter(
          (user) => user.email === item.email
        );

        //*AFTER FINDING CHECKED USERS, SET THEIR ISCHECKED PROPS TO --TRUE--
        findCheckedUsers?.map((user) =>
          STORE_CHECKED_USERS.push({ ...user, isChecked: true })
        );
      });
    }
    //*assign the values to state
    setFilteredCheckBoxData([...STORE_CHECKED_USERS, ...STORE_UNCHECKED_USERS]);
  }, [singleTicket]);

  //? FUNCTIONS ----------------------------------------

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

  //*ticket description
  const handleTicketDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ACTION_DEF.SET_TICKET_DESCRIPTION,
      payload: e.target.value,
    });
  };

  //ON SUBMIT SEND THE UPDATED TICKET TO DATABASE.
  const editTicket = (e: React.MouseEvent) => {
    e.preventDefault();
    if (singleTicket) {
      firebaseUpdateTicket(
        singleTicket?.id,
        {
          //*these part won't change.
          id: singleTicket?.id,
          submitTime: singleTicket?.submitTime,
          ticketOwner: singleTicket?.ticketOwner,
          projectName: singleTicket?.projectName,

          //* these part might be changed.
          ticketDescription: state.ticketDescription,
          ticketPriority: state.ticketPriority,
          ticketType: state.ticketType,
          ticketStatus: state.ticketStatus,
          assignedUsers: state.selectedUsers,
          userEmails: state.selectedUsersID,
        },
        setShowSuccessMessage,
        setIsEditTicketModalOpen
      );
    }
  };

  //? --------------------------------------------------

  return (
    <Modal
      header="Edit your ticket" //modal header
      clickHandler={() => setIsEditTicketModalOpen(false)} //close the modal.
      buttonText="Edit" //button text
      isFormValidated={true} //check if the form is validated but here we don't need it.
      handleSubmit={editTicket} //on submit send the updated ticket to database.
      showSuccessMessage={showSuccessMessage} //if true show success message
      successMessage="Ticket has been updated successfully." //success message
      showTicketOptions={true} //if true show ticket option section on modal.
      //*-----TICKET DESCRIPTION SECTION -----//*
      firstLabel="Ticket Description"
      firstLabelName="ticketDescription"
      firstPlaceholder={singleTicket?.ticketDescription}
      handleChange={handleTicketDescription}
      //*-----ASSIGN USER SECTION -----//*
      checkBoxLabel="Assign User"
      checkboxName="assignedUsers"
      checkBoxData={filteredCheckBoxData}
      checkboxClickHandler={handleSelectedUsers}
      //*-----TICKET OPTIONS SECTION -----//*
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
    />
  );
};
export default EditTicketModal;
