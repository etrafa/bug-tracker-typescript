//react

//firebase

//components
import { useGetDocs } from "../../../customHooks/useGetDocs";
import Modal from "../../../Utilities/Modals/Modal";

//interfaces
import { IFirebaseUser } from "../../../Interfaces/Firebase-Interfaces/UserInterface";
interface EditTicketModalProps {
  setIsEditTicketModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditTicketModal = ({
  setIsEditTicketModalOpen,
}: EditTicketModalProps) => {
  const { dbData: allUsers } = useGetDocs<IFirebaseUser>("users");

  return (
    <Modal
      clickHandler={() => setIsEditTicketModalOpen(false)} //close the modal.
      buttonText="Edit"
      handleChange={() => console.log("hey")}
      header="Edit your ticket"
      isFormValidated={true}
      handleSubmit={() => console.log("hey")}
      showSuccessMessage={true}
      successMessage=""
      //*-----ASSIGN USER SECTION -----//*
      checkBoxLabel="Assign User"
      checkboxName="assignedUsers"
      checkBoxData={allUsers}
      checkboxClickHandler={() => {
        console.log("hey");
      }}
    />
  );
};
export default EditTicketModal;
