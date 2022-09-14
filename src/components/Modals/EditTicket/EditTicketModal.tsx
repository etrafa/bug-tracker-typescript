//react

//firebase

//components
import Modal from "../../../Utilities/Modals/Modal";

//interfaces

const EditTicketModal = () => {
  return (
    <Modal
      clickHandler={() => console.log("hey")}
      buttonText="Edit"
      handleChange={() => console.log("hey")}
      header=""
      isFormValidated={true}
      handleSubmit={() => console.log("hey")}
      showSuccessMessage={true}
      successMessage=""
    />
  );
};
export default EditTicketModal;
