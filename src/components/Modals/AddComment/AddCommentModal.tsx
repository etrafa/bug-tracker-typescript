//react
import { useState, useEffect } from "react";

//firebase
import { useAuth } from "../../../firebase/firebaseConfig";

//components
import Modal from "../../../Utilities/Modals/Modal";
interface AddCommentModalProps {
  currentTicketID: string;
  setIsAddCommentModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCommentModal = ({
  setIsAddCommentModalOpen,
  currentTicketID,
}: AddCommentModalProps) => {
  const currentUser = useAuth(); //get current user to identify comment owner
  const [commentTextInput, setCommentTextInput] = useState(""); //comment text input value
  const [commentOwner, setCommentOwner] = useState(""); //ticket owner
  const [isFormValidated, setIsFormValidated] = useState(false);

  useEffect(() => {
    if (currentUser && currentUser.displayName) {
      setCommentOwner(currentUser.displayName);
    }

    //FORM VALIDATION CHECK
    commentTextInput.length > 1
      ? setIsFormValidated(true)
      : setIsFormValidated(false);
  }, [currentUser, commentTextInput.length]);

  //? FUNCTIONS ----------------------------------------
  //? --------------------------------------------------

  return (
    <Modal
      buttonText="Add Comment"
      clickHandler={() => setIsAddCommentModalOpen(false)} //close comment modal.
      header="Add New Comment"
      firstLabel="Your Message"
      firstLabelName="userMessage"
      firstPlaceholder=" "
      handleChange={(e) => setCommentTextInput(e.target.value)} //comment text input value
      handleSubmit={() => console.log("first")}
      isFormValidated={isFormValidated}
      showSuccessMessage={true}
      successMessage=""
    />
  );
};
export default AddCommentModal;
