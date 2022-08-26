import Modal from "../../../Utilities/Modals/Modal";

interface NewTicketModalProps {
  setIsTicketModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewTicketModal = (props: NewTicketModalProps) => {
  return (
    <div>hey</div>
    // <Modal
    //   header="Create New Ticket"
    //   buttonText="Create"
    //   isFormValidated={true}
    //   clickHandler={() => props.setIsTicketModalOpen(false)}
    // />
  );
};
export default NewTicketModal;
