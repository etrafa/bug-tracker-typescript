//components
import Modal from "../../../Utilities/Modals/Modal";

interface EditTicketModalProps {
  setIsEditTicketModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTicketModal = ({
  setIsEditTicketModalOpen,
}: EditTicketModalProps) => {
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
    />
  );
};
export default EditTicketModal;
