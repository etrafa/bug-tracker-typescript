//react

//firebase

//components
import { useGetDocs } from "../../../customHooks/useGetDocs";
import Modal from "../../../Utilities/Modals/Modal";

//interfaces
import { IFirebaseUser } from "../../../Interfaces/Firebase-Interfaces/UserInterface";
import { useReducer } from "react";
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
interface EditTicketModalProps {
  setIsEditTicketModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTicketModal = ({
  setIsEditTicketModalOpen,
}: EditTicketModalProps) => {
  const { dbData: allUsers } = useGetDocs<IFirebaseUser>("users");

  const [state, dispatch] = useReducer(ticketModalReducer, initialState);

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

  return (
    <Modal
      clickHandler={() => setIsEditTicketModalOpen(false)} //close the modal.
      buttonText="Edit"
      handleChange={() => console.log("hey")}
      header="Edit your ticket"
      isFormValidated={true}
      handleSubmit={() => console.log(state)}
      showSuccessMessage={true}
      successMessage=""
      showTicketOptions={true}
      //*-----TICKET DESCRIPTION SECTION -----//*
      firstLabel="Ticket Title"
      firstLabelName="ticketTitle"
      firstPlaceholder="A meaningful message that everyone can understand."
      //*-----ASSIGN USER SECTION -----//*
      checkBoxLabel="Assign User"
      checkboxName="assignedUsers"
      checkBoxData={allUsers}
      checkboxClickHandler={handleSelectedUsers}
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
    />
  );
};
export default EditTicketModal;
