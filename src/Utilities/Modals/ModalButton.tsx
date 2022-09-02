interface ModalButtonProps {
  isFormValidated: boolean;
  buttonText: string;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ModalButton = (props: ModalButtonProps) => {
  return (
    <button
      onClick={props.handleSubmit}
      type="submit"
      className={
        props.isFormValidated
          ? "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          : "w-full pointer-events-none text-white bg-gray-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      }
    >
      {props.buttonText}
    </button>
  );
};
export default ModalButton;