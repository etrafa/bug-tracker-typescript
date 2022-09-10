//components
import { useGetDocs } from "../../../customHooks/useGetDocs";
import Modal from "../../../Utilities/Modals/Modal";

//ticket labels
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
  const { dbData } = useGetDocs("users");

  return (
    <Modal
      //*-----SKELETON -----//*
      header="Edit your ticket"
      buttonText="Edit ticket"
      clickHandler={() => setIsEditTicketModalOpen(false)} //close the modal.
      handleChange={() => console.log("hey2")}
      handleSubmit={() => console.log("hey")}
      isFormValidated={true}
      successMessage="hey"
      showSuccessMessage={true}
      showTicketOptions={true}
      //*-----TICKET DESCRIPTION SECTION -----//*
      firstLabel="Ticket Title"
      firstLabelName="ticketTitle"
      firstPlaceholder="A meaningful message that everyone can understand." //!change here.
      //*-----TICKET DETAILS SECTION -----//*
      //*ticket priority
      firstTicketOptionsLabel="Priority"
      firstTicketOptionsData={ticketPriorityLabels}
      firstTicketOptionChangeHandler={(
        e: React.ChangeEvent<HTMLSelectElement>
      ) => console.log(e)}
      //*ticket status
      secondTicketOptionsLabel="Status"
      secondTicketOptionsData={ticketStatusLabels}
      secondTicketOptionChangeHandler={(
        e: React.ChangeEvent<HTMLSelectElement>
      ) => console.log(e)}
      //* ticket type
      thirdTicketOptionsLabel="Type"
      thirdTicketOptionsData={ticketTypesLabels}
      thirdTicketOptionChangeHandler={(
        e: React.ChangeEvent<HTMLSelectElement>
      ) => console.log(e)}
      //*-----ASSIGN USER SECTION -----//*
      checkboxName="assignedUsers"
      checkBoxLabel="Assign User (optional)"
      checkBoxData={dbData}
      checkboxClickHandler={() => console.log("hey")}
    />
  );
};
export default EditTicketModal;
