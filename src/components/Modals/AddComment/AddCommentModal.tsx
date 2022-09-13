import Modal from "../../../Utilities/Modals/Modal";

interface AddCommentModalProps {
  setIsAddCommentModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCommentModal = ({
  setIsAddCommentModalOpen,
}: AddCommentModalProps) => {
  return (
    <Modal
      buttonText="Add Comment"
      clickHandler={() => setIsAddCommentModalOpen(false)} //close comment modal.
      header="Add New Comment"
      firstLabel="Your Message"
      firstLabelName="userMessage"
      firstPlaceholder="s"
      handleChange={() => console.log("first")}
      handleSubmit={() => console.log("first")}
      isFormValidated={true}
      showSuccessMessage={true}
      successMessage=""
    />
  );
};
export default AddCommentModal;
